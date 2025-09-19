"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import Button from "@/ui/button";
import PasswordInput from "@/ui/forms/password-input";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ResetPassword() {
  const [error, setError] = useState<string>("");

  const [userData, setUserData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    redirect("/sign-in");
  }

  return (
    <AuthWrapper heading="Reset your Password" subtitle="Create a new password for your account">
      <form onSubmit={handleSubmit} className="w-full md:w-[400px] space-y-6 mt-10">
        <PasswordInput
        label="New Password"
        placeholder="Enter a new password"
        name="newPassword"
        value={userData.newPassword}
        onChange={handleInputChange}
        />
        <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your new password"
        name="confirmPassword"
        value={userData.confirmPassword}
        onChange={handleInputChange}
        />
        <Button content="Submit" />
      </form>
    </AuthWrapper>
  );
}
