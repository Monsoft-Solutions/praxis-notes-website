import { NextRequest, NextResponse } from 'next/server';

/**
 * Dynamic API route to serve IndexNow API key file
 *
 * IndexNow requires the API key to be served as a text file at:
 * https://example.com/{api-key}.txt
 *
 * This route handles requests like:
 * https://www.praxisnotes.com/abc123.txt
 *
 * And verifies that the requested key matches our INDEX_NOW_KEY
 */

interface RouteContext {
  params: Promise<{
    key: string;
  }>;
}

export async function GET(
  request: NextRequest,
  context: RouteContext
): Promise<NextResponse> {
  try {
    const { key } = await context.params;

    // Check if INDEX_NOW_KEY is configured
    const indexNowKey = process.env.INDEX_NOW_KEY;
    if (!indexNowKey) {
      console.warn('INDEX_NOW_KEY environment variable not configured');
      return new NextResponse('Not Found', { status: 404 });
    }

    // Extract the key from the filename (remove .txt extension if present)
    const requestedKey = key.endsWith('.txt') ? key.slice(0, -4) : key;

    // Verify the requested key matches our configured key
    if (requestedKey !== indexNowKey) {
      console.warn(
        `IndexNow key mismatch: requested ${requestedKey}, configured ${indexNowKey.substring(0, 8)}...`
      );
      return new NextResponse('Not Found', { status: 404 });
    }

    // Return the key as plain text
    return new NextResponse(indexNowKey, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400', // Cache for 24 hours
      },
    });
  } catch (error) {
    console.error('Error serving IndexNow key file:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
