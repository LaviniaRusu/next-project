// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { LoaderCircle } from "lucide-react"; // Loader pentru loading
// import SearchInput from "../components/SearchInput"; // Importăm SearchInput
// import UserCard from "../components/UserCard"; // Importăm UserCard

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// export default function Home() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
// // //////////////////////////
//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get<{ users: User[] }>(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock?search`
//         );
//         setUsers(res.data.users);
//       } catch (err: any) {
//         setError(err.message || "Eroare necunoscută");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   return (
//     <div className="p-4">
//       {error && <div className="text-red-500">{`Eroare: ${error}`}</div>}

//       {/* <SearchInput /> */}

//       {isLoading && <LoaderCircle className="animate-spin " />}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
//         {users.map((user) => (
//           <UserCard key={user.id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// // }

///////////////////////////////////merge cautare in
// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { LoaderCircle, Search } from "lucide-react";
// import UserCard from "../components/UserCard";
// import SearchInput from "../components/SearchInput";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// export default function Home() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   const searchParams = useSearchParams();
//   const search = searchParams.get("search") || "";

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get<{ users: User[] }>(
//           `${
//             process.env.NEXT_PUBLIC_BASE_URL
//           }/api/mock?search=${encodeURIComponent(search)}`
//         );
//         setUsers(res.data.users);
//       } catch (err: any) {
//         setError(err.message || "Eroare necunoscută");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [search]);

//   return (
//     <div className="p-4">
//       {error && <div className="text-red-500">{`Eroare: ${error}`}</div>}
// {/* <SearchInput/> */}
//       {isLoading && <LoaderCircle className="animate-spin " />}

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
//         {users.map((user) => (
//           <UserCard key={user.id} user={user} />
//         ))}
//       </div>
//     </div>
//   );

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import UserCard from "../components/UserCard";
import { LoaderCircle } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<{ users: User[] }>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock?search=${searchQuery}`
        );
        setUsers(res.data.users);
        console.log(res.data.users);
      } catch (err: any) {
        setError(err.message || "Eroare necunoscută");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [searchQuery]);

  return (
    <div className="p-4">
      <button className="bg-gray-300 hover:bg-blue-500 hover:text-white transition-colors px-4 py-2 rounded">
        Filtrează rezultatele
      </button>
      {error && <div className="text-red-500">{`Eroare: ${error}`}</div>}

      {isLoading && <LoaderCircle className="animate-spin " />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
