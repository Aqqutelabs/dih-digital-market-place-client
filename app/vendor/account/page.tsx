"use client";

import DashboardStat from "@/components/dashboard-stat-card";
import {
  accountStats,
  transactionHistory,
  transactionHistoryHead,
} from "@/lib/demo-data/account";
import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import DropDown from "@/ui/forms/select-dropdown";
import Heading from "@/ui/heading";
import SearchInput from "@/ui/search-input";
import Table from "@/ui/table";
import { useState } from "react";

export default function Account() {
  const [query, setQuery] = useState("");

  return (
    <section className="space-y-10">
      <CardComponent border={false}>
        <div className="p-5">
          <div className="flex justify-between items-center">
            <Heading heading="Balance" />
            <div className="w-[208px]">
              <Button content="Request Withdrawal" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center mt-5">
            {accountStats.map((stat, index) => (
              <DashboardStat
                key={index}
                amount={stat.amount}
                category={stat.category}
                icon={stat.icon}
                iconBg={stat.iconBg}
                infoText={`${stat.duration}`}
              />
            ))}
          </div>
        </div>
      </CardComponent>

      {/* transaction history */}
      <CardComponent>
        {/* heading, filters, button */}
        <div className="flex justify-between items-center px-5">
          <Heading heading="Transaction History" />
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
                options={[]}
                icon="majesticons:filter-line"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Table
            tableHead={transactionHistoryHead}
            tableData={transactionHistory}
            renderRow={(row) => (
              <>
                <td className="px-6">{row.transaction}</td>
                <td className="px-6">{row.amount}</td>
                <td
                  className={`px-6 ${
                    row.type === "Debit" ? "text-[#CE1B1B]" : "text-[#16A249]"
                  }`}
                >
                  {row.type}
                </td>
                <td
                  className={`px-6 ${
                    row.status === "Processed"
                      ? "text-[#16A249]"
                      : row.status === "Reviewing"
                      ? "text-[#D97706]"
                      : "text-[#CE1B1B]"
                  }`}
                >
                  {row.status}
                </td>
              </>
            )}
          />
        </div>
      </CardComponent>
    </section>
  );
}
