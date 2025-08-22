/**
 * Date formatting utilities for consistent date display across the application
 * Standardizes date formats to match the site's requirements
 */

/**
 * Formats a date string to the standardized format: "August 25, 2025"
 * @param dateString The date string to format (can be in various formats)
 * @returns Formatted date string or the original string if parsing fails
 *
 * @example
 * ```typescript
 * formatDateToStandard("2025-08-25") // "August 25, 2025"
 * formatDateToStandard("August 25, 2025") // "August 25, 2025" (already formatted)
 * formatDateToStandard("2025/08/25") // "August 25, 2025"
 * ```
 */
export function formatDateToStandard(dateString: string): string {
  if (!dateString) {
    return '';
  }

  try {
    // If the date is already in the desired format, return it
    const standardFormatRegex = /^[A-Z][a-z]+ \d{1,2}, \d{4}$/;
    if (standardFormatRegex.test(dateString)) {
      return dateString;
    }

    // Try to parse the date string
    const date = new Date(dateString);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      console.warn(`Unable to parse date: ${dateString}`);
      return dateString; // Return original if can't parse
    }

    // Format to "August 25, 2025"
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.warn(`Error formatting date: ${dateString}`, error);
    return dateString; // Return original if error occurs
  }
}

/**
 * Formats a date to a shorter format for space-constrained displays
 * @param dateString The date string to format
 * @returns Formatted date string in "Aug 25, 2025" format
 */
export function formatDateToShort(dateString: string): string {
  if (!dateString) {
    return '';
  }

  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.warn(`Unable to parse date: ${dateString}`);
      return dateString;
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  } catch (error) {
    console.warn(`Error formatting date: ${dateString}`, error);
    return dateString;
  }
}

/**
 * Gets a relative time string (e.g., "2 days ago", "1 month ago")
 * @param dateString The date string to compare against current date
 * @returns Relative time string
 */
export function getRelativeTime(dateString: string): string {
  if (!dateString) {
    return '';
  }

  try {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return formatDateToStandard(dateString);
    }

    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return 'Today';
    } else if (diffInDays === 1) {
      return 'Yesterday';
    } else if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    } else if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    } else if (diffInDays < 365) {
      const months = Math.floor(diffInDays / 30);
      return months === 1 ? '1 month ago' : `${months} months ago`;
    } else {
      const years = Math.floor(diffInDays / 365);
      return years === 1 ? '1 year ago' : `${years} years ago`;
    }
  } catch (error) {
    console.warn(`Error calculating relative time: ${dateString}`, error);
    return formatDateToStandard(dateString);
  }
}

/**
 * Validates if a date string is in a parseable format
 * @param dateString The date string to validate
 * @returns True if the date can be parsed, false otherwise
 */
export function isValidDate(dateString: string): boolean {
  if (!dateString) {
    return false;
  }

  try {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  } catch {
    return false;
  }
}

/**
 * Constants for date formatting
 */
export const DATE_FORMAT_CONSTANTS = {
  STANDARD_FORMAT: 'MMMM d, yyyy', // August 25, 2025
  SHORT_FORMAT: 'MMM d, yyyy', // Aug 25, 2025
  ISO_FORMAT: 'yyyy-MM-dd', // 2025-08-25
} as const;
