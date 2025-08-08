import Heading from '@/components/common/Heading'
import PerformenceDetail from '@/components/common/PerformenceDetail'
import React from 'react'

function Perform() {
  return (
    <>
      <div className="px-6 ">
        <div className="bg-white w-[55%] border border-[#E4E7EB] rounded-[8px]  pt-6 pb-7 px-6">
          <div>
            <Heading
              className="text-xl text-[#030712] font-semibold leading-[120%] tracking-[-0.4px] py-5"
              title="Performance Overview"
            />
          </div>
          <div className="grid grid-flow-row grid-cols-2 justify-between gap-7 items-center">
            <PerformenceDetail />
          </div>
        </div>
      </div>
    </>
  )
}

export default Perform
