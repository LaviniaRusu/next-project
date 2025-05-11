"use client";

import React, { useEffect, useState } from "react";
import { Mail, Phone, Printer, Search } from "lucide-react";
import useFetch from "../hooks/useFetch";
import { fetchStores } from "@/services/fetchStores";

import Link from "next/link";

interface Store {
  id: number;
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

const StoreCard = ({ store }: { store: Store }) => {
  // const router = useRouter();

  // const handleClick = () => {
  //   console.log("test");
  //   router.push(`/stores/${store.id}`);
  // };

  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white w-full hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-orange-600">{store.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{store.address}</p>
      <div className="text-sm space-y-1">
        <div className="flex items-center">
          <Mail className="w-4 h-4 mr-2 text-orange-600" />
          {store.email}
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2 text-orange-600" />
          {store.phone}
        </div>
        <div className="flex items-center">
          <Printer className="w-4 h-4 mr-2 text-orange-600" />
          {store.fax}
        </div>
      </div>
      <Link href={`/stores/${store.id}`}>
        <button className="mt-4 px-4 py-2 border rounded bg-gray-100 border-gray-300 text-sm text-black hover:bg-blue-700 hover:text-white transition">
          Vezi lista de contacte
        </button>
      </Link>
    </div>
  );
};

// TODO mutat in hooks
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};
const MobileView = ({
  groupedStores,
  stores,
}: {
  groupedStores: Group[];
  stores: Store[];
}) => (
  <>
    {groupedStores.map((group, index) => (
      <div key={index} className="mb-6">
        <div
          className="flex items-center gap-2 text-white font-bold text-lg px-4 py-2 rounded-t"
          style={{ backgroundColor: group.color }}
        >
          {group.heading.split("").map((letter, idx) => (
            <span key={idx} className="px-2">
              {letter}
            </span>
          ))}
        </div>

        {/* Carduri magazin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full bg-white p-4 rounded-b">
          {group.letters.map((storeName) => {
            const store = stores.find((s) => s.name === storeName);
            return store ? <StoreCard key={store.name} store={store} /> : null;
          })}
        </div>
      </div>
    ))}
  </>
);
const TableView = ({
  groupedStores,
  stores,
}: {
  groupedStores: Group[];
  stores: Store[];
}) => (
  <>
    {groupedStores.map((group, index) => (
      <div key={index} className="flex mb-6">
        <div
          className="flex flex-col items-center justify-center text-white font-bold text-lg w-10 min-h-[100px]"
          style={{ backgroundColor: group.color }}
        >
          {group.heading.split("").map((letter, idx) => (
            <span key={idx}>{letter}</span>
          ))}
        </div>

        <table className="w-full bg-white table-fixed border-collapse text-sm ">
          <tbody>
            {group.letters.map((storeName) => {
              const store = stores.find((s) => s.name === storeName);
              return (
                store && (
                  <tr
                    key={store.name}
                    className="group border-b border-gray-300 hover:bg-gray-100 cursor-pointer transition-colors "
                  >
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
                    <td>
                      <Link href={`/stores/${store.id}`}>
                        <button className="px-4 py-2 border rounded-sm bg-gray-100  border-gray-300 text-black  group-hover:bg-blue-700 group-hover:text-white transition-colors duration-200 self-center">
                          Vezi lista de contacte
                        </button>
                      </Link>
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    ))}
  </>
);

const SearchFilterStores = () => {
  const [searchText, setSearchText] = useState("");

  const [filteredStores, setFilteredStores] = useState<Store[]>([]);

  const [showFilter, setShowFilter] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { data: stores, loading, error } = useFetch<Store[]>(fetchStores);

  useEffect(() => {
    const filtered = stores?.filter(
      (store) =>
        (store.name &&
          store.name.toLowerCase().includes(searchText.toLowerCase())) ||
        (store.address &&
          store.address.toLowerCase().includes(searchText.toLowerCase())) ||
        (store.email &&
          store.email.toLowerCase().includes(searchText.toLowerCase())) ||
        (store.phone &&
          store.phone.toLowerCase().includes(searchText.toLowerCase())) ||
        (store.fax &&
          store.fax.toLowerCase().includes(searchText.toLowerCase()))
    );
    setFilteredStores(filtered ?? []);
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
        combinedLetters.length < 12 &&
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
  //
  return (
    <div className="w-full mx-auto ">
      {/* Wrapper pentru inputul de căutare utilizatori și filtrare */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-start gap-4 mb-7 p-4">
        {/* Butonul de filtrare */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          <button
            onClick={() => setShowFilter((prev) => !prev)}
            className="bg-gray-300 hover:bg-blue-500 hover:text-white transition-colors px-4 py-2 rounded whitespace-nowrap"
          >
            Filtrează rezultatele
          </button>
        </div>
        {/* Inputul de filtrare */}
        <div className=" bg-white  lg:ml-58  mx-auto relative flex justify-center  w-full lg:w-auto">
          {showFilter && (
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center border w-full "
            >
              <input
                type="text"
                placeholder="Caută magazine..."
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="w-[600px] h-[40px] px-4 py-2 bg-white"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </form>
          )}
        </div>
      </div>

      {/* Restul componentei */}
      {loading && <p className="mt-2">Se încarcă...</p>}
      {!loading && error && (
        <p className="mt-2 text-red-500">{error.message}</p>
      )}
      {!loading && !error && groupedStores.length === 0 && (
        <p className="mt-2 text-gray-500">
          Nu s-au putut grupa magazinele (verificați datele).
        </p>
      )}
      {!loading &&
        !error &&
        stores &&
        (isDesktop ? (
          <TableView groupedStores={groupedStores} stores={stores} />
        ) : (
          <MobileView groupedStores={groupedStores} stores={stores} />
        ))}
    </div>
  );
};

export default SearchFilterStores;
