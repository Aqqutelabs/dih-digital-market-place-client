"use client";

import DashboardStat from "@/components/dashboard-stat-card";
import { selloutRate, topSellingProducts } from "@/lib/demo-data/dashboard";
import { cancelledTransactions, refundedVouchers, salesStats } from "@/lib/demo-data/sales";
import BarChartComponent from "@/ui/bar-chart";
import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import DropDown from "@/ui/forms/select-dropdown";
import Heading from "@/ui/heading";
import LineChartComponent from "@/ui/line-chart";
import ProgressBar from "@/ui/progress-bar";
import ProgressTab from "@/ui/progress-tab";
import Table from "@/ui/table";

export default function SalesReport() {
const lines = [{ key: "value", label: "Month", color: "#EFDD76", showDots: false }];

  const orderTrendsData = [
    { name: "Sep", value: 41000 },
    { name: "Oct", value: 30000 },
    { name: "Nov", value: 25000 },
    { name: "Dec", value: 35000 },
    { name: "Jan", value: 50000 },
    { name: "Feb", value: 53000 },
    { name: "Mar", value: 55000 },
    { name: "Apr", value: 60000 },
    { name: "May", value: 45000 },
    { name: "Jun", value: 50000 },
    { name: "Jul", value: 30000 },
    { name: "Aug", value: 20000 },
  ];
  return (
    <section className="space-y-10">
        {/* stats */}
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
                percent={stat.percent}
                duration={stat.duration}
              />
            ))}
          </div>
        </div>
      </CardComponent>

      {/* gross revenue */}
      <CardComponent border={false}>
        <div className="p-5">
            <div className="flex justify-between items-center">
                <Heading heading="Gross Revenue" />
                <div className="w-[100px]">
                <Button content="Monthly" icon="tdesign:calendar" isSecondary />
                </div>
            </div>
            <div className="h-[300px] mt-10">
                <LineChartComponent
                lines={lines}
                data={orderTrendsData}
                xKey="name"
                legend={false}
                />
            </div>
        </div>
      </CardComponent>

      <div className="grid gap-x-5 gap-y-8 grid-cols-2">
        {/* top selling products */}
        <CardComponent border={false}>
          <div className="flex justify-between items-center px-5">
            <Heading heading="Top Selling Products (Revenue)" />
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
        <CardComponent border={false}>
          <div className="p-5">
            <Heading heading="Monthly Sell-out Rate (Unit Sold)" />
            <Table
              tableHead={["#", "Name", "Popularity", "Sales"]}
              tableData={selloutRate}
              renderRow={(row) => (
                <>
                  <td className="px-6">{row.id}</td>
                  <td className="px-6">{row.name}</td>
                  <td className="px-6">
                    <ProgressBar amount={row.popularity} color={row.color} />
                  </td>
                  <td className="px-6">
                    <ProgressTab text={row.sales} color={row.color} />
                  </td>
                </>
              )}
            />
          </div>
        </CardComponent>
        {/* refunded vouchers */}
        <CardComponent border={false}>
          <div className="p-5">
            <Heading heading="Refunded Vouchers" />
            <Table
              tableHead={["#", "Name", "Amount"]}
              tableData={refundedVouchers}
              renderRow={(row) => (
                <>
                  <td className="px-6">{row.id}</td>
                  <td className="px-6">{row.name}</td>
                  <td className="px-6">₦{row.amount}</td>
                </>
              )}
            />
          </div>
        </CardComponent>
        {/* cancelled transactions */}
        <CardComponent border={false}>
          <div className="p-5">
            <Heading heading="Refunded Vouchers" />
            <Table
              tableHead={["#", "Name", "Amount"]}
              tableData={cancelledTransactions}
              renderRow={(row) => (
                <>
                  <td className="px-6">{row.id}</td>
                  <td className="px-6">{row.name}</td>
                  <td className="px-6">₦{row.amount}</td>
                </>
              )}
            />
          </div>
        </CardComponent>
      </div>
      <div className="w-[230px]">
      <Button content="Download Report" icon="material-symbols:download" isSecondary/>
      </div>
    </section>
  );
}
