
import { Neologism } from "@/types/neologism";
import completeData from "./complete-neologisms.json";

// Cast the imported JSON data to our Neologism type
export const neologisms: Neologism[] = completeData as Neologism[];

export const getCategories = (): string[] => {
  // Filter out any invalid or malformed categories
  const categories = Array.from(new Set(
    neologisms
      .map(n => n.Categoria)
      .filter(category => category && typeof category === 'string' && category.trim().length > 0)
      .map(category => category.trim()) // Clean up any whitespace
  ));
  return categories.sort();
};
