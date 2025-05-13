import { stores } from "@/db/locs";
import users from "../../../db/users";
import { departments } from "@/db/departments";
// import { depts } from "../deps/route";

export async function GET(req: Request) {
  try {
    const originalUsers = [...users, ...departments, ...stores];

    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get("search")?.toLowerCase() || "";
    const filteredUsers = originalUsers.filter((user) =>
      Object.values(user).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(searchTerm)
      )
    );

    // simulate latency
    // await new Promise((resolve) => setTimeout(resolve, 300));

    return new Response(JSON.stringify({ suggestions: filteredUsers }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {}
}
