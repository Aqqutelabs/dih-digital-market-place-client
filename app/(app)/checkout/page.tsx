"use client";

import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import EmailInput from "@/ui/forms/email-input";
import NumberInput from "@/ui/forms/number-input";
import TextInput from "@/ui/forms/text-input";
import Heading from "@/ui/heading";
import Image from "next/image";

export default function CheckoutPage() {
  const payment_methods = [
    { image: "/images/payment-methods/paystack.svg", text: "Paystack" },
    { image: "/images/payment-methods/paypal.svg", text: "Paypal" },
    { image: "/images/payment-methods/flutterwave.svg", text: "Flutterwave" },
  ];

  const orders = [
    {
      name: "FarmCloud App",
      image: "/product-placeholder.svg",
      price: "17,000.99",
    },
    {
      name: "Tractor App",
      image: "/product-placeholder.svg",
      price: "11,000.99",
    },
  ];
  return (
    <div className="space-y-4">
      <h3 className="text-2xl text-[#122231] font-semibold">Checkout</h3>
      <div className="flex items-start gap-8 mt-5">
        {/* billing info */}
        <div className="w-3/5">
          <Heading heading="Billing Information" />
          <div className="grid grid-cols-2 gap-5 my-5">
            <TextInput
              name="firstName"
              label="First name"
              value=""
              onChange={() => {}}
              placeholder="Your first name"
            />
            <TextInput
              name="lastName"
              label="Last name"
              value=""
              onChange={() => {}}
              placeholder="Your last name"
            />
            <EmailInput
              name="email"
              label="Email"
              value=""
              onChange={() => {}}
              placeholder="Email address"
            />
            <NumberInput
              name="phoneNumber"
              label="Phone"
              value=""
              onChange={() => {}}
              placeholder="Phone number"
            />
          </div>
          <div className="p-5 border border-[#7B91B0] rounded-xl">
            <Heading heading="Select Payment Method" />
            <div className="space-y-5">
              {payment_methods.map((method, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mt-5"
                >
                  <div className="flex gap-2.5 items-center">
                    <Image
                      src={method.image}
                      alt="Method"
                      height={25}
                      width={25}
                    />
                    {method.text}
                  </div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    id={method.text}
                    className="accent-[#00B207] size-5"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* order summary */}
        <div className="w-2/5">
          <CardComponent>
            <div className="px-5 space-y-4">
              <Heading heading="Order Summary" />
              <div className="space-y-5 text-base">
                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={order.image}
                        alt="Product Image"
                        height={60}
                        width={60}
                        className="object-contain"
                      />
                      <p>{order.name}</p>
                    </div>
                    <p className="text-[#222B45] text-base font-semibold">
                      {order.price}
                    </p>
                  </div>
                ))}
                <div className="h-12 flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <p className="text-[#444A6D]">Subtotal:</p>
                  <p className="text-[#222B45] font-semibold">NGN 17,000.99</p>
                </div>
                <div className="h-12 flex justify-between items-center py-3 border-b border-[#E5E5E5]">
                  <p className="text-[#444A6D]">Discount:</p>
                  <p className="text-[#222B45] font-semibold">NGN 1000.99</p>
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
              <Button content="Place Order" href="/billing/checkout/completed"/>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  );
}
