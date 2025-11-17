import { User } from "@/Types/interfaces";

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
