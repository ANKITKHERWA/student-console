"use client";
import Pera from "@/components/common/Pera";
import Search from "@/components/common/Search";
import { Fluentcard, Tablericon } from "@/components/helper/Icon1";
import React, { useState } from "react";
import Heading from "@/components/common/Heading";
import TeamCard from "@/components/common/TeamCard";
import { teamCardData } from "@/components/helper/Helper2";
import { Sheet, SheetContent } from "@/components/ui/sheet";

function Member() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center px-6 mt-7">
        <div>
          <Pera className="text-lg font-semibold" title="Total Members:16" />
        </div>
        <div className="flex gap-2">
          <Search />
          <Fluentcard />
          <Tablericon />
        </div>
      </div>
      <div className="px-6 mt-7">
        {teamCardData.map((item, index) => (
          <div key={index} className="mt-[30px]">
            <Heading title={item.heading} className="text-xl!" />
            <div className="flex flex-wrap gap-5 mt-4 items-center" onClick={()=>{setOpen(true)}}>
              {item.tcList.map((Item, index) => (
                <TeamCard
                  key={index}
                  avatar={Item.avatar}
                  name={Item.name}
                  icon={Item.icon}
                  gender={Item.gender}
                  tag={Item.tag}
                  phone={Item.phone}
                  email={Item.email}
                  manages={Item.manages}
                  totalSalons={Item.totalSalons}
                  dotclass={Item.dotclass}
                  tagclass={Item.tagclass}
                  ganderclass={Item.ganderclass}
                />
              ))}
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] overflow-auto !pb-3"
              >
               {item.tcList.map((Item, index) => (
                <div key={index}>{Item.avatar}</div>
               ))}
              </SheetContent>
            </Sheet>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Member;
