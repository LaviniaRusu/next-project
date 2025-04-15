"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import SearchInput from "./SearchInput";
import NavBar from "./NavBar";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<{ users: User[] }>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock`
        );
        console.log("result", res.data.users);
        setUsers(res.data.users);
        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Eroare necunoscută");
        setLoading(false);
        console.error("Eroare axios:", err);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {/* aici am ramas :))) */}
      {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      <NavBar />

      {error && <div>{`Eroare: ${error}`}</div>}
      {isLoading && <LoaderCircle className="tailwind animate-spin" />}
      {users.map((user) => (
        <div key={user.id} className="border border-b-neutral-600 ">
          <p>
            <strong className="border ">Nume:</strong> {user.name}
          </p>
          <p>
            <strong className="border">Email:</strong> {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}
