"use client";

import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import TextInput from "@/ui/forms/text-input";
import Heading from "@/ui/heading";
import Table from "@/ui/table";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-4 md:space-y-6 px-4 md:px-6 lg:px-0">
      <h3 className="text-xl md:text-2xl lg:text-3xl text-[#122231] font-semibold">
        Cart
      </h3>

      <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-5">
        {/* table */}
        <div className="w-full lg:w-[70%]">
          <CardComponent width="100%">
            <div className="px-3 md:px-5">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <Table
                  tableHead={[
                    "PRODUCT",
                    "PRODUCT TYPE",
                    "PRICE",
                    "QUANTITY",
                    "SUBTOTAL",
                    "",
                  ]}
                  tableData={[
                    {
                      product: "FarmCloud App",
                      productType: "Basic Plan",
                      price: "17,000.99",
                      subtotal: "17,000.99",
                    },
                    {
                      product: "Tractor App",
                      productType: "Basic Plan",
                      price: "11,000.99",
                      subtotal: "18,000.99",
                    },
                  ]}
                  renderRow={(row) => (
                    <>
                      <td className="px-4 lg:px-6">
                        <div className="flex items-center gap-2 lg:gap-3">
                          <Image
                            src={"/product-placeholder.svg"}
                            alt="Product Image"
                            height={40}
                            width={40}
                          />
                          <p className="text-sm lg:text-base whitespace-nowrap">{row.product}</p>
                        </div>
                      </td>
                      <td className="px-4 lg:px-6">
                        <div className="border border-[#7B91B0] h-10 w-[120px] rounded flex justify-between items-center py-2 px-3">
                          <p className="text-sm text-[#444A6D] whitespace-nowrap">
                            {row.productType}
                          </p>
                          <Icon
                            icon={"mingcute:down-line"}
                            color="#444A6D"
                            height={16}
                            width={16}
                          />
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 text-sm lg:text-base whitespace-nowrap">
                        NGN {row.price}
                      </td>
                      <td className="px-4 lg:px-6">
                        <div className="h-[50px] rounded-full w-[125px] border border-[#E6E6E6] p-2 flex justify-between items-center text-[#1A1A1A]">
                          <button className="size-[34px] rounded-full bg-[#F2F2F2] flex justify-center items-center hover:bg-[#E0E0E0] transition-colors">
                            -
                          </button>
                          <p>1</p>
                          <button className="size-[34px] rounded-full bg-[#F2F2F2] flex justify-center items-center hover:bg-[#E0E0E0] transition-colors">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 lg:px-6 text-sm lg:text-base font-medium whitespace-nowrap">
                        NGN {row.subtotal}
                      </td>
                      <td className="px-4 lg:px-6">
                        <button className="hover:bg-gray-100 p-1 rounded transition-colors">
                          <Icon
                            icon={"carbon:close-outline"}
                            height={24}
                            width={24}
                            color="#CCCCCC"
                          />
                        </button>
                      </td>
                    </>
                  )}
                />
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden space-y-4">
                {[
                  {
                    product: "FarmCloud App",
                    productType: "Basic Plan",
                    price: "17,000.99",
                    subtotal: "17,000.99",
                  },
                  {
                    product: "Tractor App",
                    productType: "Basic Plan",
                    price: "11,000.99",
                    subtotal: "18,000.99",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-[#E6E6E6] rounded-lg p-4 space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <Image
                          src={"/product-placeholder.svg"}
                          alt="Product Image"
                          height={50}
                          width={50}
                        />
                        <div>
                          <p className="font-medium text-[#122231]">
                            {item.product}
                          </p>
                          <p className="text-sm text-[#444A6D]">
                            {item.productType}
                          </p>
                        </div>
                      </div>
                      <button className="p-1">
                        <Icon
                          icon={"carbon:close-outline"}
                          height={20}
                          width={20}
                          color="#CCCCCC"
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E6E6E6] text-xs md:text-sm">
                      <span className="text-[#444A6D]">Price:</span>
                      <span className="font-medium">NGN {item.price}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs md:text-sm">
                      <span className="text-[#444A6D]">Quantity:</span>
                      <div className="h-[40px] rounded-full w-[110px] border border-[#E6E6E6] p-1.5 flex justify-between items-center text-[#1A1A1A]">
                        <button className="size-[28px] rounded-full bg-[#F2F2F2] flex justify-center items-center text-sm">
                          -
                        </button>
                        <p>1</p>
                        <button className="size-[28px] rounded-full bg-[#F2F2F2] flex justify-center items-center text-sm">
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E6E6E6] text-xs md:text-sm">
                      <span className="text-[#444A6D]">Subtotal:</span>
                      <span className="font-semibold text-[#122231]">
                        NGN {item.subtotal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between mt-4 md:mt-6 gap-3">
                <div className="w-full sm:w-[160px]">
                  <Button content="Return to shop" variant="plain" />
                </div>
                <div className="w-full sm:w-[160px]">
                  <Button content="Update Cart" variant="plain" />
                </div>
              </div>
            </div>
          </CardComponent>
        </div>

        {/* cart total */}
        <div className="w-full lg:w-[30%]">
          <CardComponent width="100%">
            <div className="px-4 md:px-5 space-y-4">
              <Heading heading="Cart Total" />
              <div className="space-y-1 text-xs md:text-base">
                <div className="h-12 flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <p className="text-[#444A6D]">Subtotal:</p>
                  <p className="text-[#222B45] font-semibold">NGN 17,000.99</p>
                </div>
                <div className="h-12 flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <p className="text-[#444A6D]">Tax:</p>
                  <p className="text-[#222B45] font-semibold">NGN 1000.99</p>
                </div>
                <div className="h-12 flex justify-between items-center py-3">
                  <p className="text-[#444A6D] text-base md:text-lg">Total:</p>
                  <p className="text-[#222B45] font-bold">NGN 18,000.99</p>
                </div>
              </div>
              <Button content="Proceed to checkout" href="/checkout" />
            </div>
          </CardComponent>
        </div>
      </div>

      {/* Coupon Code */}
      <div className="w-full lg:w-[65%]">
        <CardComponent width="100%">
          <div className="px-4 md:px-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <Heading heading="Coupon Code" />
            <div className="w-full md:w-[500px] relative">
              <TextInput
                name="couponCode"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter code"
              />
              <button className="absolute right-0 top-0 bg-[#333333] rounded-md h-10 md:h-12 w-fit sm:w-[180px] md:w-[220px] py-3 px-3 md:px-4 text-white text-xs md:text-base hover:bg-[#222222] transition-colors">
                Apply Coupon
              </button>
            </div>
          </div>
        </CardComponent>
      </div>
    </div>
  );
}
