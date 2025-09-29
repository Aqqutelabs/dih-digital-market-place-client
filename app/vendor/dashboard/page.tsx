"use client";

import DashboardStat from "@/components/dashboard-stat-card";
import { dashboardStats, selloutRate, topSellingProducts } from "@/lib/demo-data/dashboard";
import { products, productTableHead } from "@/lib/demo-data/products";
import BarChartComponent from "@/ui/bar-chart";
import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import DropDown from "@/ui/forms/select-dropdown";
import Heading from "@/ui/heading";
import ProgressBar from "@/ui/progress-bar";
import ProgressTab from "@/ui/progress-tab";
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
    <section className="space-y-10">
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
                percent={stat.percent}
                duration={stat.duration}
              />
            ))}
          </div>
        </div>
      </CardComponent>
      <div className="flex flex-col md:flex-row items-start gap-4">
        {/* top selling products */}
        <CardComponent border={false}>
          <div className="flex justify-between items-center px-5">
            <Heading heading="Top Selling Products" />
            <div className="w-[100px]">
              <DropDown
                name="filter"
                placeholder="All Time"
                onChange={() => {}}
                options={[]}
                value=""
              />
            </div>
          </div>
          <div className="p-5 h-[330px]">
            <BarChartComponent data={topSellingProducts} xKey="name" />
          </div>
        </CardComponent>
        {/* monthly sellout rate */}
        <CardComponent border={false} height="100%">
          <div className="p-5">
            <Heading heading="Monthly Sell-out Rate" />
            <div className="overflow-auto w-full">
              <Table
              tableHead={["#", "Name", "Popularity", "Sales"]}
              tableData={selloutRate}
              renderRow={(row) => (
                  <>
                  <td className="px-6">{row.id}</td>
                  <td className="px-6">{row.name}</td>
                  <td className="px-6">
                      <ProgressBar amount={row.popularity} color={row.color}/>
                  </td>
                  <td className="px-6">
                      <ProgressTab text={row.sales} color={row.color}/>
                  </td>
                  </>
              )}
              />

            </div>
          </div>
        </CardComponent>
      </div>
      {/* products card */}
      <CardComponent>
        {/* heading, filters, button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-5">
          <div className="flex justify-between items-center w-full">
          <Heading heading="Products" />

          {/* view all link on mobile only */}
          <Link href={"/vendor/products"} className="text-[#16A249] text-xs block md:hidden">
            View All
          </Link>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mt-5 md:mt-0">
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
            <Link href={"/vendor/products"} className="text-[#16A249] text-base whitespace-nowrap hidden md:block">
              View All
            </Link>
          </div>
        </div>

        <div className="mt-10 overflow-auto w-full">
          <Table
            tableHead={productTableHead}
            tableData={products}
            renderRow={(row) => (
              <>
                <td className="px-6 whitespace-nowrap">{row["product-name"]}</td>
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
                        className="absolute top-3/5 mt-2 right-10 bg-white z-30 rounded-xl shadow-md w-[100px] text-xs md:text-sm p-2.5"
                      >
                        <ul className="space-y-3">
                          <li className="cursor-pointer hover:text-green-600">
                            Edit
                          </li>
                          <li className="cursor-pointer hover:text-green-600 border-y border-gray-300 py-4">
                            <Link href={`/vendor/products/${row.id}`}>View</Link>
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
