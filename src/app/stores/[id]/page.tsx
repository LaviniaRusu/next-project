// "use client";
// import GroupedDepts from "@/app/components/GroupedDepts";
// import { useEffect, useState } from "react";
// // import { Mail, Phone } from "lucide-react";
// // import { useEffect } from "react";

// interface PageProps {
//   params: {
//     id: string; // Parametrul `id` este obținut din URL
//   };
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
// // const depts: Dept[] = [
// //   {
// //     id: "6610",
// //     name: "Valentin Manciuc",
// //     position: "Director Magazin",
// //     department: "Conducere",
// //     phone: "0749267156",
// //     email: "valentinmanciuc@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "6610",
// //     name: "Valentin Manciuc3",
// //     position: "Director Magazin",
// //     department: "Conducere",
// //     phone: "0749267156",
// //     email: "valentinmanciuc@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "6610",
// //     name: "Valentin Manciuc2",
// //     position: "Director Magazin",
// //     department: "Conducere",
// //     phone: "0749267156",
// //     email: "valentinmanciuc@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "6613",
// //     name: "Marius Cîmpean",
// //     position: "Coordonator Magazin",
// //     department: "Conducere",
// //     phone: "0744294584",
// //     email: "coordonator66@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "6613",
// //     name: "Marius Cîmpean2",
// //     position: "Coordonator simplu",
// //     department: "Conducere",
// //     phone: "0744294584",
// //     email: "coordonator66@dedeman.ro",
// //     city: "Arad 1",
// //   },

// //   {
// //     id: "6613",
// //     name: "Marius Cîmpean2",
// //     position: "Coordonator simplu",
// //     department: "Conducere",
// //     phone: "0744294584",
// //     email: "coordonator66@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "6614",
// //     name: "Florina Gherghel",
// //     position: "Referent Resurse Umane",
// //     department: "Resurse Umane",
// //     phone: "0786081720",
// //     email: "resurse66@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "6647a",
// //     name: "Adrian Stanciu",
// //     position: "Reprezentant Vanzari",
// //     department: "Comercial",
// //     phone: "0741694476",
// //     email: "adrianstanciu@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "6647b",
// //     name: "Andrei Saplacan",
// //     position: "Reprezentant Vanzari",
// //     department: "Comercial",
// //     phone: "0740903723",
// //     email: "andreisaplacan@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "7305",
// //     name: "Cristina Dobre",
// //     position: "Consultant HR",
// //     department: "Resurse Umane",
// //     phone: "0736123855",
// //     email: "cristina.dobre.hr@gmail.com",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "1003",
// //     name: "Carmen Ilie",
// //     position: "Manager HR",
// //     department: "Resurse Umane",
// //     phone: "0723556789",
// //     email: "carmen.ilie.hr@gmail.com",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "8821",
// //     name: "Mihai Toma",
// //     position: "Consultant Proiecte",
// //     department: "Vanzari Proiecte",
// //     phone: "0721223344",
// //     email: "mihai.toma@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "8832",
// //     name: "Ana Popa",
// //     position: "Consultant Proiecte",
// //     department: "Vanzari Proiecte",
// //     phone: "0721999555",
// //     email: "ana.popa@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "7723",
// //     name: "George Petrescu",
// //     position: "Sef Raion",
// //     department: "Electrice",
// //     phone: "0743322112",
// //     email: "george.petrescu@dedeman.ro",
// //     city: "Arad 1",
// //   },
// //   {
// //     id: "7724",
// //     name: "Ilinca Stan",
// //     position: "Sef Raion",
// //     department: "Chimice",
// //     phone: "0733445566",
// //     email: "ilinca.stan@dedeman.ro",
// //     city: "Arad 1",
// //   },
// // ];

// const DepartmentPage = ({ params }: PageProps) => {
//   const deptId = params.id; // obține ID-ul departamentului din URL
//   const [departments, setDepartments] = useState<Dept[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   if (!deptId) {
//     return (
//       <div className="text-center mt-10 text-lg">
//         Departamentul cu ID-ul "{deptId}" nu a fost găsit.
//       </div>
//     );
//   }
//   // fetch
//   useEffect(() => {
//     const fetchDepts = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`/api/deps`);
//         const data = await res.json();
//         setDepartments(data.departments);
//       } catch (err) {
//         setError("erroare");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchDepts();
//   }, []);
//   // const apiresp = {
//   //   deps: depts,
//   //   storeInfo: {
//   //     id: 1,
//   //     name: "Arad 1",
//   //     address: "Str. Independenței, nr. 5, Arad, 310005",
//   //     email: "arad1@test.ro",
//   //     phone: "",
//   //     fax: "030000001",
//   //   },
//   // };

//   // //

//   return (
//     <div className="space-y-10">
//       <GroupedDepts apiresp={apiresp} />
//     </div>
//   );
// };

// export default DepartmentPage;
// "use client";

// import GroupedDepts from "@/app/components/GroupedDepts";
// import { useEffect, useState } from "react";

// interface PageProps {
//   params: {
//     id: string;
//   };
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

// const DepartmentPage = ({ params }: PageProps) => {
//   const deptId = params.id;
//   const [departments, setDepartments] = useState<Dept[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDepts = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch("/api/deps");
//         const data = await res.json();
//         setDepartments(data.departments || []);
//       } catch (err) {
//         setError("Eroare la preluarea datelor din API.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDepts();
//   }, []);

//   if (!deptId) {
//     return (
//       <div className="text-center mt-10 text-lg">
//         Departamentul cu ID-ul "{deptId}" nu a fost găsit.
//       </div>
//     );
//   }

//   if (loading) {
//     return <div className="text-center mt-10">Se încarcă...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-500">{error}</div>;
//   }
//   return (
//     <div className="space-y-10">
//       <GroupedDepts departments={departments} />
//     </div>
//   );
// };

// export default DepartmentPage;
// "use client";

// import GroupedDepts from "@/app/components/GroupedDepts";
// import { useEffect, useState, use } from "react";

// interface PageProps {
//   params: Promise<{
//     id: string;
//   }>;
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

// const DepartmentPage = ({ params }: PageProps) => {
//   const { id: deptId } = use(params); // ⬅️ Corect conform Next.js 15

//   const [departments, setDepartments] = useState<Dept[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDepts = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch("/api/deps");
//         const data = await res.json();
//         setDepartments(data.departments || []);
//       } catch (err) {
//         setError("Eroare la preluarea datelor din API.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDepts();
//   }, []);

//   if (!deptId) {
//     return (
//       <div className="text-center mt-10 text-lg">
//         Departamentul cu ID-ul "{deptId}" nu a fost găsit.
//       </div>
//     );
//   }

//   if (loading) {
//     return <div className="text-center mt-10">Se încarcă...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-500">{error}</div>;
//   }

//   const filteredDepartments = departments.filter((d) => d.id === deptId);

//   return (
//     <div className="space-y-10">
//       <GroupedDepts departments={filteredDepartments} />
//     </div>
//   );
// };

// export default DepartmentPage;
// "use client";

// import GroupedDepts from "@/app/components/GroupedDepts";
// import { useEffect, useState } from "react";

// interface PageProps {
//   params: {
//     id: string; // acum e numele orașului
//   };
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

// interface StoreInfo {
//   id: number;
//   name: string;
//   address: string;
//   email: string;
//   phone: string;
//   fax: string;
// }

// interface APIResponse {
//   departments: Dept[];
//   storeInfo: StoreInfo;
// }

// const DepartmentPage = ({ params }: PageProps) => {
//   const city = decodeURIComponent(params.id);
//   const [apiresp, setApiresp] = useState<APIResponse | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(`/api/deps?city=${encodeURIComponent(city)}`);
//         const data = await res.json();

//         // poți extinde storeInfo dacă e nevoie, momentan mock static:
//         const storeInfo: StoreInfo = {
//           id: 1,
//           name: city,
//           address: `Adresă pentru ${city}`,
//           email: `${city.toLowerCase().replace(/\s/g, "")}@test.ro`,
//           phone: "",
//           fax: "030000001",
//         };

//         setApiresp({
//           departments: data.departments || [],
//           storeInfo,
//         });
//       } catch (err) {
//         setError("Eroare la preluarea datelor.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [city]);

//   if (loading) return <div className="text-center mt-10">Se încarcă...</div>;
//   if (error)
//     return <div className="text-red-500 text-center mt-10">{error}</div>;
//   if (!apiresp || apiresp.departments.length === 0)
//     return (
//       <div className="text-center mt-10">
//         Nicio persoană găsită în orașul "{city}".
//       </div>
//     );

//   return (
//     <div className="space-y-10">
//       <GroupedDepts apiresp={apiresp} />
//     </div>
//   );
// };

// export default DepartmentPage;

////////////////////////////////////////////////////////////////////
"use client";

// import { useEffect, useState } from "react";
// import GroupedDepts from "@/app/components/GroupedDepts";

// interface PageProps {
//   params: {
//     id: string;
//   };
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

// const DepartmentPage = ({ params }: PageProps) => {
//   const deptId = params.id;
//   const [departments, setDepartments] = useState<Dept[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDepts = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`/api/deps`);
//         const data = await res.json();
//         console.log(data);
//         const filteredDepts = data.departments.filter(
//           (dept: Dept) => dept.id === deptId
//         );
//         setDepartments(filteredDepts);
//       } catch (err) {
//         setError("Eroare la preluarea datelor.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDepts();
//   }, [deptId]);

//   if (loading) {
//     return <div>Se încarcă...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!departments.length) {
//     return <div>Departament nu găsit.</div>;
//   }

//   return (
//     <div>
//       <GroupedDepts apiresp={{ deps: departments, storeInfo: {} }} />
//     </div>
//   );
// };

// export default DepartmentPage;
/////////////////////////////////////////////////
// //////////////////////////////////////////////////

/////////////////////////////////////////////////////last re
// import GroupedDepts from "@/app/components/GroupedDepts";
// import { useParams } from "next/navigation"; // În Next.js 13+
// import { useEffect, useState } from "react";
// interface PageProps {
//   params: {
//     id: string;
//   };
// }
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
//   const { id } = useParams(); // Utilizează hook-ul `useParams` pentru a accesa parametrii din URL

//   const [departments, setDepartments] = useState<Dept[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDepts = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`/api/deps`);
//         const data = await res.json();
//         console.log(data, "?");
//         const filteredDepts = data.content.storeInfo.id.filter(
//           (dept: Dept) => dept.id === id
//         );
//         setDepartments(filteredDepts);
//       } catch (err) {
//         setError("Eroare la preluarea datelor.");
//         console.log(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDepts();
//   }, [id]);

//   if (loading) {
//     return <div>Se încarcă...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!departments.length) {
//     return <div>Departament nu găsit.</div>;
//   }

//   return (
//     <div>
//       <GroupedDepts apiresp={{ deps: departments, storeInfo: {} }} />
//     </div>
//   );
// };

// export default DepartmentPage;

////////////////////////////////////////////////////

// "use client";

// import { useEffect, useState } from "react";
// import GroupedDepts from "@/app/components/GroupedDepts";

// interface PageProps {
//   params: {
//     id: string;
//   };
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

// const DepartmentPage = ({ params }: PageProps) => {
//   const deptId = params.id;
//   const [departments, setDepartments] = useState<Dept[]>([]);
//   const [storeInfo, setStoreInfo] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchDepts = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch(`/api/deps`);
//         const data = await res.json();

//         const city =
//           data.content.storeInfo.id == deptId
//             ? data.content.storeInfo.name
//             : "";
//         const filteredDepts = data.content.deps.filter(
//           (dept: Dept) => dept.city === city
//         );

//         setDepartments(filteredDepts);
//         setStoreInfo(data.content.storeInfo);
//       } catch (err) {
//         setError("Eroare la preluarea datelor.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDepts();
//   }, [deptId]);

//   if (loading) return <div>Se încarcă...</div>;
//   if (error) return <div>{error}</div>;
//   if (!departments.length)
//     return <div>Nicio persoană găsită pentru acest magazin.</div>;

//   return (
//     <div>
//       <GroupedDepts apiresp={{ deps: departments, storeInfo: {} }} />
//     </div>
//   );
// };

// export default DepartmentPage;

"use client";

import GroupedDepts from "@/app/components/GroupedDepts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface StoreInfo {
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
  const [departments, setDepartments] = useState<Dept[]>([]);
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDepts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/deps");
        const data = await res.json();

        const storeId = Number(id);
        if (!data.content || !data.content.deps || !data.content.storeInfo) {
        }

        // Filtrăm deps care au același oraș ca storeInfo.id
        if (data.content.storeInfo.id === storeId) {
          const filteredDepts = data.content.deps.filter(
            (dept: Dept) =>
              dept.city.toLowerCase() ===
              data.content.storeInfo.name.toLowerCase()
          );
          setDepartments(filteredDepts);
          setStoreInfo(data.content.storeInfo);
        } else {
          setError("Orașul nu a fost găsit.");
        }
      } catch (err) {
        console.error(err);
        setError("Eroare la preluarea datelor.");
      } finally {
        setLoading(false);
      }
    };

    fetchDepts();
  }, [id]);

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
