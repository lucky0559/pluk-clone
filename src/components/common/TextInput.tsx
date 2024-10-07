import { Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";
import React, { ReactElement } from "react";

type TextInputProps = {
  htmlFor?: string;
  label: string;
  id: string;
  type?: "email" | "password" | "text";
  placeholder?: string;
  Icon?: ReactElement;
  className?: string;
};

export const TextInput = ({
  htmlFor,
  label,
  id,
  type,
  placeholder,
  Icon,
  className
}: TextInputProps) => {
  return (
    <div
      className={cn("grid w-full items-center gap-1.5 mt-[20px]", className)}
    >
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      <div className="relative flex">
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          className="h-[48px]"
        />
        <div className="absolute right-0 self-center mr-5">{Icon}</div>
      </div>
    </div>
  );
};
