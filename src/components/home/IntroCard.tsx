import { Button } from "@/components/common/Button";
import React from "react";
import { GiDiamonds } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

export const IntroCard = () => {
  return (
    <div className="w-[484px] h-[468px] z-50 bg-white rounded-2xl shadow-sm px-14 py-14 absolute right-[5%] top-[8%]">
      <div className="flex flex-col text-[32px] font-extrabold mb-6">
        <span>Introducing the</span>
        <div className="flex">
          <span>
            new <span className="text-mainFont">PALS</span>
            Services
          </span>
          <GiDiamonds className="text-mainFont" />
        </div>
      </div>
      <div className="space-y-5 mb-5">
        <Button
          text="Sign in with email"
          href="/sign-in"
          className="bg-secondary w-[372] h-[52]"
          textCn="text-secondaryFont text-[15px]"
          Icon={<MdEmail className="mr-1" fontSize={20} />}
        />
        <Button
          text="Create account"
          className="bg-mainFont w-[372px] h-[52px]"
          textCn="text-primary text-[15px]"
          href="/sign-up"
        />
      </div>
      <div className="text-xs text-gray-500">
        <span className="block mb-2">
          Pals user? Easily sign in with your Pals account details.
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
