"use client";

import DashboardStat from "@/components/dashboard-stat-card";
import { dashboardStats } from "@/lib/demo-data/dashboard";
import { products, productTableHead } from "@/lib/demo-data/products";
import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import DropDown from "@/ui/forms/select-dropdown";
import Heading from "@/ui/heading";
import SearchInput from "@/ui/search-input";
import Table from "@/ui/table";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [query, setQuery] = useState("");

  const [activeRow, setActiveRow] = useState<string | null>(null);

  return (
    <section className="space-y-5">
      <CardComponent border={false}>
        <div className="p-5">
          <div className="flex justify-between items-center">
            <Heading heading="Sales Summary" />
            <div className="w-[100px]">
              <Button content="Export" icon="uil:export" isSecondary />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center mt-5">
            {dashboardStats.map((stat, index) => (
              <DashboardStat
                key={index}
                amount={stat.amount}
                category={stat.category}
                icon={stat.icon}
                iconBg={stat.iconBg}
                infoText={`${stat.percent}% ${stat.duration}`}
              />
            ))}
          </div>
        </div>
      </CardComponent>
      <div className="flex items-center gap-4"></div>
      {/* products card */}
      <CardComponent>
        {/* heading, filters, button */}
        <div className="flex justify-between items-center px-5">
          <Heading heading="Products" />
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 md:w-[340px]">
              <SearchInput
                value={query}
                name="search"
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <DropDown
                name="filter"
                value=""
                placeholder="Fliter"
                onChange={() => {}}
                options={[
                  { label: "Hardware", value: "Hardware" },
                  { label: "Software", value: "Software" },
                  { label: "Digital Product", value: "Digital Product" },
                ]}
                icon="majesticons:filter-line"
              />
            </div>
            <Link href={"/products"} className="text-[#16A249] text-base">
              View All
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Table
            tableHead={productTableHead}
            tableData={products}
            renderRow={(row) => (
              <>
                <td className="px-6">{row["product-name"]}</td>
                <td className="px-6">NGN{row["base-price"]}</td>
                <td className="px-6">{row.discount}%</td>
                <td className="px-6">NGN{row["selling-price"]}</td>
                <td className="px-6">{row["total-sold"]}</td>
                <td className="px-6">NGN{row.revenue}</td>
                <td className="px-6">{row.reviews}</td>
                <td className="px-6 relative">
                  <Icon
                    onClick={() =>
                      setActiveRow((prev) => (prev === row.id ? null : row.id))
                    }
                    icon={"fluent:more-vertical-16-filled"}
                    height={24}
                    width={24}
                    className="cursor-pointer"
                  />
                  {activeRow === row.id && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-3/5 mt-2 right-10 bg-white z-30 rounded-xl shadow-md w-[100px] text-sm p-2.5"
                      >
                        <ul className="space-y-3">
                          <li className="cursor-pointer hover:text-green-600">
                            Edit
                          </li>
                          <li className="cursor-pointer hover:text-green-600 border-y border-gray-300 py-4">
                            <Link href={`/products/${row.id}`}>View</Link>
                          </li>
                          <li className="cursor-pointer hover:text-red-600">
                            Delete
                          </li>
                        </ul>
                      </motion.div>
                    </AnimatePresence>
                  )}
                </td>
              </>
            )}
          />
        </div>
      </CardComponent>
    </section>
  );
}
