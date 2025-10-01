"use client";
import AuthWrapper from "@/components/auth/auth-wrapper";
import VerificationModal from "@/components/auth/verification-modal";
import Button from "@/ui/button";
import EmailInput from "@/ui/forms/email-input";
import NumberInput from "@/ui/forms/number-input";
import PasswordInput from "@/ui/forms/password-input";
import TextInput from "@/ui/forms/text-input";
import axios from "axios";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
export default function SignUp() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    email: "",
    fullName: "",
    password: "",
    phoneNumber: "",
  });
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };
  // for opening verification modal
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      if (!baseUrl) {
        throw new Error("Base URL is not configured");
      }
      const response = await axios.post(
        `${baseUrl}/api/v1/auth/signup`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      // ✅ Show success toast
      toast.success(response?.data?.message || "Sign Up successful!");
      // ✅ Open verification modal
      setIsOpen(true);
      // Optionally log response (or store token/user)
      console.log("Signup successful:", response.data);
    } catch (err) {
      // Handle Axios error properly
      let errorMessage = "An unexpected error occurred";
      if (axios.isAxiosError(err)) {
        errorMessage =
          err.response?.data?.message ||
          err.response?.data?.error ||
          err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      setError(errorMessage);
      toast.error(errorMessage);
      console.error("Signup error:", err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AuthWrapper heading="Sign Up as a vendor on WiderNetFarms">
      <form onSubmit={handleSubmit} className="w-full md:w-[400px] space-y-3">
        <EmailInput
          name="email"
          label="Email"
          placeholder="Enter email address"
          value={userData.email}
          onChange={handleInputChange}
        />
        <TextInput
          name="fullName"
          label="Full Name"
          value={userData.fullName}
          placeholder="Enter your full name"
          onChange={handleInputChange}
        />
        <NumberInput
          name="phoneNumber"
          value={userData.phoneNumber}
          label="Phone Number"
          placeholder="Enter phone number"
          onChange={handleInputChange}
        />
        <PasswordInput
          name="password"
          value={userData.password}
          label="Password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
        <Button content="Sign Up" isLoading={isLoading} isDisabled={isLoading} />

        <div className="text-xs md:text-sm space-x-1 text-center md:text-start">
          <span className="text-[#363636]">Already have an account?</span>
          <Link
            href="/sign-in"
            className="font-bold text-[#16A249] cursor-pointer"
          >
            Sign In
          </Link>
        </div>
      </form>
      {/* verification modal */}
      <VerificationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      {/* show error below the form if needed */}
    </AuthWrapper>
  );
}
