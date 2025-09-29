"use client";

import { useState } from "react";
import DropDown from "./forms/select-dropdown";
import { Icon } from "@iconify/react";

export default function CategoryWrapper({
  children,
  title,
  product_count,
  categories,
}: Readonly<{
  children: React.ReactNode;
  title?: string;
  product_count?: string;
  categories: string[];
}>) {
  const [activeTab, setActiveTab] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleCategorySelect = (index: number) => {
    setActiveTab(index);
    closeSidebar();
  };

  return (
    <div className="flex min-h-screen flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 px-4 md:px-6 lg:px-0">
      {/* Mobile Category Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden w-full md:w-auto flex items-center justify-between gap-2 py-3 px-4 bg-white border border-[#E6E6E6] rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <span className="font-semibold text-[#1A1A1A] text-sm md:text-base">
          {categories[activeTab]}
        </span>
        <Icon
          icon="iconamoon:arrow-down-2-thin"
          className="text-[#1A1A1A]"
          width={24}
          height={24}
        />
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 h-full lg:h-fit
          w-[280px] sm:w-[320px] lg:w-[248px]
          flex-none transition-all duration-300 ease-in-out
          border border-[#E6E6E6] bg-white rounded-r-lg lg:rounded-lg
          shadow-2xl lg:shadow-none
          z-50 lg:z-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Sidebar Header */}
        <div className="py-4 px-5 h-14 font-semibold text-[#1A1A1A] text-base flex items-center justify-between border-b border-[#E6E6E6]">
          <span>Select Category:</span>
          <button
            onClick={closeSidebar}
            className="lg:hidden p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Icon icon="material-symbols:close-rounded" width={24} height={24} />
          </button>
        </div>

        {/* Categories */}
        <nav className="overflow-y-auto max-h-[calc(100vh-56px)] lg:max-h-none">
          {categories.map((category, index) => (
            <button
              onClick={() => handleCategorySelect(index)}
              key={index}
              className={`h-[55px] w-full py-4 px-5 lg:px-7 text-sm md:text-base font-normal hover:cursor-pointer transition-all duration-200 text-left ${
                activeTab === index
                  ? "bg-[#00B207] text-white font-medium"
                  : "bg-transparent text-[#1A1A1A] hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-grow flex flex-col overflow-hidden min-w-0">
        {/* Header */}
        <header className="text-[#222B45] space-y-3 md:space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            {title}
          </h1>
          {product_count && (
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
              <p className="text-sm md:text-base text-gray-600">
                {product_count} Products
              </p>
              {/* Filter */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <p className="text-sm md:text-base whitespace-nowrap">Sort By:</p>
                <div className="flex-grow sm:flex-grow-0 sm:min-w-[180px]">
                  <DropDown
                    placeholder="Recommended"
                    value=""
                    onChange={() => {}}
                    options={[]}
                    name="sort"
                  />
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="flex-grow overflow-y-auto py-4 md:py-6">
          {children}
        </div>
      </section>
    </div>
  );
}