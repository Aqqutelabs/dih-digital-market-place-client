"use client";

import DashboardStat from "@/components/dashboard-stat-card";
import { salesStats } from "@/lib/demo-data/sales";
import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import Heading from "@/ui/heading";

export default function SalesReport() {
  return (
    <section className="space-y-5">
      <CardComponent border={false}>
        <div className="p-5">
          <div className="flex justify-between items-center">
            <Heading heading="Sales Overview" />
            <div className="w-[100px]">
              <Button content="Daily" icon="tdesign:calendar" isSecondary />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-center mt-5">
            {salesStats.map((stat, index) => (
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
    </section>
  );
}
