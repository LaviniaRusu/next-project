// /varianta nemodificata
// "use client";
// import LogoDedeman from "@/Images/Logo_Dedeman.svg.png";
// import Image from "next/image";

// import SearchInput from "../components/SearchInput";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Home() {
//   const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
//   const router = useRouter();
//   return (
//     <div>
//       <div className="min-h-screen flex flex-col items-center justify-start pt-45 px-4">
//         <div>
//           <Image src={LogoDedeman} alt="Logo Dedeman" className="w-60 h-auto" />
//         </div>
//         <div className="w-full max-w-xl">
//           <SearchInput />
//         </div>
//         <div className="flex space-x-8">
//           <button
//             className="bg-gray-300 hover:bg-blue-800 hover:text-white transition-colors px-5 py-1 rounded whitespace-nowrap mt-6 "
//             onClick={() => setShowAdvancedSearch((prev) => !prev)}
//           >
//             Cautare avansata
//           </button>
//           <button
//             onClick={() => router.push("/stores")}
//             className="bg-gray-300 hover:bg-blue-800 hover:text-white transition-colors px-7 py-1 rounded whitespace-nowrap mt-6"
//           >
//             Lista magazine
//           </button>
//         </div>
//         {showAdvancedSearch && (
//           <div className="max-w-full">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 pt-6">
//               <select className=" bg-white  px-2 py-1 rounded">
//                 <option>Department</option>
//               </select>
//               <select className="bg-white  px-2 py-1 rounded">
//                 <option>Functie</option>
//               </select>
//               <select className="bg-white  px-2 py-1 rounded">
//                 <option>Magazin</option>
//               </select>
//               <select className="bg-white  px-2 py-1 rounded">
//                 <option>Judet</option>
//               </select>
//               <input
//                 className="bg-white  px-2 py-1 rounded"
//                 placeholder="Telefon"
//               />
//               <button className="bg-blue-800 text-white px-2 py-1 rounded">
//                 Resetează filtrele
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import LogoDedeman from "@/Images/Logo_Dedeman.svg.png";
import Image from "next/image";

import SearchInput from "../components/SearchInput";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import useFetch from "@/hooks/useFetch";
import { fetchSearch } from "@/services/fetchSearch";

export default function Home() {
  const router = useRouter();
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const [filters, setFilters] = useState({
    department: "",
    functie: "",
    magazin: "",
    judet: "",
    telefon: "",
  });

  const {
    data,

    refetch,
    reset: resetFetch,
  } = useFetch(() => fetchSearch(filters), false);

  useEffect(() => {
    refetch();
  }, [filters]);

  const updateFilter = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      department: "",
      functie: "",
      magazin: "",
      judet: "",
      telefon: "",
    });

    resetFetch();
    refetch();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-45 px-4">
      <div>
        <Image src={LogoDedeman} alt="Logo Dedeman" className="w-60 h-auto" />
      </div>

      <div className="w-full max-w-xl">
        <SearchInput />
      </div>

      <div className="flex space-x-8">
        <button
          className="bg-gray-300 hover:bg-blue-800 hover:text-white transition-colors px-5 py-1 rounded whitespace-nowrap mt-6"
          onClick={() => setShowAdvancedSearch((prev) => !prev)}
        >
          Cautare avansata
        </button>

        <button
          onClick={() => router.push("/stores")}
          className="bg-gray-300 hover:bg-blue-800 hover:text-white transition-colors px-7 py-1 rounded whitespace-nowrap mt-6"
        >
          Lista magazine
        </button>
      </div>

      {showAdvancedSearch && (
        <div className="max-w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 pt-6">
            <select
              className="bg-white px-2 py-1 rounded"
              value={filters.department}
              onChange={(e) => updateFilter("department", e.target.value)}
            >
              <option value="">Department</option>
              {data?.filters.department.map((d: string) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <select
              className="bg-white px-2 py-1 rounded"
              value={filters.functie}
              onChange={(e) => updateFilter("functie", e.target.value)}
            >
              <option value="">Functie</option>
              {data?.filters.functie.map((f: string) => (
                <option key={f}>{f}</option>
              ))}
            </select>

            <select
              className="bg-white px-2 py-1 rounded"
              value={filters.magazin}
              onChange={(e) => updateFilter("magazin", e.target.value)}
            >
              <option value="">Magazin</option>
              {data?.filters.magazin.map((m: string) => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <select
              className="bg-white px-2 py-1 rounded"
              value={filters.judet}
              onChange={(e) => updateFilter("judet", e.target.value)}
            >
              <option value="">Judet</option>
              {data?.filters.judet.map((j: string) => (
                <option key={j}>{j}</option>
              ))}
            </select>

            <input
              className="bg-white px-2 py-1 rounded"
              placeholder="Telefon"
              value={filters.telefon}
              onChange={(e) => updateFilter("telefon", e.target.value)}
            />

            <button
              className="bg-blue-800 text-white px-2 py-1 rounded"
              onClick={handleReset}
            >
              Resetează filtrele
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
