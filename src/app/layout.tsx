import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Pelotica",
  description: "Academia Pelotica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="relative z-10">
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
