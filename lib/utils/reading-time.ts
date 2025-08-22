/**
 * Reading time calculation utility
 * Based on research from thereadtime.com
 *
 * Average silent reading speed: 238 words per minute
 * Formula: Reading Time = Total Word Count / 238
 *
 * Research source: Marc Brysbaert (2019) meta-analysis
 * of 100+ studies involving over 18,000 participants
 */

const AVERAGE_READING_SPEED_WPM = 238;

/**
 * Counts the number of words in a text string, handling both HTML and Markdown
 * @param text The text content to count words from (can include HTML and/or Markdown)
 * @returns The word count
 */
function countWords(text: string): number {
  if (!text || typeof text !== 'string') {
    return 0;
  }

  let cleanText = text;

  // Remove HTML tags if present
  cleanText = cleanText.replace(/<[^>]*>/g, ' ');

  // Remove Markdown syntax
  // Headers: # ## ### etc.
  cleanText = cleanText.replace(/^#{1,6}\s+/gm, '');

  // Bold and italic: **text**, __text__, *text*, _text_
  cleanText = cleanText.replace(/(\*\*|__)(.*?)\1/g, '$2');
  cleanText = cleanText.replace(/(\*|_)(.*?)\1/g, '$2');

  // Links: [text](url) -> text
  cleanText = cleanText.replace(/\[([^\]]*)\]\([^)]*\)/g, '$1');

  // Images: ![alt](url) -> alt text
  cleanText = cleanText.replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1');

  // Inline code: `code`
  cleanText = cleanText.replace(/`([^`]*)`/g, '$1');

  // Code blocks: ```code``` or ~~~code~~~
  cleanText = cleanText.replace(/```[\s\S]*?```/g, ' ');
  cleanText = cleanText.replace(/~~~[\s\S]*?~~~/g, ' ');

  // Blockquotes: > text
  cleanText = cleanText.replace(/^>\s+/gm, '');

  // List markers: - item, * item, + item, 1. item
  cleanText = cleanText.replace(/^[\s]*[-*+]\s+/gm, '');
  cleanText = cleanText.replace(/^[\s]*\d+\.\s+/gm, '');

  // Horizontal rules: --- or ***
  cleanText = cleanText.replace(/^[-*]{3,}$/gm, ' ');

  // Strikethrough: ~~text~~
  cleanText = cleanText.replace(/~~(.*?)~~/g, '$1');

  // Tables: remove table syntax | but keep content
  cleanText = cleanText.replace(/\|/g, ' ');

  // Remove extra whitespace and line breaks
  cleanText = cleanText.replace(/\s+/g, ' ');

  // Split by whitespace and filter out empty strings
  const words = cleanText
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);

  return words.length;
}

/**
 * Calculates reading time based on word count and average reading speed
 * @param wordCount The number of words
 * @returns Reading time in minutes (rounded to nearest minute)
 */
function calculateReadingTimeMinutes(wordCount: number): number {
  if (wordCount <= 0) {
    return 0;
  }

  const minutes = wordCount / AVERAGE_READING_SPEED_WPM;
  return Math.max(1, Math.round(minutes)); // Minimum 1 minute
}

/**
 * Formats reading time into a human-readable string
 * @param minutes The reading time in minutes
 * @returns Formatted reading time string (e.g., "5 min read", "1 min read")
 */
function formatReadingTime(minutes: number): string {
  if (minutes <= 0) {
    return '1 min read';
  }

  if (minutes === 1) {
    return '1 min read';
  }

  return `${minutes} min read`;
}

/**
 * Calculates and formats reading time for given content
 * @param content The text content (can include HTML and/or Markdown)
 * @returns Formatted reading time string (e.g., "5 min read")
 *
 * @example
 * ```typescript
 * const markdownContent = "# My Blog Post\n\nThis is **bold** and *italic* text with [a link](url).";
 * const readingTime = calculateReadingTime(markdownContent);
 * console.log(readingTime); // "1 min read"
 * ```
 */
export function calculateReadingTime(content: string): string {
  const wordCount = countWords(content);
  const minutes = calculateReadingTimeMinutes(wordCount);
  return formatReadingTime(minutes);
}

/**
 * Gets detailed reading time information
 * @param content The text content (can include HTML and/or Markdown)
 * @returns Object with word count, minutes, and formatted string
 *
 * @example
 * ```typescript
 * const markdownContent = "## Introduction\n\nThis is a **sample** blog post with `code` and [links](url)...";
 * const details = getReadingTimeDetails(markdownContent);
 * console.log(details);
 * // {
 * //   wordCount: 487,
 * //   minutes: 2,
 * //   formattedTime: "2 min read"
 * // }
 * ```
 */
export function getReadingTimeDetails(content: string): {
  wordCount: number;
  minutes: number;
  formattedTime: string;
} {
  const wordCount = countWords(content);
  const minutes = calculateReadingTimeMinutes(wordCount);
  const formattedTime = formatReadingTime(minutes);

  return {
    wordCount,
    minutes,
    formattedTime,
  };
}

/**
 * Constants for reference
 */
export const READING_TIME_CONSTANTS = {
  AVERAGE_WPM: AVERAGE_READING_SPEED_WPM,
  SOURCE: 'Marc Brysbaert (2019) meta-analysis - thereadtime.com',
} as const;
