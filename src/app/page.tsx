/*"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import SearchInput from "./components/SearchInput";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(null);

  const handleSearch = (searchText: string) => {
    setSearchResult(searchText);
    filterUsers(searchText);
  };

  const filterUsers = (searchText: string) => {
    const lowercased = searchText.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowercased) ||
        user.email.toLowerCase().includes(lowercased)
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<{ users: User[] }>(
          `/api/mock?search`
        );
        setUsers(res.data.users);
        setFilteredUsers(res.data.users);
      } catch (err: any) {
        setError(err.message || "Eroare necunoscută");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="p-4">
      <SearchInput onSearch={handleSearch} />

      {searchResult && (
        <p className="mt-2 text-sm text-gray-600">
          Rezultate pentru: <strong>{searchResult}</strong>
        </p>
      )}

      {error && <div className="text-red-500">{`Eroare: ${error}`}</div>}
      {isLoading && <LoaderCircle className="animate-spin" />}

      {filteredUsers.map((user) => (
        <div
          key={user.id}
          className="border border-b-neutral-600 p-2 rounded mb-3"
        >
          <p>
            <strong>Nume:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ))}

      {!isLoading && filteredUsers.length === 0 && (
        <p>Nu s-au găsit utilizatori.</p>
      )}
    </div>
  );
}*/

"use client";

import SearchInput from "../components/SearchInput";

export default function Home() {
  return (
    <div className="p-4 md:max-lg:flex ">
      <h1 className="p-10 place-self-center font-bold">Homepage</h1>
      <SearchInput />
    </div>
  );
}
