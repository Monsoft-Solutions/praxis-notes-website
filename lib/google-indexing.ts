import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

/**
 * Configuration for Google Indexing
 */
interface GoogleIndexingConfig {
  clientEmail?: string;
  privateKey?: string;
  baseUrl?: string;
}

/**
 * Result of a Google indexing notification
 */
interface IndexingResult {
  success: boolean;
  url: string;
  error?: string;
}

/**
 * Google Indexing utility class for notifying Google about URL updates
 */
export class GoogleIndexingClient {
  private auth: JWT | null = null;
  private indexing: ReturnType<typeof google.indexing> | null = null;
  private config: GoogleIndexingConfig;

  constructor(config: GoogleIndexingConfig = {}) {
    this.config = {
      clientEmail: config.clientEmail || process.env.GOOGLE_CLIENT_EMAIL,
      privateKey: config.privateKey || process.env.GOOGLE_PRIVATE_KEY,
      baseUrl:
        config.baseUrl || process.env.SITE_URL || 'https://www.praxisnotes.com',
    };
  }

  /**
   * Initialize the Google Indexing client
   */
  async initialize(): Promise<void> {
    if (!this.config.clientEmail || !this.config.privateKey) {
      throw new Error(
        'Missing required environment variables: GOOGLE_CLIENT_EMAIL and/or GOOGLE_PRIVATE_KEY'
      );
    }

    this.auth = new JWT({
      email: this.config.clientEmail,
      key: this.config.privateKey.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    this.indexing = google.indexing({ version: 'v3', auth: this.auth });
  }

  /**
   * Notify Google about a single URL update
   */
  async notifyUrlUpdate(url: string): Promise<IndexingResult> {
    if (!this.indexing) {
      await this.initialize();
    }

    if (!this.indexing) {
      throw new Error('Failed to initialize Google Indexing client');
    }

    try {
      await this.indexing.urlNotifications.publish({
        requestBody: {
          url,
          type: 'URL_UPDATED',
        },
      });

      return {
        success: true,
        url,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

      return {
        success: false,
        url,
        error: errorMessage,
      };
    }
  }

  /**
   * Notify Google about multiple URL updates
   */
  async notifyUrlUpdates(urls: string[]): Promise<IndexingResult[]> {
    const results: IndexingResult[] = [];

    // Process URLs with small delay to avoid rate limiting
    for (const url of urls) {
      const result = await this.notifyUrlUpdate(url);
      results.push(result);

      // Small delay between requests
      if (urls.length > 1) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    return results;
  }

  /**
   * Build full URL from relative path
   */
  private buildFullUrl(path: string): string {
    if (path.startsWith('http')) {
      return path;
    }
    return `${this.config.baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
  }

  /**
   * Notify Google about a new resource
   */
  async notifyResourceCreated(resourceSlug: string): Promise<IndexingResult> {
    const resourceUrl = this.buildFullUrl(`/resources/${resourceSlug}`);
    return this.notifyUrlUpdate(resourceUrl);
  }

  /**
   * Notify Google about resource and related pages
   */
  async notifyResourceAndRelatedPages(
    resourceSlug: string
  ): Promise<IndexingResult[]> {
    const urls: string[] = [
      this.buildFullUrl(`/resources/${resourceSlug}`), // The new resource
      this.buildFullUrl('/resources'), // Resources index page
    ];

    // Add category pages that need revalidation
    // Note: Category-specific notifications could be added here in the future
    // For now, we'll just notify the main resources and categories pages

    // Add categories index page
    urls.push(this.buildFullUrl('/resources/categories'));

    return this.notifyUrlUpdates(urls);
  }
}

/**
 * Singleton instance for easy usage
 */
let globalClient: GoogleIndexingClient | null = null;

/**
 * Get the global Google Indexing client instance
 */
export function getGoogleIndexingClient(): GoogleIndexingClient {
  if (!globalClient) {
    globalClient = new GoogleIndexingClient();
  }
  return globalClient;
}

/**
 * Convenience function to notify Google about a new resource
 * This function includes error handling and logging but won't throw errors
 */
export async function notifyGoogleResourceCreated(
  resourceSlug: string
): Promise<void> {
  // Early exit if required environment variables are not set
  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    console.warn(
      'Google indexing skipped: Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY environment variables'
    );
    return;
  }

  try {
    const client = getGoogleIndexingClient();
    const result = await client.notifyResourceCreated(resourceSlug);

    if (result.success) {
      console.log(
        `✅ Successfully notified Google about new resource: ${result.url}`
      );

      // Also notify the resources index page
      try {
        const indexResult = await client.notifyUrlUpdate(
          `${process.env.SITE_URL || 'https://www.praxisnotes.com'}/resources`
        );

        if (indexResult.success) {
          console.log(
            '✅ Successfully notified Google about resources index page update'
          );
        } else {
          console.warn(
            `⚠️ Failed to notify resources index page: ${indexResult.error}`
          );
        }
      } catch (indexError) {
        console.warn('⚠️ Failed to notify resources index page:', indexError);
      }
    } else {
      console.warn(
        `⚠️ Failed to notify Google about resource ${resourceSlug}: ${result.error}`
      );
    }
  } catch (error) {
    // Log error but don't throw - we don't want to break resource creation
    console.error('Google indexing notification failed:', error);
  }
}

/**
 * Convenience function to notify Google about multiple URLs
 * This function includes error handling and logging but won't throw errors
 */
export async function notifyGoogleUrlUpdates(urls: string[]): Promise<void> {
  // Early exit if required environment variables are not set
  if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
    console.warn(
      'Google indexing skipped: Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY environment variables'
    );
    return;
  }

  try {
    const client = getGoogleIndexingClient();
    const results = await client.notifyUrlUpdates(urls);

    const successCount = results.filter(r => r.success).length;
    const failedCount = results.length - successCount;

    console.log(
      `Google indexing results: ${successCount} succeeded, ${failedCount} failed`
    );

    // Log failed URLs for debugging
    const failedResults = results.filter(r => !r.success);
    if (failedResults.length > 0) {
      console.warn('Failed Google indexing notifications:');
      failedResults.forEach(result => {
        console.warn(`  - ${result.url}: ${result.error}`);
      });
    }
  } catch (error) {
    // Log error but don't throw - we don't want to break the calling process
    console.error('Google indexing notification failed:', error);
  }
}
