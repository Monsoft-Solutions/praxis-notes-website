import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to format date in long format
export function formatDate(date: string | Date): string {
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Format date in YYYY-MM-DD format
export function formatDateYMD(date: string | Date): string {
  const d = new Date(date);
  const year = d.getFullYear();
  // getMonth() returns 0-11, so add 1 and pad with leading zero if necessary
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
