// import { Mail, Phone } from "lucide-react";

// interface Dept {
//   id: number;
//   name: string;
//   title: string;
//   position: string;
//   department: string;
//   phone: string;
//   email: string;
//   city: string; // <- orașul magazinului
// }

// const GroupedDepts = ({ depts }: { depts: Dept[] }) => {
//   // Grupăm depts după city
//   const grouped = depts.reduce((acc, dept) => {
//     if (!acc[dept.city]) acc[dept.city] = [];
//     acc[dept.city].push(dept);
//     return acc;
//   }, {} as Record<string, Dept[]>);

//   return (
//     <div className="space-y-6">
//       {Object.entries(grouped).map(([city, cityDepts]) => (
//         <div key={city}>
//           <h2 className="text-xl font-bold text-orange-700 mb-2">{city}</h2>
//           <div className="space-y-2">
//             {cityDepts.map((dept) => (
//               <div
//                 key={dept.id}
//                 className="bg-white px-4 py-2 border-b border-gray-200 text-sm"
//               >
//                 <div className="grid grid-cols-7 gap-2 items-center">
//                   <div className="text-gray-800 font-medium truncate">
//                     {dept.department}
//                   </div>
//                   <div className="text-gray-800 font-medium truncate">
//                     {dept.position}
//                   </div>
//                   <div className="text-gray-700 truncate">{dept.title}</div>
//                   <div className="text-gray-900 font-semibold truncate">
//                     {dept.name}
//                   </div>
//                   <div className="text-gray-900 font-semibold truncate">
//                     {dept.id}
//                   </div>
//                   <div className="flex items-center text-gray-700 truncate">
//                     <Phone className="w-4 h-4 mr-1 text-orange-600" />
//                     <span>{dept.phone}</span>
//                   </div>
//                   <div className="flex items-center text-gray-700 truncate">
//                     <Mail className="w-4 h-4 mr-1 text-orange-600" />
//                     <span className="truncate">{dept.email}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GroupedDepts;

// import { Mail, Phone } from "lucide-react";

// interface Dept {
//   id: number;
//   name: string;
//   title: string;
//   position: string;
//   department: string;
//   phone: string;
//   email: string;
//   city: string;
// }

// const GroupedDepts = ({ depts }: { depts: Dept[] }) => {
//   const grouped = depts.reduce((acc, dept) => {
//     if (!acc[dept.city]) acc[dept.city] = [];
//     acc[dept.city].push(dept);
//     return acc;
//   }, {} as Record<string, Dept[]>);

//   return (
//     <div className="space-y-8">
//       {Object.entries(grouped).map(([city, cityDepts]) => (
//         <div key={city}>
//           <div className="text-lg font-bold text-orange-700 border-b pb-1 mb-2">
//             {city}
//           </div>

//           <div className="bg-gray-100 text-xs font-semibold text-gray-600 grid grid-cols-7 gap-2 px-4 py-2 rounded">
//             <div>Departament</div>
//             <div>Funcția</div>
//             <div>Titlu</div>
//             <div>Nume</div>
//             <div>ID</div>
//             <div>Telefon</div>
//             <div>Email</div>
//           </div>

//           {cityDepts.map((dept) => (
//             <div
//               key={dept.id}
//               className="bg-white px-4 py-2 border-b border-gray-200 text-sm"
//             >
//               <div className="grid grid-cols-7 gap-2 items-center">
//                 <div className="text-gray-800 font-medium truncate">
//                   {dept.department}
//                 </div>
//                 <div className="text-gray-800 font-medium truncate">
//                   {dept.position}
//                 </div>
//                 <div className="text-gray-700 truncate">{dept.title}</div>
//                 <div className="text-gray-900 font-semibold truncate">
//                   {dept.name}
//                 </div>
//                 <div className="text-gray-900 font-semibold truncate">
//                   {dept.id}
//                 </div>
//                 <div className="flex items-center text-gray-700 truncate">
//                   <Phone className="w-4 h-4 mr-1 text-orange-600" />
//                   <span>{dept.phone}</span>
//                 </div>
//                 <div className="flex items-center text-gray-700 truncate">
//                   <Mail className="w-4 h-4 mr-1 text-orange-600" />
//                   <span className="truncate">{dept.email}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GroupedDepts;
// import { Mail, Phone } from "lucide-react";

// interface Dept {
//   id: number;
//   name: string;
//   position: string;
//   department: string;
//   phone: string;
//   email: string;
//   city: string;
// }

// const GroupedDepts = ({ depts }: { depts: Dept[] }) => {
//   const groupedByCity = depts.reduce((acc, dept) => {
//     if (!acc[dept.city]) acc[dept.city] = [];
//     acc[dept.city].push(dept);
//     return acc;
//   }, {} as Record<string, Dept[]>);

//   return (
//     <div className="space-y-10">
//       {Object.entries(groupedByCity).map(([city, cityDepts]) => {
//         // Grupăm după department
//         const groupedByDepartment = cityDepts.reduce((acc, dept) => {
//           if (!acc[dept.department]) acc[dept.department] = [];
//           acc[dept.department].push(dept);
//           return acc;
//         }, {} as Record<string, Dept[]>);

//         return (
//           <div key={city} className="bg-[#e4e8ed] p-4 rounded-lg shadow">
//             <h2 className="text-2xl font-bold text-orange-700 mb-4">{city}</h2>

//             <div className="bg-white text-sm font-semibold text-gray-700 grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 rounded">
//               <div>Departament</div>
//               <div>Funcția</div>
//               <div>Nume</div>
//               <div>ID</div>
//               <div>Telefon</div>
//               <div>Email</div>
//             </div>

//             {Object.entries(groupedByDepartment).map(([department, people]) =>
//               people.map((person, idx) => (
//                 <div
//                   key={person.id}
//                   className="grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 text-sm items-start text-gray-800"
//                 >
//                   <div className={`${idx !== 0 ? "invisible" : "font-medium"}`}>
//                     {idx === 0 ? department : ""}
//                   </div>
//                   <div>{person.position}</div>
//                   <div className="font-semibold">{person.name}</div>
//                   <div>{person.id}</div>
//                   <div className="flex items-center">
//                     <Phone className="w-4 h-4 mr-1 text-orange-600" />
//                     {person.phone}
//                   </div>
//                   <div className="flex items-center">
//                     <Mail className="w-4 h-4 mr-1 text-orange-600" />
//                     {person.email}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// // export default GroupedDepts;
// import { Mail, Phone } from "lucide-react";

// interface Dept {
//   id: string;
//   name: string;
//   position: string;
//   department: string;
//   phone: string;
//   email: string;
//   city: string;
// }

// const depts: Dept[] = [
//   {
//     id: "6610",
//     name: "Valentin Manciuc",
//     position: "Director Magazin",
//     department: "Conducere",
//     phone: "0749267156",
//     email: "valentinmanciuc@dedeman.ro",
//     city: "Alba Iulia",
//   },
//   {
//     id: "6613",
//     name: "Marius Cîmpean",
//     position: "Coordonator Magazin",
//     department: "Conducere",
//     phone: "0744294584",
//     email: "coordonator66@dedeman.ro",
//     city: "Alba Iulia",
//   },
//   {
//     id: "6614",
//     name: "Florina Gherghel",
//     position: "Referent Resurse Umane",
//     department: "Resurse Umane",
//     phone: "0786081720",
//     email: "resurse66@dedeman.ro",
//     city: "Alba Iulia",
//   },
//   {
//     id: "6647",
//     name: "Adrian Stanciu",
//     position: "Reprezentant Vanzari",
//     department: "Comercial",
//     phone: "0741694476",
//     email: "adrianstanciu@dedeman.ro",
//     city: "Alba Iulia",
//   },
//   {
//     id: "6647",
//     name: "Andrei Saplacan",
//     position: "Reprezentant Vanzari",
//     department: "Comercial",
//     phone: "0740903723",
//     email: "andreisaplacan@dedeman.ro",
//     city: "Alba Iulia",
//   },
//   {
//     id: "7305",
//     name: "Cristina Dobre",
//     position: "Consultant HR",
//     department: "Resurse Umane",
//     phone: "0736123855",
//     email: "cristina.dobre.hr@gmail.com",
//     city: "Bucuresti",
//   },
//   {
//     id: "1003",
//     name: "Carmen Ilie",
//     position: "Manager HR",
//     department: "Resurse Umane",
//     phone: "0723556789",
//     email: "carmen.ilie.hr@gmail.com",
//     city: "Bucuresti",
//   },
//   {
//     id: "8821",
//     name: "Mihai Toma",
//     position: "Consultant Proiecte",
//     department: "Vanzari Proiecte",
//     phone: "0721223344",
//     email: "mihai.toma@dedeman.ro",
//     city: "Iasi",
//   },
//   {
//     id: "8832",
//     name: "Ana Popa",
//     position: "Consultant Proiecte",
//     department: "Vanzari Proiecte",
//     phone: "0721999555",
//     email: "ana.popa@dedeman.ro",
//     city: "Iasi",
//   },
//   {
//     id: "7723",
//     name: "George Petrescu",
//     position: "Sef Raion",
//     department: "Electrice",
//     phone: "0743322112",
//     email: "george.petrescu@dedeman.ro",
//     city: "Cluj-Napoca",
//   },
//   {
//     id: "7724",
//     name: "Ilinca Stan",
//     position: "Sef Raion",
//     department: "Chimice",
//     phone: "0733445566",
//     email: "ilinca.stan@dedeman.ro",
//     city: "Cluj-Napoca",
//   },
// ];

// const GroupedDepts = ({ depts }: { depts: Dept[] }) => {
//   const groupedByCity = depts.reduce((acc, dept) => {
//     if (!acc[dept.city]) acc[dept.city] = [];
//     acc[dept.city].push(dept);
//     return acc;
//   }, {} as Record<string, Dept[]>);

//   return (
//     <div className="space-y-10">
//       {Object.entries(groupedByCity).map(([city, cityDepts]) => {
//         const groupedByDepartment = cityDepts.reduce((acc, dept) => {
//           if (!acc[dept.department]) acc[dept.department] = [];
//           acc[dept.department].push(dept);
//           return acc;
//         }, {} as Record<string, Dept[]>);

//         return (
//           <div key={city} className="bg-[#e4e8ed] p-4 rounded-lg shadow">
//             <h2 className="text-2xl font-bold text-orange-700 mb-4">{city}</h2>

//             <div className="bg-white text-sm font-semibold text-gray-700 grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 rounded">
//               <div>Departament</div>
//               <div>Funcția</div>
//               <div>Nume</div>
//               <div>ID</div>
//               <div>Telefon</div>
//               <div>Email</div>
//             </div>

//             {Object.entries(groupedByDepartment).map(([department, people]) =>
//               people.map((person, idx) => (
//                 <div
//                   key={`${person.id}-${idx}`}
//                   className={`grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 text-sm items-start text-gray-800 ${
//                     idx !== 0 ? "border-t border-gray-300" : ""
//                   }`}
//                 >
//                   <div className={`${idx !== 0 ? "invisible" : "font-medium"}`}>
//                     {idx === 0 ? department : ""}
//                   </div>
//                   <div>{person.position}</div>
//                   <div className="font-semibold">{person.name}</div>
//                   <div>{person.id}</div>
//                   <div className="flex items-center">
//                     <Phone className="w-4 h-4 mr-1 text-orange-600" />
//                     {person.phone}
//                   </div>
//                   <div className="flex items-center">
//                     <Mail className="w-4 h-4 mr-1 text-orange-600" />
//                     {person.email}
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default GroupedDepts;

import { Mail, Phone } from "lucide-react";

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
    city: "Alba Iulia",
  },
  {
    id: "6613",
    name: "Marius Cîmpean",
    position: "Coordonator Magazin",
    department: "Conducere",
    phone: "0744294584",
    email: "coordonator66@dedeman.ro",
    city: "Alba Iulia",
  },
  {
    id: "6614",
    name: "Florina Gherghel",
    position: "Referent Resurse Umane",
    department: "Resurse Umane",
    phone: "0786081720",
    email: "resurse66@dedeman.ro",
    city: "Alba Iulia",
  },
  {
    id: "6647a",
    name: "Adrian Stanciu",
    position: "Reprezentant Vanzari",
    department: "Comercial",
    phone: "0741694476",
    email: "adrianstanciu@dedeman.ro",
    city: "Alba Iulia",
  },
  {
    id: "6647b",
    name: "Andrei Saplacan",
    position: "Reprezentant Vanzari",
    department: "Comercial",
    phone: "0740903723",
    email: "andreisaplacan@dedeman.ro",
    city: "Alba Iulia",
  },
  {
    id: "7305",
    name: "Cristina Dobre",
    position: "Consultant HR",
    department: "Resurse Umane",
    phone: "0736123855",
    email: "cristina.dobre.hr@gmail.com",
    city: "Bucuresti",
  },
  {
    id: "1003",
    name: "Carmen Ilie",
    position: "Manager HR",
    department: "Resurse Umane",
    phone: "0723556789",
    email: "carmen.ilie.hr@gmail.com",
    city: "Bucuresti",
  },
  {
    id: "8821",
    name: "Mihai Toma",
    position: "Consultant Proiecte",
    department: "Vanzari Proiecte",
    phone: "0721223344",
    email: "mihai.toma@dedeman.ro",
    city: "Iasi",
  },
  {
    id: "8832",
    name: "Ana Popa",
    position: "Consultant Proiecte",
    department: "Vanzari Proiecte",
    phone: "0721999555",
    email: "ana.popa@dedeman.ro",
    city: "Iasi",
  },
  {
    id: "7723",
    name: "George Petrescu",
    position: "Sef Raion",
    department: "Electrice",
    phone: "0743322112",
    email: "george.petrescu@dedeman.ro",
    city: "Cluj-Napoca",
  },
  {
    id: "7724",
    name: "Ilinca Stan",
    position: "Sef Raion",
    department: "Chimice",
    phone: "0733445566",
    email: "ilinca.stan@dedeman.ro",
    city: "Cluj-Napoca",
  },
];

const GroupedDepts = () => {
  const groupedByCity = depts.reduce((acc, dept) => {
    if (!acc[dept.city]) acc[dept.city] = [];
    acc[dept.city].push(dept);
    return acc;
  }, {} as Record<string, Dept[]>);

  return (
    <div className="space-y-10">
      {Object.entries(groupedByCity).map(([city, cityDepts]) => {
        const groupedByDepartment = cityDepts.reduce((acc, dept) => {
          if (!acc[dept.department]) acc[dept.department] = [];
          acc[dept.department].push(dept);
          return acc;
        }, {} as Record<string, Dept[]>);

        return (
          <div key={city} className="bg-[#e4e8ed] p-4 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-orange-700 mb-4">{city}</h2>

            <div className="bg-white text-sm font-semibold text-gray-700 grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 rounded">
              <div>Departament</div>
              <div>Funcția</div>
              <div>Nume</div>
              <div>ID</div>
              <div>Telefon</div>
              <div>Email</div>
            </div>

            {Object.entries(groupedByDepartment).map(([department, people]) =>
              people.map((person, idx) => (
                <div
                  key={`${person.id}-${idx}`}
                  className="grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 text-sm items-start text-gray-800"
                >
                  <div
                    className={`${
                      idx !== 0 ? "text-transparent" : "font-medium"
                    }`}
                  >
                    {department}
                  </div>
                  <div className={`${idx !== 0 ? "text-transparent" : ""}`}>
                    {person.position}
                  </div>
                  <div className="font-semibold">{person.name}</div>
                  <div>{person.id}</div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-1 text-orange-600" />
                    {person.phone}
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1 text-orange-600" />
                    {person.email}
                  </div>
                </div>
              ))
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GroupedDepts;
