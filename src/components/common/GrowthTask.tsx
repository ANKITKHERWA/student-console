import React from 'react'

import { TaskDetail } from '../helper/Helper1'
import Heading from './Heading'
import Pera from './Pera'

function GrowthTask() {
  console.log(TaskDetail)

  return (
    <div className="w-full md:grid grid-cols-2  gap-5 md:pt-5 pt-0">
      {TaskDetail.map((card, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg  bg-white shadow-md hover:shadow-lg transition-shadow mt-5 md:mt-0">
          <div className="flex gap-4 py-2.5 px-2 h-[72px]">
            <span>{card.Icon}</span>
            <div>
              <Heading
                title={card.title}
                className="text-[#030712] font-medium md:text-sm! text-xs leading-[150%] tracking-[-0.32px]"
              />
              <Pera
                title={card.pera}
                className="text-[rgba(3, 7, 18, 0.50)]! md:text-sm! text-xs "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GrowthTask
