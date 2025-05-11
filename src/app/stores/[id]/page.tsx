// "use client";

// import GroupedDepts from "@/components/GroupedDepts";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// interface StoreInfo {
//   id: number;
//   name: string;
//   address: string;
//   email: string;
//   phone: string;
//   fax: string;
// }

// export interface Dept {
//   id: string;
//   name: string;
//   position: string;
//   department: string;
//   phone: string;
//   email: string;
//   city: string;
// }

// const DepartmentPage = () => {
//   const { id } = useParams();
//   const [departments, setDepartments] = useState<Dept[]>([]);
//   const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDepts = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch("/api/deps");
//         const data = await res.json();

//         const storeId = Number(id);
//         if (!data.content || !data.content.deps || !data.content.storeInfo) {
//         }

//         // Filtrăm deps care au același oraș ca storeInfo.id
//         if (data.content.storeInfo.id === storeId) {
//           const filteredDepts = data.content.deps.filter(
//             (dept: Dept) =>
//               dept.city.toLowerCase() ===
//               data.content.storeInfo.name.toLowerCase()
//           );
//           setDepartments(filteredDepts);
//           setStoreInfo(data.content.storeInfo);
//         } else {
//           setError("Orașul nu a fost găsit.");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Eroare la preluarea datelor.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDepts();
//   }, [id]);

//   if (loading) return <div>Se încarcă...</div>;
//   if (error) return <div>{error}</div>;
//   if (!departments.length) return <div>Departamente nu au fost găsite.</div>;
//   if (!storeInfo) return null;

//   return (
//     <div>
//       <GroupedDepts apiresp={{ deps: departments, storeInfo }} />
//     </div>
//   );
// };

// export default DepartmentPage;
"use client";

// import GroupedDepts from "@/components/GroupedDepts";
// import useFetch from "@/hooks/useFetch";
// import { fetchStores } from "@/services/fetchStoreID";
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// interface StoreInfo {
//   id: number;
//   name: string;
//   address: string;
//   email: string;
//   phone: string;
//   fax: string;
// }

// export interface Dept {
//   id: string;
//   name: string;
//   position: string;
//   department: string;
//   phone: string;
//   email: string;
//   city: string;
// }

// const DepartmentPage = () => {
//   const { id } = useParams();
//   const [departments, setDepartments] = useState<Dept[]>([]);
//   const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);
//   // const [loading, setLoading] = useState(false);
//   // const [error, setError] = useState("");

//   const { data: department, loading, error } = useFetch<Dept[]>(fetchStores);

//   useEffect(() => {
//     const fetchDepts = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch("/api/deps");
//         const data = await res.json();

//         const storeId = Number(id);
//         if (!data.content || !data.content.deps || !data.content.storeInfo) {
//         }

//         // Filtrăm deps care au același oraș ca storeInfo.id
//         if (data.content.storeInfo.id === storeId) {
//           const filteredDepts = data.content.deps.filter(
//             (dept: Dept) =>
//               dept.city.toLowerCase() ===
//               data.content.storeInfo.name.toLowerCase()
//           );
//           setDepartments(filteredDepts);
//           setStoreInfo(data.content.storeInfo);
//         } else {
//           setError("Orașul nu a fost găsit.");
//         }
//       } catch (err) {
//         console.error(err);
//         setError("Eroare la preluarea datelor.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDepts();
//   }, [id]);

//   if (loading) return <div>Se încarcă...</div>;
//   if (error) return <div>{error}</div>;
//   if (!departments.length) return <div>Departamente nu au fost găsite.</div>;
//   if (!storeInfo) return null;

//   return (
//     <div>
//       <GroupedDepts apiresp={{ deps: departments, storeInfo }} />
//     </div>
//   );
// };

// export default DepartmentPage;
"use client";

import GroupedDepts from "@/components/GroupedDepts";
import useFetch from "@/hooks/useFetch";
import { fetchStores } from "@/services/fetchStoreID";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface StoreInfo {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  fax: string;
}

export interface Dept {
  id: string;
  name: string;
  position: string;
  department: string;
  phone: string;
  email: string;
  city: string;
}

const DepartmentPage = () => {
  const { id } = useParams();
  const storeId = Number(id);

  const [departments, setDepartments] = useState<Dept[]>([]);
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);
  const [error, setError] = useState<string>("");

  const {
    data,
    loading,
    error: fetchError,
    refetch,
  } = useFetch(() => fetchStores(storeId), false);

  useEffect(() => {
    if (storeId) {
      refetch();
    }
  }, [storeId]);

  useEffect(() => {
    if (data) {
      setDepartments(data.departments);
      setStoreInfo(data.storeInfo);
    }
  }, [data]);

  useEffect(() => {
    if (fetchError) {
      setError(fetchError.message);
    }
  }, [fetchError]);

  if (loading) return <div>Se încarcă...</div>;
  if (error) return <div>{error}</div>;
  if (!departments.length) return <div>Departamente nu au fost găsite.</div>;
  if (!storeInfo) return null;

  return (
    <div>
      <GroupedDepts apiresp={{ deps: departments, storeInfo }} />
    </div>
  );
};

export default DepartmentPage;
