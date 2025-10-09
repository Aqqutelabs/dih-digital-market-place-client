"use client";

import Modal from "@/ui/modal";
import { Icon } from "@iconify/react";
import Button from "@/ui/button";
import OTPInput from "@/ui/forms/otp-input";
import { useState } from "react";
// import { redirect } from "next/navigation";


type VerificationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  email: string;
};

export default function VerificationModal({
  isOpen,
  onClose,
  email,
}: VerificationModalProps) {
  const [OTP, setOTP] = useState("");
  console.log(OTP);

  // const handleVerification = () => {
  //   // redirect("/sign-up/kyc")
  // }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="gap-5 flex flex-col justify-center items-center mb-5">
        {/* icon */}
        <div className="size-12 rounded-full border-[8px] border-[#EAF3FF] bg-[#EFFFEA] flex justify-center items-center">
          <Icon
            icon={"mdi-light:phone"}
            height={24}
            width={24}
            color="#40DE58"
          />
        </div>

        {/* heading */}
        <div className="space-y-2">
          <h1 className="font-semibold text-lg text-gray-900 text-center">
            Verify your Email
          </h1>
          <p className="text-gray-500 text-sm md:text-base text-center">
            We&apos;ve sent a code to <strong>{email}</strong>
          </p>
        </div>

        <div className="space-y-2.5">
          <OTPInput length={4} onChange={setOTP} />
          <div className="text-xs md:text-sm space-x-1 text-gray-500 text-center">
            <span className="text-[#363636]">Didn’t get a code?</span>
            <span className="font-bold cursor-pointer underline">Click to resend</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Button content="Cancel" isSecondary onClick={onClose} />
        <Button content="Verify" href="/sign-up/kyc" />
      </div>
    </Modal>
  );
}
