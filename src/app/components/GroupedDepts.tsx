// import { Mail, Phone } from "lucide-react";
// import { Dept } from "../stores/[id]/page";

// const GroupedDepts = ({
//   apiresp,
// }: {
//   apiresp: {
//     deps: Dept[];
//     storeInfo: {};
//   };
// }) => {
//   const groupedByCity = apiresp.deps.reduce((acc, dept) => {
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
//           <div key={city} className="bg-white p-4 rounded-lg shadow">
//             <h2 className="text-2xl font-bold text-black mb-4">{city}</h2>

//             <div className="bg-white text-sm font-semibold text-orange-600 grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 rounded">
//               <div>Departament</div>
//               <div>Funcția</div>
//               <div>Nume</div>
//               <div>ID</div>
//               <div>Telefon</div>
//               <div>Email</div>
//             </div>
//             {Object.entries(groupedByDepartment).map(([department, people]) =>
//               people.map((person, idx) => {
//                 return (
//                   <div
//                     key={`${person.id}-${idx}`}
//                     className="grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] px-4 py-2 text-sm items-start text-gray-800 relative"
//                   >
//                     <div
//                       className={`${
//                         idx !== 0 ? "text-transparent" : "font-medium"
//                       }
//                       ${
//                         idx === people.length - 1
//                           ? "border-b-2 border-black "
//                           : ""
//                       }`}
//                     >
//                       {department}
//                     </div>
//                     <div
//                       className={`${
//                         idx !== 0 &&
//                         person.position === people[idx - 1]?.position
//                           ? "text-transparent  "
//                           : ""
//                       }
//                        ${
//                          idx === people.length - 1
//                            ? "border-b-2 border-black "
//                            : ""
//                        }
//                        ${
//                          person.position === people[idx - 1]?.position
//                            ? "border-b-2 border-black "
//                            : ""
//                        }`}
//                     >
//                       {person.position}
//                     </div>
//                     <div className="font-semibold  border-b-2">
//                       {person.name}
//                     </div>
//                     <div className=" border-b-2">{person.id}</div>
//                     <div className="flex items-center border-b-2">
//                       <Phone className="w-4 h-4 mr-1 text-orange-600" />
//                       {person.phone}
//                     </div>
//                     <div className="flex items-center border-b-2">
//                       <Mail className="w-4 h-4 mr-1 text-orange-600" />
//                       {person.email}
//                     </div>
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// // export default GroupedDepts;
///////////////////////////////////////////goooooddddd
// import { Mail, Phone } from "lucide-react";
// import { Dept } from "../stores/[id]/page";

// const GroupedDepts = ({
//   apiresp,
// }: {
//   apiresp: {
//     deps: Dept[];
//     storeInfo: {};
//   };
// }) => {
//   const groupedByCity = apiresp.deps.reduce((acc, dept) => {
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
//           <div key={city} className="bg-white p-4 rounded-lg shadow">
//             <h2 className="text-2xl font-bold text-black mb-4">{city}</h2>

//             <div className="bg-white text-sm font-semibold text-orange-600 grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 rounded">
//               <div>Departament</div>
//               <div>Funcția</div>
//               <div>Nume</div>
//               <div>ID</div>
//               <div>Telefon</div>
//               <div>Email</div>
//             </div>
//             {Object.entries(groupedByDepartment).map(([department, people]) =>
//               people.map((person, idx) => {
//                 return (
//                   <div
//                     key={`${person.id}-${idx}`}
//                     className="grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] px-4 py-2 text-sm items-start text-gray-800 relative"
//                   >
//                     <div
//                       className={`${
//                         idx !== 0 ? "text-transparent" : "font-medium"
//                       }
//                       ${
//                         idx === people.length - 1
//                           ? "border-b-2 border-black "
//                           : ""
//                       }`}
//                     >
//                       {department}
//                     </div>
//                     <div
//                       className={`${
//                         idx !== 0 &&
//                         person.position === people[idx - 1]?.position
//                           ? "text-transparent"
//                           : ""
//                       }
//                         ${
//                           person.position !== people[idx + 1]?.position
//                             ? "border-b-2 border-black"
//                             : ""
//                         }`}
//                     >
//                       {person.position}
//                     </div>
//                     <div className="font-semibold  border-b-2">
//                       {person.name}
//                     </div>
//                     <div className=" border-b-2">{person.id}</div>
//                     <div className="flex items-center border-b-2">
//                       <Phone className="w-4 h-4 mr-1 text-orange-600" />
//                       {person.phone}
//                     </div>
//                     <div className="flex items-center border-b-2">
//                       <Mail className="w-4 h-4 mr-1 text-orange-600" />
//                       {person.email}
//                     </div>
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default GroupedDepts;

// import { Mail, Phone } from "lucide-react";
// import { Dept } from "../stores/[id]/page";

// const GroupedDepts = ({
//   apiresp,
// }: {
//   apiresp: {
//     deps: Dept[];
//     storeInfo: {};
//   };
// }) => {
//   const groupedByCity = apiresp.deps.reduce((acc, dept) => {
//     if (!acc[dept.city]) acc[dept.city] = [];
//     acc[dept.city].push(dept);
//     return acc;
//   }, {} as Record<string, Dept[]>);

//   const TableView = ({ dept }: { dept: Dept[] }) => {
//     return (
//       <div className="space-y-10">
//         {Object.entries(groupedByCity).map(([city, cityDepts]) => {
//           const groupedByDepartment = cityDepts.reduce((acc, dept) => {
//             if (!acc[dept.department]) acc[dept.department] = [];
//             acc[dept.department].push(dept);
//             return acc;
//           }, {} as Record<string, Dept[]>);

//           return (
//             <div key={city} className="bg-white p-4 rounded-lg shadow">
//               <h2 className="text-2xl font-bold text-black mb-4">{city}</h2>

//               <div className="bg-white text-sm font-semibold text-orange-600 grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 rounded">
//                 <div>Departament</div>
//                 <div>Funcția</div>
//                 <div>Nume</div>
//                 <div>ID</div>
//                 <div>Telefon</div>
//                 <div>Email</div>
//               </div>
//               {Object.entries(groupedByDepartment).map(([department, people]) =>
//                 people.map((person, idx) => {
//                   return (
//                     <div
//                       key={`${person.id}-${idx}`}
//                       className="grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] px-4 py-2 text-sm items-start text-gray-800 relative"
//                     >
//                       <div
//                         className={`${
//                           idx !== 0 ? "text-transparent" : "font-medium"
//                         }
//                       ${
//                         idx === people.length - 1
//                           ? "border-b-2 border-black "
//                           : ""
//                       }`}
//                       >
//                         {department}
//                       </div>
//                       <div
//                         className={`${
//                           idx !== 0 &&
//                           person.position === people[idx - 1]?.position
//                             ? "text-transparent"
//                             : ""
//                         }
//                         ${
//                           person.position !== people[idx + 1]?.position
//                             ? "border-b-2 border-black"
//                             : ""
//                         }`}
//                       >
//                         {person.position}
//                       </div>
//                       <div className="font-semibold  border-b-2">
//                         {person.name}
//                       </div>
//                       <div className=" border-b-2">{person.id}</div>
//                       <div className="flex items-center border-b-2">
//                         <Phone className="w-4 h-4 mr-1 text-orange-600" />
//                         {person.phone}
//                       </div>
//                       <div className="flex items-center border-b-2">
//                         <Mail className="w-4 h-4 mr-1 text-orange-600" />
//                         {person.email}
//                       </div>
//                     </div>
//                   );
//                 })
//               )}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   const MobileGroupedDepts = ({ deps }: { deps: Dept[] }) => {
//     const groupedByCity = deps.reduce((acc, dept) => {
//       if (!acc[dept.city]) acc[dept.city] = [];
//       acc[dept.city].push(dept);
//       return acc;
//     }, {} as Record<string, Dept[]>);

//     return (
//       <div className="space-y-10 md:hidden">
//         {Object.entries(groupedByCity).map(([city, cityDepts]) => {
//           const groupedByDepartment = cityDepts.reduce((acc, dept) => {
//             if (!acc[dept.department]) acc[dept.department] = [];
//             acc[dept.department].push(dept);
//             return acc;
//           }, {} as Record<string, Dept[]>);

//           return (
//             <div key={city} className="bg-white p-4 rounded-lg shadow">
//               <h2 className="text-xl font-bold text-black mb-4">{city}</h2>

//               <div className="space-y-4">
//                 {Object.entries(groupedByDepartment).map(
//                   ([department, people]) =>
//                     people.map((person) => (
//                       <div
//                         key={person.id}
//                         className="border rounded-lg p-4 bg-gray-50 space-y-2 shadow"
//                       >
//                         <div>
//                           <p className="text-xs text-gray-500">Departament</p>
//                           <p className="font-medium">{department}</p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-500">Funcția</p>
//                           <p>{person.position}</p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-500">Nume</p>
//                           <p className="font-semibold">{person.name}</p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-gray-500">ID</p>
//                           <p>{person.id}</p>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Phone className="w-4 h-4 text-orange-600" />
//                           <span>{person.phone}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Mail className="w-4 h-4 text-orange-600" />
//                           <span>{person.email}</span>
//                         </div>
//                       </div>
//                     ))
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };
//   return (
//     <div>
//       {/* Restul componentei */}
//       {loading && <p className="mt-2">Se încarcă...</p>}
//       {!loading && error && (
//         <p className="mt-2 text-red-500">{error.message}</p>
//       )}
//       {!loading && !error && groupedStores.length === 0 && (
//         <p className="mt-2 text-gray-500">
//           Nu s-au putut grupa magazinele (verificați datele).
//         </p>
//       )}
//       {!loading &&
//         !error &&
//         stores &&
//         (isDesktop ? (
//           <TableView groupedStores={groupedStores} stores={stores} />
//         ) : (
//           <MobileCard groupedStores={groupedStores} stores={stores} />
//         ))}
//     </div>
//   );
// };

// export default GroupedDepts;
import { Mail, Phone } from "lucide-react";
import { Dept } from "../stores/[id]/page";
import { useMediaQuery } from "usehooks-ts"; // sau orice alt hook custom/media query
import { ReactNode } from "react";

// const StickyContainer = ({ children }: { children: ReactNode }) => {
//   return <div className="sticky top-14 z-10 bg-white py-1">{children}</div>;
// };
const TableView = ({
  groupedByCity,
}: {
  groupedByCity: Record<string, Dept[]>;
}) => {
  return (
    <div className="space-y-10 hidden md:block">
      {Object.entries(groupedByCity).map(([city, cityDepts]) => {
        const groupedByDepartment = cityDepts.reduce((acc, dept) => {
          if (!acc[dept.department]) acc[dept.department] = [];
          acc[dept.department].push(dept);
          return acc;
        }, {} as Record<string, Dept[]>);

        return (
          <div key={city} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-black mb-4">{city}</h2>

            <div className="bg-white text-sm font-semibold text-orange-600 grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] gap-4 px-4 py-2 rounded">
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
                  className="grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] px-4 py-2 text-sm items-start text-gray-800 relative"
                >
                  <div
                    className={`${
                      idx !== 0 ? "text-transparent" : "font-medium"
                    } ${
                      idx === people.length - 1 ? "border-b-2 border-black" : ""
                    }`}
                  >
                    {department}
                  </div>
                  <div
                    className={`${
                      idx !== 0 && person.position === people[idx - 1]?.position
                        ? "text-transparent"
                        : ""
                    } ${
                      person.position !== people[idx + 1]?.position
                        ? "border-b-2 border-black"
                        : ""
                    }`}
                  >
                    {person.position}
                  </div>
                  <div className="font-semibold border-b-2">{person.name}</div>
                  <div className="border-b-2">{person.id}</div>
                  <div className="flex items-center border-b-2">
                    <Phone className="w-4 h-4 mr-1 text-orange-600" />
                    {person.phone}
                  </div>
                  <div className="flex items-center border-b-2">
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

const MobileCardView = ({
  groupedByCity,
}: {
  groupedByCity: Record<string, Dept[]>;
}) => {
  return (
    <div className="space-y-10 md:hidden">
      {Object.entries(groupedByCity).map(([city, cityDepts]) => {
        const groupedByDepartment = cityDepts.reduce((acc, dept) => {
          if (!acc[dept.department]) acc[dept.department] = [];
          acc[dept.department].push(dept);
          return acc;
        }, {} as Record<string, Dept[]>);

        return (
          <div key={city} className="bg-white p-4 rounded-lg shadow space-y-6">
            <h2 className="text-xl font-bold text-black mb-2">{city}</h2>

            {Object.entries(groupedByDepartment).map(([department, people]) => (
              <div key={department} className="space-y-2">
                <div className="sticky top-14 bg-white py-1 px-1 border-b border-orange-300 shadow-sm">
                  <div className="text-sm font-semibold text-orange-600">
                    {department}
                  </div>
                </div>

                <div className="space-y-3">
                  {people.map((person) => (
                    <div
                      key={person.id}
                      className="border rounded-lg p-4 bg-gray-50 shadow space-y-2"
                    >
                      <div>
                        <p className="text-xs text-gray-500">Funcția</p>
                        <p>{person.position}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Nume</p>
                        <p className="font-semibold">{person.name}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">ID</p>
                        <p>{person.id}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-orange-600" />
                        <span>{person.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-orange-600" />
                        <span>{person.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
const GroupedDepts = ({
  apiresp,
}: {
  apiresp: {
    deps: Dept[];
    storeInfo: {};
  };
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const groupedByCity = apiresp.deps.reduce((acc, dept) => {
    if (!acc[dept.city]) acc[dept.city] = [];
    acc[dept.city].push(dept);
    return acc;
  }, {} as Record<string, Dept[]>);

  return (
    <div>
      {isDesktop ? (
        <TableView groupedByCity={groupedByCity} />
      ) : (
        <MobileCardView groupedByCity={groupedByCity} />
      )}
    </div>
  );
};

export default GroupedDepts;
