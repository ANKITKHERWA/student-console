import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelecteStatusProps {
  value?: string;
  onChange?: (value: string) => void;
}

export default function SelecteStatus({ value, onChange }: SelecteStatusProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="text-[#030712] !font-semibold !border-[#E4E7EB] rounded md:!rounded-[6px] w-[189px] md:py-2 py-1 px-1.5 md:px-3">
        <SelectValue
          placeholder="Select Status"
          className="placholder:!text-[#030712] !font-semibold"
        />
      </SelectTrigger>

      <SelectContent className="!p-0 !m-0">
        <SelectGroup className="!p-0 !m-0">
          <SelectItem value="all" className="...">
            <div className="border border-[#FFEFDB] bg-[linear-gradient(146deg,#FFEFDB_6.59%,#EDEDED_46.67%,#E3F7E9_93.41%)] w-4 h-4 rounded-full " />
            All
          </SelectItem>

          <SelectItem value="active" className="...">
            <div className="border border-[#31A553] bg-[rgba(227,247,233,1)] w-4 h-4 rounded-full " />
            Active
          </SelectItem>

          <SelectItem value="expired" className="...">
            <div className="border border-[#808188] bg-[rgba(237,237,237,1)] w-4 h-4 rounded-full " />
            Expired
          </SelectItem>

          <SelectItem value="due" className="...">
            <div className="border border-[#F5640A] bg-[rgba(255,239,219,1)] w-4 h-4 rounded-full " />
            Due
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
