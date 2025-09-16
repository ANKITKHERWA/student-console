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
import { ActiveData } from '@/components/helper/Helper1'

type Row = { month: string; desktop: number; active: number }

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
    <div className="w-full px-6 mt-6 flex flex-row flex-wrap xl:flex-nowrap justify-between gap-4 pb-4">
      <div className="xl:w-[55%] w-full flex flex-col gap-4">
        <div className="border border-[#E4E7EB] rounded-[8px] bg-white xl:pt-6 pt-4 xl:pb-7 pb-0 xl:px-6 px-2 w-full">
          <div className="flex  justify-between items-center pt-1 gap-5">
            <Heading
              title="Active vs Registered Trend"
              className="sm:text-xl! text-base! text-[#030712] font-semibold leading-[120%] tracking-[-0.4px]"
            />
            <div className="flex flex-wrap items-center gap-5 ml-auto">
              <DotColor title="Registered" className="bg-[#CCC]" />
              <DotColor title="Active" className="bg-[#B751FB]" />
            </div>
          </div>
          {/* Chart area */}
          <div className="mt-6 xl:h-[300px] h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={ActiveData}
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
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickCount={5}
                  className="xl:text-base text-sm"
                />
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
        <div className="border border-[#E4E7EB] rounded-[8px] bg-white w-full xl:p-6 p-4">
          <div className="flex justify-between gap-4">
            <Heading
              title="Critical tasks"
              className="sm:text-xl! text-base! text-[#030712] font-semibold leading-[120%] tracking-[-0.4px]"
            />
            <PrimaryBtn className="sm:w-30! w-22! " title="view detials" />
          </div>
          <CriticalTask />
        </div>
      </div>
      <div className="border border-[#E4E7EB] rounded-[8px] bg-white w-full xl:w-[45%] xl:p-6 p-4">
        <div className="flex justify-between gap-4">
          <Heading
            title="Growth Task"
            className="sm:text-xl! text-base! text-[#030712] font-semibold leading-[120%] tracking-[-0.4px]"
          />
          <PrimaryBtn className="sm:w-30! w-22! " title="view detials" />
        </div>
        <GrowthTask />
      </div>
    </div>
  )
}
