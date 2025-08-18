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

interface DataItem {
  name: string
  value: number
}

interface Props {
  data: DataItem[]
  title?: string
  barColor?: string
}

const formatNumber = (num: number) => {
  if (Math.abs(num) >= 1.0e9) return (num / 1.0e9).toFixed(1) + 'B'
  if (Math.abs(num) >= 1.0e6) return (num / 1.0e6).toFixed(1) + 'M'
  if (Math.abs(num) >= 1.0e3) return (num / 1.0e3).toFixed(1) + 'k'
  return num.toString()
}

const HorizontalBarChart: React.FC<Props> = ({
  data,
  title,
  barColor = '#BB6BD9',
}) => {
  return (
    <div
      className="border border-[#E4E7EB] rounded-lg p-5 w-full"
      style={{ height: 350 }}>
      {title && <p className="font-bold text-lg mb-4">{title}</p>}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
          barCategoryGap="15%">
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" tickFormatter={formatNumber} />
          <YAxis type="category" dataKey="name" width={100} />
          <Tooltip formatter={(value: any) => formatNumber(Number(value))} />
          <Bar
            dataKey="value"
            fill={barColor}
            radius={[4, 4, 4, 4]}
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default HorizontalBarChart
