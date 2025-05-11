"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
}

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Debounce input
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchText]);

  // Fetch users pentru sugestii
  useEffect(() => {
    const fetchUsers = async (search?: string) => {
      const query = search?.trim().toLowerCase();
      if (!query) {
        setSearchSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/mock?search=${search ? search : ""}`);
        const data = await res.json();
        setSearchSuggestions(data.users || []);
      } catch (err) {
        setError("Eroare la încărcarea sugestiilor.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(debouncedSearchText);
  }, [debouncedSearchText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = debouncedSearchText.trim();
    if (query) {
      router.push(`/users?search=${encodeURIComponent(query)}`);
      setSearchSuggestions([]);
    }
  };

  const handleSuggestionClick = (name: string) => {
    setSearchText(name);
    setSearchSuggestions([]);
    ref.current?.focus();
    router.push(`/users?search=${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-white w-full max-w-2xl mx-auto  relative">
      <form
        onSubmit={handleSubmit}
        className="flex items-center border w-full relative"
      >
        <input
          ref={ref}
          type="text"
          placeholder="Caută utilizatori..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </form>

      {searchSuggestions.length > 0 && (
        <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
          {searchSuggestions.map((user) => (
            <li
              key={user.id}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(user.name)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default SearchInput;
