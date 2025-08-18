import React from 'react'
import SelecteStatus from './SelecteStatus'
import { Input } from '@/components/ui/input'
import { SearchIcon } from '@/components/helper/Icon2'
import Filter from './Filter'

function Growth() {
  return (
    <>
      <div className="md:px-5 px-4 lg:px-6">
        <form className="md:py-5 py-3 sm:py-4 lg:py-6">
          <div className="flex justify-center min-[460px]:justify-between  items-center gap-2 flex-wrap min-[460px]:flex-nowrap">
            <SelecteStatus />
            <div className="flex items-center md:gap-5 sm:gap-4 gap-2 lg:gap-[30px]">
              <div className="flex items-center gap-1 w-full xl:min-w-[290px] py-1.5 px-3 !border-[#D9DDE3] border rounded md:rounded-[6px]">
                <Input
                  placeholder="Search..."
                  className="max-w-sm !ring-0 w-full !shadow-none !border-none !rounded-[0px] !h-[20px] !p-0"
                />
                <SearchIcon />
              </div>
              <Filter />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Growth
