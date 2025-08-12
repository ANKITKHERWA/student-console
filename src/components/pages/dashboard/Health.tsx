import Comselect from '@/components/common/Comselect'
import Heading from '@/components/common/Heading'
import Pera from '@/components/common/Pera'
import { Progress } from '@/components/ui/progress'
import React from 'react'

function Health() {
  return (
    <>
      <div className=" border border-[#E4E7EB] rounded-[8px] bg-white w-full pt-6 pb-7 px-6">
        <div className="flex justify-between items-center">
          <div>
            <Heading
              className="text-xl text-[#030712] font-semibold leading-[120%] tracking-[-0.4px] pt-5 "
              title="Health Score"
            />
            <Pera className="text-[#808188] text-xs" title="300" />
          </div>
          <Comselect
            placeholder="Monthly"
            label="Last Days"
            options={['Monthly', 'Last Month', 'Last Year']}
          />
        </div>
        <div className="flex justify-between gap-2 mt-2">
          <Pera
            className="text-[#808188] text-xs w-[43%]"
            title="Catalog & Staff"
          />
          <Progress value={70} className="[&>div]:bg-[#B751FB] mt-2 h-[16px]" />
          <Pera className="text-[#808188] text-xs" title="9.2" />
        </div>
        <div className="flex justify-between gap-2 xl:xl:mt-10 mt-6 ">
          <Pera className="text-[#808188] text-xs w-[43%]" title="Offers" />
          <Progress value={70} className="[&>div]:bg-[#B751FB] mt-2 h-[16px]" />
          <Pera className="text-[#808188] text-xs" title="7.5" />
        </div>
        <div className="flex justify-between gap-2 xl:mt-10 mt-6">
          <Pera
            className="text-[#808188] text-xs w-[43%]"
            title="Client Engagement"
          />
          <Progress value={70} className="[&>div]:bg-[#B751FB] mt-2 h-[16px]" />
          <Pera className="text-[#808188] text-xs" title="4.2" />
        </div>
        <div className="flex justify-between gap-2 xl:mt-10 mt-6">
          <Pera
            className="text-[#808188] text-xs w-[43%]"
            title="Promote Usage"
          />
          <Progress value={70} className="[&>div]:bg-[#B751FB] mt-2 h-[16px]" />
          <Pera className="text-[#808188] text-xs" title="8.4" />
        </div>
        <div className="flex justify-between gap-2 xl:mt-10 mt-6">
          <Pera
            className="text-[#808188] text-xs w-[43%]"
            title="Venue Setup"
          />
          <Progress value={70} className="[&>div]:bg-[#B751FB] mt-2 h-[16px]" />
          <Pera className="text-[#808188] text-xs" title="2.5" />
        </div>
      </div>
    </>
  )
}

export default Health
