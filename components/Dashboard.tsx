"use client";

import { InvoiceData } from "@/lib/types/data";
import { useEffect, useState } from "react";
import { DashboardProps } from "@/lib/types/props";
import DataTable from "./ui/data-table";
import { columns } from "@/app/orders/columns";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsiveLine } from "@nivo/line";
import { ResponsivePie } from "@nivo/pie";
import { ordersData } from "@/lib/data/orders";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowDownToLine,
  Printer,
  Save,
  Send,
  Share,
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { OrderType } from "@/lib/types/orders";
import { Button } from "./ui/button";

export default function Dashboard({ orders }: DashboardProps) {
  type OverviewDataType = {
    id: number;
    title: string;
    desc: string;
    trend: "up" | "down";
    change: number;
    content: string;
  };

  const overviewData: OverviewDataType[] = [
    {
      id: 1,
      title: "Revenue for Q1",
      desc: "Revenue for Q1",
      trend: "up",
      change: 283,
      content: "Revenue for Q1",
    },
    {
      id: 2,
      title: "Revenue for Q1",
      desc: "Revenue for Q1",
      trend: "down",
      change: -94,
      content: "Revenue for Q1",
    },
    {
      id: 3,
      title: "Revenue for Q1",
      desc: "Revenue for Q1",
      trend: "down",
      change: -4,
      content: "Revenue for Q1",
    },
    {
      id: 4,
      title: "Revenue for Q1",
      desc: "Revenue for Q1",
      trend: "up",
      change: 504,
      content: "Revenue for Q1",
    },
    {
      id: 5,
      title: "Revenue for Q1",
      desc: "Revenue for Q1",
      trend: "down",
      change: -77,
      content: "Revenue for Q1",
    },
    {
      id: 6,
      title: "Revenue for Q1",
      desc: "Revenue for Q1",
      trend: "down",
      change: -77,
      content: "Revenue for Q1",
    },
  ];

  return (
    <ScrollArea className="h-dvh">
      <h1 className="sr-only">Dashboard</h1>
      <div className="flex flex-col gap-4 flex-1 px-2 pt-9">
        <div className="flex gap-4 ml-auto">
          <Button variant="outline" title="export">
            <ArrowDownToLine />
            Export
          </Button>
          <Button variant="outline" title="print">
            <Printer />
          </Button>
          <Button variant="outline" title="share">
            <Send />
          </Button>
        </div>
        <div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {overviewData.map((card) => (
                <Card key={card.id} className="text-antiFlashWhite border-none">
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between w-full">
                      {card.trend === "up" ? (
                        <TrendingUpIcon color="green" />
                      ) : (
                        <TrendingDownIcon color="red" />
                      )}
                      {card.change < 0 ? (
                        <Badge className="bg-red-600 text-black">
                          {card.change}%
                        </Badge>
                      ) : (
                        <Badge className="bg-green-900">+{card.change}%</Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div></div>
        </div>
        <div className="rounded-md p-4 h-64">
          <ResponsiveLine
            data={[
              {
                color: "hsl(154, 70%, 50%)",
                data: [
                  {
                    color: "hsl(251, 70%, 50%)",
                    x: "HM",
                    y: 29,
                  },
                  {
                    color: "hsl(299, 70%, 50%)",
                    x: "CY",
                    y: 5,
                  },
                  {
                    color: "hsl(280, 70%, 50%)",
                    x: "VG",
                    y: 47,
                  },
                  {
                    color: "hsl(165, 70%, 50%)",
                    x: "CX",
                    y: 21,
                  },
                  {
                    color: "hsl(293, 70%, 50%)",
                    x: "GN",
                    y: 5,
                  },
                  {
                    color: "hsl(259, 70%, 50%)",
                    x: "CG",
                    y: 41,
                  },
                  {
                    color: "hsl(78, 70%, 50%)",
                    x: "AZ",
                    y: 6,
                  },
                  {
                    color: "hsl(78, 70%, 50%)",
                    x: "SR",
                    y: 37,
                  },
                  {
                    color: "hsl(217, 70%, 50%)",
                    x: "MH",
                    y: 33,
                  },
                  {
                    color: "hsl(355, 70%, 50%)",
                    x: "IR",
                    y: 38,
                  },
                  {
                    color: "hsl(360, 70%, 50%)",
                    x: "GL",
                    y: 0,
                  },
                  {
                    color: "hsl(107, 70%, 50%)",
                    x: "RE",
                    y: 34,
                  },
                  {
                    color: "hsl(10, 70%, 50%)",
                    x: "HN",
                    y: 10,
                  },
                  {
                    color: "hsl(202, 70%, 50%)",
                    x: "RW",
                    y: 27,
                  },
                  {
                    color: "hsl(358, 70%, 50%)",
                    x: "BW",
                    y: 11,
                  },
                  {
                    color: "hsl(132, 70%, 50%)",
                    x: "EG",
                    y: 35,
                  },
                  {
                    color: "hsl(346, 70%, 50%)",
                    x: "LT",
                    y: 17,
                  },
                  {
                    color: "hsl(207, 70%, 50%)",
                    x: "AR",
                    y: 9,
                  },
                ],
                id: "whisky",
              },
            ]}
            xScale={{ type: "point" }}
            margin={{
              top: 20,
              right: 20,
              bottom: 50,
              left: 60,
            }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            yFormat=" >-.2f"
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "transportation",
              legendOffset: 36,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle",
              truncateTickAt: 0,
            }}
            lineWidth={2}
            enableArea={true}
            areaBlendMode="normal"
            areaBaselineValue={0}
            areaOpacity={0.2}
            enableGridX={false}
            enableGridY={false}
            useMesh={true}
            defs={[
              {
                colors: [
                  {
                    color: "inherit",
                    offset: 0,
                  },
                  {
                    color: "inherit",
                    offset: 100,
                    opacity: 0,
                  },
                ],
                id: "gradientA",
                type: "linearGradient",
              },
            ]}
            enableSlices="x"
            enableTouchCrosshair
            fill={[
              {
                match: {
                  id: "whisky",
                },
                id: "gradientA",
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-64">
          <div className="rounded-md p-4">
            <ResponsiveLine
              data={[
                {
                  color: "hsl(154, 70%, 50%)",
                  data: [
                    {
                      color: "hsl(251, 70%, 50%)",
                      x: "HM",
                      y: 29,
                    },
                    {
                      color: "hsl(299, 70%, 50%)",
                      x: "CY",
                      y: 5,
                    },
                    {
                      color: "hsl(280, 70%, 50%)",
                      x: "VG",
                      y: 47,
                    },
                    {
                      color: "hsl(165, 70%, 50%)",
                      x: "CX",
                      y: 21,
                    },
                    {
                      color: "hsl(293, 70%, 50%)",
                      x: "GN",
                      y: 5,
                    },
                    {
                      color: "hsl(259, 70%, 50%)",
                      x: "CG",
                      y: 41,
                    },
                    {
                      color: "hsl(78, 70%, 50%)",
                      x: "AZ",
                      y: 6,
                    },
                    {
                      color: "hsl(78, 70%, 50%)",
                      x: "SR",
                      y: 37,
                    },
                    {
                      color: "hsl(217, 70%, 50%)",
                      x: "MH",
                      y: 33,
                    },
                    {
                      color: "hsl(355, 70%, 50%)",
                      x: "IR",
                      y: 38,
                    },
                    {
                      color: "hsl(360, 70%, 50%)",
                      x: "GL",
                      y: 0,
                    },
                    {
                      color: "hsl(107, 70%, 50%)",
                      x: "RE",
                      y: 34,
                    },
                    {
                      color: "hsl(10, 70%, 50%)",
                      x: "HN",
                      y: 10,
                    },
                    {
                      color: "hsl(202, 70%, 50%)",
                      x: "RW",
                      y: 27,
                    },
                    {
                      color: "hsl(358, 70%, 50%)",
                      x: "BW",
                      y: 11,
                    },
                    {
                      color: "hsl(132, 70%, 50%)",
                      x: "EG",
                      y: 35,
                    },
                    {
                      color: "hsl(346, 70%, 50%)",
                      x: "LT",
                      y: 17,
                    },
                    {
                      color: "hsl(207, 70%, 50%)",
                      x: "AR",
                      y: 9,
                    },
                  ],
                  id: "whisky",
                },
              ]}
              xScale={{ type: "point" }}
              margin={{
                top: 20,
                right: 20,
                bottom: 50,
                left: 60,
              }}
              yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: true,
                reverse: false,
              }}
              yFormat=" >-.2f"
              curve="monotoneX"
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "transportation",
                legendOffset: 36,
                legendPosition: "middle",
                truncateTickAt: 0,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "count",
                legendOffset: -40,
                legendPosition: "middle",
                truncateTickAt: 0,
              }}
              lineWidth={2}
              enableArea={true}
              areaBlendMode="normal"
              areaBaselineValue={0}
              areaOpacity={0.2}
              enableGridX={false}
              enableGridY={false}
              useMesh={true}
              defs={[
                {
                  colors: [
                    {
                      color: "inherit",
                      offset: 0,
                    },
                    {
                      color: "inherit",
                      offset: 100,
                      opacity: 0,
                    },
                  ],
                  id: "gradientA",
                  type: "linearGradient",
                },
              ]}
              enableSlices="x"
              enableTouchCrosshair
              fill={[
                {
                  match: {
                    id: "whisky",
                  },
                  id: "gradientA",
                },
              ]}
            />
          </div>
          <div className="rounded-md p-4">
            <ResponsiveBar
              data={[
                {
                  country: "AD",
                  "hot dog": 142,
                  "hot dogColor": "hsl(122, 70%, 50%)",
                  burger: 145,
                  burgerColor: "hsl(90, 70%, 50%)",
                  sandwich: 118,
                  sandwichColor: "hsl(348, 70%, 50%)",
                  kebab: 50,
                  kebabColor: "hsl(281, 70%, 50%)",
                  fries: 137,
                  friesColor: "hsl(259, 70%, 50%)",
                  donut: 142,
                  donutColor: "hsl(344, 70%, 50%)",
                },
                {
                  country: "AE",
                  "hot dog": 130,
                  "hot dogColor": "hsl(342, 70%, 50%)",
                  burger: 198,
                  burgerColor: "hsl(286, 70%, 50%)",
                  sandwich: 97,
                  sandwichColor: "hsl(60, 70%, 50%)",
                  kebab: 29,
                  kebabColor: "hsl(218, 70%, 50%)",
                  fries: 41,
                  friesColor: "hsl(327, 70%, 50%)",
                  donut: 8,
                  donutColor: "hsl(2, 70%, 50%)",
                },
                {
                  country: "AF",
                  "hot dog": 19,
                  "hot dogColor": "hsl(225, 70%, 50%)",
                  burger: 66,
                  burgerColor: "hsl(24, 70%, 50%)",
                  sandwich: 21,
                  sandwichColor: "hsl(211, 70%, 50%)",
                  kebab: 178,
                  kebabColor: "hsl(93, 70%, 50%)",
                  fries: 102,
                  friesColor: "hsl(256, 70%, 50%)",
                  donut: 184,
                  donutColor: "hsl(280, 70%, 50%)",
                },
                {
                  country: "AG",
                  "hot dog": 172,
                  "hot dogColor": "hsl(150, 70%, 50%)",
                  burger: 114,
                  burgerColor: "hsl(257, 70%, 50%)",
                  sandwich: 146,
                  sandwichColor: "hsl(251, 70%, 50%)",
                  kebab: 190,
                  kebabColor: "hsl(193, 70%, 50%)",
                  fries: 187,
                  friesColor: "hsl(281, 70%, 50%)",
                  donut: 94,
                  donutColor: "hsl(67, 70%, 50%)",
                },
                {
                  country: "AI",
                  "hot dog": 144,
                  "hot dogColor": "hsl(24, 70%, 50%)",
                  burger: 39,
                  burgerColor: "hsl(231, 70%, 50%)",
                  sandwich: 58,
                  sandwichColor: "hsl(52, 70%, 50%)",
                  kebab: 76,
                  kebabColor: "hsl(166, 70%, 50%)",
                  fries: 183,
                  friesColor: "hsl(274, 70%, 50%)",
                  donut: 129,
                  donutColor: "hsl(53, 70%, 50%)",
                },
                {
                  country: "AL",
                  "hot dog": 157,
                  "hot dogColor": "hsl(299, 70%, 50%)",
                  burger: 118,
                  burgerColor: "hsl(265, 70%, 50%)",
                  sandwich: 136,
                  sandwichColor: "hsl(335, 70%, 50%)",
                  kebab: 47,
                  kebabColor: "hsl(60, 70%, 50%)",
                  fries: 21,
                  friesColor: "hsl(106, 70%, 50%)",
                  donut: 178,
                  donutColor: "hsl(216, 70%, 50%)",
                },
                {
                  country: "AM",
                  "hot dog": 133,
                  "hot dogColor": "hsl(276, 70%, 50%)",
                  burger: 37,
                  burgerColor: "hsl(86, 70%, 50%)",
                  sandwich: 181,
                  sandwichColor: "hsl(0, 70%, 50%)",
                  kebab: 195,
                  kebabColor: "hsl(352, 70%, 50%)",
                  fries: 7,
                  friesColor: "hsl(38, 70%, 50%)",
                  donut: 49,
                  donutColor: "hsl(297, 70%, 50%)",
                },
              ]}
              keys={[
                "hot dog",
                "burger",
                "sandwich",
                "kebab",
                "fries",
                "donut",
              ]}
              indexBy="country"
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "yellow_orange_brown" }}
              defs={[
                {
                  id: "dots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "fries",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "sandwich",
                  },
                  id: "lines",
                },
              ]}
              borderColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "country",
                legendPosition: "middle",
                legendOffset: 32,
                truncateTickAt: 0,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "food",
                legendPosition: "middle",
                legendOffset: -40,
                truncateTickAt: 0,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
              }}
              role="application"
              ariaLabel="Nivo bar chart demo"
              barAriaLabel={(e) =>
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              }
            />
          </div>
          <div className="rounded-md p-4">
            <ResponsivePie
              data={[
                {
                  id: "javascript",
                  label: "javascript",
                  value: 570,
                  color: "hsl(244, 70%, 50%)",
                },
                {
                  id: "rust",
                  label: "rust",
                  value: 12,
                  color: "hsl(47, 70%, 50%)",
                },
                {
                  id: "python",
                  label: "python",
                  value: 265,
                  color: "hsl(123, 70%, 50%)",
                },
                {
                  id: "ruby",
                  label: "ruby",
                  value: 358,
                  color: "hsl(235, 70%, 50%)",
                },
                {
                  id: "go",
                  label: "go",
                  value: 162,
                  color: "hsl(169, 70%, 50%)",
                },
              ]}
              margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#ffffff"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              defs={[
                {
                  id: "dots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "ruby",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "c",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "go",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "python",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "scala",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "lisp",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "elixir",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "javascript",
                  },
                  id: "lines",
                },
              ]}
            />
          </div>
        </div>
        <DataTable<OrderType, unknown>
          columns={columns}
          data={orders as OrderType[]}
          filterParameter="product"
        />
      </div>
    </ScrollArea>
  );
}
