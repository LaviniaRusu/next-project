// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { LoaderCircle } from "lucide-react";
// import GroupedDepts from "../components/GroupedDepts"; // <-- noul component

// interface Dept {
//   id: number;
//   name: string;
//   department: string;
//   title: string;
//   email: string;
//   phone: string;
//   city: string;
//   position: string; // dacă folosești și poziția în card
// }

// export default function Depti() {
//   const [depts, setDepts] = useState<Dept[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   const searchParams = useSearchParams();
//   const searchQuery = searchParams.get("search") || "";

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get<{ users: Dept[] }>(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock?search=${searchQuery}`
//         );
//         setDepts(res.data.users);
//       } catch (err: any) {
//         setError(err.message || "Eroare necunoscută");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [searchQuery]);

//   return (
//     <div className="p-4">
//       {error && <div className="text-red-500">{`Eroare: ${error}`}</div>}
//       {isLoading && <LoaderCircle className="animate-spin" />}
//       <div className="mt-4">
//         <GroupedDepts depts={depts} />
//       </div>
//     </div>
//   );
// }

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import GroupedDepts from "../components/GroupedDepts";

interface Dept {
  id: number;
  name: string;
  department: string;
  title: string;
  email: string;
  phone: string;
  city: string;
  position: string;
}

export default function Depti() {
  const [depts, setDepts] = useState<Dept[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<{ users: Dept[] }>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock?search=${searchQuery}`
        );
        setDepts(res.data.users);
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
      {error && <div className="text-red-500">{`Eroare: ${error}`}</div>}
      {isLoading && <LoaderCircle className="animate-spin" />}
      <div className="mt-4">
        <GroupedDepts />
      </div>
    </div>
  );
}
// ("use client");

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import { LoaderCircle } from "lucide-react";
// import GroupedDepts from "../components/GroupedDepts";

// interface Dept {
//   id: number;
//   name: string;
//   department: string;
//   title: string;
//   email: string;
//   phone: string;
//   city: string;
//   position: string;
// }

// export default function Depti() {
//   const [depts, setDepts] = useState<Dept[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);
//   const searchParams = useSearchParams();
//   const searchQuery = searchParams.get("search") || "";

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         const res = await axios.get<{ users: Dept[] }>(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock?search=${searchQuery}`
//         );
//         setDepts(res.data.users);
//       } catch (err: any) {
//         setError(err.message || "Eroare necunoscută");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, [searchQuery]);

//   return (
//     <div className="p-4">
//       {error && <div className="text-red-500">{`Eroare: ${error}`}</div>}
//       {isLoading && (
//         <div className="flex items-center space-x-2 text-gray-600">
//           <LoaderCircle className="animate-spin w-5 h-5" />
//           <span>Se încarcă datele...</span>
//         </div>
//       )}
//       {!isLoading && depts.length === 0 && (
//         <div className="text-gray-500 mt-4">Niciun rezultat găsit.</div>
//       )}
//       {!isLoading && depts.length > 0 && (
//         <div className="mt-4">
//           <GroupedDepts depts={depts} />
//         </div>
//       )}
//     </div>
//   );
// }
