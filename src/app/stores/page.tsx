"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import SearchFilter from "../components/SearchFilrterStores";
import SearchFilterStores from "../components/SearchFilrterStores";

// type Store = {
//   name: string;
//   id: number;
// };

export default function Stores() {
  // const [stores, setStores] = useState<Store[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const loadData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get<{ stores: Store[] }>(`/api/stores`);
  //       setStores(res.data.stores);
  //       console.log(res.data.stores);
  //     } catch (err: any) {
  //       setError(err.message || "Eroare necunoscută");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadData();
  // }, []);

  // if (loading) return <p>Se încarcă...</p>;
  // if (error) return <p>Eroare: {error}</p>;

  return (
    <div>
      <h1>Lista magazinelor</h1>
      <SearchFilterStores />
      {/* {stores?.length === 0 ? (
        <p>Nu există magazine de afișat.</p>
      ) : (
        <ul>
          {stores?.map((store) => (
            <li key={store.name}>{store.name}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
