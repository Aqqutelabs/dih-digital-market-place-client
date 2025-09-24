"use client";

import { useState } from "react";
import DropDown from "./forms/select-dropdown";

export default function CategoryWrapper({
  children,
  title,
  product_count,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  product_count: string;
}>) {
  const categories = [
    "Ai Tools",
    "Monitoring Apps",
    "Book Keeping",
    "Farm Operations",
    "Finance",
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex min-h-screen flex-col md:flex-row gap-8">
      {/* sidebar */}
      <div className="w-[248px] h-fit flex-none transition-all duration-300 ease-in-out border border-[#E6E6E6] ">
        <div className="py-4 px-5 h-14 font-semibold text-[#1A1A1A] text-base ">
          Select Category:
        </div>
        {categories.map((category, index) => (
          <div
            onClick={() => setActiveTab(index)}
            key={index}
            className={`h-[55px] w-full py-4 px-7 text-sm font-normal hover:cursor-pointer ${
              activeTab === index
                ? "bg-[#00B207] text-white"
                : "bg-transparent text-[#1A1A1A]"
            }`}
          >
            {category}
          </div>
        ))}
      </div>
      <section className="flex-grow flex flex-col overflow-hidden">
        {/* header */}
        <header className="text-[#222B45]">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="flex justify-between items-center">
            <p className="text-base">{product_count} Products</p>
            {/* filter */}
            <div className="flex items-center gap-2">
              <p className="text-base">Sort By:</p>
              <DropDown
                placeholder="Recommended"
                value=""
                onChange={() => {}}
                options={[]}
                name="sort"
              />
            </div>
          </div>
        </header>
        <div className={`flex-grow overflow-y-auto py-6`}>{children}</div>
      </section>
    </div>
  );
}
