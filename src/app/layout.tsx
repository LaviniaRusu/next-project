import NavBar from "./components/NavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar
          onSearch={function (searchText: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        {children}
      </body>
    </html>
  );
}
