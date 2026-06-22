import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Extract and parse JSON from a string that might contain other text or markdown markers.
 */
export function extractJSON(str: string): any {
  try {
    // Try direct parse first
    return JSON.parse(str);
  } catch (e) {
    try {
      // Find the first '{' and the last '}'
      const start = str.indexOf('{');
      const end = str.lastIndexOf('}');
      if (start === -1 || end === -1) throw new Error('No JSON object found');

      const jsonStr = str.substring(start, end + 1);
      return JSON.parse(jsonStr);
    } catch (e2) {
      console.error('Failed to extract JSON:', e2);
      return null;
    }
  }
}
