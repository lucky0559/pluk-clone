import Image from "next/image";
import React from "react";
import logo from "@/images/logo.png";
import Link from "next/link";

export const Topnav = () => {
  return (
    <nav className="flex px-12">
      <Link
        href="/"
        className="bg-primary h-16 flex items-center relative z-10"
      >
        <p className="text-mainFont font-Amsterdam font-bold text-2xl tracking-wide">
          KU EFIL U.R.P
        </p>
        <Image src={logo} alt="logo" className="h-full w-auto pl-2 py-3" />
      </Link>
    </nav>
  );
};
