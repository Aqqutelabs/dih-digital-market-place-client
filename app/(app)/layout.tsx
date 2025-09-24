"use client";

import MarketplaceHeader from "@/ui/marketplace-header";
import { Open_Sans } from "next/font/google";
import { Icon } from "@iconify/react";
import Footer from "@/ui/footer";
import { usePathname } from "next/navigation";
import NewsletterComponent from "@/components/newsletter";

const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function BillingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const routesWithNewsletter = ["/cart", "/checkout"];
  return (
    <section
      className={`${open_sans.className} flex flex-col justify-between h-screen`}
    >
      {/* headers */}
      <MarketplaceHeader />

      {/* back button */}
      {routesWithNewsletter.includes(pathname) && (
        <div className="mt-5 gap-2 items-center flex ml-10 hover:cursor-pointer">
          <Icon
            icon={"icon-park-outline:arrow-left"}
            color="#D97706"
            height={28}
            width={28}
          />
          <p
            onClick={() => window.history.back()}
            className="font-semibold text-[#D97706] text-base"
          >
            Back to shop
          </p>
        </div>
      )}
      <div className="px-10 my-10">{children}</div>
      {routesWithNewsletter.includes(pathname) && <NewsletterComponent />}
      <Footer />
    </section>
  );
}
