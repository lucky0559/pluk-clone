import { InputOTP, InputOTPGroup, InputOTPSlot, Label } from "@/components/ui";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import React from "react";

const Otp = () => {
  return (
    <div className="flex flex-col mt-[16px]">
      <Label className="mb-[4px] text-gray-500">One-time password (OTP)</Label>
      <InputOTP
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        className="flex flex-col"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} className="h-[48px]" />
          <InputOTPSlot index={1} className="h-[48px]" />
          <InputOTPSlot index={2} className="h-[48px]" />
          <InputOTPSlot index={3} className="h-[48px]" />
          <InputOTPSlot index={4} className="h-[48px]" />
          <InputOTPSlot index={5} className="h-[48px]" />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default Otp;
