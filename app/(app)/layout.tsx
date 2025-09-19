
"use client";

import Header from "@/ui/header-component";
import Sidebar from "@/ui/sidebar";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="w-64 flex-none transition-all duration-300 ease-in-out">
        <Sidebar />
      </div>
      <section className="flex-grow flex flex-col overflow-hidden">
        <Header />
        <div className={`flex-grow overflow-y-auto p-6 bg-[#f9fcff] ${open_sans.className}`}>
          {children}
        </div>
      </section>
    </div>
  );
}
