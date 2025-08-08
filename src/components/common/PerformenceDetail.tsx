import React from 'react'
import { performDetail } from '../helper/Helper1'
import { Progress } from '../ui/progress'

function PerformenceDetail() {
  return (
    <>
      {performDetail.map((card, index) => (
        <div key={index}>
          <div className="flex justify-between gap-2 items-center w-full">
            <div className="flex items-center gap-2">
              <span>{card.Icon}</span>
              <span className="text-[#030712] text-sm font-medium leading-[142%] later-spacing-[-0.28px]">
                {card.para1}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#2EE560] text-xs font-medium leading-[133%] later-spacing-[-0.24px]">
                {card.para2}
              </span>
              <span className="text-[#000] text-xs font-medium leading-[133%] later-spacing-[-0.24px]">
                {card.para3}
              </span>
            </div>
          </div>
          <Progress value={card.Value} className="[&>div]:bg-[#B751FB] mt-2" />
        </div>
      ))}
    </>
  )
}

export default PerformenceDetail
