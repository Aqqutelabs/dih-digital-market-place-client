"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import Button from "@/ui/button";
import Checkbox from "@/ui/forms/checkbox";
import EmailInput from "@/ui/forms/email-input";
import PasswordInput from "@/ui/forms/password-input";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SignIn() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [checkbox, handleCheckbox] = useState(false);
  const router = useRouter();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!userData.email || !userData.password) {
      setError("All fields are required.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://digital-market-place-server-production.up.railway.app/api/v1/auth/login",
        userData
      );
      console.log("Login successful:", response.data);
      // Handle successful login here
      // e.g., store token, redirect to dashboard
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        router.push('/vendor/dashboard');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle different error cases
        if (error.response) {
          // Server responded with error
          setError(
            error.response.data?.message || 
            error.response.data?.error || 
            "Invalid email or password."
          );
        } else if (error.request) {
          // Request made but no response
          setError("Network error. Please check your connection.");
        } else {
          // Something else happened
          setError("An unexpected error occurred. Please try again.");
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

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
        
        {error && (
          <div className="text-red-600 text-xs px-3 py-1.5 bg-red-50 border border-red-200 rounded">
            {error}
          </div>
        )}

        <Button 
          content={"Login"} 
          isLoading={isLoading}
          isDisabled={isLoading}
        />
        
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