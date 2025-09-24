"use client";

import CardComponent from "@/ui/card-wrapper";
import Heading from "@/ui/heading";
import { useState } from "react";

export default function Notifications() {
  const tabs = ["All", "Read", "Unread"];

  const notifs = [
    {
      id: 1,
      message: "You Just received NGN200,000 in your balance.",
      time: "9 hours ago",
    },
    {
      id: 2,
      message:
        "Your withdrawal request has been initiated and is being reviewed. This may take a few hours.",
      time: "13 hours ago",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  return (
    <CardComponent height="100%">
      <div className="px-5">
        {/* header and tabs */}
        <div className="space-y-10 border-b border-[#6C668533] pb-4">
          <Heading heading="Notifications" />
          <div className="flex gap-4 items-center">
            {tabs.map((tab, index) => (
              <div
                onClick={() => setActiveTab(index)}
                key={index}
                className={`h-[30px] w-[70px] font-bold text-sm cursor-pointer ${
                  activeTab === index
                    ? "border-b-4 border-[#16A249] text-[#212121]"
                    : "text-[#6C6685]"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        <div className="my-5 space-y-3">
          {notifs.map((notif) => (
            <div
              key={notif.id}
              className="py-6 flex justify-between items-center border-b border-[#6C668533] text-[#212121] text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="size-1.5 rounded-full bg-[#16A249]"></div>
                <p>🎉 {notif.message}</p>
              </div>
              <p>{notif.time}</p>
            </div>
          ))}
        </div>
      </div>
    </CardComponent>
  );
}
