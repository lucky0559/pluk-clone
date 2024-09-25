"use client";

import { GoShieldCheck } from "react-icons/go";
import { useState } from "react";
import { CookiesNotice, IntroCard } from "@/components/home";

export default function HomePage() {
  const [isCookiesNoticeConfirm, setIsCookiesNoticeConfirm] = useState(false);
  return (
    <div className="h-[calc(100vh-66px)] overflow-hidden">
      <div className="bg-secondary flex px-12 py-[14px] h-[52px] z-50">
        <GoShieldCheck className="text-mainFont text-2xl" />
        <p className="ml-2">
          Pals user? Easily sign in with your Pals account details.
        </p>
      </div>
      {/* <div className="overflow-hidden relative h-full"> */}
      <div className="bg-[url(../assets/images/homeBG.jpg)] bg-cover bg-bottom h-full relative">
        <IntroCard />
      </div>
      {/* </div> */}

      {!isCookiesNoticeConfirm && (
        <div
          className="absolute bottom-0 w-full z-50"
          onClick={() => setIsCookiesNoticeConfirm(true)}
        >
          <CookiesNotice />
        </div>
      )}
    </div>
  );
}
