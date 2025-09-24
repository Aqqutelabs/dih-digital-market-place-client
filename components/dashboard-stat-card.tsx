"use client";

import { Icon } from "@iconify/react";

type StatProps = {
  iconBg: string;
  icon: string;
  amount: string;
  category: string;
  percent?: string;
  duration?: string;
};

export default function DashboardStat({
  iconBg,
  icon,
  amount,
  category,
  percent,
  duration,
}: StatProps) {
  return (
    <div className="p-5 space-y-2 h-[185px] w-full bg-white shadow-xl rounded-xl">
      <div
        className={`size-10 rounded-full flex justify-center items-center border border-white`}
        style={{ backgroundColor: iconBg }}
      >
        <Icon icon={icon} height={22} width={22} color="white" />
      </div>
      <h3 className="text-2xl font-semibold text-[#122231]">{amount}</h3>
      <p className="text-base font-normal text-[#222B45]">{category}</p>
      <div className="flex gap-1 items-center  text-[#4079ED] text-xs font-normal">
        {percent && <p>{percent}%</p>}
        {duration && <p>{duration}</p>}
      </div>
    </div>
  );
}
