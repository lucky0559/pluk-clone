import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Topnav } from "@/components/Topnav";

export const metadata: Metadata = {
  title: "KULP",
  description: "Reverse KULP"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-Montserrat font-normal text-secondaryFont">
        <Topnav />
        <div>{children}</div>
      </body>
    </html>
  );
}
