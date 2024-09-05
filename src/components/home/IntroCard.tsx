import { Button } from "@/components/common/Button";
import { colors } from "@/tailwindConfig/tailwind.config";
import React from "react";
import { GiDiamonds } from "react-icons/gi";

export const IntroCard = () => {
  return (
    <div className="w-[484px] h-[468px] z-50 bg-white rounded-2xl shadow-sm px-14 py-14 absolute right-[5%] top-[8%]">
      <div className="flex flex-col text-[32px] font-extrabold mb-6">
        <span>Introducing the</span>
        <div className="flex">
          <span>
            new <span className="text-mainFont">URP</span>
            Services
          </span>
          <GiDiamonds className="text-mainFont" />
        </div>
      </div>
      <div>
        <Button
          text="Sign in with email"
          bgColor={colors.secondary}
          textColor={colors.secondaryFont}
          fontSize={15}
          width={372}
        />
      </div>
    </div>
  );
};
