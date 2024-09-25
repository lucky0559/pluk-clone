"use client";

import { Button, TextInput } from "@/components/common";
import { Fieldset, Legend } from "@headlessui/react";

function SignUpPage() {
  return (
    <div className="h-[calc(100vh-66px)] overflow-hidden mx-auto bg-gradient-to-b from-red-200 to-primary flex justify-center items-center flex-col">
      <Fieldset className="rounded-3xl p-10 shadow-sm flex justify-center items-center w-[504px] bg-primary flex-col mb-[170px]">
        <div className="space-y-5 w-full">
          <Legend className="text-[28px] font-semibold">Create Account</Legend>
          <TextInput
            label="Email"
            name="email"
            placeholder="Enter email"
            type="email"
          />
          <div className="flex justify-center items-end space-x-5">
            <TextInput
              label="One-time password (OTP)"
              name="email"
              placeholder="Enter OTP"
              type="text"
            />
            <Button
              text="Get OTP"
              className="max-h-[38px] w-5/12 mb-[6px]"
              textCn="font-semibold"
              isDisable={true}
            />
          </div>
          <span className="text-xs text-gray-400">
            Check your email for the OTP.
          </span>
          <Button
            text="Continue"
            className="mt-10"
            textCn="font-semibold"
            isDisable={true}
          />
        </div>
      </Fieldset>
    </div>
  );
}

export default SignUpPage;
