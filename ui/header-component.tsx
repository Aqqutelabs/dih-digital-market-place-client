"use client";

import { useEffect, useState } from "react";
import SearchInput from "./search-input";
import { Icon } from "@iconify/react";
import Avatar from "./avatar";
import { breadcrumbs } from "@/lib/config/breadcrumbs";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";
import authAPI from "@/services/api-calls";

export default function Header() {
  const [query, setQuery] = useState("");
  const [fullName, setFullName] = useState<string>("");
  const pathname = usePathname();
  const matched = breadcrumbs.find((item) => pathname === item.href);
  const { openMobile } = useSidebar();

  useEffect(() => {
    const getUsername = async () => {
      try {
        const response = await authAPI.getUser();
        if (response.data.user.fullName) {
          setFullName(response.data.user.fullName); // ✅ update state
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unexpected error occurred";
        console.error(errorMessage);
      }
    };

    getUsername();
  }, []);

  return (
    <nav className="flex justify-between items-center h-[70px] px-6">
      {/* breadcrumb and search bar */}
      <div className="flex gap-10 items-center">
        <h4 className="font-semibold text-sm">{matched?.header}</h4>
        <div className="w-[320px] hidden md:block">
          <SearchInput
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search product, supplier, order"
          />
        </div>
      </div>

      {/* notifications icon and avatar */}
      <div className="flex gap-1.5 items-center">
        <div className="size-10 flex justify-center items-center">
          <Icon
            icon={"famicons:notifications-outline"}
            height={24}
            width={24}
            color="#5D6679"
          />
        </div>
        <Avatar name={fullName || "User"} />
        <Icon
          icon={"material-symbols:menu-rounded"}
          height={24}
          width={24}
          color="#5D6679"
          onClick={openMobile}
          className="block md:hidden"
        />
      </div>
    </nav>
  );
}
