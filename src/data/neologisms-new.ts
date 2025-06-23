
import { Neologism } from "@/types/neologism";
import completeData from "./complete-neologisms-corrected.json";

// Cast the imported JSON data to our Neologism type
export const neologisms: Neologism[] = completeData as Neologism[];

export const getCategories = (): string[] => {
  // Filter out any invalid or malformed categories
  const categories = Array.from(new Set(
    neologisms
      .map(n => n.Categoria)
      .filter(category => category && typeof category === 'string' && category.trim().length > 0)
      .map(category => {
        // Clean up categories by taking only the first line if there are line breaks
        const cleanCategory = category.split('\n')[0].trim();
        return cleanCategory;
      })
      .filter(category => category.length > 0) // Remove any empty categories after cleaning
  ));
  return categories.sort();
};
