import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar } from "@/components/ui/calendar";
import { FilterIcon, SelectRightIcon } from '@/components/helper/Icon2';
import { criticalFiltersData } from '@/components/helper/Helper2';
import PrimaryBtn from '@/components/common/PrimaryBtn';
function Filter() {
     const [selectedFilter, setSelectedFilter] = React.useState("All");
     const [date, setDate] = React.useState<Date | undefined>(new Date()); // ← ye add karo
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="!ring-0 !w-full">
          <button className="flex items-center gap-1.5 text-[#A8A9AE] text-sm font-medium leading-[142%] tracking-[0.28px] py-1.5 px-3 rounded-[6px] border !ring-0 hover:bg-[#F3F4F6] w-full text-nowrap">
            <FilterIcon />
            Filter by date
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
        //   side=""
          align="start"
          className="p-4 !ps-0 !right-6 border border-[#E4E7EB] rounded-[6px] shadow-[-5px_0_49.6px_0_rgba(3,7,18,0.08),5px_6px_36.1px_0_rgba(3,7,18,0.08)] !left-10"
        >
          {/* 2-column layout */}
          <div className="flex">
            {/* Left: Filter List */}
            <div className="text-[#030712] text-xs font-semibold leading-[166%] -tracking-[0.24px] min-w-[116px]">
              {criticalFiltersData.map((filter, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedFilter(filter.title)}
                  className={`flex items-center gap-1 ps-4  p-[5.5px] hover:bg-[#F1DCFF] transition-all duration-200`}
                >
                  {selectedFilter === filter.title && <SelectRightIcon />}
                  <span>{filter.title}</span>
                </div>
              ))}
            </div>

            {/* Right: Calendar */}
            <div className="border-l border-[#D9DDE3] pl-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border text-[11px]
               [&_.rdp-day_selected]:bg-[#B751FB]
               [&_.rdp-day_selected]:text-white
               [&_.rdp-button]:text-[11px]"
              />
              <div className="flex justify-end mt-[5px] gap-1.5">
                <PrimaryBtn
                  title="cancel"
                  className="w-max border-[#E4E7EB] border bg-transparent !rounded-[2px] !py-1 !px-1.5 !text-[#030712] !text-[6px]"
                />
                <PrimaryBtn
                  title="Apply"
                  className="!py-1 !px-1.5 !text-[6px] !rounded-[2px] w-max"
                />
              </div>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Filter