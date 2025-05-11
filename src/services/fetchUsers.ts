// "use client";

// import { useSearchParams } from "next/navigation";

// const searchParams = useSearchParams();
// const searchQuery = searchParams.get("search") || "";
// export const fetchUsers = async () => {
//   try {
//     const res = await fetch(
//       `/api/mock?search=${searchQuery}`
//     );
//     if (!res.ok) throw new Error("Eroare la preluarea utilizatorilor");
//     const data = await res.json();

//     return data.users;
//   } catch {
//     console.log("err");
//   }
// };
"use client";

export const fetchUsers = async (searchQuery?: string) => {
  try {
    const res = await fetch(`/api/mock?search=${searchQuery}`);
    if (!res.ok) throw new Error("Eroare la preluarea utilizatorilor");
    const data = await res.json();

    return data.users;
  } catch {
    console.log("err");
  }
};
