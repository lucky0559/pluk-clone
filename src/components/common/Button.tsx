import { colors } from "@/tailwindConfig/tailwind.config";
import React from "react";

type ButtonProps = {
  text: string;
  textColor?: string;
  bgColor?: string;
  fontSize?: number;
  width?: number;
};

export const Button = ({
  text,
  textColor,
  bgColor,
  fontSize,
  width
}: ButtonProps) => {
  return (
    <div
      className="h-10 flex justify-center items-center rounded-3xl hover:cursor-pointer hover:opacity-75 p-5"
      style={{
        backgroundColor: bgColor ?? colors.primary,
        width: width ?? 132
      }}
    >
      <span
        className="text-sm"
        style={{
          color: textColor ?? colors.primary,
          fontSize: fontSize ?? 12
        }}
      >
        {text}
      </span>
    </div>
  );
};
