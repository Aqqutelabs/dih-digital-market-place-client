"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

type SearchProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    placeholder?: string;
}

export default function SearchInput({
    value,
    onChange,
    name,
    placeholder = "Search ...",
}: SearchProps) {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <div className={`h-11 w-full outline-none group border border-[#F0F1F3] rounded px-4 text-xs md:text-sm flex gap-0.5 items-center bg-transparent ${isFocused ? 'border-[#16A249] ' : ''}`}>
        <Icon icon={"iconamoon:search-light"} height={20} width={20} color="#98A2B3" />
        <input
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="outline-none h-4/5 px-2.5 w-full"
      />
    </div>
  )}