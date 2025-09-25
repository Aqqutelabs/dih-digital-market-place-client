"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import Button from "@/ui/button";
import Checkbox from "@/ui/forms/checkbox";
import EmailInput from "@/ui/forms/email-input";
import PasswordInput from "@/ui/forms/password-input";
import Link from "next/link";
// import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SignIn() {
  const [error, setError] = useState<string>("");

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [checkbox, handleCheckbox] = useState(false);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // redirect("/dashboard");
  }
  return (
    <AuthWrapper heading="Sign in to access your dashboard">
      <form onSubmit={handleSubmit} className="w-full md:w-[400px] space-y-6 mt-10">
        <EmailInput
          name="email"
          label="Email"
          placeholder="Enter email address"
          value={userData.email}
          onChange={handleInputChange}
        />
        <PasswordInput
          name="password"
          value={userData.password}
          label="Password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        <div className="flex justify-between items-center text-[10px] md:text-xs">
          <Checkbox
          label="Remember Me"
          name="rememberMe"
          isChecked={checkbox}
          onChange={handleCheckbox}
          />
        <Link
            href={"/forgot-password"}
            className="font-bold text-[#16A249] cursor-pointer"
          >
            Forgot Password?
          </Link>
        </div>
        <Button content="Login" href="/vendor/dashboard" />
        <div className="text-xs md:text-sm space-x-1 text-center md:text-start">
          <span className="text-[#363636]">Don&apos;t have an account?</span>
          <Link
            href={"/sign-up"}
            className="font-bold text-[#16A249] cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </AuthWrapper>
  );
}
