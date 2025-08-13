import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { KebabMenuIcon } from "../helper/Icon2";

type MenuItem = {
  label: string;
  extra: React.ReactNode;
  onClick?: () => void;
};

type TableKebabMenuProps = {
  items: MenuItem[];
};

function TableKebabMenu({ items }: TableKebabMenuProps,) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={`!ring-0 h-max`}>
        <button className={`p-2 rounded`}>
          <KebabMenuIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="sm:w-[258px] !p-0 flex flex-col gap-[5px]"
      >
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            className="hover:!bg-[#F1DCFF] font-semibold !flex !px-3 !py-1 !gap-2  leading-[142%] -tracking-[0.28px] text-xs md:text-sm !text-[#030712] !rounded-[0px]"
          >
            <span>{item.extra}</span>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TableKebabMenu;
