// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Input } from "@/components/ui/input";
// import {
//   Search,
//   LoaderCircle,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
//   X,
// } from "lucide-react";
// import useFetch from "@/hooks/useFetch";
// import { fetchUsers } from "../services/fetchUsers";
// import { SeparatedSuggestions, Suggestion } from "../Types/interfaces";

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");
//   const [suggestions, setSuggestions] = useState<SeparatedSuggestions>({
//     users: [],
//     departments: [],
//     stores: [],
//   });

//   const {
//     data: fetchedData,
//     loading,
//     error,
//     refetch,
//   } = useFetch(() => fetchUsers(debouncedSearchText), false);

//   const router = useRouter();

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText.trim());
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   useEffect(() => {
//     if (debouncedSearchText.length >= 2) {
//       refetch();
//     } else {
//       setSuggestions({ users: [], departments: [], stores: [] });
//     }
//   }, [debouncedSearchText]);

//   useEffect(() => {
//     if (!fetchedData || debouncedSearchText.length < 2) return;

//     const rawUsers = fetchedData.users;

//     const departmentsMap = new Map<string, Suggestion>();
//     const storesMap = new Map<string, Suggestion>();

//     rawUsers.forEach((user) => {
//       if (user.department && !departmentsMap.has(user.department)) {
//         departmentsMap.set(user.department, {
//           id: user.id,
//           type: "department",
//           department: user.department,
//           departmentCoordinator: user.departmentCoordinator || "",
//         });
//       }
//       if (user.city && !storesMap.has(user.city)) {
//         storesMap.set(user.city, {
//           id: user.id,
//           type: "store",
//           city: user.city,
//         });
//       }
//     });

//     setSuggestions({
//       users: rawUsers,
//       departments: Array.from(departmentsMap.values()),
//       stores: Array.from(storesMap.values()),
//     });
//   }, [fetchedData, debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchText("");
//       setSuggestions({ users: [], departments: [], stores: [] });
//     }
//   };

//   const handleSuggestionClick = (value: string) => {
//     router.push(`/users?search=${encodeURIComponent(value)}`);
//     setSearchText("");
//     setSuggestions({ users: [], departments: [], stores: [] });
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form onSubmit={handleSubmit} className="w-full relative">
//         <div className="relative w-full">
//           <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//             <Search className="w-4 h-4" />
//           </div>

//           <Input
//             type="text"
//             placeholder="Caută utilizatori..."
//             onChange={(e) => setSearchText(e.target.value)}
//             value={searchText}
//             className="w-full h-[40px] pl-10 pr-10"
//           />

//           <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//             {loading ? (
//               <LoaderCircle className="w-4 h-4 animate-spin" />
//             ) : searchText ? (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchText("");
//                   setSuggestions({ users: [], departments: [], stores: [] });
//                 }}
//               >
//                 <X className="w-4 h-4 hover:text-gray-600 transition-colors" />
//               </button>
//             ) : null}
//           </div>
//         </div>
//       </form>

//       {searchText.length === 1 && (
//         <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
//       )}

//       {loading && (
//         <div className="flex justify-center py-2">
//           <LoaderCircle className="animate-spin text-gray-500" />
//         </div>
//       )}

//       {!loading && debouncedSearchText.length >= 2 && (
//         <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto rounded shadow-md divide-y divide-gray-100">
//           {suggestions.users.map((user) => (
//             <li
//               key={`user-${user.id}`}
//               className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//               onClick={() => handleSuggestionClick(user.name || "")}
//             >
//               <div className="flex items-center gap-2">
//                 <UserIcon className="w-4 h-4 text-gray-600" />
//                 <span>{user.name}</span>
//               </div>
//               <span className="text-sm text-gray-500">{user.position}</span>
//             </li>
//           ))}

//           {suggestions.departments.map((dep) => (
//             <li
//               key={`department-${dep.department}`}
//               className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//               onClick={() => handleSuggestionClick(dep.department || "")}
//             >
//               <div className="flex items-center gap-2">
//                 <FolderIcon className="w-4 h-4 text-gray-600" />
//                 <span>{dep.department}</span>
//               </div>
//             </li>
//           ))}

//           {suggestions.stores.map((store) => (
//             <li
//               key={`store-${store.city}`}
//               className="p-3 cursor-pointer hover:bg-gray-100 flex items-center"
//               onClick={() => handleSuggestionClick(store.city || "")}
//             >
//               <StoreIcon className="w-4 h-4 text-gray-600" />
//               <div className="ml-2">{store.city}</div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {!loading && error && <p className="mt-2 text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default SearchInput;

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Input } from "@/components/ui/input";
// import {
//   Search,
//   LoaderCircle,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
//   X,
// } from "lucide-react";
// import useFetch from "@/hooks/useFetch";
// import { fetchUsers } from "../services/fetchUsers";
// import { SeparatedSuggestions, Suggestion } from "../Types/interfaces";

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");
//   const [suggestions, setSuggestions] = useState<SeparatedSuggestions>({
//     users: [],
//     departments: [],
//     stores: [],
//   });

//   const {
//     data: fetchedData,
//     loading,
//     error,
//     refetch,
//   } = useFetch(() => fetchUsers(debouncedSearchText), false);

//   const router = useRouter();

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText.trim());
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   useEffect(() => {
//     if (debouncedSearchText.length >= 2) {
//       refetch();
//     } else {
//       setSuggestions({ users: [], departments: [], stores: [] });
//     }
//   }, [debouncedSearchText]);

//   useEffect(() => {
//     if (!fetchedData || debouncedSearchText.length < 2) return;

//     const users = fetchedData.users;
//     const departments: Suggestion[] = [];
//     const stores: Suggestion[] = [];

//     const seenDepartments: { [key: string]: boolean } = {};
//     const seenCities: { [key: string]: boolean } = {};

//     for (let i = 0; i < users.length; i++) {
//       const user = users[i];

//       if (user.department && !seenDepartments[user.department]) {
//         seenDepartments[user.department] = true;
//         departments.push({
//           id: user.id,
//           type: "department",
//           department: user.department,
//           departmentCoordinator: user.departmentCoordinator || "",
//         });
//       }

//       if (user.city && !seenCities[user.city]) {
//         seenCities[user.city] = true;
//         stores.push({
//           id: user.id,
//           type: "store",
//           city: user.city,
//         });
//       }
//     }

//     setSuggestions({
//       users,
//       departments,
//       stores,
//     });
//   }, [fetchedData, debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchText("");
//       setSuggestions({ users: [], departments: [], stores: [] });
//     }
//   };

//   const handleSuggestionClick = (value: string) => {
//     router.push(`/users?search=${encodeURIComponent(value)}`);
//     setSearchText("");
//     setSuggestions({ users: [], departments: [], stores: [] });
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form onSubmit={handleSubmit} className="w-full relative">
//         <div className="relative w-full">
//           <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//             <Search className="w-4 h-4" />
//           </div>

//           <Input
//             type="text"
//             placeholder="Caută utilizatori..."
//             onChange={(e) => setSearchText(e.target.value)}
//             value={searchText}
//             className="w-full h-[40px] pl-10 pr-10"
//           />

//           <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
//             {loading ? (
//               <LoaderCircle className="w-4 h-4 spin-slow" />
//             ) : searchText ? (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setSearchText("");
//                   setSuggestions({ users: [], departments: [], stores: [] });
//                 }}
//               >
//                 <X className="w-4 h-4 hover:text-gray-600 transition-colors" />
//               </button>
//             ) : null}
//           </div>
//         </div>
//       </form>

//       {searchText.length === 1 && (
//         <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
//       )}

//       {loading && (
//         <div className="flex justify-center py-2">
//           <LoaderCircle className="animate-spin text-gray-500" />
//         </div>
//       )}

//       {!loading && debouncedSearchText.length >= 2 && (
//         <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto rounded shadow-md divide-y divide-gray-100">
//           {suggestions.users.map((user) => (
//             <li
//               key={`user-${user.id}`}
//               className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//               onClick={() => handleSuggestionClick(user.name || "")}
//             >
//               <div className="flex items-center gap-2">
//                 <UserIcon className="w-4 h-4 text-gray-600" />
//                 <span>{user.name}</span>
//               </div>
//               <span className="text-sm text-gray-500">{user.position}</span>
//             </li>
//           ))}

//           {suggestions.departments.map((dep) => (
//             <li
//               key={`department-${dep.department}`}
//               className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//               onClick={() => handleSuggestionClick(dep.department || "")}
//             >
//               <div className="flex items-center gap-2">
//                 <FolderIcon className="w-4 h-4 text-gray-600" />
//                 <span>{dep.department}</span>
//               </div>
//             </li>
//           ))}

//           {suggestions.stores.map((store) => (
//             <li
//               key={`store-${store.city}`}
//               className="p-3 cursor-pointer hover:bg-gray-100 flex items-center"
//               onClick={() => handleSuggestionClick(store.city || "")}
//             >
//               <StoreIcon className="w-4 h-4 text-gray-600" />
//               <div className="ml-2">{store.city}</div>
//             </li>
//           ))}
//         </ul>
//       )}

//       {!loading && error && (
//         <p className="mt-2 text-red-500">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default SearchInput;

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Search,
  LoaderCircle,
  UserIcon,
  FolderIcon,
  StoreIcon,
  X,
} from "lucide-react";
import useFetch from "@/hooks/useFetch";
import { fetchUsers } from "../services/fetchUsers";
import { SeparatedSuggestions, Suggestion } from "../Types/interfaces";

const SearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<SeparatedSuggestions>({
    users: [],
    departments: [],
    stores: [],
  });

  const {
    data: fetchedData,
    loading,
    error,
    refetch,
  } = useFetch(() => fetchUsers(debouncedSearchText), false);

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchText(searchText.trim());
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearchText.length >= 2) {
      refetch();
    } else {
      setSuggestions({ users: [], departments: [], stores: [] });
    }
  }, [debouncedSearchText]);

  useEffect(() => {
    if (!fetchedData || debouncedSearchText.length < 2) return;

    const users = fetchedData.users;
    const departments: Suggestion[] = [];
    const stores: Suggestion[] = [];

    const seenDepartments: { [key: string]: boolean } = {};
    const seenCities: { [key: string]: boolean } = {};

    for (let i = 0; i < users.length; i++) {
      const user = users[i];

      if (user.department && !seenDepartments[user.department]) {
        seenDepartments[user.department] = true;
        departments.push({
          id: user.id,
          type: "department",
          department: user.department,
          departmentCoordinator: user.departmentCoordinator || "",
        });
      }

      if (user.city && !seenCities[user.city]) {
        seenCities[user.city] = true;
        stores.push({
          id: user.id,
          type: "store",
          city: user.city,
        });
      }
    }

    setSuggestions({
      users,
      departments,
      stores,
    });
  }, [fetchedData, debouncedSearchText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = debouncedSearchText.trim();
    if (query) {
      router.push(`/users?search=${encodeURIComponent(query)}`);
      setSearchText("");
      setSuggestions({ users: [], departments: [], stores: [] });
    }
  };

  const handleSuggestionClick = (value: string) => {
    router.push(`/users?search=${encodeURIComponent(value)}`);
    setSearchText("");
    setSuggestions({ users: [], departments: [], stores: [] });
  };

  return (
    <div className="bg-white w-full max-w-2xl mx-auto relative">
      <form onSubmit={handleSubmit} className="w-full relative">
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-4 h-4" />
          </div>

          <Input
            type="text"
            placeholder="Caută utilizatori..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            className="w-full h-[40px] pl-10 pr-10"
          />

          {searchText && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <button
                type="button"
                onClick={() => {
                  setSearchText("");
                  setSuggestions({ users: [], departments: [], stores: [] });
                }}
              >
                <X className="w-4 h-4 hover:text-gray-600 transition-colors" />
              </button>
            </div>
          )}
        </div>
      </form>

      {(searchText.length === 1 ||
        loading ||
        debouncedSearchText.length >= 2) && (
        <div className="absolute w-full z-10 bg-white border border-gray-200 rounded shadow-md max-h-60 overflow-y-auto mt-1">
          {searchText.length === 1 && !loading && (
            <div className="p-3 text-center text-sm text-gray-500">
              Introdu cel puțin 2 litere
            </div>
          )}

          {loading && (
            <div className="p-3 flex justify-center items-center text-gray-500">
              <LoaderCircle className="w-5 h-5 animate-spin" />
            </div>
          )}

          {!loading &&
            debouncedSearchText.length >= 2 &&
            (suggestions.users.length ||
              suggestions.departments.length ||
              suggestions.stores.length) > 0 && (
              <ul className="divide-y divide-gray-100">
                {suggestions.users.map((user) => (
                  <li
                    key={`user-${user.id}`}
                    className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                    onClick={() => handleSuggestionClick(user.name || "")}
                  >
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4 text-gray-600" />
                      <span>{user.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {user.position}
                    </span>
                  </li>
                ))}

                {suggestions.departments.map((dep) => (
                  <li
                    key={`department-${dep.department}`}
                    className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                    onClick={() => handleSuggestionClick(dep.department || "")}
                  >
                    <div className="flex items-center gap-2">
                      <FolderIcon className="w-4 h-4 text-gray-600" />
                      <span>{dep.department}</span>
                    </div>
                  </li>
                ))}

                {suggestions.stores.map((store) => (
                  <li
                    key={`store-${store.city}`}
                    className="p-3 cursor-pointer hover:bg-gray-100 flex items-center"
                    onClick={() => handleSuggestionClick(store.city || "")}
                  >
                    <StoreIcon className="w-4 h-4 text-gray-600" />
                    <div className="ml-2">{store.city}</div>
                  </li>
                ))}
              </ul>
            )}
        </div>
      )}

      {!loading && error && (
        <p className="mt-2 text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default SearchInput;
