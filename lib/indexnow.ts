/**
 * IndexNow API integration for instant indexing notifications
 * @see https://www.indexnow.org/documentation
 */

/**
 * Configuration for IndexNow
 */
interface IndexNowConfig {
  apiKey?: string;
  baseUrl?: string;
  keyLocation?: string;
}

/**
 * Result of an IndexNow notification
 */
interface IndexNowResult {
  success: boolean;
  urls: string[];
  error?: string;
  responseCode?: number;
}

/**
 * IndexNow utility class for notifying search engines about URL updates
 */
export class IndexNowClient {
  private config: IndexNowConfig;
  private readonly apiEndpoint = 'https://api.indexnow.org/indexnow';

  constructor(config: IndexNowConfig = {}) {
    this.config = {
      apiKey: config.apiKey || process.env.INDEX_NOW_KEY,
      baseUrl:
        config.baseUrl || process.env.SITE_URL || 'https://www.praxisnotes.com',
      keyLocation: config.keyLocation,
    };
  }

  /**
   * Get the host from the base URL
   */
  private getHost(): string {
    try {
      const url = new URL(this.config.baseUrl!);
      return url.hostname;
    } catch {
      console.error('Invalid base URL:', this.config.baseUrl);
      return 'www.praxisnotes.com';
    }
  }

  /**
   * Get the key location URL
   */
  private getKeyLocation(): string {
    if (this.config.keyLocation) {
      return this.config.keyLocation;
    }
    return `${this.config.baseUrl}/${this.config.apiKey}.txt`;
  }

  /**
   * Notify IndexNow about a single URL update
   */
  async notifyUrlUpdate(url: string): Promise<IndexNowResult> {
    return this.notifyUrlUpdates([url]);
  }

  /**
   * Notify IndexNow about multiple URL updates
   */
  async notifyUrlUpdates(urls: string[]): Promise<IndexNowResult> {
    if (!this.config.apiKey) {
      throw new Error('INDEX_NOW_KEY environment variable is required');
    }

    if (!this.config.baseUrl) {
      throw new Error('SITE_URL environment variable is required');
    }

    if (urls.length === 0) {
      return {
        success: true,
        urls: [],
      };
    }

    // Convert relative URLs to absolute URLs
    const absoluteUrls = urls.map(url => this.buildFullUrl(url));

    // Validate URLs belong to the same host
    const host = this.getHost();
    for (const url of absoluteUrls) {
      try {
        const urlObj = new URL(url);
        if (urlObj.hostname !== host) {
          throw new Error(`URL ${url} does not belong to host ${host}`);
        }
      } catch {
        return {
          success: false,
          urls: absoluteUrls,
          error: `Invalid URL format: ${url}`,
        };
      }
    }

    const payload = {
      host,
      key: this.config.apiKey,
      keyLocation: this.getKeyLocation(),
      urlList: absoluteUrls,
    };

    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      const result: IndexNowResult = {
        success: response.ok,
        urls: absoluteUrls,
        responseCode: response.status,
      };

      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}`;

        switch (response.status) {
          case 400:
            errorMessage = 'Bad request: Invalid format';
            break;
          case 403:
            errorMessage = 'Forbidden: Invalid API key or key not found';
            break;
          case 422:
            errorMessage =
              "Unprocessable Entity: URLs don't belong to host or key mismatch";
            break;
          case 429:
            errorMessage = 'Too Many Requests: Rate limit exceeded';
            break;
          default:
            try {
              const responseText = await response.text();
              errorMessage = `HTTP ${response.status}: ${responseText}`;
            } catch {
              errorMessage = `HTTP ${response.status}: ${response.statusText}`;
            }
        }

        result.error = errorMessage;
      }

      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

      console.error('IndexNow API error:', {
        urls: absoluteUrls,
        error: errorMessage,
        originalError: error,
        timestamp: new Date().toISOString(),
      });

      return {
        success: false,
        urls: absoluteUrls,
        error: errorMessage,
      };
    }
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
   * Notify IndexNow about a new resource
   */
  async notifyResourceCreated(resourceSlug: string): Promise<IndexNowResult> {
    const resourceUrl = this.buildFullUrl(`/resources/${resourceSlug}`);
    return this.notifyUrlUpdate(resourceUrl);
  }

  /**
   * Notify IndexNow about resource and related pages
   */
  async notifyResourceAndRelatedPages(
    resourceSlug: string
  ): Promise<IndexNowResult> {
    const urls: string[] = [
      this.buildFullUrl(`/resources/${resourceSlug}`), // The new resource
      this.buildFullUrl('/resources'), // Resources index page
      this.buildFullUrl('/resources/categories'), // Categories index page
    ];

    return this.notifyUrlUpdates(urls);
  }
}

/**
 * Singleton instance for easy usage
 */
let globalClient: IndexNowClient | null = null;

/**
 * Get the global IndexNow client instance
 */
export function getIndexNowClient(): IndexNowClient {
  if (!globalClient) {
    globalClient = new IndexNowClient();
  }
  return globalClient;
}

/**
 * Convenience function to notify IndexNow about a new resource
 * This function includes error handling and logging but won't throw errors
 */
export async function notifyIndexNowResourceCreated(
  resourceSlug: string
): Promise<void> {
  // Early exit if required environment variables are not set
  if (!process.env.INDEX_NOW_KEY) {
    console.warn(
      'IndexNow skipped: Missing INDEX_NOW_KEY environment variable'
    );
    return;
  }

  try {
    const client = getIndexNowClient();
    const result = await client.notifyResourceCreated(resourceSlug);

    if (result.success) {
      console.log(
        `✅ Successfully notified IndexNow about new resource: ${result.urls[0]}`
      );

      // Also notify the resources index page and related pages
      try {
        const relatedResult =
          await client.notifyResourceAndRelatedPages(resourceSlug);

        if (relatedResult.success) {
          console.log(
            `✅ Successfully notified IndexNow about ${relatedResult.urls.length} related pages`
          );
        } else {
          console.warn(
            `⚠️ Failed to notify IndexNow about related pages: ${relatedResult.error}`
          );
        }
      } catch (relatedError) {
        console.warn(
          '⚠️ Failed to notify IndexNow about related pages:',
          relatedError
        );
      }
    } else {
      console.warn(
        `⚠️ Failed to notify IndexNow about resource ${resourceSlug}: ${result.error}`
      );
    }
  } catch (error) {
    // Log error but don't throw - we don't want to break resource creation
    console.error('IndexNow notification failed:', error);
  }
}

/**
 * Convenience function to notify IndexNow about multiple URLs
 * This function includes error handling and logging but won't throw errors
 */
export async function notifyIndexNowUrlUpdates(urls: string[]): Promise<void> {
  // Early exit if required environment variables are not set
  if (!process.env.INDEX_NOW_KEY) {
    console.warn(
      'IndexNow skipped: Missing INDEX_NOW_KEY environment variable'
    );
    return;
  }

  if (urls.length === 0) {
    return;
  }

  try {
    const client = getIndexNowClient();
    const result = await client.notifyUrlUpdates(urls);

    if (result.success) {
      console.log(
        `✅ Successfully notified IndexNow about ${result.urls.length} URLs`
      );
    } else {
      console.warn(
        `⚠️ Failed to notify IndexNow about ${urls.length} URLs: ${result.error}`
      );
    }
  } catch (error) {
    // Log error but don't throw - we don't want to break the calling process
    console.error('IndexNow notification failed:', error);
  }
}
