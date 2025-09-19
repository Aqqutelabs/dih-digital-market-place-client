"use client";

import { useState } from "react";

type PasswordInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  name: string;
};

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Enter your password",
  label,
  name,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="text-[10px] md:text-xs font-semibold text-[#171717] block">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          className="w-full border border-[#D8D8D8] rounded-lg py-1 px-3 h-10 md:h-12 outline-none placeholder:text-[#606062] font-normal text-xs md:text-sm leading-6 focus:border-[#16A249] focus:ring-1 focus:ring-[#16A249] focus:outline-none transition duration-200"
          autoComplete="password"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-[30%] text-[#16A249] text-[8px] md:text-[10px] hover:cursor-pointer"
        >
          {showPassword ? "HIDE" : "SHOW"}
        </span>
        {/* <Icon onClick={() => setShowPassword(!showPassword)} 
            icon={showPassword ? 'codicon:eye' : 'codicon:eye-closed'} 
            onClick={() => setShowPassword(!showPassword)} 
            
            color="gray"
            /> */}
      </div>
    </div>
  );
}
