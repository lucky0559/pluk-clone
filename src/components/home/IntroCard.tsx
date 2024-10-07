import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label
} from "@/components/ui";
import { Button as ButtonCommon } from "@/components/common";
import Link from "next/link";
import React from "react";
import { GiDiamonds } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

export const IntroCard = () => {
  return (
    <Card className="w-[484px] h-[468px] z-50 bg-white rounded-2xl shadow-sm px-14 py-14 absolute right-[5%] top-[8%]">
      <CardHeader>
        <CardTitle className="text-[32px] font-extrabold mb-6">
          <span>Introducing the</span>
          <div className="flex">
            <span>
              new <span className="text-mainFont">PALS</span>
              Services
            </span>
            <GiDiamonds className="text-mainFont" />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-5 mb-5 flex flex-col">
          <Button asChild variant={"defaultWithIcon"} size={"defaultWithIcon"}>
            <Link href="/sign-in">
              <MdEmail className="mr-1" fontSize={20} />
              Sign in with email
            </Link>
          </Button>
          <Button
            asChild
            variant={"secondaryWithIcon"}
            size={"defaultSecondaryIcon"}
          >
            <Link href="/sign-up">Create account</Link>
          </Button>
        </div>
        <div className="text-xs text-gray-500">
          <span className="block mb-2">
            Pals user? Easily sign in with your Pals account details.
          </span>
          <p className="mb-4">
            By signing in or creating an account, you confirm that you&apos;ve
            read and agreed to the{" "}
            <b className="text-mainFont hover:cursor-pointer">
              Terms & Conditions
            </b>{" "}
            and{" "}
            <b className="text-mainFont hover:cursor-pointer">Privacy Notice</b>{" "}
            to use the services.
          </p>
          <span className="text-gray-700 font-semibold">
            <span className="hover:cursor-pointer hover:text-mainFont">
              Learn more about this release
            </span>
            <span className="text-gray-200 mx-4 w-[1px]">|</span>
            <span className="hover:cursor-pointer hover:text-mainFont">
              Contact us
            </span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
};
