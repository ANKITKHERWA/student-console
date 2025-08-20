"use client";
import Pera from "@/components/common/Pera";
import Search from "@/components/common/Search";
import {
  EmailteamCard,
  FemaleteamCard,
  Fluentcard,
  MaleteamCard,
  ManegeteamCard,
  PhoneteamCard,
  SaloonteamCard,
  Tablericon,
} from "@/components/helper/Icon1";
import React, { useState } from "react";
import Heading from "@/components/common/Heading";
import { someData } from "@/components/helper/Helper2";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { KebabMenuIcon, MailIcon } from "@/components/helper/Icon2";
import SmallHeading from "@/components/common/SmallHeading";
import TeamPageCard from "@/components/common/TeamPageCard";
interface props {
  avatar: React.ReactNode;
  name: string;
  icon: React.ReactNode;
  gender: string;
  tag: string;
  phone?: string;
  email?: string;
  manages?: string;
  totalSalons?: number;
  dotclass?: string;
  className?: string;
  ganderclass?: string;
  tagclass?: string;
}
function Member() {
  const [selectedMember, setSelectedMember] = useState<props | null>(null);
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
        {someData.map((item, index) => (
          <div key={index} className="mt-[30px]">
            <Heading title={item.heading} className="text-xl!" />
            <div className="flex flex-wrap gap-5 mt-4 items-center">
              {/* {item.tcList.map((Item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedMember(Item);
                    setOpen(true);
                  }}
                >
                  <TeamPageCard
                    key={idx}
                    avatar={Item.avatar}
                    name={Item.name}
                    icon={Item.icon}
                    gender={Item.gender}
                    tag={Item.tag}
                    subData={Item.subData}
                  />
                </div>
              ))} */}
              {item.tcList.map((Items, idxs) => (
                <div
                  key={idxs}
                  onClick={() => {
                    setSelectedMember(Items);

                    setOpen(true);
                  }}
                  className={`max-w-xs rounded-xl border border-[#E4E7EB] group py-3 hover:bg-[#F1DCFF] bg-[#fff] shadow-lg w-307 `}
                >
                  <span className={`rounded-full h-3 w-3 ml-2 block`}> </span>
                  <div className="flex items-center gap-4 px-6">
                    <span>{Items.avatar}</span>
                    <div>
                      <h2 className="text-lg font-semibold">{Items.name}</h2>
                      <div className="flex gap-2 mt-1">
                        <span
                          className={`rounded-full text-black px-2.5 py-0.5 text-xs border font-medium flex items-center gap-1`}
                        >
                          {Items.gender == "Male" ? (
                            <MaleteamCard />
                          ) : Items.gender == "Female" ? (
                            <FemaleteamCard />
                          ) : (
                            ""
                          )}
                          {/* {icon} */}
                          {Items.gender}
                        </span>
                        <span className="w-[1px] h-[20px] bg-[#E4E7EB] group-hover:bg-white"></span>
                        <span
                          className={`rounded-full text-black px-2.5 py-0.5 text-xs font-medium border  ${
                            Items.tag === "TC"
                              ? "border-[#FFAB47] bg-[#FFEFDB]"
                              : Items.tag === "RM"
                              ? "border-[#8EBAF6] bg-[rgba(207,226,252,0.20]"
                              : Items.tag === "FE"
                              ? "border-[#31A553] bg-[#E3F7E9]"
                              : ""
                          }`}
                        >
                          {Items.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {Items.subData.map((items, indexs) => (
                      <div key={indexs} className="flex items-center gap-2">
                        {/* {items.icon} {items.title} */}
                        <div className="mt-4 space-y-2 text-sm w-full text-gray-700 border-t border-[#E4E7EB] group-hover:border-white  pt-4 px-6">
                          {items.phone && (
                            <div className="flex items-center gap-2">
                              <PhoneteamCard /> {items.phone}
                            </div>
                          )}
                          {items.email && (
                            <div className="flex items-center gap-2">
                              <EmailteamCard /> {items.email}
                            </div>
                          )}
                          {items.manages && (
                            <div className="flex items-center gap-2">
                              <ManegeteamCard /> {`Manages: ${items.manages}`}
                            </div>
                          )}
                          {items.totalSalons !== undefined && (
                            <div className="flex items-center gap-2">
                              <SaloonteamCard />{" "}
                              {`Total Salons: ${items.totalSalons}`}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetContent
                side="right"
                className="w-full sm:w-[400px] overflow-auto !pb-3"
              >
                {/* {item.tcList.map((Item, index) => (
                  <div key={index}>{Item.avatar}</div>
                ))} */}
                <div className="px-4 py-5 border-b border-grayE4">
                  <div className="flex gap-2 items-center">
                    <SmallHeading
                      title="Member detail"
                      className="!text-base"
                    />

                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <KebabMenuIcon className="h-max" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="h-[100px]">
                        <DropdownMenuSeparator>
                          <DropdownMenuItem>kdlfkf</DropdownMenuItem>
                          <DropdownMenuItem>kdlfkf</DropdownMenuItem>
                        </DropdownMenuSeparator>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="border border-grayE4 mt-[30px] mx-5 p-[15px] flex items-center justify-between gap-1">
                  <div className="flex items-center gap-2">
                    {selectedMember && <div>{selectedMember.avatar}</div>}
                    <div>
                      <div className="flex">
                        {selectedMember && (
                          <h3 className="text-[#030712] text-base font-semibold leading-[142%] -tracking-[0.28px] border-r border-grayE4 pr-2.5">
                            {selectedMember.name}
                          </h3>
                        )}
                        {selectedMember && (
                          <span
                            className={`ml-2.5 rounded-full text-black px-2.5 py-0.5 text-xs border font-medium flex items-center gap-1`}
                          >
                            {selectedMember.gender === "Male" ? (
                              <MaleteamCard />
                            ) : selectedMember.gender === "Female" ? (
                              <FemaleteamCard />
                            ) : (
                              ""
                            )}
                            {/* {selectedMember.icon} */}
                            {selectedMember.gender}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-[5px]">
                        <MailIcon />
                        {selectedMember && (
                          <p className="text-[13px] text-grayE4">
                            {selectedMember.email}
                          </p>
                        )}

                        {/* <Pera title="curtis.weaver@example.com" cl/> */}
                      </div>
                    </div>
                  </div>
                  {selectedMember && (
                    <span
                      className={`rounded-full text-black px-2.5 py-0.5 text-xs font-medium border ${
                        selectedMember.tag === "TC"
                          ? "border-[#FFAB47] bg-[#FFEFDB]"
                          : selectedMember.tag === "RM"
                          ? "border-[#8EBAF6] bg-[rgba(207,226,252,0.20]"
                          : selectedMember.tag === "FE"
                          ? "border-[#31A553] bg-[#E3F7E9]"
                          : ""
                      }
                     `}
                    >
                      {selectedMember.tag}
                    </span>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Member;
