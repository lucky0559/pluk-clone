"use client";

import { Button, TextInput } from "@/components/common";
import { Fieldset, Legend } from "@headlessui/react";
import React, { useState } from "react";
import { TbEyeClosed, TbEyeCheck } from "react-icons/tb";

function SignInPage() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <div className="h-[calc(100vh-66px)] overflow-hidden mx-auto bg-gradient-to-b from-red-200 to-primary flex justify-center items-center flex-col">
      <Fieldset className="rounded-3xl p-10 shadow-sm flex justify-center items-center w-[504px] bg-primary flex-col">
        <div className="space-y-5 w-full">
          <Legend className="text-[28px] font-semibold">Email Sign in</Legend>
          <TextInput
            label="Email"
            name="email"
            placeholder="Enter email"
            type="email"
          />
          <TextInput
            label="Password"
            name="password"
            placeholder="Enter password"
            type={isPasswordShow ? "text" : "password"}
            Icon={
              isPasswordShow ? (
                <TbEyeCheck
                  onClick={() => setIsPasswordShow(!isPasswordShow)}
                  className="hover:cursor-pointer"
                  size={24}
                />
              ) : (
                <TbEyeClosed
                  onClick={() => setIsPasswordShow(!isPasswordShow)}
                  className="hover:cursor-pointer"
                  size={24}
                />
              )
            }
          />
        </div>
        <Button
          className="w-full mt-10 bg-mainFont"
          textCn="text-white"
          text="Sign in"
          href=""
          isDisable={true}
        />
        <span className="text-gray-600 mt-10 text-sm hover:cursor-pointer hover:opacity-90">
          Forgot password
        </span>
      </Fieldset>
    </div>
  );
}

export default SignInPage;
