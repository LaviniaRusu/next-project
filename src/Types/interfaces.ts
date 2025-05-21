export interface Suggestion {
  id: number;
  type: "user" | "department" | "store";
  name?: string;
  position?: string;
  department?: string;
  departmentCoordinator?: string;
  city?: string;
}

export interface SeparatedSuggestions {
  users: Suggestion[];
  departments: Suggestion[];
  stores: Suggestion[];
}

export interface User {
  id: number;
  type: "user";
  name?: string;
  department?: string;
  departmentCoordinator?: string;
  store?: {
    id: number;
  };
  email?: string;
  phone?: string;
  city?: string;
  position?: string;
}
export interface StoreInfo {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  fax: string;
}

export interface Dept {
  id: string;
  name: string;
  position: string;
  department: string;
  phone: string;
  email: string;
  city: string;
}
