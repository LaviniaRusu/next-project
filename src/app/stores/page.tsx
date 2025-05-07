"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import SearchFilter from "../components/SearchFilrterStores";
import SearchFilterStores from "../components/SearchFilrterStores";
import NavBar from "../components/NavBar";

export default function Stores() {
  return (
    <div className="">
      <SearchFilterStores />
    </div>
  );
}
