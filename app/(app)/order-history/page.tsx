"use client";

import { order_history } from "@/lib/demo-data/order-history";
import CategoryWrapper from "@/ui/category-wrapper";
import Heading from "@/ui/heading";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import Modal from "@/ui/modal";
import Button from "@/ui/button";
import TextareaInput from "@/ui/forms/textarea";

export default function OrderHistory() {
  const [activeRowId, setActiveRowId] = useState<string | null>(null);
  const [reviewModal, setReviewModal] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const details = ["Order History", "Wishlist", "My Cart", "Help & Support"];

  // Update dropdown position when activeRowId changes
  useEffect(() => {
    if (activeRowId && iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 8, // 8px spacing below icon
        left: rect.right + window.scrollX - 150, // align right (140px width + padding)
      });
    } else {
      setDropdownPos(null);
    }
  }, [activeRowId]);

  return (
    <>
      <CategoryWrapper categories={details}>
        <div className="rounded-[10px] border border-[#7B91B0] py-6 px-4 sm:py-8 sm:px-5">
          <Heading heading="Order History" />
          <div className="mt-6 sm:mt-10 space-y-8">
            <div className="space-y-5">
              {/* date */}
              <div className="h-10 w-full border-b border-[#D7D7D7] py-2 flex items-center text-[#222B45] font-bold text-sm sm:text-base">
                10 JUN 2025
              </div>

              {/* history */}
              <div className="space-y-4">
                {order_history.map((history) => (
                  <div key={history.orderId} className="space-y-1">
                    <p className="font-semibold text-sm sm:text-base text-[#444A6D]">
                      #{history.orderId}
                    </p>
                    <div className="flex items-center justify-between py-3 border-b border-[#E5E5E5] text-[#222B45] text-xs sm:text-sm md:text-base overflow-x-auto gap-6 sm:gap-4">
                      {/* image + title */}
                      <div className="flex items-center gap-2 sm:gap-3 min-w-[160px]">
                        <Image
                          src={history.image}
                          alt="Product Image"
                          height={80}
                          width={70}
                          className="object-cover rounded-md"
                        />
                        <p className="truncate max-w-[100px] sm:max-w-[150px]">
                          {history.name}
                        </p>
                      </div>

                      <p className="font-semibold min-w-[80px] text-center">{history.plan}</p>
                      <p className="font-semibold min-w-[60px] text-center">{history.quantity}</p>
                      <p className="font-semibold min-w-[90px] text-center">{history.coupon}</p>

                      <p
                        className={`font-semibold min-w-[70px] text-center ${
                          history.status === "New"
                            ? "text-[#16A249]"
                            : "text-[#7B91B0]"
                        }`}
                      >
                        {history.status}
                      </p>

                      <p className="font-semibold min-w-[100px] text-center">
                        NGN {history.price}
                      </p>

                      {/* menu trigger */}
                      <div
                        ref={activeRowId === history.orderId ? iconRef : null}
                        className="relative min-w-[40px] flex justify-center"
                      >
                        <Icon
                          icon={"nrk:more"}
                          height={22}
                          width={22}
                          className="hover:cursor-pointer"
                          onClick={() =>
                            setActiveRowId((prev) =>
                              prev === history.orderId ? null : history.orderId
                            )
                          }
                        />
                      </div>
                    </div>

                    {/* dropdown portal */}
                    {activeRowId === history.orderId &&
                      dropdownPos &&
                      createPortal(
                        <AnimatePresence>
                          <motion.div
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute bg-white z-50 rounded-xl shadow-md w-[140px] text-xs md:text-sm p-2.5"
                            style={{
                              position: "absolute",
                              top: dropdownPos.top,
                              left: dropdownPos.left,
                            }}
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
                        </AnimatePresence>,
                        document.body
                      )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CategoryWrapper>

      {/* Review Modal */}
      <Modal isOpen={reviewModal} onClose={() => setReviewModal(false)}>
        <div className="space-y-5 px-3 sm:px-6 py-4">
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
