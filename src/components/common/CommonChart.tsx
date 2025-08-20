'use client'
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

// Helper function to format numbers as k, M, B, T
function formatNumber(num: number) {
  if (Math.abs(num) >= 1.0e12) {
    return (num / 1.0e12).toFixed(1).replace(/\.0$/, '') + 'T'
  }
  if (Math.abs(num) >= 1.0e9) {
    return (num / 1.0e9).toFixed(1).replace(/\.0$/, '') + 'B'
  }
  if (Math.abs(num) >= 1.0e6) {
    return (num / 1.0e6).toFixed(1).replace(/\.0$/, '') + 'M'
  }
  if (Math.abs(num) >= 1.0e3) {
    return (num / 1.0e3).toFixed(1).replace(/\.0$/, '') + 'k'
  }
  return num.toString()
}

interface Props {
  data: { name: string; value: number }[]
  title?: string
  barColor?: string
}

const CommonChart: React.FC<Props> = ({ data, title, barColor }) => (
  <div className="border border-[#E4E7EB] rounded-lg p-5 w-full h-[331px]">
    <p className="font-semibold text-lg mb-3">{title}</p>
    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data} margin={{ top: 0, right: 0, left: -15, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatNumber} />
        <Tooltip formatter={(value: 17) => formatNumber(Number(value))} />
        <Bar dataKey="value" fill={barColor} radius={2} barSize={17} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)

export default CommonChart
