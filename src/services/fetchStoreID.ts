// "use client";
// export const fetchStores = async () => {
//   try {
//     const res = await fetch(`/api/deps`);
//     if (!res.ok) throw new Error("Orașul nu a fost găsit.");
//     const data = await res.json();

//     return data.stores;
//   } catch {
//     console.log("err");
//   }
// };

// fetchStoreID.ts
// services/fetchStoreID.ts
"use client";

import { Dept } from "../app/stores/[id]/page";

export const fetchStores = async (storeId: number) => {
  const res = await fetch(`/api/deps`);
  if (!res.ok) throw new Error("Eroare la preluarea datelor.");

  const data = await res.json();

  if (!data.content || !data.content.deps || !data.content.storeInfo) {
    throw new Error("Datele lipsesc.");
  }

  const { deps, storeInfo } = data.content;

  if (storeInfo.id !== storeId) {
    throw new Error("Orașul nu a fost găsit.");
  }

  const filteredDepts = deps.filter(
    (dept: Dept) => dept.city.toLowerCase() === storeInfo.name.toLowerCase()
  );

  return {
    departments: filteredDepts,
    storeInfo,
  };
};
