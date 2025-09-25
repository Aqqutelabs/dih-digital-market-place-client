"use client";
import SearchInput from "@/ui/search-input";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MarketplaceHeader() {
  const [query, setQuery] = useState("");

  const headerLinks = [
    { name: "Home", route: "/" },
    { name: "Software", route: "/software" },
    { name: "Hardware", route: "/hardware" },
    { name: "Digital Products", route: "/digital-products" },
    { name: "All Products", route: "/all-products" },
  ];

  const pathname = usePathname();

  return (
    <header className="px-10">
      {/* cta and preferences */}
      <div className="flex justify-end items-center gap-5 py-3 border-b border-[#E5E5E5] text-gray-600 text-xs">
        <div className="flex gap-1 items-center">
          <span className="hover:text-[#16A249] cursor-pointer">Eng</span>
          <span className="hover:text-[#16A249] cursor-pointer">NGN</span>
        </div>
        |
        <div className="flex gap-1 items-center">
          <span className="hover:text-[#16A249] cursor-pointer">Sign In</span>/
          <span className="hover:text-[#16A249] cursor-pointer">Sign Up</span>
        </div>
      </div>
      <div className="flex justify-between items-center py-3">
        {/* logo */}
        <div className="relative w-[140px] h-[69px] py-5">
          <Image
            src={"/wider-net-logo.svg"}
            alt="DeliverPoint 2025"
            fill
            className="object-contain"
          />
        </div>
        {/* search */}
        <div className="w-[500px] relative">
          <SearchInput
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
          />
          <button className="absolute right-0 top-0 bg-[#16A249] rounded-r-md h-11 w-[100px] py-3 px-4 text-white">
            Search
          </button>
        </div>
        <div className="text-[#16A249] h-[32px] w-fit p-1 border-b border-[#16A249]">
          <Link href={"/sign-up"} className="text-base cursor-pointer">Sell a Product</Link>
        </div>
      </div>
      <div className="bg-[#1A1A1A] h-[68px] w-full flex justify-between items-center px-4">
        <ul className="flex gap-8 items-center">
          {headerLinks.map((link, index) => (
            <Link
              href={link.route}
              key={index}
              className={`font-semibold text-white text-base py-2 rounded-b-[2px] h-10 ${
                pathname === link.route && "border-b-3 border-[#EFDD76]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
        <div className="flex gap-4 items-center py-4 px-6">
          <Link href={"/cart"}>
            <Icon
              icon={"iconamoon:shopping-bag-thin"}
              height={30}
              width={30}
              color="white"
            />
          </Link>
          <Icon icon={"circum:user"} height={30} width={30} color="white" />
        </div>
      </div>
    </header>
  );
}
