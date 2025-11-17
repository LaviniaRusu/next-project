import { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import MobileMenu from "./MobileMenu";
import { FileText, User } from "lucide-react";
import LogoDedeman from "@/Images/Logo_Dedeman.svg.png";
import Image from "next/image";
import Link from "next/link";
interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="w-full h-[80px] flex flex-row px-4 py-2 bg-gray-100 shadow-md shadow-gray-500/50">
      <div className="flex flex-row absolute">
        <Link href="http://localhost:3000/">
          <Image src={LogoDedeman} alt="Logo Dedeman" className="max-w-40 " />
        </Link>

        <div className="w-full lg:min-w-[670] md:min-w-[550] sm:min-w-[400] h-[40px] pt-2.5 pl-7 pr-10 hidden sm:block">
          <SearchInput />
        </div>
      </div>

      <div className="ml-auto block sm:hidden">
        <MobileMenu />
      </div>

      <div className="hidden sm:flex items-center space-x-2 ml-auto">
        <FileText className="w-6 h-6 -scale-y-100 stroke-black" />
        <User className="w-6 h-6 stroke-black fill-black" />
      </div>
    </div>
  );
};

export default NavBar;
