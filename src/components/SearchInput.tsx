// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { LoaderCircle, Search } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { fetchUsers } from "@/services/fetchUsers";
// import { User } from "./DepartamentsFilter";
// import { Store } from "./SearchFilrterStores";
// import { Input } from "@/components/ui/input";
// import { Dept } from "@/app/stores/[id]/page";
// import { departments } from "@/db/departments";
// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");

//   const router = useRouter();

//   const {
//     data: suggestions,
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
//     if (debouncedSearchText.length >= 2) {
//       refetch();
//     }
//   }, [debouncedSearchText]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/user?search=${encodeURIComponent(query)}`);
//       setSearchText("");
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     setSearchText("");
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>
//       {searchText.length === 1 && (
//         <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
//       )}
//       {loading ? (
//         <div className="flex justify-center py-2">
//           <LoaderCircle className="animate-spin text-gray-500" />
//         </div>
//       ) : (
//         searchText.length >= 2 &&
//         users?.length > 0 && (
//           <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//             {users.map((user: User) => (
//               <li
//                 key={user.id}
//                 className="p-2 cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleSuggestionClick(user.name)}
//               >
//                 {user.name}
//               </li>
//             ))}
//             {departments.map((department: Dept) => (
//               <li
//                 key={`dept-${department.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleSuggestionClick(department.name)}
//               >
//                 🗂️ {department.department}
//               </li>
//             ))}
//             {stores.map((stores: Store) => (
//               <li
//                 key={`dept-${stores.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100"
//                 onClick={() => handleSuggestionClick(stores.name)}
//               >
//                 {stores.stores}
//               </li>
//             ))}
//           </ul>
//         )
//       )}

//       {!loading && error?.message && (
//         <p className="mt-2 text-red-500">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default SearchInput;

/////////////idnvuifbvauifbvui

// "use client";

//////////////////////////////////ok????
// "use client";

// import { useRouter } from "next/navigation";
// import {
//   LoaderCircle,
//   Search,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
// } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { fetchUsers } from "@/services/fetchUsers";
// import { User } from "./DepartamentsFilter";
// import { Store } from "./SearchFilrterStores";
// import { Input } from "@/components/ui/input";
// import { Dept } from "@/app/stores/[id]/page";
// import { departments } from "@/db/departments";
// import { useEffect, useState } from "react";

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");

//   const router = useRouter();

//   const {
//     data: suggestions,
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
//     if (debouncedSearchText.length >= 2) {
//       refetch();
//     }
//   }, [debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchText("");
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//     setSearchText("");
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {searchText.length === 1 && (
//         <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
//       )}

//       {loading ? (
//         <div className="flex justify-center py-2">
//           <LoaderCircle className="animate-spin text-gray-500" />
//         </div>
//       ) : (
//         debouncedSearchText.length >= 2 &&
//         Array.isArray(suggestions) &&
//         suggestions.length > 0 && (
//           <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//             {(suggestions as User[]).map((user) => (
//               <li
//                 key={`user-${user.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                 onClick={() => handleSuggestionClick(user.name)}
//               >
//                 <div className="flex items-center gap-2">
//                   <UserIcon className="w-4 h-4 text-gray-600" />
//                   <span>{user.name}</span>
//                 </div>
//                 <span className="text-sm text-gray-500">{user.position}</span>
//               </li>
//             ))}

//             {departments.map((department: Dept) => (
//               <li
//                 key={`dept-${department.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
//                 onClick={() => handleSuggestionClick(department.name)}
//               >
//                 <FolderIcon className="w-4 h-4 text-gray-600" />
//                 {department.department}
//               </li>
//             ))}

//             {(suggestions as Store[]).map((store) => (
//               <li
//                 key={`store-${store.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex items-center gap-2"
//                 onClick={() => handleSuggestionClick(store.name)}
//               >
//                 <StoreIcon className="w-4 h-4 text-gray-600" />
//                 {store.name}
//               </li>
//             ))}
//           </ul>
//         )
//       )}

//       {!loading && error?.message && (
//         <p className="mt-2 text-red-500">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default SearchInput;
// "use client";

// import { useRouter } from "next/navigation";
// import {
//   LoaderCircle,
//   Search,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
// } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { fetchUsers } from "@/services/fetchUsers";
// import { User } from "./UserCard";
// import { Store } from "./SearchFilrterStores";
// import { Input } from "@/components/ui/input";

// import { useEffect, useState } from "react";

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");

//   const router = useRouter();

//   const {
//     data: suggestions,
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
//     if (debouncedSearchText.length >= 2) {
//       refetch();
//     }
//   }, [debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchText("");
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//     setSearchText("");
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {searchText.length === 1 && (
//         <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
//       )}

//       {loading ? (
//         <div className="flex justify-center py-2">
//           <LoaderCircle className="animate-spin text-gray-500" />
//         </div>
//       ) : (
//         debouncedSearchText.length >= 2 &&
//         Array.isArray(suggestions) &&
//         suggestions.length > 0 && (
//           <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//             {(suggestions as User[]).map((user) => (
//               <li
//                 key={`user-${user.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                 onClick={() => handleSuggestionClick(user.name)}
//               >
//                 <div className="flex items-center gap-2">
//                   <UserIcon className="w-4 h-4 text-gray-600" />
//                   <span>{user.name}</span>
//                 </div>
//                 <span className="text-sm text-gray-500">{user.position}</span>
//               </li>
//             ))}
// {(suggestions as User[]).map((user) => (
//   <li
//     key={`user-${user.id}`}
//     className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//     onClick={() => handleSuggestionClick(user.name)}
//   >
//     <div className="flex items-center gap-2">
//       <FolderIcon className="w-4 h-4 text-gray-600" />
//       <span>{user.department}</span>
//     </div>
//     <span className="text-sm text-gray-500">
//       {user.departmentCoordinator}
//     </span>
//   </li>
// ))}
// {(suggestions as User[]).map((user) => (
//   <li
//     key={`user-${user.id}`}
//     className="p-2 cursor-pointer hover:bg-gray-100 flex items-center"
//     onClick={() => handleSuggestionClick(user.city)}
//   >
//     <StoreIcon className="w-4 h-4 text-gray-600" />
//     <div className="p-2">{user.city}</div>
//               </li>
//             ))}
//           </ul>
//         )
//       )}

//       {!loading && error?.message && (
//         <p className="mt-2 text-red-500">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default SearchInput;

///////ok??????????
// "use client";

// import { useRouter } from "next/navigation";
// import {
//   LoaderCircle,
//   Search,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
// } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { fetchUsers } from "@/services/fetchUsers";
// import { User } from "./UserCard";
// import { Input } from "@/components/ui/input";
// import { useEffect, useState } from "react";

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");

//   const router = useRouter();

//   const {
//     data: suggestions,
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
//     if (debouncedSearchText.length >= 2) {
//       refetch();
//     }
//   }, [debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchText("");
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//     setSearchText("");
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {searchText.length === 1 && (
//         <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
//       )}

//       {loading ? (
//         <div className="flex justify-center py-2">
//           <LoaderCircle className="animate-spin text-gray-500" />
//         </div>
//       ) : (
//         debouncedSearchText.length >= 2 &&
//         Array.isArray(suggestions) &&
//         suggestions.length > 0 && (
//           <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto rounded shadow-md divide-y divide-gray-100">
//             {(suggestions as User[])
//               .filter((item) => item.type === "user")
//               .map((user) => (
//                 <li
//                   key={`user-${user.id}`}
//                   className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                   onClick={() => handleSuggestionClick(user.name)}
//                 >
//                   <div className="flex items-center gap-2">
//                     <UserIcon className="w-4 h-4 text-gray-600" />
//                     <span>{user.name}</span>
//                   </div>
//                   <span className="text-sm text-gray-500">{user.position}</span>
//                 </li>
//               ))}
//             {(suggestions as User[]).map((user) => (
//               <li
//                 key={`user-${user.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                 onClick={() => handleSuggestionClick(user.name)}
//               >
//                 <div className="flex items-center gap-2">
//                   <FolderIcon className="w-4 h-4 text-gray-600" />
//                   <span>{user.department}</span>
//                 </div>
//                 <span className="text-sm text-gray-500">
//                   {user.departmentCoordinator}
//                 </span>
//               </li>
//             ))}
//             {(suggestions as User[]).map((user) => (
//               <li
//                 key={`user-${user.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex items-center"
//                 onClick={() => handleSuggestionClick(user.city)}
//               >
//                 <StoreIcon className="w-4 h-4 text-gray-600" />
//                 <div className="p-2">{user.city}</div>
//               </li>
//             ))}
//           </ul>
//         )
//       )}

//       {!loading && error?.message && (
//         <p className="mt-2 text-red-500">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default SearchInput;
// "use client";

// import { useRouter } from "next/navigation";
// import {
//   LoaderCircle,
//   Search,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
// } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { fetchUsers } from "@/services/fetchUsers";
// // import { User } from "./UserCard";

// import { Input } from "@/components/ui/input";

// import { useEffect, useState } from "react";

// interface Users {
//   id: number;
//   name: string;
//   position: string;
// }
// interface Departamente {
//   id: number;
//   name: string;
//   departmentCoordinator: string;
//   department: string;
// }
// interface Storee {
//   id: number;
//   name: string;
//   city: string;
// }

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");

//   const router = useRouter();

//   const {
//     data: suggestions,
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
//     if (debouncedSearchText.length >= 2) {
//       refetch();
//     }
//   }, [debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchText("");
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//     setSearchText("");
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {searchText.length === 1 && (
//         <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
//       )}

//       {loading ? (
//         <div className="flex justify-center py-2">
//           <LoaderCircle className="animate-spin text-gray-500" />
//         </div>
//       ) : (
//         debouncedSearchText.length >= 2 &&
//         Array.isArray(suggestions) &&
//         suggestions.length > 0 && (
//           <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//             {(suggestions as Users[]).map((user) => (
//               <li
//                 key={user.id}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                 onClick={() => handleSuggestionClick(user.name)}
//               >
//                 <div className="flex items-center gap-2">
//                   <UserIcon className="w-4 h-4 text-gray-600" />
//                   <span>{user.name}</span>
//                 </div>
//                 <span className="text-sm text-gray-500">{user.position}</span>
//               </li>
//             ))}
//             {(suggestions as Departamente[]).map((departament) => (
//               <li
//                 key={departament.id}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                 onClick={() => handleSuggestionClick(departament.name)}
//               >
//                 <div className="flex items-center gap-2">
//                   <FolderIcon className="w-4 h-4 text-gray-600" />
//                   <span>{departament.department}</span>
//                 </div>
//                 <span className="text-sm text-gray-500">
//                   {departament.departmentCoordinator}
//                 </span>
//               </li>
//             ))}
//             {(suggestions as Storee[]).map((store) => (
//               <li
//                 key={store.id}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex items-center"
//                 onClick={() => handleSuggestionClick(store.city)}
//               >
//                 <StoreIcon className="w-4 h-4 text-gray-600" />
//                 <div className="p-2">{store.city}</div>
//               </li>
//             ))}
//           </ul>
//         )
//       )}

//       {!loading && error?.message && (
//         <p className="mt-2 text-red-500">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default SearchInput;
///////////////////////////////////////?????????????????????
// "use client";

// import { useRouter } from "next/navigation";
// import {
//   LoaderCircle,
//   Search,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
// } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { fetchUsers } from "@/services/fetchUsers";
// import { Input } from "@/components/ui/input";
// import { useEffect, useState } from "react";

// interface User {
//   id: number;
//   name: string;
//   position: string;
//   type: "user";
// }

// interface Department {
//   id: number;
//   name: string;
//   departmentCoordinator: string;
//   department: string;
//   type: "department";
// }

// interface Store {
//   id: number;
//   name: string;
//   city: string;
//   type: "store";
// }

// function separateSuggestions(data: any[]) {
//   const users: User[] = [];
//   const departments: Department[] = [];
//   const stores: Store[] = [];

//   data.forEach((item) => {
//     if ("position" in item) users.push({ ...item, type: "user" });
//     else if ("departmentCoordinator" in item)
//       departments.push({ ...item, type: "department" });
//     else if ("city" in item) stores.push({ ...item, type: "store" });
//   });

//   return { users, departments, stores };
// }

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");

//   const router = useRouter();

//   const {
//     data: suggestions,
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
//     if (debouncedSearchText.length >= 2) {
//       refetch();
//     }
//   }, [debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchText("");
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//     setSearchText("");
//   };

//   const { users, departments, stores } = separateSuggestions(suggestions || []);

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {searchText.length === 1 && (
//         <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
//       )}

//       {loading ? (
//         <div className="flex justify-center py-2">
//           <LoaderCircle className="animate-spin text-gray-500" />
//         </div>
//       ) : (
//         debouncedSearchText.length >= 2 &&
//         (users.length > 0 || departments.length > 0 || stores.length > 0) && (
//           <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto">
//             {users.map((user) => (
//               <li
//                 key={`user-${user.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                 onClick={() => handleSuggestionClick(user.name)}
//               >
//                 <div className="flex items-center gap-2">
//                   <UserIcon className="w-4 h-4 text-gray-600" />
//                   <span>{user.name}</span>
//                 </div>
//                 <span className="text-sm text-gray-500">{user.position}</span>
//               </li>
//             ))}

//             {departments.map((dept) => (
//               <li
//                 key={`department-${dept.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                 onClick={() => handleSuggestionClick(dept.name)}
//               >
//                 <div className="flex items-center gap-2">
//                   <FolderIcon className="w-4 h-4 text-gray-600" />
//                   <span>{dept.department}</span>
//                 </div>
//                 <span className="text-sm text-gray-500">
//                   {dept.departmentCoordinator}
//                 </span>
//               </li>
//             ))}

//             {stores.map((store) => (
//               <li
//                 key={`store-${store.id}`}
//                 className="p-2 cursor-pointer hover:bg-gray-100 flex items-center"
//                 onClick={() => handleSuggestionClick(store.city)}
//               >
//                 <StoreIcon className="w-4 h-4 text-gray-600" />
//                 <div className="p-2">{store.city}</div>
//               </li>
//             ))}
//           </ul>
//         )
//       )}

//       {!loading && error?.message && (
//         <p className="mt-2 text-red-500">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default SearchInput;
///ok card
// "use client";

// import { useRouter } from "next/navigation";
// import {
//   LoaderCircle,
//   Search,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
// } from "lucide-react";
// import useFetch from "../hooks/useFetch";
// import { fetchUsers } from "@/services/fetchUsers";
// import { Input } from "@/components/ui/input";
// import { useEffect, useState } from "react";

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");

//   const router = useRouter();

// const {
//   data: suggestions,
//   loading,
//   error,
//   refetch,
// } = useFetch(() => fetchUsers(debouncedSearchText), false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText.trim());
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   useEffect(() => {
//     if (debouncedSearchText.length >= 2) {
//       refetch();
//     }
//   }, [debouncedSearchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const query = debouncedSearchText.trim();
//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//       setSearchText("");
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     router.push(`/users?search=${encodeURIComponent(name)}`);
//     setSearchText("");
//   };

//   return (
//     <div className="bg-white w-full max-w-2xl mx-auto relative">
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
//       </form>

//       {searchText.length === 1 && (
//         <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
//       )}

//       {loading ? (
//         <div className="flex justify-center py-2">
//           <LoaderCircle className="animate-spin text-gray-500" />
//         </div>
//       ) : (
//         debouncedSearchText.length >= 2 &&
//         suggestions && (
//           <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto rounded shadow-md divide-y divide-gray-100">
//             {/* Utilizatori */}
//             {suggestions.users.map((user) => (
//               <li
//                 key={`user-${user.id}`}
//                 className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                 onClick={() => handleSuggestionClick(user.name || "")}
//               >
//                 <div className="flex items-center gap-2">
//                   <UserIcon className="w-4 h-4 text-gray-600" />
//                   <span>{user.name}</span>
//                 </div>
//                 <span className="text-sm text-gray-500">{user.position}</span>
//               </li>
//             ))}

//             {/* Departamente */}
//             {suggestions.departments.map((dep) => (
//               <li
//                 key={`department-${dep.id}`}
//                 className="p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
//                 onClick={() => handleSuggestionClick(dep.department || "")}
//               >
//                 <div className="flex items-center gap-2">
//                   <FolderIcon className="w-4 h-4 text-gray-600" />
//                   <span>{dep.department}</span>
//                 </div>
//                 <span className="text-sm text-gray-500">
//                   {dep.departmentCoordinator}
//                 </span>
//               </li>
//             ))}

//             {/* Magazine */}
//             {suggestions.stores.map((store) => (
//               <li
//                 key={`store-${store.id}`}
//                 className="p-3 cursor-pointer hover:bg-gray-100 flex items-center"
//                 onClick={() => handleSuggestionClick(store.city || "")}
//               >
//                 <StoreIcon className="w-4 h-4 text-gray-600" />
//                 <div className="ml-2">{store.city}</div>
//               </li>
//             ))}
//           </ul>
//         )
//       )}

//       {!loading && error?.message && (
//         <p className="mt-2 text-red-500">{error.message}</p>
//       )}
//     </div>
//   );
// };

// export default SearchInput;

//////cod bun aduce de toate
// "use client";

// import { useRouter } from "next/navigation";
// import {
//   LoaderCircle,
//   Search,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import { fetchUsers } from "@/services/fetchUsers";
// import { Input } from "@/components/ui/input";

// interface Suggestion {
//   id: number;
//   type: "user" | "department" | "store";
//   name?: string;
//   position?: string;
//   department?: string;
//   departmentCoordinator?: string;
//   city?: string;
// }

// interface SeparatedSuggestions {
//   users: Suggestion[];
//   departments: Suggestion[];
//   stores: Suggestion[];
// }

// const SearchInput = () => {
//   const [searchText, setSearchText] = useState("");
//   const [debouncedSearchText, setDebouncedSearchText] = useState("");
//   const [suggestions, setSuggestions] = useState<SeparatedSuggestions>({
//     users: [],
//     departments: [],
//     stores: [],
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const router = useRouter();

//   // Debounce searchText input
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDebouncedSearchText(searchText.trim());
//     }, 300);
//     return () => clearTimeout(timeout);
//   }, [searchText]);

//   // Fetch suggestions when debouncedSearchText changes
//   useEffect(() => {
//     if (debouncedSearchText.length < 2) {
//       setSuggestions({ users: [], departments: [], stores: [] });
//       setError(null);
//       return;
//     }

//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const rawUsers = await fetchUsers(debouncedSearchText);

//         // Extra departamente unice din utilizatori
//         const departmentsMap = new Map<string, Suggestion>();
//         // Extra orase unice din utilizatori
//         const storesMap = new Map<string, Suggestion>();

//         rawUsers.users.forEach((user) => {
//           // Add departments from user.department if not exists
//           if (user.department && !departmentsMap.has(user.department)) {
//             departmentsMap.set(user.department, {
//               id: user.id, // or generate unique id here
//               type: "department",
//               department: user.department,
//               departmentCoordinator: "", // daca ai info, pune aici
//             });
//           }
//           // Add stores from user.city if not exists
//           if (user.city && !storesMap.has(user.city)) {
//             storesMap.set(user.city, {
//               id: user.id, // or generate unique id here
//               type: "store",
//               city: user.city,
//             });
//           }
//         });

//         setSuggestions({
//           users: rawUsers.users,
//           departments: Array.from(departmentsMap.values()),
//           stores: Array.from(storesMap.values()),
//         });
//       } catch (e) {
//         setError("Eroare la preluarea sugestiilor");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [debouncedSearchText]);

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
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
//               <span className="text-sm text-gray-500">
//                 {dep.departmentCoordinator}
//               </span>
//             </li>
//           ))}

//           {/* Stores */}
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

// import { useRouter } from "next/navigation";
// import {
//   LoaderCircle,
//   Search,
//   UserIcon,
//   FolderIcon,
//   StoreIcon,
// } from "lucide-react";
// import { useEffect, useState } from "react";
// import { fetchUsers } from "@/services/fetchUsers";
// import { Input } from "@/components/ui/input";
// import useFetch from "../hooks/useFetch"; // Asigură-te că importul e corect
// import { Suggestion, SeparatedSuggestions } from "@/Types/interfaces";
// interface Suggestion {
//   id: number;
//   type: "user" | "department" | "store";
//   name?: string;
//   position?: string;
//   department?: string;
//   departmentCoordinator?: string;
//   city?: string;
// }

// interface SeparatedSuggestions {
//   users: Suggestion[];
//   departments: Suggestion[];
//   stores: Suggestion[];
// }

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
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
//               <span className="text-sm text-gray-500">
//                 {dep.departmentCoordinator || "Fără coordonator"}
//               </span>
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
//       <form
//         onSubmit={handleSubmit}
//         className="flex items-center border w-full relative"
//       >
//         <Input
//           type="text"
//           placeholder="Caută utilizatori..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="w-full lg:max-w-[600px] h-[40px] px-4 py-2 pr-10"
//         />
//         <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
//               <span className="text-sm text-gray-500">
//                 {dep.departmentCoordinator || "Fără coordonator"}
//               </span>
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

    const rawUsers = fetchedData.users;

    const departmentsMap = new Map<string, Suggestion>();
    const storesMap = new Map<string, Suggestion>();

    rawUsers.forEach((user) => {
      if (user.department && !departmentsMap.has(user.department)) {
        departmentsMap.set(user.department, {
          id: user.id,
          type: "department",
          department: user.department,
          departmentCoordinator: user.departmentCoordinator || "",
        });
      }
      if (user.city && !storesMap.has(user.city)) {
        storesMap.set(user.city, {
          id: user.id,
          type: "store",
          city: user.city,
        });
      }
    });

    setSuggestions({
      users: rawUsers,
      departments: Array.from(departmentsMap.values()),
      stores: Array.from(storesMap.values()),
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

          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            {loading ? (
              <LoaderCircle className="w-4 h-4 animate-spin" />
            ) : searchText ? (
              <button
                type="button"
                onClick={() => {
                  setSearchText("");
                  setSuggestions({ users: [], departments: [], stores: [] });
                }}
              >
                <X className="w-4 h-4 hover:text-gray-600 transition-colors" />
              </button>
            ) : null}
          </div>
        </div>
      </form>

      {searchText.length === 1 && (
        <p className="text-sm text-gray-500 mt-2">Introdu cel puțin 2 litere</p>
      )}

      {loading && (
        <div className="flex justify-center py-2">
          <LoaderCircle className="animate-spin text-gray-500" />
        </div>
      )}

      {!loading && debouncedSearchText.length >= 2 && (
        <ul className="absolute bg-white border w-full z-10 max-h-60 overflow-y-auto rounded shadow-md divide-y divide-gray-100">
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
              <span className="text-sm text-gray-500">{user.position}</span>
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

      {!loading && error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default SearchInput;
