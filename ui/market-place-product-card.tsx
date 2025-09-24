"use client";

import Image from "next/image";

type ProductProps = {
  image: string;
  name: string;
  description: string;
  price: string;
  lifetime_price: string;
};

export default function ProductCard({
  image,
  name,
  description,
  price,
  lifetime_price,
}: ProductProps) {
  return (
    <div className="shadow-md rounded-xl border border-[#D7D7D7] h-[400px] w-[335px]">
        {/* main image and tag */}
      <div className="rounded-xl h-[190px] relative w-full">
        <Image
          src={image}
          alt="Product Image"
          fill
          className="object-cover rounded-b-md rounded-t-xl"
        />
        <div className="absolute bottom-0 h-[30px] w-full bg-[#FB9219] flex justify-center items-center text-white rounded-b-md">
          Best Seller
        </div>
      </div>
      {/* product info */}
      <div className="p-6 space-y-8">
        <div className="space-y-2 text-[#444A6D]">
          <h4 className="font-semibold text-xl text-center">{name}</h4>
          <p className="font-normal text-base text-center truncate">
            {description}
          </p>
        </div>
        {/* temporary for rating */}
        <div className="flex justify-center items-center">
            <Image 
            src={"/images/rate-placeholder.svg"} 
            alt="Rating"
            height={20}
            width={120}
            />
        </div>
        <div className="flex items-end justify-center gap-2 text-[#222B45]">
          <p className="text-xl">
            NGN{lifetime_price} <span className="text-sm">/lifetime</span>
          </p>
          <p className="text-sm font-normal">NGN{price}</p>
        </div>
      </div>
    </div>
  );
}
