// services/fetchSearch.ts
import { SearchItem } from "@/app/data/searchData";

export type SearchFilters = {
  department?: string;
  functie?: string;
  magazin?: string;
  judet?: string;
  telefon?: string;
};

export type SearchResponse = {
  count: number;
  results: SearchItem[];
  filters: {
    department: string[];
    functie: string[];
    magazin: string[];
    judet: string[];
    telefon: string[];
  };
};

export const fetchSearch = async (
  filters: SearchFilters = {}
): Promise<SearchResponse> => {
  try {
    // construim query string în funcție de filtrele trimise
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, value);
    });

    const res = await fetch(`/api/search?${params.toString()}`);

    if (!res.ok) throw new Error("Eroare la preluarea rezultatelor");

    const data = await res.json();

    return data as SearchResponse;
  } catch (err) {
    console.error("Eroare la fetchSearch:", err);
    return {
      count: 0,
      results: [],
      filters: {
        department: [],
        functie: [],
        magazin: [],
        judet: [],
        telefon: [],
      },
    };
  }
};
