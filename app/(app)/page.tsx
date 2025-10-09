"use client";

import Image from "next/image";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import Button from "@/ui/button";
import { products } from "@/lib/demo-data/products";
import ProductCard from "@/ui/market-place-product-card";


export default function Home() {
  const display_products = [1, 2, 3, 4];
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350; // one card width
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const cards = [
    {
        title: "Exclusive, high-value finds",
        subtitle: "Cutting-edge software, unbeatable prices",
        icon: "lineicons:truck-delivery-1",
    },
    {
        title: "60-day refund guarantee",
        subtitle: "Quick, no-stress returns within 60 days",
        icon: "basil:shopping-bag-outline",
    },
    {
        title: "“We’ve got you covered” guarantee",
        subtitle: "Secure purchases on every Select tool. Learn more.",
        icon: "ph:package-light",
    },
  ];

  return (
    <section>
        {/* hero section */}
      <div className="relative rounded-xl bg-[#136C34] h-full md:h-[560px] flex flex-col md:flex-row items-start overflow-hidden py-12 md:pt-24 md:pl-16 md:pr-8 px-8 gap-10 md:gap-20 text-white">
        {/* CTA and text */}
        <div className="space-y-6 flex-shrink-0 w-full md:w-[40%]">
          <h1 className="font-semibold text-3xl leading-snug">
            The best <span className="font-bold text-[#EFDD76]">Agro-Tech</span>
            <br className="hidden md:block" /> Products, at unbeatable
            <br className="hidden md:block" /> discounts!
          </h1>
          <button className="bg-[#16A249] py-2 px-6 h-11 w-fit rounded-[10px] cursor-pointer hover:bg-[#0f9c43] transition-colors duration-300">
            See all Products
          </button>
        </div>

        {/* Products with scroll */}
        <div
          ref={scrollRef}
          className="flex items-center gap-5 h-[420px] w-full md:w-[60%] overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth"
        >
          {display_products.map((product, i) => (
            <div
              key={i}
              className="bg-[#0D5527] rounded-xl h-full w-full max-w-[350px] flex-shrink-0 p-6 flex flex-col justify-between"
            >
              {/* text */}
              <div className="space-y-6">
                <h4 className="font-semibold text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  ...
                </h4>
                <div>
                  <p className="text-xs md:text-sm font-semibold">Product Name</p>
                  <p className="text-sm md:text-base font-normal">
                    <span>NGN17,500/lifetime</span>{" "}
                    <span className="line-through">NGN26,000</span>
                  </p>
                </div>
              </div>

              {/* image */}
              <div className="relative w-full h-[140px] md:h-[180px]">

              <Image
                src={"/images/placeholder-image.svg"}
                alt="Product Image"
                fill
                className="object-cover rounded-md"
              />
              </div>
              <Button content="Add to Cart" variant="plain" />
            </div>
          ))}
        </div>

        {/* buttons for scrolling */}
        <div className="absolute right-10 md:right-3/5 bottom-1 md:bottom-10 flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="size-9 flex justify-center items-center bg-white rounded-full text-black shadow cursor-pointer hover:bg-gray-200"
          >
            <Icon icon={"simple-line-icons:arrow-left"} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="size-9 flex justify-center items-center bg-white rounded-full text-black shadow cursor-pointer hover:bg-gray-200"
          >
            <Icon icon={"simple-line-icons:arrow-right"} />
          </button>
        </div>
      </div>

      {/* flash sales */}
      <div className="space-y-10 my-[100px]">
        <h3 className="text-[#444A6D] font-semibold text-2xl md:text-[32px] text-center">Flash Sales</h3>
        <div className="flex flex-col md:flex-row items-center gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
            {products.slice(0, 4).map(product => (
                <ProductCard
                key={product.id}
                image={"/images/product-placeholder.svg"}
                name={product["product-name"]}
                description={"Lorem ipsum dolor sit amet"}
                price={product["base-price"]}
                lifetime_price={product["listing-price"]}
                />
            ))}
        </div>
      </div>

      {/* flex box */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-center">
        {cards.map((card, index) => (
            <div key={index} className="py-[30px] px-5 flex items-center gap-4">
                {/* icon */}
                <div className={`size-18 rounded-full flex justify-center items-center ${index % 2 ? 'bg-[#00B207] text-white' : 'bg-[#EDF2EE] text-[#00B207]'}`}>
                    <Icon icon={card.icon} height={40} width={40} />
                </div>

                {/* text */}
                <div className="space-y-2 text-[#444A6D]">
                    <p className="text-lg font-semibold">{card.title}</p>
                    <p className="text-sm">{card.subtitle}</p>
                </div>
            </div>
        ))}
      </div>

       {/* Featured Products */}
      <div className="space-y-10 my-[100px]">
        <h3 className="text-[#444A6D] font-semibold text-2xl md:text-[32px] text-center">Featured Products</h3>
        <div className="flex flex-col md:flex-row items-center gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide scroll-smooth">
            {products.map(product => (
                <ProductCard
                key={product.id}
                image={"/images/placeholder-image.svg"}
                name={product["product-name"]}
                description={"Lorem ipsum dolor sit amet"}
                price={product["base-price"]}
                lifetime_price={product["listing-price"]}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
