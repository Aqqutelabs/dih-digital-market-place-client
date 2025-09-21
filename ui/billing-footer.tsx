"use client";

import Image from "next/image";
import { useState } from "react";
import EmailInput from "./forms/email-input";
import { Icon } from "@iconify/react";

export default function BillingFooter() {
  const [query, setQuery] = useState("");
  const images = [
    "/images/payment-methods/epay.svg",
    "/images/payment-methods/visa.svg",
    "/images/payment-methods/discover.svg",
    "/images/payment-methods/mastercard.svg",
    "/images/payment-methods/secure-payment.svg",
  ];

  const links = [
    {
      title: "My Account",
      lists: ["My Account", "Order History", "Shopping Cart", "Wishlist"],
    },
    {
      title: "Helps",
      lists: ["Contact", "Faqs", "Terms & Condition", "Privacy Policy"],
    },
    {
      title: "Proxy",
      lists: ["About", "Shop", "Products"],
    },
    {
      title: "Categories",
      lists: ["Software", "Hardware", "Digital Products"],
    },
  ];

  const socials = ["jam:facebook", "jam:twitter", "jam:pinterest", "jam:instagram"];

  return (
    <>
      {/* newsletter */}
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
        {/* search */}
        <div className="w-[500px] relative">
          <EmailInput
            name="email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Your email address"
          />
          <button className="absolute right-0 top-0 bg-[#16A249] rounded-r-md h-12 w-[100px] py-3 px-4 text-white">
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

      <footer className="bg-[#1A1A1A] w-full h-[370px] pt-[60px] px-[50px] space-y-[60px]">
        {/* info and links */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* info */}
          <div className="space-y-4 w-[380px]">
            {/* logo */}
            <div className="relative w-[140px] h-[69px] py-5">
              <Image
                src={"/wider-net-logo-dark.svg"}
                alt="DeliverPoint 2025"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-[#808080] font-normal">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="space-x-4 font-medium text-sm">
              <span className="text-white pb-1.5 border-b-2 border-[#20B526] ">
                (219) 555-0114
              </span>
              <span className="text-[#808080]">or</span>
              <span className="text-white pb-1.5 border-b-2 border-[#20B526] ">
                Proxy@gmail.com
              </span>
            </div>
          </div>
          {links.map((link, index) => (
            <div key={index} className="space-y-5">
              <h3 className="font-medium text-white text-base">{link.title}</h3>
              <ul className="space-y-3 text-sm text-[#999999]">
                {link.lists.map((l, idx) => (
                  <li key={idx} className="hover:text-white cursor-pointer">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* copyright */}
        <div className="py-6 flex justify-between items-center h-20 border-t border-[#333333]">
          <p className="text-sm text-[#808080] font-normal">
            WiderNetFarms © 2025. All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            {images.map((img, index) => (
              <div key={index} className="relative h-11 w-16">
                <Image src={img} alt="Method" fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
