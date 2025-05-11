"use client";
interface FooterProps {
  isHomePage: boolean;
}

const Footer = ({ isHomePage }: FooterProps) => {
  return (
    <footer className="w-full py-4 px-6 bg-gray-100 text-sm text-gray-600">
      {isHomePage ? (
        <div className="flex justify-center items-center">
          <div>
            Un proiect{" "}
            <strong className="text-gray-800 font-bold">E-Comerce</strong>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div>
            Nu găsești ce căutai? Folosește-te de{" "}
            <a
              href="http://localhost:3000"
              className="text-blue-600 hover:underline"
            >
              căutare avansată
            </a>
          </div>
          <div>
            Un proiect{" "}
            <strong className="text-gray-800 font-bold">E-Comerce</strong>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
