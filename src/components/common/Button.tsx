import Link from "next/link";
import { ComponentType, ReactElement } from "react";
import { IconType } from "react-icons";

type ButtonProps = {
  text: string;
  href?: string;
  className?: string;
  textCn?: string;
  Icon?: ReactElement;
  isDisable?: boolean;
};

export const Button = ({
  text,
  className,
  textCn,
  href,
  Icon,
  isDisable
}: ButtonProps) => {
  return href ? (
    <Link
      className={`flex justify-center items-center rounded-3xl ${
        !isDisable && "hover:cursor-pointer hover:opacity-85"
      } p-5 shadow ${className} ${isDisable && "bg-gray-200 text-gray-400"}`}
      href={href}
    >
      {Icon}
      <span className={`text-sm font-semibold ${textCn}`}>{text}</span>
    </Link>
  ) : (
    <div
      className={`flex justify-center items-center rounded-3xl p-5 shadow ${className} ${
        isDisable
          ? "bg-gray-200 text-gray-400"
          : "hover:cursor-pointer hover:opacity-85"
      }`}
    >
      <span className={`text-sm font-semibold ${textCn}`}>{text}</span>
    </div>
  );
};
