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
      <div className="space-y-5 mb-5">
        <Button
          text="Sign in with email"
          bgColor={colors.secondary}
          textColor={colors.secondaryFont}
          fontSize={15}
          width={372}
          height={52}
          href="/sign-in"
        />
        <Button
          text="Create account"
          bgColor={colors.mainFont}
          fontSize={15}
          width={372}
          height={52}
        />
      </div>
      <div className="text-xs text-gray-500">
        <span className="block mb-2">
          Elsup user? Easily sign in with your Pulse account details.
        </span>
        <p className="mb-4">
          By signing in or creating an account, you confirm that you&apos;ve
          read and agreed to the{" "}
          <b className="text-mainFont hover:cursor-pointer">
            Terms & Conditions
          </b>{" "}
          and{" "}
          <b className="text-mainFont hover:cursor-pointer">Privacy Notice</b>{" "}
          to use the services.
        </p>
        <span className="text-gray-700 font-semibold">
          <span className="hover:cursor-pointer hover:text-mainFont">
            Learn more about this release
          </span>
          <span className="text-gray-200 mx-4 w-[1px]">|</span>
          <span className="hover:cursor-pointer hover:text-mainFont">
            Contact us
          </span>
        </span>
      </div>
    </div>
  );
};
