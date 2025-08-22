import { NextRequest } from 'next/server';
import { db } from '../../../db/config';
import { categories } from '../../../db/schema';
import {
  withApiAuth,
  createSuccessResponse,
} from '../../../lib/api/middleware';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getHandler(_: NextRequest) {
  try {
    // Fetch all categories with id and name
    const categoriesData = await db
      .select({
        id: categories.id,
        name: categories.name,
      })
      .from(categories)
      .orderBy(categories.name);

    return createSuccessResponse(categoriesData);
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export const GET = withApiAuth(getHandler);
