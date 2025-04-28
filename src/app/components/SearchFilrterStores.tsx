"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone, Printer, Search } from "lucide-react";

interface Store {
  name: string;
  address: string;
  email: string;
  phone: string;
  fax: string;
}

interface Group {
  letters: string[];
  color: string;
  heading: string;
}

const SearchFilterStores = () => {
  const [searchText, setSearchText] = useState("");
  const [stores, setStores] = useState<Store[]>([]);
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStores = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/stores`
        );
        const data = await res.json();
        setStores(data.stores);
        setFilteredStores(data.stores);
      } catch (err) {
        console.error(err);
        setError("Eroare la încărcarea magazinelor.");
      } finally {
        setLoading(false);
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredStores(stores);
      return;
    }

    const filtered = stores.filter(
      (store) =>
        store.name.toLowerCase().includes(searchText.toLowerCase()) ||
        store.address.toLowerCase().includes(searchText.toLowerCase()) ||
        store.email.toLowerCase().includes(searchText.toLowerCase()) ||
        store.phone.toLowerCase().includes(searchText.toLowerCase()) ||
        store.fax.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredStores(filtered);
  }, [searchText, stores]);

  const groupStoresByFirstLetter = (storesToGroup: Store[]): Group[] => {
    const initialGroups: {
      [key: string]: Omit<Group, "letters"> & { letters: string[] };
    } = {
      A: { heading: "A", color: "#777", letters: [] },
      B: { heading: "B", color: "#f00", letters: [] },
      C: { heading: "C", color: "#00f", letters: [] },
      D: { heading: "D", color: "#0f0", letters: [] },
      E: { heading: "E", color: "#ff0", letters: [] },
      F: { heading: "F", color: "#f0f", letters: [] },
      G: { heading: "G", color: "#0ff", letters: [] },
      H: { heading: "H", color: "#800", letters: [] },
      I: { heading: "I", color: "#008", letters: [] },
      J: { heading: "J", color: "#800080", letters: [] },
      K: { heading: "K", color: "#808000", letters: [] },
      L: { heading: "L", color: "#808080", letters: [] },
      M: { heading: "M", color: "#0000ff", letters: [] },
      N: { heading: "N", color: "#00ff00", letters: [] },
      O: { heading: "O", color: "#ff4500", letters: [] },
      P: { heading: "P", color: "#ff6347", letters: [] },
      Q: { heading: "Q", color: "#f5f5f5", letters: [] },
      R: { heading: "R", color: "#ff1493", letters: [] },
      S: { heading: "S", color: "#32cd32", letters: [] },
      T: { heading: "T", color: "#c71585", letters: [] },
      U: { heading: "U", color: "#8a2be2", letters: [] },
      V: { heading: "V", color: "#f0e68c", letters: [] },
      W: { heading: "W", color: "#d2691e", letters: [] },
      X: { heading: "X", color: "#a52a2a", letters: [] },
      Y: { heading: "Y", color: "#b22222", letters: [] },
      Z: { heading: "Z", color: "#7fff00", letters: [] },
    };

    storesToGroup.forEach((store) => {
      const firstLetter = store.name[0]?.toUpperCase();
      if (firstLetter && initialGroups[firstLetter]) {
        initialGroups[firstLetter].letters.push(store.name);
      }
    });

    const populatedGroups: Group[] = Object.values(initialGroups).filter(
      (group) => group.letters.length > 0
    );

    const finalGroups: Group[] = [];
    let count1 = 0;

    while (count1 < populatedGroups.length) {
      let currentGroup = populatedGroups[count1];
      let combinedHeading = currentGroup.heading;
      let combinedLetters = [...currentGroup.letters];
      let count2 = count1 + 1;

      while (
        count2 < populatedGroups.length &&
        combinedLetters.length < 8 &&
        populatedGroups[count2].letters.length > 0
      ) {
        const nextGroup = populatedGroups[count2];
        if (
          nextGroup.letters.length >= 3 ||
          combinedLetters.length + nextGroup.letters.length <= 8
        ) {
          combinedHeading += nextGroup.heading;
          combinedLetters = [...combinedLetters, ...nextGroup.letters];
          count2++;
        } else {
          break;
        }
      }

      finalGroups.push({
        heading: combinedHeading,
        color: currentGroup.color,
        letters: combinedLetters,
      });

      count1 = count2;
    }

    return finalGroups;
  };

  const groupedStores = groupStoresByFirstLetter(filteredStores);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-2 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex items-center border px-3 py-2 rounded mb-4"
      >
        <input
          type="text"
          placeholder="Caută magazine..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          className="p-2 w-full outline-none"
        />
        <Search />
      </form>

      {loading && <p className="mt-2">Se încarcă...</p>}

      {!loading && error && <p className="mt-2 text-red-500">{error}</p>}

      {!loading && !error && groupedStores.length === 0 && (
        <p className="mt-2 text-gray-500">
          Nu s-au putut grupa magazinele (verificați datele).
        </p>
      )}

      {!loading &&
        !error &&
        groupedStores.map((group, index) => (
          <div key={index} className="flex mb-6">
            <div
              className="flex flex-col items-center justify-center text-white font-bold text-lg  w-10 min-h-[100px]"
              style={{ backgroundColor: group.color }}
            >
              {group.heading.split("").map((letter, idx) => (
                <span key={idx}>{letter}</span>
              ))}
            </div>

            <table className="w-full border-collapse text-sm ml-2">
              <tbody>
                {group.letters.map((storeName) => {
                  const store = stores.find((s) => s.name === storeName);
                  return (
                    store && (
                      <tr key={store.name} className="border-b border-gray-300">
                        <td className="px-4 py-2 font-medium">{store.name}</td>
                        <td className="px-4 py-2">{store.address}</td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-orange-600" />
                            {store.email}
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-orange-600" />
                            {store.phone}
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <Printer className="w-4 h-4 mr-2 text-orange-600" />
                            {store.fax}
                          </div>
                        </td>
                      </tr>
                    )
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}

      {!loading &&
        !error &&
        filteredStores.length === 0 &&
        stores.length > 0 && (
          <p className="mt-2 text-gray-500">
            Nu există magazine care să corespundă căutării.
          </p>
        )}

      {!loading && !error && stores.length === 0 && !searchText && (
        <p className="mt-2 text-gray-500">Nu există magazine disponibile.</p>
      )}
    </div>
  );
};

export default SearchFilterStores;
