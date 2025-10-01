"use client";

import AuthWrapper from "@/components/auth/auth-wrapper";
import authAPI from "@/services/api-calls";
import Button from "@/ui/button";
import EmailInput from "@/ui/forms/email-input";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ForgotPassword() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    email: "",
  });
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await authAPI.forgotPassword(userData);
      toast.success(response.message || "Sent Successfully!");
      router.push("/reset-password");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <AuthWrapper
      heading="Forgot Password"
      subtitle="Enter the email address you logged in with"
    >
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[400px] space-y-10 mt-14"
      >
        <EmailInput
          name="email"
          label="Email"
          placeholder="Enter email address"
          value={userData.email}
          onChange={handleInputChange}
        />
        <Button
          isLoading={isLoading}
          isDisabled={isLoading}
          content="Continue"
        />
      </form>
    </AuthWrapper>
  );
}
