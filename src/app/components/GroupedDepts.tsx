import { Mail, Phone } from "lucide-react";
import { Dept } from "../stores/[id]/page";

const GroupedDepts = ({
  apiresp,
}: {
  apiresp: {
    deps: Dept[];
    storeInfo: {};
  };
}) => {
  const groupedByCity = apiresp.deps.reduce((acc, dept) => {
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
              people.map((person, idx) => {
                return (
                  <div
                    key={`${person.id}-${idx}`}
                    className="grid grid-cols-[1fr_1fr_1.5fr_0.7fr_1.5fr_2fr] px-4 py-2 text-sm items-start text-gray-800 relative"
                  >
                    <div
                      className={`${
                        idx !== 0 ? "text-transparent" : "font-medium"
                      }
                      ${
                        idx === people.length - 1
                          ? "border-b-2 border-black "
                          : ""
                      }`}
                    >
                      {department}
                    </div>
                    <div
                      className={`${
                        idx !== 0 &&
                        person.position === people[idx - 1]?.position
                          ? "text-transparent  "
                          : ""
                      }
                       ${
                         idx === people.length - 1
                           ? "border-b-2 border-black "
                           : ""
                       }
                       ${
                         person.position === people[idx - 1]?.position
                           ? "border-b-2 border-black "
                           : ""
                       }`}
                    >
                      {person.position}
                    </div>
                    <div className="font-semibold  border-b-2">
                      {person.name}
                    </div>
                    <div className=" border-b-2">{person.id}</div>
                    <div className="flex items-center border-b-2">
                      <Phone className="w-4 h-4 mr-1 text-orange-600" />
                      {person.phone}
                    </div>
                    <div className="flex items-center border-b-2">
                      <Mail className="w-4 h-4 mr-1 text-orange-600" />
                      {person.email}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GroupedDepts;

// import { Mail, Phone } from "lucide-react";
// import { Dept } from "../departments/[id]/page";

// // Tipul pentru storeInfo
// interface StoreInfo {
//   id: string;
//   name: string;
//   address?: string;
//   email?: string;
//   phone?: string;
//   fax?: string;
// }

// const GroupedDepts = ({
//   apiresp,
// }: {
//   apiresp: {
//     deps: Dept[];
//     storeInfo: StoreInfo; // Folosim tipul StoreInfo
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
//                        ${
//                          idx === people.length - 1
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

// export default GroupedDepts;
