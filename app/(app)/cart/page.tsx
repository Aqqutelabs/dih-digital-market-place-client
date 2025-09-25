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
    <div className="space-y-4">
      <h3 className="text-2xl text-[#122231] font-semibold">Cart</h3>
      <div className="flex items-start gap-5">
        {/* table */}
        <CardComponent width="70%">
          <div className="px-5">
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
                  <td className="px-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/product-placeholder.svg"}
                        alt="Product Image"
                        height={40}
                        width={40}
                      />
                      <p>{row.product}</p>
                    </div>
                  </td>
                  <td className="px-6">
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
                  <td className="px-6">NGN {row.price}</td>
                  <td className="px-6">
                    <div className="h-[50px] rounded-full w-[125px] border border-[#E6E6E6] p-2 flex justify-between items-center text-[#1A1A1A]">
                      <button className="size-[34px] rounded-full bg-[#F2F2F2] flex justify-center items-center">
                        -
                      </button>
                      <p>1</p>
                      <button className="size-[34px] rounded-full bg-[#F2F2F2] flex justify-center items-center">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6">NGN {row.subtotal}</td>
                  <td className="px-6">
                    <Icon
                      icon={"carbon:close-outline"}
                      height={24}
                      width={24}
                      color="#CCCCCC"
                    />
                  </td>
                </>
              )}
            />
            <div className="flex items-center justify-between mt-6">
              <div className="w-[160px]">
                <Button content="Return to shop" variant="plain" />
              </div>
              <div className="w-[160px]">
                <Button content="Update Cart" variant="plain" />
              </div>
            </div>
          </div>
        </CardComponent>

        {/* cart total */}
        <CardComponent width="30%">
          <div className="px-5 space-y-4">
            <Heading heading="Cart Total" />
            <div className="space-y-1 text-base">
              <div className="h-12 flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                <p className="text-[#444A6D]">Subtotal:</p>
                <p className="text-[#222B45] font-semibold">NGN 17,000.99</p>
              </div>
              <div className="h-12 flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                <p className="text-[#444A6D]">Tax:</p>
                <p className="text-[#222B45] font-semibold">NGN 1000.99</p>
              </div>
              <div className="h-12 flex justify-between items-center py-3">
                <p className="text-[#444A6D] text-lg">Total:</p>
                <p className="text-[#222B45] font-bold">NGN 18,000.99.00</p>
              </div>
            </div>
            <Button content="Proceed to checkout" href="/checkout" />
          </div>
        </CardComponent>
      </div>
      <CardComponent width="65%">
        <div className="px-5 flex items-center justify-between">
          <Heading heading="Coupon Code" />
          <div className="w-[500px] relative">
            <TextInput
              name="couponCode"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter code"
            />
            <button className="absolute right-0 top-0 bg-[#333333] rounded-md h-12 w-[220px] py-3 px-4 text-white">
              Apply Coupon
            </button>
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
