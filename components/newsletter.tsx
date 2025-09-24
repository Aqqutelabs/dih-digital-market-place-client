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
    <div className="bg-[#F7F7F7] p-12 flex justify-between items-center">
      {/* text */}
      <div className="space-y-1 w-[440px]">
        <h3 className="text-[#222B45] font-bold text-2xl">
          Subcribe our Newsletter
        </h3>
        <p className="font-normal text-base text-[#444A6D]">
          Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
          Phasellus imperdiet elit eu magna.
        </p>
      </div>
      {/* email */}
      <div className="w-[500px] relative">
        <EmailInput
          name="email"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Your email address"
        />
        <button className="absolute right-0 top-0 bg-[#16A249] rounded-md h-12 w-[100px] py-3 px-4 text-white">
          Subscribe
        </button>
      </div>
      {/* socials */}
      <div className="flex gap-3 items-center">
        {socials.map((icon, index) => (
          <div
            key={index}
            className="size-10 rounded-full flex justify-center items-center  bg-gray-400 hover:bg-[#16A249] hover:text-white hover:cursor-pointer transition-colors duration-300"
          >
            <Icon icon={icon} color="white" height={22} width={22} />
          </div>
        ))}
      </div>
    </div>
  );
}
