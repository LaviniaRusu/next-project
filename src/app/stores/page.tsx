"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import SearchFilter from "../components/SearchFilrterStores";
import SearchFilterStores from "../components/SearchFilrterStores";
import NavBar from "../components/NavBar";

export default function Stores() {
  // const [showFilters, setShowFilters] = useState(false);

  // const toggleFilters = () => {
  //   setShowFilters((prev) => !prev);
  // };
  return (
    <div>
      <SearchFilterStores />
    </div>
  );
  // }
  // "use client";

  // import { useState } from "react";
  // import SearchFilterStores from "../components/SearchFilrterStores";
  // import NavBar from "../components/NavBar";

  // export default function Stores() {
  //   const [showFilters, setShowFilters] = useState(false);

  //   const toggleFilters = () => {
  //     setShowFilters((prev) => !prev);
  //   };

  //   return (
  //     <div>
  //       <NavBar onToggleFilters={toggleFilters} />
  //       <SearchFilterStores showFilters={showFilters} />
  //     </div>
  //   );
}
