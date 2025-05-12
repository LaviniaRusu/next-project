/////////////////////cod bun reftch////////////////////////////////////////////
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import useFetch from "../hooks/useFetch";
import { fetchUsers } from "@/services/fetchUsers";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  // const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  // const [suggestionError, setSuggestionError] = useState(null);

  const router = useRouter();

  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch(() => fetchUsers(debouncedSearchText), false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchText(searchText.trim());
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearchText) {
      refetch();
    } else {
      setSearchSuggestions([]);
    }
  }, [debouncedSearchText]);

  useEffect(() => {
    if (users) {
      setSearchSuggestions(users);
    }
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = debouncedSearchText.trim();
    if (query) {
      router.push(`/users?search=${encodeURIComponent(query)}`);
      setSearchSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchText(name);
    setSearchSuggestions([]);
    router.push(`/users?search=${encodeURIComponent(name)}`);
  };

  return (
    <div className="bg-white w-full max-w-2xl mx-auto relative">
      <form
        onSubmit={handleSubmit}
        className="flex items-center border w-full relative"
      >
        <input
          type="text"
          placeholder="Caută utilizatori..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </form>

      {loading && (
        <p className="text-sm text-gray-500 mt-1">Se încarcă sugestiile...</p>
      )}

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

      {error?.message && <p className="mt-2 text-red-500">{error.message}</p>}
    </div>
  );
};

export default SearchInput;
