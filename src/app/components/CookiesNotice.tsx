import { Button } from "@/components/Button";
import React from "react";
import { colors } from "../../../tailwind.config";

export const CookiesNotice = () => {
  return (
    <div className="flex w-full h-[148px] bg-secondaryFont/[.8] px-12 py-8 items-center justify-center">
      <div className="w-[813px]">
        <p className="text-white">
          We use cookies to give you the best possible experience on our
          website. By continuing to browse this site, you give consent for
          cookies to be used. If you do not agree to the use of cookies, please
          amend your browser privacy settings. Please note that some services
          may not function as intended if cookies are disabled. For more
          details, please read our{" "}
          <span className="text-mainFont hover:text-mainFont/[.7] hover:cursor-pointer">
            Privacy Notice
          </span>
          .
        </p>
      </div>
      <div className="flex flex-auto items-center justify-end">
        <Button text="Got it" textColor={colors.mainFont} />
      </div>
    </div>
  );
};
