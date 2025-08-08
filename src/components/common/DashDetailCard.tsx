import React from 'react'
import Pera from './Pera'

import { cardsDetail } from '../helper/Helper1'

function DashDetailCard() {
  return (
    <>
      <div className="w-full flex justify-between flex-wrap mt-6 px-6">
        {cardsDetail.map((card, index) => (
          <div
            key={index}
            className="border-2 border-[#E4E7EB] bg-white rounded-[8px] p-4 mb-4 lg:w-[32%] md:w-[48%] w-full cursor-pointer hover:bg-[#EAEEF5] transition-all duration-300">
            <p className="text-[#030712] text-base font-semibold leading-[150%] tracking-[-0.32px] flex items-center gap-3">
              <span>{card.icon}</span>
              {card.title}
            </p>
            <div className="flex justify-between items-end mt-6">
              <h3 className="text-[#1D212C] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl  leading-[120%] tracking-[-0.8px] font-semibold flex items-end gap-1">
                {card.heading}
                <span>{card.righticon}</span>
                <span className="text-[#31A553]! text-sm">{card.para}</span>
              </h3>
              <Pera
                title={card.percentage}
                className="text-[#030712]! text-sm bg-[#E0F6E6] rounded-[4px] px-2 py-1"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default DashDetailCard
