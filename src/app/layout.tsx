import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Topnav } from "@/components/common/Topnav";

export const metadata: Metadata = {
  title: "KULP",
  description: "Reverse KULP"
};

const montserrat = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-normal text-secondaryFont min-h-screen ${montserrat.className}`}
      >
        <Topnav />
        <main className="m-0 p-0">{children}</main>
      </body>
    </html>
  );
}
