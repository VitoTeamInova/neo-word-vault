
import { Neologism } from "@/types/neologism";
import completeData from "./complete-neologisms.json";

// Cast the imported JSON data to our Neologism type
export const neologisms: Neologism[] = completeData as Neologism[];

export const getCategories = (): string[] => {
  const categories = Array.from(new Set(neologisms.map(n => n.Categoria)));
  return categories.sort();
};
