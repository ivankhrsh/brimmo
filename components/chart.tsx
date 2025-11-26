"use client";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Image from "next/image";

const data = [
  { name: "Jan", uv: 62, pv: 70, pj: 62 },
  { name: "Feb", uv: 40, pv: 55, pj: 40 },
  { name: "Mar", uv: 38, pv: 52, pj: 38 },
  { name: "Apr", uv: 50, pv: 65, pj: 50 },
  { name: "May", uv: 74, pv: 75, pj: 74 },
  { name: "Jun", uv: 70, pv: 70, pj: 70 },
  { name: "Jul", uv: 66, pv: 68, pj: 66 },
  { name: "Aug", uv: 62, pv: 66, pj: 62 },
  { name: "Sep", uv: 58, pv: 60, pj: 58 },
  { name: "Oct", uv: 50, pv: 52, pj: 50 },
  { name: "Nov", uv: 54, pv: 60, pj: 54 },
  { name: "Dec", uv: 68, pv: 72, pj: 68 },
];

const chartConfig = {
  uv: {
    label: "Inventory",
    color: "var(--foreground)",
  },
  pv: {
    label: "Weekly Demand",
    color: "var(--primary)",
  },
  pj: {
    label: "",
    color: "var(--foreground)",
  },
} satisfies ChartConfig;

export function InventoryCoverageChart() {
  return (
    <div className="h-full rounded-[16px] bg-white px-[14px] pt-4 pb-6">
      <div className="flex w-full flex-col justify-between gap-4 lg:flex-row lg:items-center lg:gap-0">
        <div className="flex flex-col gap-1">
          <h3 className="font-fixel-display-semibold text-foreground text-xl">
            Inventory Coverage (90 days)
          </h3>
          <p className="font-open-sans text-muted-foreground text-sm">
            Optimized inventory projections with upcoming POs
          </p>
        </div>

        <div className="font-open-sans text-foreground flex flex-row gap-2 text-sm">
          <div className="flex flex-row items-center gap-2">
            <div className="bg-foreground h-[4px] w-[10px]" />
            Projected Inventory
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="bg-primary h-[4px] w-[10px]" />
            Demand
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="icons/doted-line.svg"
              alt="dot icon"
              width={16}
              height={8}
            />
            Safety Stock Level
          </div>
        </div>
      </div>

      <div className="mt-6 w-full">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-cartesian-axis-tick_text]:font-open-sans [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground h-[380px] w-full [&_.recharts-cartesian-axis-line]:stroke-transparent"
        >
          <ComposedChart
            data={data}
            margin={{ top: 8, right: 20, left: -24, bottom: 0 }}
          >
            <CartesianGrid stroke="#E4E7EC" vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "var(--muted-foreground)",
                fontSize: 12,
                fontFamily: "var(--font-open-sans)",
              }}
              padding={{ left: 20 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "var(--muted-foreground)",
                fontSize: 12,
                fontFamily: "var(--font-open-sans)",
              }}
              domain={[0, 100]}
            />
            <ChartTooltip
              cursor={{ stroke: "#D0D5DD", strokeWidth: 1 }}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="var(--foreground)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="var(--primary)"
              strokeWidth={2}
              dot={false}
            />
            <Area
              type="monotone"
              dataKey="pj"
              fill="var(--primary)"
              fillOpacity={0.1}
            />
            <ReferenceLine y={35} stroke="#7FCB87" strokeDasharray="4 4" />
          </ComposedChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export default InventoryCoverageChart;
