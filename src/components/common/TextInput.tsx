import { Field, Input, Label } from "@headlessui/react";
import React, { ReactElement } from "react";

type TextInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  Icon?: ReactElement;
};

export const TextInput = ({
  label,
  name,
  type,
  placeholder,
  Icon
}: TextInputProps) => {
  return (
    <>
      <Field className="flex flex-col w-full">
        <Label className="text-gray-500 text-xs mb-1">{label}</Label>
        <div className="flex relative">
          <Input
            name={name}
            type={type}
            placeholder={placeholder}
            className="rounded-xl px-4 bg-gray-100 h-12 w-full font-medium placeholder:text-gray-400 outline-none"
          />
          <div className="absolute right-0 self-center mr-5">{Icon}</div>
        </div>
      </Field>
    </>
  );
};
