import { colors } from "@/tailwindConfig/tailwind.config";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  text: string;
  textColor?: string;
  bgColor?: string;
  fontSize?: number;
  width?: number;
  height?: number;
  href?: string;
};

export const Button = ({
  text,
  textColor,
  bgColor,
  fontSize,
  width,
  height,
  href
}: ButtonProps) => {
  return href ? (
    <Link
      className="flex justify-center items-center rounded-3xl hover:cursor-pointer hover:opacity-85 p-5 shadow"
      style={{
        backgroundColor: bgColor ?? colors.primary,
        width: width ?? 132,
        height: height ?? 40
      }}
      href={href}
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
    </Link>
  ) : (
    <div
      className="flex justify-center items-center rounded-3xl hover:cursor-pointer hover:opacity-85 p-5 shadow"
      style={{
        backgroundColor: bgColor ?? colors.primary,
        width: width ?? 132,
        height: height ?? 40
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
