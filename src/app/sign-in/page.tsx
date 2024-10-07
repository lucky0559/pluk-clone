"use client";

import { TextInput } from "@/components/common";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui";
import Link from "next/link";
import React, { useState } from "react";
import { TbEyeClosed, TbEyeCheck } from "react-icons/tb";

function SignInPage() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  return (
    <div className="h-[calc(100vh-66px)] overflow-hidden mx-auto bg-gradient-to-b from-red-200 to-primaryCustom flex justify-center items-center flex-col">
      <Card className="rounded-3xl p-10 shadow-sm flex justify-center items-center w-[504px] bg-primaryCustom flex-col">
        <div className="space-y-5 w-full">
          <CardHeader className="p-0">
            <CardTitle className="text-[28px] font-semibold">
              Email Sign in
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TextInput
              label="Email"
              htmlFor="email"
              type="email"
              id={"email"}
              placeholder="Enter email"
              className="mt-[32px]"
            />
            <TextInput
              label="Password"
              type={isPasswordShow ? "text" : "password"}
              id={"password"}
              placeholder="Enter password"
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
          </CardContent>
        </div>
        <Button
          asChild
          variant={"secondary"}
          size={"secondary"}
          className="w-full my-[40px]"
          disabled={true}
        >
          <Link href={""}>Sign in</Link>
        </Button>
        <span className="text-gray-600 text-sm hover:cursor-pointer hover:opacity-90">
          Forgot password
        </span>
      </Card>
    </div>
  );
}

export default SignInPage;
