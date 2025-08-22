"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CalenderBlackSmallIocn,
  FollowUpIcon,
  KebabMenuIcon,
  PartnerIcon,
  PlusIcon,
  SmallEyeIcon,
  ViewReportIcon,
} from "../helper/Icon2";
import Addnewvisite from "../pages/partner/Addnewvisite";

type MenuItem = {
  label?: string;
  extra?: React.ReactNode;
  onClick?: () => void;
  align?: "start" | "center" | "end";
};
const KebabMenucommon: React.FC<MenuItem> = ({ align }) => {
  const [selectedUser, setSelectedUser] = useState<null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className={`!ring-0 h-max`}>
          <button className={`p-2 rounded`}>
            <KebabMenuIcon />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={align}
          className="sm:w-[258px] !p-0 flex flex-col gap-[5px]"
        >
          <DropdownMenuItem
            onClick={() => {
              // setOpen?.(true);
            }}
            className="hover:!bg-[#F1DCFF] font-semibold !flex !px-3 !py-1 !gap-2  leading-[142%] -tracking-[0.28px] text-xs md:text-sm !text-[#030712] !rounded-[0px]"
          >
            <SmallEyeIcon /> <Addnewvisite />
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:!bg-[#F1DCFF] font-semibold !flex !px-3 !py-1 !gap-2  leading-[142%] -tracking-[0.28px] text-xs md:text-sm !text-[#030712] !rounded-[0px]">
            <ViewReportIcon /> View Report
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:!bg-[#F1DCFF] font-semibold !flex !px-3 !py-1 !gap-2  leading-[142%] -tracking-[0.28px] text-xs md:text-sm !text-[#030712] !rounded-[0px]">
            <CalenderBlackSmallIocn /> Add Visit
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:!bg-[#F1DCFF] font-semibold !flex !px-3 !py-1 !gap-2  leading-[142%] -tracking-[0.28px] text-xs md:text-sm !text-[#030712] !rounded-[0px]">
            <FollowUpIcon />
            Add Visit Report
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:!bg-[#F1DCFF] font-semibold !flex !px-3 !py-1 !gap-2  leading-[142%] -tracking-[0.28px] text-xs md:text-sm !text-[#030712] !rounded-[0px]">
            <PlusIcon />
            Add Visit Report
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:!bg-[#F1DCFF] font-semibold !flex !px-3 !py-1 !gap-2  leading-[142%] -tracking-[0.28px] text-xs md:text-sm !text-[#030712] !rounded-[0px]">
            <PartnerIcon /> Assign Partner
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default KebabMenucommon;
