import Image from "next/image";
import React from "react";
import logo from "@/images/logo.png";

export const Topnav = () => {
  return (
    <div className="bg-primary h-16 flex items-center px-12 relative z-10">
      <p className="text-mainFont font-Amsterdam font-bold text-2xl tracking-wide">
        KU EFIL U.R.P
      </p>
      <Image src={logo} alt="logo" className="h-full w-auto pl-2 py-3" />
    </div>
  );
};
