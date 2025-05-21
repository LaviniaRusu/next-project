// "use client";

// export const fetchUsers = async (searchQuery?: string) => {
//   try {
//     const res = await fetch(`/api/mock?search=${searchQuery}`);
//     if (!res.ok) throw new Error("Eroare la preluarea utilizatorilor");
//     const data = await res.json();

//     return data.users;
//   } catch {
//     console.log("err");
//   }
// };

///bun
// "use client";

// export const fetchUsers = async (searchTerm?: string) => {
//   try {
//     const res = await fetch(`/api/mock?search=${searchTerm}`);
//     if (!res.ok) throw new Error("Eroare la preluarea utilizatorilor");
//     const data = await res.json();

//     return data.suggestions;
//   } catch {
//     console.log("err");
//   }
// };

////"use client";

// export type User = {
//   id: number;
//   name: string;
//   position: string;
//   department: string;
//   type: "user";
// };

// export type Store = {
//   id: number;
//   name: string;
//   city?: string;
//   type: "store";
// };

// export type Department = {
//   id: number;
//   department: string;
//   departmentCoordinator?: string;
//   city?: string;
//   type: "department";
// };

// export type SuggestionsResponse = {
//   users: User[];
//   stores: Store[];
//   departments: Department[];
// };

// export const fetchUsers = async (searchTerm?: string): Promise<SuggestionsResponse> => {
//   try {
//     const res = await fetch(`/api/mock?search=${searchTerm}`);
//     if (!res.ok) throw new Error("Eroare la preluarea utilizatorilor");

//     const data = await res.json();

//     // Data.suggestions este un array mixt - atașăm type pe fiecare element
//     const users: User[] = [];
//     const stores: Store[] = [];
//     const departments: Department[] = [];

//     data.suggestions.forEach((item: any) => {
//       // Dacă există un câmp 'name' și alte câmpuri specifice userilor, considerăm user
//       if (item.name && item.position && item.department) {
//         users.push({ ...item, type: "user" });
//       }
//       // Dacă există câmpul 'department' și nu are 'name', considerăm departament
//       else if (item.department && !item.name) {
//         departments.push({ ...item, type: "department" });
//       }
//       // Dacă are 'name' dar fără poziție, considerăm magazin/store
//       else if (item.name && !item.position) {
//         stores.push({ ...item, type: "store" });
//       }
//     });

//     return { users, stores, departments };
//   } catch {
//     console.log("err");
//     return { users: [], stores: [], departments: [] };
//   }
// };
/////////////////
// "use client";

// export const fetchUsers = async (searchTerm?: string) => {
//   try {
//     const res = await fetch(`/api/mock?search=${searchTerm}`);
//     if (!res.ok) throw new Error("Eroare la preluarea utilizatorilor");
//     const data = await res.json();
//     console.log("FETCHED DATA:", data);

//     return data.suggestions;
//   } catch {
//     console.log("err");
//   }
// };
// "use client";

// interface Suggestion {
//   id: number;
//   type: "user" | "department" | "store";
//   name?: string;
//   email?: string;
//   department?: string;
//   departmentCoordinator?: string;
//   city?: string;
// }

// interface SeparatedSuggestions {
//   users: Suggestion[];
//   departments: Suggestion[];
//   stores: Suggestion[];
// }

// export const fetchUsers = async (
//   searchTerm?: string
// ): Promise<SeparatedSuggestions> => {
//   try {
//     const res = await fetch(`/api/mock?search=${searchTerm}`);
//     if (!res.ok) throw new Error("Eroare la preluarea utilizatorilor");

//     const data = await res.json();
//     const suggestions: Suggestion[] = data.suggestions || [];

//     // Separăm sugestiile după tip
//     const users = suggestions.filter((item) => item.type === "user");
//     const departments = suggestions.filter(
//       (item) => item.type === "department"
//     );
//     const stores = suggestions.filter((item) => item.type === "store");

//     return { users, departments, stores };
//   } catch (err) {
//     console.error("Eroare la fetchUsers:", err);
//     return { users: [], departments: [], stores: [] };
//   }
// };

// "use client";
import { User } from "@/Types/interfaces";
// interface User {
//   id: number;
//   type: "user";
//   name?: string;
//   email?: string;
//   position?: string;
//   department?: string;
//   departmentCoordinator?: string;
//   city?: string;
// }

export const fetchUsers = async (
  searchTerm?: string
): Promise<{ users: User[] }> => {
  try {
    const res = await fetch(`/api/mock?search=${searchTerm}`);
    if (!res.ok) throw new Error("Eroare la preluarea utilizatorilor");

    const data = await res.json();
    const suggestions: User[] = data.suggestions || [];

    // Filtrăm doar sugestiile de tip "user"
    const users = suggestions.filter((item) => item.type === "user");

    return { users };
  } catch (err) {
    console.error("Eroare la fetchUsers:", err);
    return { users: [] };
  }
};
