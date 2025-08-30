import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelecteStatus() {
  return (
    <Select>
      <SelectTrigger
        className={`text-[#030712] !font-semibold !border-[#E4E7EB] rounded md:!rounded-[6px] w-[150px] md:py-2 py-1 px-1.5 md:px-3`}
      >
        <SelectValue
          placeholder="Select Status"
          className="placholder:!text-[#030712] !font-semibold"
        />
      </SelectTrigger>
      <SelectContent className="!p-0 !m-0">
        <SelectGroup className="!p-0 !m-0">
          <SelectItem
            value="active"
            className="!p-0 !m-0 rounded-none w-full !py-2 sm:!py-[7px]  text-sm !px-1 sm:!px-3 !justify-start gap-2 data-[state=checked]:bg-[#F1DCFF]"
          >
            <div className="border border-[#31A553] bg-[rgba(227,247,233,1)] w-4 h-4 rounded-full " />
            Completed
          </SelectItem>
          <SelectItem
            value="all"
            className="!p-0 !m-0  rounded-none w-full !py-2 sm:!py-[7px] text-sm !px-1 sm:!px-3 !justify-start gap-2 data-[state=checked]:bg-[#F1DCFF]"
          >
            <div className="border border-[#F5640A] bg-[#FFEFDB] w-4 h-4 rounded-full " />
            Planned
          </SelectItem>
          <SelectItem
            value="expired"
            className="!p-0 !m-0 rounded-none w-full !py-2 sm:!py-[7px]  text-sm !px-1 sm:!px-3 !justify-start gap-2 data-[state=checked]:bg-[#F1DCFF]"
          >
            <div className="border border-[#F00] bg-[rgba(255,136,136,0.34)] w-4 h-4 rounded-full " />
            Expired
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
