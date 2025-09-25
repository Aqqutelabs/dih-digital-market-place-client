"use client";

import { order_history } from "@/lib/demo-data/order-history";
import CategoryWrapper from "@/ui/category-wrapper";
import Heading from "@/ui/heading";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/ui/modal";
import Button from "@/ui/button";
import TextareaInput from "@/ui/forms/textarea";

export default function OrderHistory() {
  const [activeRowId, setActiveRowId] = useState<string | null>(null);

  const [reviewModal, setReviewModal] = useState(false);

  const details = ["Order History", "Wishlist", "My Cart", "Help & Support"];

  return (
    <>
      <CategoryWrapper categories={details}>
        <div className="rounded-[10px] border border-[#7B91B0] py-8 px-5">
          <Heading heading="Order History" />
          {/* order history */}
          <div className="mt-10 space-y-8">
            {/* first tab */}
            <div className="space-y-5">
              {/* date */}
              <div className="h-10 w-full border-b border-[#D7D7D7] py-2 flex items-center text-[#222B45] font-bold text-sm">
                10 JUN 2025
              </div>
              {/* history */}
              <div className="space-y-4">
                {order_history.map((history) => (
                  <div key={history.orderId} className="space-y-1">
                    <p className="font-semibold text-base text-[#444A6D]">
                      #{history.orderId}
                    </p>
                    <div className="flex justify-between items-center py-3 border-b border-[#E5E5E5] text-[#222B45]">
                      {/* image and title */}
                      <div className="flex items-center gap-3">
                        <Image
                          src={history.image}
                          alt="Product Image"
                          height={120}
                          width={100}
                          className="object-cover rounded-md"
                        />
                        <p>{history.name}</p>
                      </div>
                      <p className="font-semibold">{history.plan}</p>
                      <p className="font-semibold">{history.quantity}</p>
                      <p className="font-semibold">{history.coupon}</p>
                      <p
                        className={`font-semibold ${
                          history.status === "New"
                            ? "text-[#16A249]"
                            : "text-[#7B91B0]"
                        }`}
                      >
                        {history.status}
                      </p>
                      <p className="font-semibold">NGN {history.price}</p>
                      <div className="relative">
                        <Icon
                          icon={"nrk:more"}
                          height={25}
                          width={25}
                          className="hover:cursor-pointer"
                          onClick={() =>
                            setActiveRowId((prev) =>
                              prev === history.orderId ? null : history.orderId
                            )
                          }
                        />
                        {activeRowId === history.orderId && (
                          <AnimatePresence>
                            <motion.div
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="absolute 3/5 mt-2 right-5 bg-white z-30 rounded-xl shadow-md w-[140px] text-sm p-2.5"
                            >
                              <ul className="space-y-3">
                                <li
                                  onClick={() => setReviewModal(true)}
                                  className="cursor-pointer hover:text-green-600"
                                >
                                  Leave a Review
                                </li>
                                {history.status === "New" && (
                                  <li className="cursor-pointer hover:text-green-600 border-t border-gray-300 pt-3">
                                    Request Refund
                                  </li>
                                )}
                              </ul>
                            </motion.div>
                          </AnimatePresence>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CategoryWrapper>

      <Modal isOpen={reviewModal} onClose={() => setReviewModal(false)}>
        <div className="space-y-5">
          <Heading
            heading="Leave a Review"
            subtitle="Rate your experience using this product"
            className="text-center"
          />
          <div className="flex justify-center items-center">
            <Image
              src={"/images/rate-placeholder.svg"}
              alt="Rating"
              height={20}
              width={120}
            />
          </div>
          <TextareaInput
            label="Tell us more about your experience"
            name="review"
            placeholder="..."
            value=""
            onChange={() => {}}
          />
          <Button
            content="Submit Review"
            onClick={() => setReviewModal(false)}
          />
        </div>
      </Modal>
    </>
  );
}
