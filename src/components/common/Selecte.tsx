import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  icon?: React.ReactNode; // allows passing any JSX icon
  placeholder: string;
  className?:string;
  options: {
    title: string;
    value: string;
  }[];
};

const Selecte: React.FC<Props> = ({
  placeholder,
  icon,
  options,
  className,
}) => {
  return (
    <Select>
      <SelectTrigger
        className={`text-[#030712] !font-semibold !border-[#E4E7EB] rounded md:!rounded-[6px] md:py-2 py-1 px-1.5 md:px-3 flex !gap-0 ${className}`}
      >
        {icon && <span>{icon}</span>}
        <SelectValue
          placeholder={placeholder}
          className="placeholder:!text-[#030712] !font-semibold placeholder:!text-xs md:!text-sm"
        />
      </SelectTrigger>

      <SelectContent className="!p-0 !m-0">
        <SelectGroup className="!p-0 !m-0">
          {options.map((opt, idx) => (
            <SelectItem
              key={idx}
              value={opt.value}
              className="!p-0 !m-0 rounded-none w-full !py-2 sm:!py-[7px] text-sm !px-1 sm:!px-3 !justify-start gap-2 data-[state=checked]:bg-[#F1DCFF]"
            >
              {/* <div className="border border-[#FFEFDB] bg-[linear-gradient(146deg,#FFEFDB_6.59%,#EDEDED_46.67%,#E3F7E9_93.41%)] w-4 h-4 rounded-full " /> */}
              {opt.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selecte;
