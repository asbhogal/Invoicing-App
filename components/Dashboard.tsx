"use client";

import Link from "next/link";
import Filter from "@/components/Filter";
import { InvoiceData } from "@/lib/types/data";
import SortBy from "@/components/Sort";
import AddInvoice from "@/components/invoice/AddInvoice";
import InvoiceItem from "@/components/invoice/InvoiceItem";
import { useEffect, useState } from "react";
import { DashboardProps } from "@/lib/types/props";
import DataTable from "./ui/data-table";
import { columns } from "@/app/payments/columns"
import { ResponsiveLine } from '@nivo/line'
import { ResponsivePie } from '@nivo/pie'

const dataPoints = [
  { "x": 12, "y": 127 },
  { "x": 120, "y": 832 },
  { "x": 111, "y": 12 },
  { "x": 2, "y": 43 },
  { "x": 24, "y": 90 },
  { "x": 12, "y": 82 },
];

const seriesData = [
  {
    id: 'yourSeriesId',
    data: dataPoints,
  },
];

export default function Dashboard({ invoices }: DashboardProps) {
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  useEffect(() => {
    setFilteredInvoices(invoices);
  }, [invoices]);

  console.log(invoices)

  function handleFilter(filterCriteria: string) {
    const filteredInvoices = invoices.filter((invoice) => {
      return !filterCriteria || invoice.status === filterCriteria;
    });
    setFilteredInvoices(filteredInvoices);
  }
  return (
    <div className="flex flex-col gap-16 flex-1 px-2">
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-9 sm:pt-16 lg:pt-20">
        <div>
          <h1 className="sr-only">Invoices</h1>
          <p className="mt-4">
            Total Invoices: <span className="font-bold">{invoices.length}</span>
          </p>
        </div>
        <div>
        </div>
        {/* <div className="flex flex-wrap sm:items-center gap-4">
          <SortBy />
          <Filter onFilterChange={handleFilter} />
          <AddInvoice />
        </div> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:h-64">
        <div className="border border-antiFlashWhite rounded-md p-4">
          <ResponsiveLine data={[
            {
              color: 'hsl(154, 70%, 50%)',
              data: [
                {
                  color: 'hsl(251, 70%, 50%)',
                  x: 'HM',
                  y: 29
                },
                {
                  color: 'hsl(299, 70%, 50%)',
                  x: 'CY',
                  y: 5
                },
                {
                  color: 'hsl(280, 70%, 50%)',
                  x: 'VG',
                  y: 47
                },
                {
                  color: 'hsl(165, 70%, 50%)',
                  x: 'CX',
                  y: 21
                },
                {
                  color: 'hsl(293, 70%, 50%)',
                  x: 'GN',
                  y: 5
                },
                {
                  color: 'hsl(259, 70%, 50%)',
                  x: 'CG',
                  y: 41
                },
                {
                  color: 'hsl(78, 70%, 50%)',
                  x: 'AZ',
                  y: 6
                },
                {
                  color: 'hsl(78, 70%, 50%)',
                  x: 'SR',
                  y: 37
                },
                {
                  color: 'hsl(217, 70%, 50%)',
                  x: 'MH',
                  y: 33
                },
                {
                  color: 'hsl(355, 70%, 50%)',
                  x: 'IR',
                  y: 38
                },
                {
                  color: 'hsl(360, 70%, 50%)',
                  x: 'GL',
                  y: 0
                },
                {
                  color: 'hsl(107, 70%, 50%)',
                  x: 'RE',
                  y: 34
                },
                {
                  color: 'hsl(10, 70%, 50%)',
                  x: 'HN',
                  y: 10
                },
                {
                  color: 'hsl(202, 70%, 50%)',
                  x: 'RW',
                  y: 27
                },
                {
                  color: 'hsl(358, 70%, 50%)',
                  x: 'BW',
                  y: 11
                },
                {
                  color: 'hsl(132, 70%, 50%)',
                  x: 'EG',
                  y: 35
                },
                {
                  color: 'hsl(346, 70%, 50%)',
                  x: 'LT',
                  y: 17
                },
                {
                  color: 'hsl(207, 70%, 50%)',
                  x: 'AR',
                  y: 9
                }
              ],
              id: 'whisky'
            },
          ]}
            xScale={{ type: 'point' }}
            margin={{
              top: 50,
              right: 110,
              bottom: 50,
              left: 60
            }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false
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
              truncateTickAt: 0
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
                    color: 'inherit',
                    offset: 0
                  },
                  {
                    color: 'inherit',
                    offset: 100,
                    opacity: 0
                  }
                ],
                id: 'gradientA',
                type: 'linearGradient'
              }
            ]}
            enableSlices="x"
            enableTouchCrosshair
            fill={[
              {
                match: {
                  id: 'whisky'
                },
                id: 'gradientA'
              }
            ]}
          />
        </div>
        <div className="border border-antiFlashWhite rounded-md p-4">
          <ResponsivePie
            data={[
              {
                "id": "javascript",
                "label": "javascript",
                "value": 570,
                "color": "hsl(244, 70%, 50%)"
              },
              {
                "id": "rust",
                "label": "rust",
                "value": 12,
                "color": "hsl(47, 70%, 50%)"
              },
              {
                "id": "python",
                "label": "python",
                "value": 265,
                "color": "hsl(123, 70%, 50%)"
              },
              {
                "id": "ruby",
                "label": "ruby",
                "value": 358,
                "color": "hsl(235, 70%, 50%)"
              },
              {
                "id": "go",
                "label": "go",
                "value": 162,
                "color": "hsl(169, 70%, 50%)"
              }
            ]}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: 'color',
              modifiers: [
                [
                  'darker',
                  0.2
                ]
              ]
            }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#ffffff"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{
              from: 'color',
              modifiers: [
                [
                  'darker',
                  2
                ]
              ]
            }}
            defs={[
              {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
              },
              {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
              }
            ]}
            fill={[
              {
                match: {
                  id: 'ruby'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'c'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'go'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'python'
                },
                id: 'dots'
              },
              {
                match: {
                  id: 'scala'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'lisp'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'elixir'
                },
                id: 'lines'
              },
              {
                match: {
                  id: 'javascript'
                },
                id: 'lines'
              }
            ]}
            legends={[
              {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000'
                    }
                  }
                ]
              }
            ]}
          />
        </div>
      </div>
      <DataTable<InvoiceData, unknown> columns={columns} data={invoices} />
    </div>
  );
}
