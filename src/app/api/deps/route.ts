
interface Dept {
  id: number | string;
  name: string;
  position: string;
  department: string;
  phone: string;
  email: string;
  city: string;
}
const depts: Dept[] = [
  {
    id: "6610",
    name: "Valentin Manciuc",
    position: "Director Magazin",
    department: "Conducere",
    phone: "0749267156",
    email: "valentinmanciuc@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "6610",
    name: "Valentin Manciuc3",
    position: "Director Magazin",
    department: "Conducere",
    phone: "0749267156",
    email: "valentinmanciuc@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "6610",
    name: "Valentin Manciuc2",
    position: "Director Magazin",
    department: "Conducere",
    phone: "0749267156",
    email: "valentinmanciuc@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "6613",
    name: "Marius Cîmpean",
    position: "Coordonator Magazin",
    department: "Conducere",
    phone: "0744294584",
    email: "coordonator66@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "6613",
    name: "Marius Cîmpean2",
    position: "Coordonator simplu",
    department: "Conducere",
    phone: "0744294584",
    email: "coordonator66@dedeman.ro",
    city: "Arad 1",
  },

  {
    id: "6613",
    name: "Marius Cîmpean2",
    position: "Coordonator simplu",
    department: "Conducere",
    phone: "0744294584",
    email: "coordonator66@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "6614",
    name: "Florina Gherghel",
    position: "Referent Resurse Umane",
    department: "Resurse Umane",
    phone: "0786081720",
    email: "resurse66@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "6647a",
    name: "Adrian Stanciu",
    position: "Reprezentant Vanzari",
    department: "Comercial",
    phone: "0741694476",
    email: "adrianstanciu@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "6647b",
    name: "Andrei Saplacan",
    position: "Reprezentant Vanzari",
    department: "Comercial",
    phone: "0740903723",
    email: "andreisaplacan@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "7305",
    name: "Cristina Dobre",
    position: "Consultant HR",
    department: "Resurse Umane",
    phone: "0736123855",
    email: "cristina.dobre.hr@gmail.com",
    city: "Arad 1",
  },
  {
    id: "1003",
    name: "Carmen Ilie",
    position: "Manager HR",
    department: "Resurse Umane",
    phone: "0723556789",
    email: "carmen.ilie.hr@gmail.com",
    city: "Arad 1",
  },
  {
    id: "8821",
    name: "Mihai Toma",
    position: "Consultant Proiecte",
    department: "Vanzari Proiecte",
    phone: "0721223344",
    email: "mihai.toma@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "8832",
    name: "Ana Popa",
    position: "Consultant Proiecte",
    department: "Vanzari Proiecte",
    phone: "0721999555",
    email: "ana.popa@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "7723",
    name: "George Petrescu",
    position: "Sef Raion",
    department: "Electrice",
    phone: "0743322112",
    email: "george.petrescu@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "7724",
    name: "Ilinca Stan",
    position: "Sef Raion",
    department: "Chimice",
    phone: "0733445566",
    email: "ilinca.stan@dedeman.ro",
    city: "Arad 1",
  },
  {
    id: "7724",
    name: "Elena Marin",
    position: "Sef Raion",
    department: "Chimice",
    phone: "0733445566",
    email: "ilinca.stan@dedeman.ro",
    city: "Arad 1",
  },
 
];

const apiresp = {
  deps: depts,
  storeInfo: {
    id: 1,
    name: "Arad 1",
    address: "Str. Independenței, nr. 5, Arad, 310005",
    email: "arad1@test.ro",
    phone: "",
    fax: "030000001",
  },
  
};

export async function GET(req: Request) {
  try {
   


    // return NextResponse.json({ users: filteredUsers });
    return new Response(JSON.stringify({ content: apiresp }));
  } catch {}
}
