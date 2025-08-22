import { NextRequest } from 'next/server';
import { db } from 'website/db/config';
import { authors } from 'website/db/schema';
import { withApiAuth, createSuccessResponse } from 'website/lib/api/middleware';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getHandler(_: NextRequest) {
  try {
    // Fetch all authors with id and name
    const authorsData = await db
      .select({
        id: authors.id,
        name: authors.name,
      })
      .from(authors)
      .orderBy(authors.name);

    return createSuccessResponse(authorsData);
  } catch (error) {
    console.error('Error fetching authors:', error);
    throw error;
  }
}

export const GET = withApiAuth(getHandler);
