import { NextResponse } from "next/server";
import { search } from "@/app/data/searchData";

const matches = (value: string, filter?: string) =>
  !filter || value.toLowerCase() === filter.toLowerCase();

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // Extragem parametrii (toți opționali)
  const department = searchParams.get("department") || undefined;
  const functie = searchParams.get("functie") || undefined;
  const magazin = searchParams.get("magazin") || undefined;
  const judet = searchParams.get("judet") || undefined;
  const telefon = searchParams.get("telefon") || undefined;

  // Aplicăm filtrările
  const filtered = search.filter(
    (item) =>
      matches(item.department, department) &&
      matches(item.functie, functie) &&
      matches(item.magazin, magazin) &&
      matches(item.judet, judet) &&
      matches(item.telefon, telefon)
  );

  // Construim liste dinamice pentru dropdown-uri
  const availableDepartments = [...new Set(filtered.map((i) => i.department))];
  const availableFunctii = [...new Set(filtered.map((i) => i.functie))];
  const availableMagazine = [...new Set(filtered.map((i) => i.magazin))];
  const availableJudete = [...new Set(filtered.map((i) => i.judet))];
  const availableTelefoane = [...new Set(filtered.map((i) => i.telefon))];

  return NextResponse.json({
    count: filtered.length,
    results: filtered,
    filters: {
      department: availableDepartments,
      functie: availableFunctii,
      magazin: availableMagazine,
      judet: availableJudete,
      telefon: availableTelefoane,
    },
  });
}
