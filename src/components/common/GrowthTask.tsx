import React from 'react'

import { TaskDetail } from '../helper/Helper1'
import Heading from './Heading'
import Pera from './Pera'

function GrowthTask() {
  console.log(TaskDetail)

  return (
    <div className="w-full grid grid-cols-2  gap-5 pt-5">
      {TaskDetail.map((card, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg  bg-white shadow-md hover:shadow-lg transition-shadow">
          <div className="flex gap-4 py-2.5 px-2 h-[72px]">
            <span>{card.Icon}</span>
            <div>
              <Heading
                title={card.title}
                className="text-[#030712] font-medium text-sm! leading-[150%] tracking-[-0.32px]"
              />
              <Pera
                title={card.pera}
                className="text-[rgba(3, 7, 18, 0.50)]! text-sm! "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GrowthTask
