"use client";

import Button from "@/ui/button";
import Image from "next/image";

export default function CompletedScreen() {
    return (
        <section className="flex flex-col justify-center items-center gap-5">
            <Image
            src={"/images/order-completed.svg"}
            alt="Completed Icon"
            height={260}
            width={345}
            className="object-cover"
            />
            <h1 className="text-4xl font-semibold text-[#222B45] text-center">Order Completed</h1>
            <p className="text-xl text-[#444A6D] font-semibold">Your Coupon is on its way!</p>
            <div className="w-[320px] space-y-4">
                <Button content="Check Email"/>
                <Button content="Continue Shopping" isSecondary />
            </div>
        </section>
    )
}