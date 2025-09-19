"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import Button from "@/ui/button";
import EmailInput from "@/ui/forms/email-input";
import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ForgotPassword() {
  const [error, setError] = useState<string>("");

  const [userData, setUserData] = useState({
    email: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    redirect("/reset-password");
  }

  return (
    <AuthWrapper heading="Forgot Password" subtitle="Enter the email address you logged in with">
      <form onSubmit={handleSubmit} className="w-full md:w-[400px] space-y-10 mt-14">
        <EmailInput
          name="email"
          label="Email"
          placeholder="Enter email address"
          value={userData.email}
          onChange={handleInputChange}
        />
        <Button content="Continue" />
      </form>
    </AuthWrapper>
  );
}
