"use client";
import Selecte from "@/components/common/Selecte";
import TableCommon from "@/components/common/TableCommon";
import {
  followUp,
  followUpPlans,
  optionsList,
} from "@/components/helper/Helper2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import Filter from "../insights/Filter";
import { Fluentcard, Tablericon } from "@/components/helper/Icon2";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import SelecteStatus from "./SelecteStatus";

function FollowUpPlans() {
  const [selectedUser, setSelectedUser] = useState<null>(null);
  const [open, setOpen] = useState(false);

  const [selectedValues, setSelectedValues] = useState<
    Record<string, string | null>
  >({});

  const handleValueChange = (id: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [id]: value }));
  };
  return (
    <Tabs defaultValue={"all"}>
      <div className="pt-4">
        <form className="justify-between sm:items-start items-center gap-4 sm:flex-row flex-col flex flex-wrap">
          <div className="flex flex-wrap gap-3 sm:flex-row flex-col items-center">
            <div className="flex flex-wrap gap-2 sm:justify-normal justify-center">
              <div className="flex flex-wrap gap-2 items-center sm:justify-normal justify-center ">
                {optionsList.map((option) => (
                  <Select
                    key={option.id}
                    value={selectedValues[option.id] ?? ""}
                    onValueChange={(value) =>
                      handleValueChange(option.id, value)
                    }
                  >
                    <SelectTrigger className="text-[#030712] !font-semibold !border-[#E4E7EB] rounded md:!rounded-[6px] md:py-2 py-1 px-1.5 md:px-3 flex !gap-0">
                      <SelectValue
                        placeholder={option.placeholder}
                        className="placeholder:!text-[#030712] !font-semibold placeholder:!text-xs md:!text-sm"
                      />
                    </SelectTrigger>

                    <SelectContent className="!p-0 !m-0">
                      <SelectGroup className="!p-0 !m-0">
                        {option.item.map((opt) => (
                          <SelectItem
                            key={opt.value}
                            value={opt.value}
                            className="flex items-center gap-2 !p-0 !m-0 rounded-none w-full !py-2 sm:!py-[7px] text-sm !px-1 sm:!px-3 !justify-start data-[state=checked]:bg-[#F1DCFF]"
                          >
                            {/* Faux checkbox */}
                            <input
                              type="checkbox"
                              checked={selectedValues[option.id] === opt.value}
                              readOnly
                              className="accent-[#A259FF]"
                            />
                            <Image
                              height={20}
                              width={20}
                              src={opt.img}
                              alt={opt.title}
                              className="w-7 h-7 rounded-full object-cover"
                            />
                            <span>{opt.title}</span>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                ))}
              </div>
              <SelecteStatus />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap items-center sm:justify-normal justify-center">
            <TabsList className="md:!rounded-sm !rounded-xs">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="today">Today</TabsTrigger>
              <TabsTrigger value="upComing">Up Coming</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
            <div className="flex gap-3">
              <Filter />
              <div className="flex gap-2 items-center">
                <button onClick={() => setOpen(true)}>
                  <Fluentcard className="" />
                </button>
                <button onClick={() => setOpen(true)}>
                  <Tablericon />
                </button>
              </div>
            </div>
          </div>
        </form>
        <TabsContent value="all" className="mt-6">
          <TableCommon data={followUpPlans} />
        </TabsContent>
      </div>
    </Tabs>
  );
}

export default FollowUpPlans;
