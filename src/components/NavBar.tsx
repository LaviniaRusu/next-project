"use client";
import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import { FileText, User } from "lucide-react";
interface Props {
  onSearch: (searchText: string) => void;
  // onToggleFilters: () => void;
}

const NavBar = ({ onSearch }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Setează la true după ce componenta este montată pe client
  }, []);

  if (!isClient) {
    return null; // Nu renderiza navbar-ul până când nu suntem pe client
  }

  return (
    <div className="w-full h-[80px] flex items-center justify-between px-4 py-2 bg-gray-100 shadow-md shadow-gray-500/50">
      <SearchInput />

      <div className="flex items-center space-x-1 sm:space-x-2">
        {" "}
        <FileText className="w-4 h-4 sm:w-6 sm:h-6 -scale-y-100 stroke-black" />
        <User className="w-4 h-4 sm:w-6 sm:h-6 stroke-black fill-black" />
      </div>
    </div>
  );
};

export default NavBar;
