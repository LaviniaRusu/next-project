import users from "../../db/users";

export async function GET(req: Request) {
  try {
    const originalUsers = users;

    const { searchParams } = new URL(req.url);
    const searchTerm = searchParams.get("search")?.toLowerCase() || "";

    // Filter users based on search term in any field
    const filteredUsers = originalUsers.filter((user) => {
      const fieldsToSearch = [
        user.name.toLowerCase(),
        user.position.toLowerCase(),
        user.department.toLowerCase(),
        user.city.toLowerCase(),
        user.email.toLowerCase(),
        user.phone.toLowerCase(),
      ];

      return fieldsToSearch.some((field) => field.includes(searchTerm));
    });

    // Add 3-second delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    // return NextResponse.json({ users: filteredUsers });
    return new Response(JSON.stringify({ users: filteredUsers }));
  } catch {}
}
