"use client";

import Image from "next/image";

export default function Footer() {
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

  return (
    <footer className="bg-[#1A1A1A] w-full min-h-fit md:min-h-[370px] pt-8 md:pt-10 lg:pt-[60px] px-4 sm:px-6 md:px-8 lg:px-[50px] pb-6 md:pb-0">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-[60px]">
        {/* info and links */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
          {/* info */}
          <div className="space-y-4 w-full lg:w-[380px] lg:flex-shrink-0">
            {/* logo */}
            <div className="relative w-[140px] h-[69px] py-5">
              <Image
                src={"/wider-net-logo-dark.svg"}
                alt="DeliverPoint 2025"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-[#808080] font-normal leading-relaxed">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-medium text-sm">
              <span className="text-white pb-1.5 border-b-2 border-[#20B526] whitespace-nowrap">
                (219) 555-0114
              </span>
              <span className="text-[#808080]">or</span>
              <span className="text-white pb-1.5 border-b-2 border-[#20B526] break-all sm:break-normal">
                Proxy@gmail.com
              </span>
            </div>
          </div>
          
          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-16 md:gap-x-20 lg:gap-x-12 gap-y-8 w-full lg:w-auto">
            {links.map((link, index) => (
              <div key={index} className="space-y-4 md:space-y-5">
                <h3 className="font-medium text-white text-base">{link.title}</h3>
                <ul className="space-y-2.5 md:space-y-3 text-sm text-[#999999]">
                  {link.lists.map((l, idx) => (
                    <li 
                      key={idx} 
                      className="hover:text-white cursor-pointer transition-colors duration-200 whitespace-nowrap"
                    >
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* copyright */}
        <div className="py-5 md:py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 border-t border-[#333333]">
          <p className="text-sm text-[#808080] font-normal">
            WiderNetFarms © 2025. All Rights Reserved
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {images.map((img, index) => (
              <div key={index} className="relative h-9 w-10 sm:h-10 sm:w-12 md:h-11 md:w-14 lg:w-16 flex-shrink-0">
                <Image src={img} alt="Payment Method" fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}