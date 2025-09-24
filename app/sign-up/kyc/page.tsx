"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import Button from "@/ui/button";
import TextInput from "@/ui/forms/text-input";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Kyc() {
  const [error, setError] = useState<string>("");

  const [userData, setUserData] = useState({
    companyName: "",
    companyAddress: "",
    role: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    redirect("/vendor/dashboard");
  };
  return (
    <AuthWrapper heading="Sign Up as a vendor on WiderNetFarms">
      <form onSubmit={handleSubmit} className="w-full md:w-[400px] space-y-6 mt-10">
        <TextInput
          name="companyName"
          label="Company Name"
          value={userData.companyName}
          placeholder="Enter business name"
          onChange={handleInputChange}
        />
        <TextInput
          name="companyAddress"
          label="Company Address"
          value={userData.companyAddress}
          placeholder="Enter your address"
          onChange={handleInputChange}
        />
        <TextInput
          name="role"
          label="Role"
          value={userData.role}
          placeholder="What is your role in your company"
          onChange={handleInputChange}
        />

        <Button content="Continue" />
        <div className="text-xs md:text-sm space-x-1 text-center md:text-start">
          <span className="text-[#363636]">Already have an account?</span>
          <Link
            href={"/sign-in"}
            className="font-bold text-[#16A249] cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      </form>
    </AuthWrapper>
  );
}
