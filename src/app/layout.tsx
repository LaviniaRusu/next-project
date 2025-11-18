"use client";

import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [hideNav, setHideNav] = useState(false);

  let lastScrollPositionY = 0;

  useEffect(() => {
    window.onscroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollPositionY) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }

      lastScrollPositionY = currentY;
    };
  }, []);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {!isHomePage && (
          <div
            className={`
              sticky top-0 bg-white z-50 transition-transform duration-300
              ${hideNav ? "-translate-y-full" : "translate-y-0"}
            `}
          >
            <NavBar onSearch={() => {}} />
          </div>
        )}

        <main className="flex-grow">{children}</main>

        <div className="sticky bottom-0 w-full">
          <Footer isHomePage={isHomePage} />
          <Toaster
            position="top-center"
            toastOptions={{
              className: "rounded-lg bg-neutral-900 text-white shadow-xl",
            }}
          />
        </div>
      </body>
    </html>
  );
}
