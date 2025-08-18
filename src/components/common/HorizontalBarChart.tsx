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
  LabelList,
} from 'recharts'

interface DataItem {
  name: string
  value: number
}

interface Props {
  data: DataItem[]
  title?: string
  barColor?: string
  height?: number
}

const HorizontalBarChart: React.FC<Props> = ({
  data,
  title = '',
  barColor = '#BB6BD9',
  height = 350,
}) => {
  return (
    <div className="border border-[#E4E7EB] rounded-lg p-5 w-full">
      {title && <p className="font-bold text-lg mb-4">{title}</p>}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 15, right: 30, left: -25, bottom: 15 }}
          barCategoryGap="15%">
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            width={110}
            tick={{ fontSize: 14, fill: '#444' }}
          />
          <Tooltip
            formatter={(value: any) => value}
            cursor={{ fill: 'rgba(187,107,217,0.1)' }}
            labelStyle={{ fontWeight: 600, fontSize: 13 }}
          />
          <Bar
            dataKey="value"
            fill={barColor}
            barSize={17}
            background={{ fill: '#e2e2e2', radius: 4 }}
            isAnimationActive={false}>
            <LabelList
              dataKey="value"
              position="right"
              style={{ fill: '#222', fontWeight: 'bold', fontSize: 14 }}
              formatter={(v: number) => v}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default HorizontalBarChart
