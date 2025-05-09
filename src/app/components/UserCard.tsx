// import { Mail, Phone } from "lucide-react";
// import Link from "next/link";

// interface User {
//   id: number;
//   name: string;
//   title: string;
//   department: string;
//   store: {
//     id: number;
//   };
//   email: string;
//   phone: string;
//   city: string;
// }

// const UserCard = ({ user }: { user: User }) => {
//   return (
//     <div className="bg-white p-4  shadow-md">
//       <div className="mb-1">
//         <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
//         <p className="text-sm text-orange-600 font-medium">{user.title}</p>
//       </div>
//       <div>
//         {user.store ? (
//           <Link
//             href={`/stores/${user.store.id}`}
//             className="text-sm text-blue-600 mb-3"
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
//           className="text-sm text-blue-600 mb-3"
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
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  title: string;
  department: string;
  store: {
    id: number;
  };
  email: string;
  phone: string;
  city: string;
}

const UserCard = ({ user }: { user: User }) => {
  return (
    <div className="bg-white p-4  shadow-md">
      <div className="mb-1">
        <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
        <p className="text-sm text-orange-600 font-medium">{user.title}</p>
      </div>
      <div>
        {user.store ? (
          <Link
            href={`/stores/${user.store.id}`}
            className="text-sm text-blue-600 mb-3"
          >
            {user.department}
          </Link>
        ) : (
          <p className="text-sm text-gray-500 mb-3">{user.department}</p>
        )}
      </div>
      {user.store ? (
        <Link
          href={`/stores/${user.store.id}`}
          className="text-sm text-blue-600 mb-3"
        >
          {user.city}
        </Link>
      ) : (
        <p className="text-sm text-gray-500 mb-3">{user.city}</p>
      )}
      <div className="flex items-center text-sm text-gray-700 mb-1">
        <Mail className="w-4 h-4 mr-2 text-orange-600 " />
        <span>{user.email}</span>
      </div>
      <div className="flex items-center text-sm text-gray-700">
        <Phone className="w-4 h-4 mr-2 text-orange-600 max-h-full" />
        <span>{user.phone}</span>
      </div>
    </div>
  );
};

export default UserCard;
