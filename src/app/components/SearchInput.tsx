// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   departments: string;
// }

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");
//   const [searchSuggestions, setSearchSuggestions] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const ref = useRef<HTMLInputElement>(null);
//   const router = useRouter();

//   // Debounce input
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText);
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   // Fetch users pentru sugestii
//   useEffect(() => {
//     const fetchUsers = async (search?: string) => {
//       const query = search?.trim().toLowerCase();
//       if (!query) {
//         setSearchSuggestions([]);
//         return;
//       }

//       setLoading(true);
//       try {
//         const res = await fetch(`/api/mock?search=${search ? search : ""}`);
//         const data = await res.json();
//         setSearchSuggestions(data.users || []);
//       } catch (err) {
//         setError("Eroare la încărcarea sugestiilor.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers(debouncedSearchText);
//   }, [debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     setSearchText(name);
//     setSearchSuggestions([]);
//     ref.current?.focus();
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto  relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <input
//           ref={ref}
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {searchSuggestions.length > 0 && (
//         <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//           {searchSuggestions.map((user) => (
//             <li
//               key={user.id}
//               className="p-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => handleSuggestionClick(user.name)}
//             >
//               {user.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       {error && <p className="mt-2 text-red-500">{error}</p>}
//     </div>
//   );
// };

// // export default SearchInput;
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { refetchUsers } from "@/services/refetchUsers";
// import { fetchUsers } from "@/services/fetchUsers";

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   departments: string;
// }

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");
//   const [searchSuggestions, setSearchSuggestions] = useState<User[]>([]);
//   const [loadingSuggestions, setLoadingSuggestions] = useState(false);
//   const [suggestionError, setSuggestionError] = useState<string | null>(null);

//   const ref = useRef<HTMLInputElement>(null);
//   const router = useRouter();

//   const {
//     data: users,
//     loading,
//     error,
//     refetch,
//   } = useFetch<User[]>(() => fetchUsers(), false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText.trim());
//     }, 300);

//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   useEffect(() => {
//     if (!debouncedSearchText) {
//       setSearchSuggestions([]);
//       return;
//     }

//     // Apelează refetch cu searchQuery
//     refetch();
//   }, [debouncedSearchText, refetch]);

//   // useEffect(() => {
//   //   fetchUsers();
//   // }, [debouncedSearchText]);

//   // useEffect(() => {
//   //   const fetchSuggestions = async () => {
//   //     if (!debouncedSearchText) {
//   //       setSearchSuggestions([]);
//   //       return;
//   //     }

//   //     setLoadingSuggestions(true);
//   //     setSuggestionError(null);

//   //     try {
//   //       const users = await refetchUsers(debouncedSearchText);
//   //       setSearchSuggestions(users || []);
//   //     } catch {
//   //       setSuggestionError("Eroare la încărcarea sugestiilor.");
//   //     } finally {
//   //       setLoadingSuggestions(false);
//   //     }
//   //   };

//   //   fetchSuggestions();
//   // }, [debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     setSearchText(name);
//     setSearchSuggestions([]);
//     ref.current?.focus();
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <input
//           ref={ref}
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {loadingSuggestions && (
//         <p className="text-sm text-gray-500 mt-1">Se încarcă sugestiile...</p>
//       )}

//       {searchSuggestions.length > 0 && (
//         <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//           {searchSuggestions.map((user) => (
//             <li
//               key={user.id}
//               className="p-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => handleSuggestionClick(user.name)}
//             >
//               {user.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       {suggestionError && (
//         <p className="mt-2 text-red-500">{suggestionError}</p>
//       )}
//     </div>
//   );
// };

// // export default SearchInput;
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { fetchUsers } from "@/services/fetchUsers";

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");
//   const [searchSuggestions, setSearchSuggestions] = useState([]);
//   const [loadingSuggestions, setLoadingSuggestions] = useState(false);
//   const [suggestionError, setSuggestionError] = useState(null);

//   const router = useRouter();

//   const {
//     data: users,
//     loading,
//     error,
//     refetch,
//   } = useFetch(() => fetchUsers(debouncedSearchText), false);

//   // Debounce input text
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText.trim());
//     }, 300);

//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   // Refetch the users when debouncedSearchText changes
//   useEffect(() => {
//     if (debouncedSearchText) {
//       refetch(); // Trigger the refetch only when search text changes
//     } else {
//       setSearchSuggestions([]); // Clear suggestions if search text is empty
//     }
//   }, [debouncedSearchText, refetch]);

//   // Handle the users data
//   useEffect(() => {
//     if (users) {
//       setSearchSuggestions(users);
//     }
//   }, [users]);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchSuggestions([]);
//     }
//   };

//   // Handle suggestion click
//   const handleSuggestionClick = (name) => {
//     setSearchText(name);
//     setSearchSuggestions([]);
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {loadingSuggestions && (
//         <p className="text-sm text-gray-500 mt-1">Se încarcă sugestiile...</p>
//       )}

//       {searchSuggestions.length > 0 && (
//         <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//           {searchSuggestions.map((user) => (
//             <li
//               key={user.id}
//               className="p-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => handleSuggestionClick(user.name)}
//             >
//               {user.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       {suggestionError && (
//         <p className="mt-2 text-red-500">{suggestionError}</p>
//       )}
//     </div>
//   );
// };

// // export default SearchInput;
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { fetchUsers } from "@/services/fetchUsers";

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");
//   const [searchSuggestions, setSearchSuggestions] = useState([]);
//   const [loadingSuggestions, setLoadingSuggestions] = useState(false);
//   const [suggestionError, setSuggestionError] = useState(null);

//   const router = useRouter();

//   const {
//     data: users,
//     loading,
//     error,
//     refetch,
//   } = useFetch(() => fetchUsers(debouncedSearchText), false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText.trim());
//     }, 300);

//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   useEffect(() => {
//     refetch();
//   }, [debouncedSearchText]);

//   useEffect(() => {
//     if (users) {
//       setSearchSuggestions(users);
//     } else {
//       setSearchSuggestions([]);
//     }
//   }, [users]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchSuggestions([]);
//     }
//   };

//   const handleSuggestionClick = (name) => {
//     setSearchText(name);
//     setSearchSuggestions([]);
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {loadingSuggestions && (
//         <p className="text-sm text-gray-500 mt-1">Se încarcă sugestiile...</p>
//       )}

//       {searchSuggestions.length > 0 && (
//         <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//           {searchSuggestions.map((user) => (
//             <li
//               key={user.id}
//               className="p-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => handleSuggestionClick(user.name)}
//             >
//               {user?.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       {suggestionError && (
//         <p className="mt-2 text-red-500">{suggestionError}</p>
//       )}
//     </div>
//   );
// };

// export default SearchInput;

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
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [suggestionError, setSuggestionError] = useState(null);

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

      {loadingSuggestions && (
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

      {suggestionError && (
        <p className="mt-2 text-red-500">{suggestionError}</p>
      )}
    </div>
  );
};

export default SearchInput;
