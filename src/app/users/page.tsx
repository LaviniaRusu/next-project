// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import UserCard from "../components/UserCard";
// import { LoaderCircle } from "lucide-react";

// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// export default function UsersPage() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   const searchParams = useSearchParams();
//   const searchQuery = searchParams.get("search") || "";

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get<{ users: User[] }>(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock?search=${searchQuery}`
//         );
//         setUsers(res.data.users);
//         console.log(res.data.users);
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
//       {isLoading && <LoaderCircle className="animate-spin " />}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
//         {users.map((user) => (
//           <UserCard key={user.id} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { useSearchParams } from "next/navigation";
import UserCard from "../components/UserCard";
import { LoaderCircle } from "lucide-react";
import useFetch from "../hooks/useFetch";
import { fetchUsers } from "@/services/fetchUsers";
import { useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  // const [users, setUsers] = useState<User[]>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const {
    data: users,
    loading,
    error,
    refetch,
  } = useFetch<User[]>(() => fetchUsers(searchQuery));

  // useEffect(() => {
  //   const loadData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get<{ users: User[] }>(
  //         `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock?search=${searchQuery}`
  //       );
  //       setUsers(res.data.users);
  //       console.log(res.data.users);
  //     } catch (err: any) {
  //       setError(err.message || "Eroare necunoscută");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadData();
  // }, []);
  useEffect(() => {
    refetch();
  }, [searchQuery]);

  return (
    <div className="p-4">
      {error && (
        <div className="text-red-500">{`Eroare: ${error.message}`}</div>
      )}
      {loading && <LoaderCircle className="animate-spin " />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
