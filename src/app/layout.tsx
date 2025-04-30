"use client";
// // footer peste tot
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <div className=" bg-white">
//           <NavBar
//             onSearch={function (searchText: string): void {
//               throw new Error("Function not implemented.");
//             }}
//           />
//         </div>
//         <div className="w-full fixed bottom-0 left-0">
//           <Footer />
//         </div>
//         {children}
//       </body>
//     </html>
//   );
// }"use client";"use client";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHomePage = pathname === "/"; // Verifică dacă pagina curentă este homepage

  return (
    <html lang="en">
      <body>
        {/* Afișează NavBar doar dacă nu este pe homepage */}
        {!isHomePage && (
          <div className="bg-white">
            <NavBar
              onSearch={function (searchText: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        )}

        {children}

        {/* Afișează Footer doar dacă nu este pe homepage, dar fără "Căutare avansată" */}
        <div className="w-full fixed bottom-0 left-0">
          <Footer isHomePage={isHomePage} />
        </div>
      </body>
    </html>
  );
}
