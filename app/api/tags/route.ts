import { NextRequest } from 'next/server';
import { db } from 'website/db/config';
import { tags } from 'website/db/schema';
import { withApiAuth, createSuccessResponse } from 'website/lib/api/middleware';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getHandler(_: NextRequest) {
  try {
    // Fetch all tags with id and name
    const tagsData = await db
      .select({
        id: tags.id,
        name: tags.name,
      })
      .from(tags)
      .orderBy(tags.name);

    return createSuccessResponse(tagsData);
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
}

export const GET = withApiAuth(getHandler);
