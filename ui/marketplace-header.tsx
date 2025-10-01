"use client";
import SearchInput from "@/ui/search-input";
import Image from "next/image";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MarketplaceHeader() {
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const headerLinks = [
    { name: "Home", route: "/" },
    { name: "Software", route: "/software" },
    { name: "Hardware", route: "/hardware" },
    { name: "Digital Products", route: "/digital-products" },
    { name: "All Products", route: "/all-products" },
  ];

  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="px-5 md:px-10 relative">
      {/* cta and preferences */}
      <div className="flex items-center justify-end gap-5 py-3 border-b border-[#E5E5E5] text-gray-600 text-[9px] md:text-xs">
        <div className="flex gap-1 items-center">
          <span className="hover:text-[#16A249] cursor-pointer transition-colors">
            Eng
          </span>
          <span className="hover:text-[#16A249] cursor-pointer transition-colors">
            NGN
          </span>
        </div>
        |
        <div className="flex gap-1 items-center">
          <span className="hover:text-[#16A249] cursor-pointer transition-colors">
            Sign In
          </span>
          /
          <span className="hover:text-[#16A249] cursor-pointer transition-colors">
            Sign Up
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-center py-3">
        {/* logo */}
        <div className="relative w-[120px] md:w-[140px] h-[69px] py-5">
          <Image
            src={"/wider-net-logo.svg"}
            alt="DeliverPoint 2025"
            fill
            className="object-contain"
          />
        </div>
        
        {/* search */}
        <div className="w-full max-w-[500px] relative hidden md:block mx-4">
          <SearchInput
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
          />
          <button className="absolute right-0 top-0 bg-[#16A249] rounded-r-md h-11 w-[100px] py-3 px-4 text-white hover:bg-[#148a3d] transition-colors">
            Search
          </button>
        </div>
        
        <div className="text-[#16A249] md:h-[32px] w-fit p-1 border-b border-[#16A249] text-xs md:text-base whitespace-nowrap">
          <Link href={"/sign-in"} className="cursor-pointer hover:text-[#148a3d] transition-colors">
            Sell a Product
          </Link>
        </div>
      </div>
      
      {/* Mobile Search */}
      <div className="w-full relative block md:hidden mb-3">
        <SearchInput
          name="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
        />
        <button className="absolute right-0 top-0 bg-[#16A249] rounded-r-md h-11 w-[80px] py-3 px-3 text-white text-sm hover:bg-[#148a3d] transition-colors">
          Search
        </button>
      </div>
      
      <div className="bg-[#1A1A1A] h-[68px] w-full flex justify-end md:justify-between items-center px-0 md:px-4">
        <ul className="hidden md:flex gap-8 items-center">
          {headerLinks.map((link, index) => (
            <Link
              href={link.route}
              key={index}
              className={`font-semibold text-white text-base py-2 rounded-b-[2px] h-10 hover:text-[#EFDD76] transition-colors ${
                pathname === link.route && "border-b-3 border-[#EFDD76]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
        
        <div className="flex gap-4 items-center py-4 px-6">
          <Link href={"/cart"} className="hover:opacity-70 transition-opacity">
            <Icon
              icon={"iconamoon:shopping-bag-thin"}
              height={30}
              width={30}
              color="white"
            />
          </Link>
          <Icon
            icon={"circum:user"}
            height={30}
            width={30}
            color="white"
            className="hover:opacity-70 transition-opacity cursor-pointer"
          />
          <button
            onClick={toggleMobileMenu}
            className="block md:hidden hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <Icon
              icon={isMobileMenuOpen ? "material-symbols:close-rounded" : "material-symbols:menu-rounded"}
              height={30}
              width={30}
              color="white"
            />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Menu */}
          <div className="absolute top-64 right-0 w-full bg-white z-50 md:hidden shadow-2xl animate-slideInRight">
            <ul className="flex flex-col py-4">
              {headerLinks.map((link, index) => (
                <Link
                  href={link.route}
                  key={index}
                  onClick={closeMobileMenu}
                  className={`font-semibold text-gray-800 text-base py-4 px-6 hover:bg-gray-50 transition-colors ${
                    pathname === link.route && "bg-green-50 text-[#16A249] border-l-4 border-[#16A249]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
      
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </header>
  );
}