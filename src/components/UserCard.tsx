/////versiune nemodificata
// import { Mail, Phone } from "lucide-react";
// import Link from "next/link";
// import { User } from "@/Types/interfaces";
// import { UserRound } from "lucide-react";

// const UserCard = ({ user }: { user: User }) => {
//   return (
//     <div className="bg-white p-4  shadow-md">
//       <div className="mb-1">
//         <h3 className="text-lg  text-gray-800">{user.name}</h3>
//         <p className="text-sm text-orange-600 ">{user.position}</p>
//       </div>
//       <div>
//         {user.store ? (
//           <Link
//             href={`/stores/${user.store.id}`}
//             className="text-sm text-blue-700 mb-3 underline"
//           >
//             {user.department}
//           </Link>
//         ) : (
//           <p className="text-sm text-gray-500 mb-3">{user.department}</p>
//         )}
//       </div>
//       {user.store ? (
//         <Link
//           href={`/stores/${user.store.id}`}
//           className="text-sm text-blue-700 mb-3 underline"
//         >
//           {user.city}
//         </Link>
//       ) : (
//         <p className="text-sm text-gray-500 mb-3">{user.city}</p>
//       )}
//       <div className="flex items-center text-sm text-gray-700 mb-1">
//         <Mail className="w-4 h-4 mr-2 text-orange-600 " />
//         <span>{user.email}</span>
//       </div>
//       <div className="flex items-center text-sm text-gray-700">
//         <Phone className="w-4 h-4 mr-2 text-orange-600 max-h-full" />
//         <span>{user.phone}</span>
//       </div>
//     </div>
//   );
// };

// export default UserCard;
// import { Mail, Phone } from "lucide-react";
// import Link from "next/link";
// import { User } from "@/Types/interfaces";

// const UserCard = ({ user }: { user: User }) => {
//   return (
//     <div className="bg-white p-5 shadow-md rounded-sm border w-full max-w-sm">
//       {/* TOP: avatar + nume + funcție */}
//       <div className="flex items-start gap-3 mb-4">
//         <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-7 w-7 text-gray-400"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="1.5"
//               d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4
//                  1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6
//                  2.02-6 4.5V20h12v-1.5c0-2.48-2.69-4.5-6-4.5z"
//             />
//           </svg>
//         </div>

//         <div>
//           <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
//           <p className="text-sm text-orange-600">{user.position}</p>
//         </div>
//       </div>

//       {/* Departament */}
//       <div className="mb-1">
//         {user.store ? (
//           <Link
//             href={`/stores/${user.store.id}`}
//             className="text-sm text-blue-700 underline"
//           >
//             {user.department}
//           </Link>
//         ) : (
//           <p className="text-sm text-blue-700 underline">{user.department}</p>
//         )}
//       </div>

//       {/* City (ex: Sediul Central) */}
//       <div className="mb-4">
//         {user.store ? (
//           <Link
//             href={`/stores/${user.store.id}`}
//             className="text-sm text-blue-700 underline"
//           >
//             {user.city}
//           </Link>
//         ) : (
//           <p className="text-sm text-blue-700 underline">{user.city}</p>
//         )}
//       </div>

//       {/* Separator subtire */}
//       <div className="border-t mb-3"></div>

//       {/* Email */}
//       <div className="flex items-center text-sm text-gray-700 mb-2">
//         <Mail className="w-4 h-4 mr-2 text-orange-600" />
//         <span>{user.email}</span>
//       </div>

//       {/* Telefon */}
//       <div className="flex items-center text-sm text-gray-700">
//         <Phone className="w-4 h-4 mr-2 text-orange-600" />
//         <span>{user.phone}</span>
//       </div>
//     </div>
//   );
// };

// export default UserCard;

///design user card
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { User } from "@/Types/interfaces";
import { UserRound } from "lucide-react";

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="bg-white shadow-md">
      <div className=" p-2">
        <div className=" flex items-center gap-3">
          <div className="size-5">
            <UserRound className="stroke-gray-400 fill-gray-400 rounded-b-lg" />
          </div>
          <div>
            <h3 className="text-lg text-gray-800">{user.name}</h3>
            <p className="text-sm text-orange-600 ">{user.position}</p>
          </div>
        </div>
      </div>
      <div>
        {user.store ? (
          <Link
            href={`/stores/${user.store.id}`}
            className="text-sm text-blue-700 mb-3 underline  border-l-4 border-blue-900 pl-2"
          >
            {user.department}
          </Link>
        ) : (
          <p className="text-sm text-gray-500  mb-3 border-l-4 border-blue-900 pl-2">
            {user.department}
          </p>
        )}
      </div>
      {user.store ? (
        <Link
          href={`/stores/${user.store.id}`}
          className="text-sm text-blue-700 mb-3 underline border-l-4 border-orange-400 pl-2"
        >
          {user.city}
        </Link>
      ) : (
        <p className="text-sm text-gray-500 mb-3 border-l-4 border-orange-400 pl-2">
          {user.city}
        </p>
      )}
      <div className="border-y mt-5 pl-6"></div>
      <div className="mt-3 mb-20 ml-2">
        <div className="flex items-center text-sm text-gray-700 pl-2">
          <Mail className="w-4 h-4 mr-2 text-orange-600 " />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700 pl-2">
          <Phone className="w-4 h-4 mr-2 text-orange-600 max-h-full" />
          <span>{user.phone}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
