'use client'
import React from 'react'
import Pera from './Pera'
import { Progress } from '../ui/progress'

interface DataItem {
  name: string
  value: number
}

interface Props {
  data: DataItem[]
  title?: string
}

const HorizontalBarChart: React.FC<Props> = ({ title = '', data }) => {
  return (
    <div className="border border-[#E4E7EB] rounded-lg p-5 w-full">
      {title && <p className="font-bold text-lg mb-4">{title}</p>}
      {data.map((item, idx) => (
        <div className="flex justify-between gap-4 mt-6 items-center" key={idx}>
          <div className="w-[20%]">
            <Pera className="text-[#808188] text-xs" title={item.name} />
          </div>
          <div className="w-[60%]">
            <Progress
              value={item.value}
              className="[&>div]:bg-[#B751FB] h-[16px] rounded-none"
            />
          </div>
          <div className="w-[20%]">
            <Pera
              className="text-[#808188] text-xs"
              title={item.value.toString()}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default HorizontalBarChart
