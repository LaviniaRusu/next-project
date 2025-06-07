"use client";
export const fetchStore = async () => {
  try {
    const res = await fetch(`/api/deps`);
    if (!res.ok) throw new Error("Eroare la preluarea datelor");
    const data = await res.json();

    return data.deps;
  } catch {
    console.log("err");
  }
};
