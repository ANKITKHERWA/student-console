"use client";
import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { JSX } from "react/jsx-runtime";

type SaloneName = {
  img: string;
  name: string;
};

type Issue = {
  issu1: string;
  issu2: string;
};

type Td = {
  saloneName?: SaloneName[];
  add?: string;
  health?: string;
  issue?: Issue[];
  staff?: string;
  onboarding?: string;
  bankAcc?: string;
  monthlyTarget?: string;
  subscription?: string;
  lastVisit?: string;
  nextVisit?: string;
  tcName?: string;
  rmName?: string;
  feName?: string;
  action?: React.ReactNode | React.ReactNode[];
  data?: string;
};

type Iprops = {
  id: number;
  td: Td[];
};

type TableCommonProps = {
  data: {
    head: {
      title: string;
    }[];
    body: {
      id: number;
      td: {
        saloneName?: { img: string; name: string }[];
        add?: string;
        health?: string;
        issue?: { issu1: string; issu2: string }[];
        staff?: string;
        onboarding?: string;
        bankAcc?: string;
        monthlyTarget?: string;
        subscription?: string;
        lastVisit?: string;
        nextVisit?: string;
        tcName?: string;
        rmName?: string;
        feName?: string;
        action?: React.ReactNode | React.ReactNode[];
        tdData?: string | number | JSX.Element;
      }[];
    }[];
  }[];
  sidebarContent?: React.ReactNode;
};

const TableCommon: React.FC<TableCommonProps> = ({ data, sidebarContent }) => {
  const [selectedUser, setSelectedUser] = useState<Iprops | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-auto border rounded-[6px] border-[#D9DDE3]">
        {data.map((items, index) => (
          <table
            key={index}
            className="text-nowrap w-full text-xs sm:text-sm  "
          >
            <TableHead data={items.head} />

            <TableBody
              body={items.body}
              selectedUser={selectedUser}
              setSelectedUser={(user) => {
                setSelectedUser(user);
                setOpen(true);
              }}
              setOpen={setOpen}
            />
          </table>
        ))}
      </div>

      {/* sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:w-[400px] overflow-auto !pb-3 !max-w-none"
        >
          {selectedUser && sidebarContent}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default TableCommon;
