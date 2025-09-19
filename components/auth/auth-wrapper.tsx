"use client";

import Image from "next/image";

type AuthWrapperProps = {
  children: React.ReactNode;
  heading: string;
  subtitle?: string;
};

export default function AuthWrapper({ children, heading, subtitle }: AuthWrapperProps) {
  const images = [
    "/images/auth/auth-image-1.svg",
    "/images/auth/auth-image-2.svg",
    "/images/auth/auth-image-3.svg",
    "/images/auth/auth-image-4.svg",
    "/images/auth/auth-image-5.svg",
  ];

  return (
    <section className="h-screen md:h-fit flex justify-center items-center py-[20px] px-5 md:px-[100px] bg-[#F2F7F3]">
      <div className="flex justify-center items-center h-full md:h-[680px] max-h-[700px] w-full">
        <div className="w-full h-full bg-[#16A249] rounded-l-4xl hidden md:block"></div>
        <div className="w-full h-fit md:h-full bg-white md:rounded-r-4xl relative px-5 md:px-20 py-10 space-y-3.5 z-10">
          {/* images */}
          <div className="flex items-center -space-x-5">
            {images.map((img, idx) => (
              <div key={idx} className="size-10 md:size-[70px] relative">
                <Image
                key={idx}
                src={img}
                alt={`Image - ${idx}`}
                fill
                className="object-cover"
              />
              </div>
            ))}
          </div>
          <h1 className="text-[#122231] font-medium text-xl md:text-4xl">{heading}</h1>
          {subtitle && <p className="text-sm md:text-base text-[#122231]">{subtitle}</p>}
          <div>{children}</div>

          {/* watermark image */}
          <Image
            src={"/images/auth/auth-watermark.svg"}
            alt="Digital Market Place"
            height={200}
            width={1000}
            className="absolute right-0 bottom-0 rounded-br-4xl"
          />
        </div>
      </div>
    </section>
  );
}
