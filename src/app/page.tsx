"use client";
import LogoDedeman from "@/Images/Logo_Dedeman.svg.png";
import Image from "next/image";

import SearchInput from "../components/SearchInput";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-start pt-45 px-4">
        <div>
          <Image src={LogoDedeman} alt="Logo Dedeman" className="w-60 h-auto" />
        </div>
        <div className="w-full max-w-xl">
          <SearchInput />
        </div>
        <div className="flex space-x-8">
          <button
            className="bg-gray-300 hover:bg-blue-800 hover:text-white transition-colors px-5 py-1 rounded whitespace-nowrap mt-6 "
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
            <div className="grid grid-cols-3  gap-x-8 gap-y-4 pt-6 ">
              <select className=" bg-white  px-2 py-1 rounded">
                <option>Department</option>
              </select>
              <select className="bg-white  px-2 py-1 rounded">
                <option>Functie</option>
              </select>
              <select className="bg-white  px-2 py-1 rounded">
                <option>Magazin</option>
              </select>
              <select className="bg-white  px-2 py-1 rounded">
                <option>Judet</option>
              </select>
              <input
                className="bg-white  px-2 py-1 rounded"
                placeholder="Telefon"
              />
              <button className="bg-blue-800 text-white px-2 py-1 rounded">
                Resetează filtrele
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
