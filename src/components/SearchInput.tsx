import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LoaderCircle, Search } from "lucide-react";
import useFetch from "../hooks/useFetch";
import { fetchUsers } from "@/services/fetchUsers";
import { User } from "./DepartamentsFilter";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

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
    if (debouncedSearchText.length >= 2) {
      refetch();
    }
  }, [debouncedSearchText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = debouncedSearchText.trim();
    if (query) {
      router.push(`/users?search=${encodeURIComponent(query)}`);
      setSearchText("");
    }
  };

  const handleSuggestionClick = (name: string) => {
    setSearchText("");
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
      {searchText.length === 1 && (
        <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
      )}
      {loading ? (
        <div className="flex justify-center py-2">
          <LoaderCircle className="animate-spin text-gray-500" />
        </div>
      ) : (
        searchText.length >= 2 &&
        users?.length > 0 && (
          <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
            {users.map((user: User) => (
              <li
                key={user.id}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(user.name)}
              >
                {user.name}
              </li>
            ))}
          </ul>
        )
      )}

      {!loading && error?.message && (
        <p className="mt-2 text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default SearchInput;
