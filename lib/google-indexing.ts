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
   * Clean and format the private key properly
   */
  private cleanPrivateKey(privateKey: string): string {
    // Remove any extra whitespace and normalize line endings
    let cleanKey = privateKey.trim();

    // Replace escaped newlines with actual newlines
    cleanKey = cleanKey.replace(/\\n/g, '\n');

    // If the key is base64 encoded (doesn't start with -----BEGIN), try to decode it
    if (!cleanKey.startsWith('-----BEGIN')) {
      try {
        cleanKey = Buffer.from(cleanKey, 'base64').toString('utf8');
      } catch (error) {
        // If base64 decode fails, continue with original key
        console.warn(
          'Private key base64 decode failed, using original key:',
          error instanceof Error ? error.message : 'Unknown error'
        );
      }
    }

    // Ensure proper line endings around the key markers
    if (!cleanKey.includes('\n')) {
      // If there are no newlines, try to insert them at appropriate places
      cleanKey = cleanKey
        .replace('-----BEGIN PRIVATE KEY-----', '-----BEGIN PRIVATE KEY-----\n')
        .replace('-----END PRIVATE KEY-----', '\n-----END PRIVATE KEY-----');
    }

    // Remove any duplicate newlines and normalize
    cleanKey = cleanKey.replace(/\n+/g, '\n').trim();

    return cleanKey;
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

    try {
      const cleanedPrivateKey = this.cleanPrivateKey(this.config.privateKey);

      // Validate the key format
      if (
        !cleanedPrivateKey.includes('-----BEGIN PRIVATE KEY-----') ||
        !cleanedPrivateKey.includes('-----END PRIVATE KEY-----')
      ) {
        throw new Error(
          'Invalid private key format: Missing BEGIN/END markers'
        );
      }

      this.auth = new JWT({
        email: this.config.clientEmail,
        key: cleanedPrivateKey,
        scopes: ['https://www.googleapis.com/auth/indexing'],
      });

      this.indexing = google.indexing({ version: 'v3', auth: this.auth });
    } catch (error) {
      console.error('Failed to initialize Google Indexing client:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        hasClientEmail: !!this.config.clientEmail,
        hasPrivateKey: !!this.config.privateKey,
        privateKeyLength: this.config.privateKey?.length,
        privateKeyStart: this.config.privateKey?.substring(0, 50) + '...',
      });
      throw error;
    }
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
      let errorMessage = 'Unknown error';

      if (error instanceof Error) {
        errorMessage = error.message;

        // Provide specific guidance for common errors
        if (errorMessage.includes('DECODER routines::unsupported')) {
          errorMessage = `SSL/Private key format error: ${errorMessage}. Check that GOOGLE_PRIVATE_KEY is properly formatted with correct line breaks.`;
        } else if (errorMessage.includes('invalid_grant')) {
          errorMessage = `Authentication error: ${errorMessage}. Check that GOOGLE_CLIENT_EMAIL and GOOGLE_PRIVATE_KEY are correct and the service account has indexing permissions.`;
        } else if (errorMessage.includes('quota')) {
          errorMessage = `API quota exceeded: ${errorMessage}. Google Indexing API has daily limits.`;
        } else if (errorMessage.includes('access_denied')) {
          errorMessage = `Access denied: ${errorMessage}. Ensure the service account has Google Search Console permissions for the site.`;
        }
      }

      // Log detailed error for debugging
      console.error('Google Indexing API error:', {
        url,
        error: errorMessage,
        originalError: error,
        timestamp: new Date().toISOString(),
      });

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
