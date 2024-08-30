import React from "react";
import { colors } from "../../../tailwind.config";

type ButtonProps = {
  text: string;
  textColor?: string;
  bgColor?: string;
};

export const Button = ({ text, textColor, bgColor }: ButtonProps) => {
  return (
    <div
      className="w-[132px] h-10 flex justify-center items-center rounded-3xl hover:cursor-pointer hover:opacity-75"
      style={{ backgroundColor: bgColor ?? colors.cWhite }}
    >
      <span className="text-sm" style={{ color: textColor ?? colors.cWhite }}>
        {text}
      </span>
    </div>
  );
};
