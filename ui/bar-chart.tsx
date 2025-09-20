/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Cell,
} from "recharts";

type BarChartProps = {
  data: Record<string, unknown>[];
  bars?: {
    key: string;
    label?: string;
    color: string;
  }[];
  xKey: string;
//   legend?: boolean;
//   isSingleBar?: boolean;
  colors?: string[];
//   labels?: string[];
};

// Sample data matching the screenshot


export default function BarChartComponent({
  data = [],
  xKey = "name",
//   legend = true,
//   isSingleBar = true,
  colors = ["#0095FF", "#16A249"],
//   labels = ["Hardware", "Software"]
}: BarChartProps) {
  
  const getColorForBar = (entry: any, index: number) => {
    if (entry.type === "Hardware") {
      return "#3B82F6"; // Blue
    } else if (entry.type === "Software") {
      return "#10B981"; // Green
    }
    return colors[index % colors.length];
  };

  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap={20}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#E5E7EB"
            vertical={false}
          />
          <XAxis
            dataKey={xKey}
            tick={{ fill: "#6B7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            interval={0}
          />
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            domain={[0, 25]}
            tickFormatter={(value) => `${value}k`}
          />
          <Tooltip
            contentStyle={{
              fontSize: "0.875rem",
              borderRadius: "6px",
              border: "1px solid #E5E7EB",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}
            labelStyle={{ fontWeight: 600 }}
            formatter={(value, name, props) => [`${value}k`, props.payload.type]}
          />
          
          {/* Legend at bottom */}
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ paddingTop: "20px" }}
            content={() => (
              <div className="flex justify-center items-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-gray-700">Hardware</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">Software</span>
                </div>
              </div>
            )}
          />

          <Bar dataKey="value" name="" radius={[2, 2, 0, 0]} barSize={40}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getColorForBar(entry, index)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
  );
}