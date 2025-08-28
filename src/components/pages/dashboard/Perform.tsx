import Heading from '@/components/common/Heading'
import PerformenceDetail from '@/components/common/PerformenceDetail'
import React from 'react'
import Health from './Health'

function Perform() {
  return (
    <>
      <div className="flex flex-row flex-wrap xl:flex-nowrap justify-between gap-5 px-6">
        <div className=" xl:w-[55%] w-full">
          <div className="bg-white  border border-[#E4E7EB] rounded-[8px]  pt-6 pb-7 px-6">
            <div>
              <Heading
                className="sm:text-xl! text-base! text-[#030712] font-semibold leading-[120%] tracking-[-0.4px] py-5"
                title="Performance Overview"
              />
            </div>
            <div className="xl:grid grid-flow-row xl:grid-cols-2 justify-between gap-7 items-center">
              <PerformenceDetail />
            </div>
          </div>
        </div>
        <div className="xl:w-[45%] w-full">
          <Health />
        </div>
      </div>
    </>
  )
}

export default Perform
