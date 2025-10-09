"use client";

import { useState } from "react";
import EmailInput from "../ui/forms/email-input";
import { Icon } from "@iconify/react";

export default function NewsletterComponent() {
  const [query, setQuery] = useState("");

  const socials = [
    "jam:facebook",
    "jam:twitter",
    "jam:pinterest",
    "jam:instagram",
  ];

  return (
    <div className="bg-[#F7F7F7] p-6 md:p-12 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
      {/* text */}
      <div className="space-y-2 md:space-y-1 md:w-[440px] text-center md:text-left">
        <h3 className="text-[#222B45] font-bold text-lg sm:text-xl md:text-2xl">
          Subscribe to our Newsletter
        </h3>
        <p className="font-normal text-sm md:text-base text-[#444A6D]">
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
      </div>

      {/* email */}
      <div className="w-full md:w-[500px] relative">
        <EmailInput
          name="email"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Your email address"
        />
        <button className="absolute right-0 top-0 bg-[#16A249] rounded-md h-10 md:h-12 w-[90px] sm:w-[100px] py-3 px-4 text-white text-xs sm:text-base">
          Subscribe
        </button>
      </div>

      {/* socials */}
      <div className="flex gap-3 justify-start md:justify-end items-center">
        {socials.map((icon, index) => (
          <div
            key={index}
            className="size-9 sm:size-10 rounded-full flex justify-center items-center bg-gray-400 hover:bg-[#16A249] hover:text-white hover:cursor-pointer transition-colors duration-300"
          >
            <Icon icon={icon} color="white" height={20} width={20} />
          </div>
        ))}
      </div>
    </div>
  );
}
