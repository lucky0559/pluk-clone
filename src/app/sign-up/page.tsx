"use client";

import { TextInput } from "@/components/common";
import Otp from "@/components/common/Otp";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui";
import Link from "next/link";

function SignUpPage() {
  return (
    <div className="h-[calc(100vh-66px)] overflow-hidden mx-auto bg-gradient-to-b from-red-200 to-primaryCustom flex justify-center items-center flex-col">
      <Card className="rounded-3xl p-10 shadow-sm flex justify-center items-center w-[504px] bg-primaryCustom flex-col">
        <div className="space-y-5 w-full">
          <CardHeader className="p-0">
            <CardTitle className="text-[28px] font-semibold">
              Create Account
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
            <div className="flex space-x-12">
              <Otp />
              <Button
                asChild
                variant={true ? "default" : "outline"}
                disabled={true}
                size={"sm"}
                className="self-end mb-1"
              >
                <Link href={""}>Get OTP</Link>
              </Button>
            </div>
          </CardContent>
        </div>
        <Button
          asChild
          variant={"secondary"}
          size={"secondary"}
          className="w-full my-[40px]"
          disabled={true}
        >
          <Link href={""}>Continue</Link>
        </Button>
      </Card>
    </div>
  );
}

export default SignUpPage;
