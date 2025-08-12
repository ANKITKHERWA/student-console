'use client'

import React from 'react'
import DotColor from '@/components/common/DotColor'
import Heading from '@/components/common/Heading'
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import PrimaryBtn from '@/components/common/PrimaryBtn'
import GrowthTask from '@/components/common/GrowthTask'
import CriticalTask from '@/components/common/CriticalTask'

type Row = { month: string; desktop: number; active: number }

const data: Row[] = [
  { month: 'Jan', desktop: 1500, active: 200 },
  { month: 'Feb', desktop: 1300, active: 600 },
  { month: 'Mar', desktop: 2400, active: 620 },
  { month: 'Apr', desktop: 1800, active: 300 },
  { month: 'May', desktop: 1700, active: 850 },
  { month: 'Jun', desktop: 2100, active: 1250 },
  { month: 'Jul', desktop: 2150, active: 1450 },
  { month: 'Aug', desktop: 1500, active: 1200 },
  { month: 'Sep', desktop: 1100, active: 1000 },
  { month: 'Oct', desktop: 1700, active: 1600 },
  { month: 'Nov', desktop: 950, active: 500 },
  { month: 'Dec', desktop: 900, active: 900 },
]

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="bg-white border rounded-md p-2 text-sm shadow">
      <div className="font-medium mb-1">{label}</div>
      {payload.map((p: any, i: number) => {
        const color =
          p.color ?? p.stroke ?? (p.payload && p.payload.color) ?? '#000'
        return (
          <div key={i} className="flex items-center gap-2">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: color }}
            />
            <div className="truncate">
              <span className="capitalize">{p.name}</span>:{' '}
              <span className="font-semibold">{p.value}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function ActiveTrend() {
  return (
    <div className="w-full px-6 mt-6 flex flex-row flex-wrap xl:flex-nowrap justify-between gap-4">
      <div className="xl:w-[55%] w-full flex flex-col gap-4">
        <div className="border border-[#E4E7EB] rounded-[8px] bg-white pt-6 pb-7 px-6 w-full ">
          <div className="flex justify-between items-center pt-1">
            <Heading
              title="Active vs Registered Trend"
              className="text-xl text-[#030712] font-semibold leading-[120%] tracking-[-0.4px]"
            />
            <div className="flex items-center gap-[20px] ml-auto">
              <DotColor title="Registered" className="bg-[#CCC]" />
              <DotColor title="Active" className="bg-[#B751FB]" />
            </div>
          </div>
          {/* Chart area */}
          <div className="mt-6 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                {/* Gradients */}
                <defs>
                  <linearGradient
                    id="desktopGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--chart-desktop-stroke, #d9d9d9)"
                      stopOpacity={0.8}
                    />
                    <stop offset="60%" stopColor="#fff" stopOpacity={0.06} />
                    <stop offset="100%" stopColor="#fff" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient
                    id="activeGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1">
                    <stop
                      offset="0%"
                      stopColor="var(--chart-active-stroke, #b751fb)"
                      stopOpacity={0.28}
                    />
                    <stop offset="60%" stopColor="#fff" stopOpacity={0.06} />
                    <stop offset="100%" stopColor="#fff" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  stroke="var(--chart-grid, #EAEAEA)"
                  strokeDasharray="6 6"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  padding={{ left: 8, right: 8 }}
                />
                <YAxis axisLine={false} tickLine={false} tickCount={5} />
                <Tooltip
                  content={<CustomTooltip />}
                  wrapperStyle={{ outline: 'none' }}
                />

                {/* The order matters — desktop behind, active in front */}
                <Area
                  name="Registered"
                  dataKey="desktop"
                  type="natural"
                  stroke="var(--chart-desktop-stroke, #d9d9d9)"
                  strokeWidth={4}
                  fill="url(#desktopGradient)"
                  fillOpacity={1}
                  dot={false}
                />
                <Area
                  name="Active"
                  dataKey="active"
                  type="natural"
                  stroke="var(--chart-active-stroke, #b751fb)"
                  strokeWidth={4}
                  fill="url(#activeGradient)"
                  fillOpacity={1}
                  dot={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="border border-[#E4E7EB] rounded-[8px] bg-white w-full p-6">
          <div className="flex justify-between gap-4">
            <Heading
              title="Critical tasks"
              className="text-xl text-[#030712] font-semibold leading-[120%] tracking-[-0.4px]"
            />
            <PrimaryBtn className="w-30! " title="view detials" />
          </div>
          <CriticalTask />
        </div>
      </div>
      <div className="border border-[#E4E7EB] rounded-[8px] bg-white w-full xl:w-[45%] p-6">
        <div className="flex justify-between gap-4">
          <Heading
            title="Growth Task"
            className="text-xl text-[#030712] font-semibold leading-[120%] tracking-[-0.4px]"
          />
          <PrimaryBtn className="w-30! " title="view detials" />
        </div>
        <GrowthTask />
      </div>
    </div>
  )
}
