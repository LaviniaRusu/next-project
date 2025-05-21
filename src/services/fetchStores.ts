"use client";
export const fetchStores = async () => {
  try {
    const res = await fetch(`/api/stores`);
    if (!res.ok) throw new Error("Eroare la preluarea magazinelor");
    const data = await res.json();

    return data.stores;
  } catch {
    console.log("err");
  }
};
// "use client";
// export const fetchStores = async () => {
//   try {
//     const res = await fetch(`/api/mock`);
//     if (!res.ok) throw new Error("Eroare la preluarea magazinelor");
//     const data = await res.json();

//     return data.stores;
//   } catch {
//     console.log("err");
//   }
// };
