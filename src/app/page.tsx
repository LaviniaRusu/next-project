"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await axios.get<{ users: User[] }>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/mock`
        );
        console.log("result", res.data.users);
        setUsers(res.data.users);
      } catch (err: any) {
        setError(err.message || "Eroare necunoscută");
        console.error("Eroare axios:", err);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      {error && <div>{`Eroare: ${error}`}</div>}
      {users.map((user) => (
        <div key={user.id}>
          <p>
            <strong>Nume:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      ))}{" "}
    </div>
  );
}
