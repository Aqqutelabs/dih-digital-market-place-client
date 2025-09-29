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
    <div className="shadow-md rounded-xl border border-[#D7D7D7] h-auto md:h-[400px] w-full max-w-[335px] mx-auto hover:shadow-xl transition-shadow duration-300">
      {/* main image and tag */}
      <div className="rounded-t-xl h-[180px] md:h-[190px] relative w-full overflow-hidden">
        <Image
          src={image}
          alt="Product Image"
          fill
          className="object-cover rounded-b-md rounded-t-xl"
        />
        <div className="absolute bottom-0 h-[30px] w-full bg-[#FB9219] flex justify-center items-center text-white text-sm font-medium">
          Best Seller
        </div>
      </div>
      
      {/* product info */}
      <div className="p-4 md:p-6 space-y-4 md:space-y-6">
        <div className="space-y-1.5 md:space-y-2 text-[#444A6D]">
          <h4 className="font-semibold text-lg md:text-xl text-center line-clamp-1">
            {name}
          </h4>
          <p className="font-normal text-sm md:text-base text-center line-clamp-2">
            {description}
          </p>
        </div>
        
        {/* rating */}
        <div className="flex justify-center items-center">
          <Image 
            src={"/images/rate-placeholder.svg"} 
            alt="Rating"
            height={18}
            width={110}
            className="md:h-[20px] md:w-[120px]"
          />
        </div>
        
        {/* pricing */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[#222B45]">
          <p className="text-lg md:text-xl font-semibold">
            NGN{lifetime_price} <span className="text-xs md:text-sm font-normal">/lifetime</span>
          </p>
          <p className="text-xs md:text-sm font-normal text-gray-500 line-through">
            NGN{price}
          </p>
        </div>
      </div>
    </div>
  );
}