import { NextRequest, NextResponse } from 'next/server';

/**
 * API response types
 */
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Error response helper
 */
export function createErrorResponse(
  message: string,
  status: number = 500
): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: message,
    } as ApiResponse,
    { status }
  );
}

/**
 * Success response helper
 */
export function createSuccessResponse<T>(
  data: T,
  message?: string
): NextResponse {
  return NextResponse.json(
    {
      success: true,
      data,
      message,
    } as ApiResponse<T>,
    { status: 200 }
  );
}

/**
 * Bearer token authentication middleware
 */
export function authenticateRequest(request: NextRequest): boolean {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }

  const token = authHeader.substring(7); // Remove "Bearer " prefix
  const expectedToken = process.env.API_BEARER_TOKEN;

  if (!expectedToken) {
    console.error('API_BEARER_TOKEN environment variable is not set');
    return false;
  }

  return token === expectedToken;
}

/**
 * API middleware wrapper for route handlers
 */
export function withApiAuth<T extends unknown[]>(
  handler: (request: NextRequest, ...args: T) => Promise<NextResponse>
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    try {
      // Check authentication
      if (!authenticateRequest(request)) {
        return createErrorResponse('Unauthorized', 401);
      }

      // Call the handler
      return await handler(request, ...args);
    } catch (error) {
      console.error('API error:', error);
      return createErrorResponse(
        error instanceof Error ? error.message : 'Internal server error',
        500
      );
    }
  };
}

/**
 * Generic API middleware wrapper (without auth)
 */
export function withApi<T extends unknown[]>(
  handler: (request: NextRequest, ...args: T) => Promise<NextResponse>
) {
  return async (request: NextRequest, ...args: T): Promise<NextResponse> => {
    try {
      return await handler(request, ...args);
    } catch (error) {
      console.error('API error:', error);
      return createErrorResponse(
        error instanceof Error ? error.message : 'Internal server error',
        500
      );
    }
  };
}
