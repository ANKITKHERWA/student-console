import React from 'react'

import { CriticalDetail, TaskDetail } from '../helper/Helper1'
import Heading from './Heading'
import Pera from './Pera'

function CriticalTask() {
  console.log(TaskDetail)

  return (
    <div className="w-full md:grid grid-cols-3 gap-4 md:pt-5 pt-0">
      {CriticalDetail.map((card, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg  bg-white shadow-md hover:shadow-lg transition-shadow md:mt-0 mt-5 ">
          <div className="flex gap-4 py-2 px-3">
            <span>{card.Icon}</span>
            <div>
              <Heading
                title={card.title}
                className="text-[#030712] font-medium text-[10px]! leading-[150%] tracking-[-0.32px]"
              />
              <Pera
                title={card.pera}
                className="text-[rgba(3, 7, 18, 0.50)]! text-[8px]! "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CriticalTask
