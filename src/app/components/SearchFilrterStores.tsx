// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";

// interface Store {
//   id: number;
//   name: string;
// }

// const SearchFilterStores = () => {
//   const [searchText, setSearchText] = useState("");

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const ref = useRef<HTMLInputElement>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchUsers = async (search?: string) => {
//       const query = search?.trim().toLowerCase();
//       if (!query) {
//         return;
//       }

//       setLoading(true);
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/stores?search=${
//             search ? search : ""
//           }`
//         );
//         const data = await res.json();
//       } catch (err) {
//         setError("Eroare");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (query) {
//       router.push(`/users?search=${encodeURIComponent(query)}`);
//     }
//   };

//   const handleSuggestionClick = (name: string) => {
//     setSearchText(name);

//     ref.current?.focus();
//     router.push(`/stores?search=${encodeURIComponent(name)}`);
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto relative">
//       <form onSubmit={handleSubmit} className="flex items-center border w-full">
//         <input
//           ref={ref}
//           type="text"
//           placeholder="Caută magazine..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="p-2 w-full"
//         />
//         <Search className="  text-gray-400" />
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

// export default SearchFilterStores;
// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";

// interface Store {
//   name: string;
// }

// const SearchFilterStores = () => {
//   const [searchText, setSearchText] = useState("");
//   const [stores, setStores] = useState<Store[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const ref = useRef<HTMLInputElement>(null);
//   const router = useRouter();

//   // Căutăm magazinele de fiecare dată când se schimbă searchText
//   useEffect(() => {
//     const fetchStores = async (search: string) => {
//       const query = search?.trim().toLowerCase();
//       if (!query) {
//         setStores([]);
//         return;
//       }

//       setLoading(true);
//       try {
//         const res = await fetch(
//           `${
//             process.env.NEXT_PUBLIC_BASE_URL
//           }/api/stores?search=${encodeURIComponent(search)}`
//         );
//         const data = await res.json();
//         console.log("Stores:", data.stores); // Afișează datele pentru debug
//         setStores(data.stores);
//       } catch (err) {
//         console.error(err);
//         setError("Eroare");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStores(searchText); // Apelează funcția de filtrare de fiecare dată când searchText se schimbă
//   }, [searchText]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (searchText.trim()) {
//       router.push(`/stores?search=${encodeURIComponent(searchText)}`);
//     }
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto relative">
//       <form onSubmit={handleSubmit} className="flex items-center border w-full">
//         <input
//           ref={ref}
//           type="text"
//           placeholder="Caută magazine..."
//           onChange={(e) => setSearchText(e.target.value)} // Actualizează searchText pe măsură ce utilizatorul scrie
//           value={searchText}
//           className="p-2 w-full"
//         />
//         <Search className="text-gray-400 mr-2" />
//       </form>

//       {loading && <p className="mt-2">Se încarcă...</p>}

//       {!loading && stores.length > 0 && (
//         <ul className="mt-4 border rounded p-2 bg-white">
//           {stores.map((store) => (
//             <li key={store.name} className="p-2 border-b last:border-b-0">
//               {store.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       {error && <p className="mt-2 text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default SearchFilterStores;

// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { Search } from "lucide-react";

// interface Store {
//   name: string;
// }

// const SearchFilterStores = () => {
//   const [searchText, setSearchText] = useState("");
//   const [stores, setStores] = useState<Store[]>([]);
//   const [filteredStores, setFilteredStores] = useState<Store[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const ref = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     const fetchStores = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/stores`
//         );
//         const data = await res.json();
//         setStores(data.stores);
//         setFilteredStores(data.stores);
//       } catch (err) {
//         console.error(err);
//         setError("Eroare la încărcarea magazinelor.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStores();
//   }, []);

//   useEffect(() => {
//     if (!searchText.trim()) {
//       setFilteredStores(stores);
//       return;
//     }

//     const filtered = stores.filter((store) =>
//       store.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredStores(filtered);
//   }, [searchText, stores]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto relative">
//       <form onSubmit={handleSubmit} className="flex items-center border w-full">
//         <input
//           ref={ref}
//           type="text"
//           placeholder="Caută magazine..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="p-2 w-full"
//         />
//         <Search className="text-gray-400" />
//       </form>

//       {loading && <p className="mt-2">Se încarcă...</p>}

//       {!loading && filteredStores.length > 0 && (
//         <ul className="mt-4 border rounded p-2 bg-white">
//           {filteredStores.map((store) => (
//             <li key={store.name} className="p-2 border-b last:border-b-0">
//               {store.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       {error && <p className="mt-2 text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default SearchFilterStores;

// "use client";

// import React, { useEffect, useState } from "react";
// import { Search } from "lucide-react";

// interface Store {
//   name: string;
// }

// const SearchFilterStores = () => {
//   const [searchText, setSearchText] = useState("");
//   const [stores, setStores] = useState<Store[]>([]);
//   const [filteredStores, setFilteredStores] = useState<Store[]>([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchStores = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/stores`
//         );
//         const data = await res.json();
//         setStores(data.stores);
//         setFilteredStores(data.stores);
//       } catch (err) {
//         console.error(err);
//         setError("Eroare la încărcarea magazinelor.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStores();
//   }, []);

//   useEffect(() => {
//     if (!searchText.trim()) {
//       setFilteredStores(stores);
//       return;
//     }

//     const filtered = stores.filter((store) =>
//       store.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setFilteredStores(filtered);
//   }, [searchText, stores]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto relative">
//       <form onSubmit={handleSubmit} className="flex items-center border w-full">
//         <input
//           type="text"
//           placeholder="Caută magazine..."
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//           className="p-2 w-full"
//         />
//         <Search className="text-gray-400 mr-2" />
//       </form>

//       {loading && <p className="mt-2">Se încarcă...</p>}

//       {!loading && filteredStores.length > 0 && (
//         <ul>
//           {filteredStores.map((store) => (
//             <li key={store.name}>{store.name}</li>
//           ))}
//         </ul>
//       )}

//       {error && <p className="mt-2 text-red-500">{error}</p>}
//     </div>
//   );
// };

// export default SearchFilterStores;

"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone, Search } from "lucide-react";

interface Store {
  name: string;
  address: string;
  email: string;
  phone: string;
  fax: string;
}

const SearchFilterStores = () => {
  const [searchText, setSearchText] = useState("");
  const [stores, setStores] = useState<Store[]>([]);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStores = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/stores`
        );
        const data = await res.json();
        setStores(data.stores);
        setFilteredStores(data.stores);
      } catch (err) {
        console.error(err);
        setError("Eroare la încărcarea magazinelor.");
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredStores(stores);
      return;
    }

    const filtered = stores.filter((store) =>
      store.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredStores(filtered);
  }, [searchText, stores]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-center border px-3 py-2 rounded mb-4"
      >
        <input
          type="text"
          placeholder="Caută magazine..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="p-2 w-full outline-none"
        />
        <Search />
      </form>

      {loading && <p className="mt-2">Se încarcă...</p>}

      {!loading && filteredStores.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {filteredStores.map((store) => (
                <tr key={store.name} className="border-b border-gray-300">
                  <td className="px-4 py-2">{store.name}</td>
                  <td className="px-4 py-2">{store.address}</td>
                  <td className="px-4 py-2">
                    <Mail className="w-4 h-4 mr-2 text-orange-600 " />
                    {store.email}
                  </td>
                  <td className="px-4 py-2 ">
                    <Phone className="w-4 h-4 mr-2 text-orange-600 max-h-full" />
                    {store.phone}
                  </td>
                  <td className="px-4 py-2">{store.fax}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && !filteredStores.length && (
        <p className="mt-2 text-gray-500">
          Nu există magazine care să corespundă căutării.
        </p>
      )}

      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default SearchFilterStores;
