/*"use client";

import React, { useRef, useState, useEffect } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchSuggestions = async () => {
      if (searchText.trim() === "") {
        setSearchSuggestions([]);
        return;
      }

      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_BASE_URL
          }/api/mock?search=${encodeURIComponent(searchText)}`,
          { signal: controller.signal }
        );

        const data = await res.json();

        const suggestions = Array.isArray(data)
          ? data
          : Array.isArray(data.users)
          ? data.users.map((u: any) => u.name)
          : [];

        setSearchSuggestions(suggestions);
      } catch (err) {
        if ((err as any).name !== "AbortError") {
          console.error("Eroare la fetch:", err);
        }
      }
    };

    fetchSuggestions();
    return () => controller.abort();
  }, [searchText]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      onSearch(ref.current.value);
      setSearchSuggestions([]);
      setSearchText("");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="flex items-center border w-full">
        <input
          ref={ref}
          type="text"
          placeholder="Caută aici..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="p-2 w-full"
        />
      </form>

      {searchSuggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 w-full mt-1 max-h-60 overflow-y-auto z-10">
          {searchSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setSearchText(suggestion);
                setSearchSuggestions([]);
                onSearch(suggestion); // declanșăm căutarea direct
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;*/
//////versiune care merge cautare url si merge binnnnee////////
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import UserCard from "./UserCard";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// const SearchInput = () => {
//   const [allUsers, setAllUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");
//   const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const ref = useRef<HTMLInputElement>(null);

//   const fetchUsers = async (search?: string) => {
//     setLoading(true);
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock?search=${
//           search ? search : ""
//         }`
//       );
//       const data = await res.json();
//       setAllUsers(data.users || []);
//       setSearchSuggestions(data.users);
//     } catch (err) {
//       setError("Eroare la încărcarea utilizatorilor.");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // debounce searchText
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText);
//     }, 300); //

//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   useEffect(() => {
//     const lower = debouncedSearchText.trim().toLowerCase();
//     if (lower === "") {
//       setSearchSuggestions([]);
//       return;
//     }

//     // const suggestions = allUsers
//     //   .filter((user) => user.name.toLowerCase().includes(lower))
//     //   .map((user) => user.name);
//     fetchUsers(lower);

//     // setSearchSuggestions(suggestions);
//   }, [debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const cleanedText = debouncedSearchText.trim().toLowerCase();
//     const results = allUsers.filter(
//       (user) =>
//         user.name.toLowerCase().includes(cleanedText) ||
//         user.email.toLowerCase().includes(cleanedText)
//     );
//     setFilteredUsers(results);
//     setSearchSuggestions([]);
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto relative">
//       <form onSubmit={handleSubmit} className="flex items-center border w-full">
//         <input
//           ref={ref}
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="p-2 w-full"
//         />
//       </form>

//       {searchSuggestions.length > 0 && (
//         <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//           {searchSuggestions.map((suggestion, index) => (
//             <li
//               key={index}
//               className="p-2 cursor-pointer hover:bg-gray-100"
//               onClick={() => {
//                 setSearchText(suggestion);
//                 setSearchSuggestions([]);
//                 ref.current?.focus(); // Focus pe input după click
//               }}
//             >
//               {suggestion.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       {error && <p className="mt-2 text-red-500">{error}</p>}

//       <div className="mt-4 space-y-3">
//         {/* {filteredUsers.length > 0 && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//             {filteredUsers.map((user) => (
//               <UserCard key={user.id} user={user} />
//             ))}
//           </div>
//         )} */}
//         {/* / /users?search="" */}
//         {filteredUsers.length === 0 && (
//           <p className="text-gray-500 mt-4">Nu s-au găsit utilizatori.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchInput;
// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");
//   const router = useRouter();
//   const ref = useRef<HTMLInputElement>(null);

//   // Debounce textul de căutare
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText);
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//     }
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto relative">
//       <form onSubmit={handleSubmit} className="flex items-center border w-full">
//         <input
//           ref={ref}
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="p-2 w-full"
//         />
//       </form>
//     </div>
//   );
// };

// export default SearchInput;
"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

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
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock?search=${
            search ? search : ""
          }`
        );
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
    <div className="w-full max-w-2xl mx-auto relative">
      <form onSubmit={handleSubmit} className="flex items-center border w-full">
        <input
          ref={ref}
          type="text"
          placeholder="Caută utilizatori..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="p-2 w-full"
        />
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
