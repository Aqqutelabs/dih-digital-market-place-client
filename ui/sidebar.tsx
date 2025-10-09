"use client";

import { useSidebar } from "@/context/SidebarContext";
import { sidebarData } from "@/lib/config/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { authAPI } from "@/services/api-calls";
import toast, { Toaster } from "react-hot-toast";

export default function Sidebar() {
  const { mobileOpen, closeMobile } = useSidebar();
  const handleLogout = async () => {
    try {
      await authAPI.signOut();
      toast.success("Logged out successfully");
      router.push("/sign-in");
    } catch (err) {
      toast.error("Logout failed");
      console.error("Logout error:", err);
    }
  };
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      {/* overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMobile}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-40 flex flex-col items-start p-4 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-all duration-300 ease-in-out`}
      >
        <div className="relative w-3/5 md:w-full h-10 md:h-[69px] py-5">
          <Image
            src={"/wider-net-logo.svg"}
            alt="DeliverPoint 2025"
            fill
            className="object-contain"
          />
        </div>

        <section className="flex flex-col justify-between h-full w-full mt-10">
          <div className="space-y-2.5">
            {sidebarData.map((link, index) => {
              const isActive = pathname.startsWith(link.url);
              return (
                <Link
                  key={index}
                  href={link.url}
                  onClick={() => {
                    router.push(link.url);
                    closeMobile();
                  }}
                  className={`h-9 nd:h-11 w-full px-4 py-2.5 rounded-lg flex items-center gap-2 ${
                    isActive
                      ? "bg-[#16A249] text-white font-semibold"
                      : "hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  <Icon
                    icon={isActive ? link.iconActive : link.iconRegular}
                    width={20}
                    height={20}
                    color={isActive ? "#FFF" : "#737373"}
                  />
                  <span className="text-xs md:text-sm">{link.name}</span>
                </Link>
              );
            })}
          </div>
          <div
            onClick={handleLogout}
            className={`h-9 md:h-10 w-full px-4 py-2.5 rounded-lg flex items-center gap-2 text-[#FF4D4F] cursor-pointer hover:text-red-600 transition-colors duration-300`}
          >
            <Icon
              icon={"streamline:logout-1"}
              width={20}
              height={20}
              color={"#FF4D4F"}
            />
            <span className="text-xs md:text-sm">Logout</span>
          </div>
        </section>
      </aside>
      <Toaster />
    </>
  );
}
