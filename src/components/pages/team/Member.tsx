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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CurrentPerformanceIcon,
  EditIcon,
  EnbDisbleIcon,
  KebabMenuIcon,
  MailIcon,
  PastPerformanceIcon,
  PhoneSmallIcon,
  ShowPassIcon,
} from "@/components/helper/Icon2";
import SmallHeading from "@/components/common/SmallHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Progress } from "@/components/ui/progress";
import { performDetail } from "@/components/helper/Helper1";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AddTarget } from "./AddTarget";
import { Button } from "@/components/ui/button";

interface SubDataItem {
  phone?: string;
  email?: string;
  manages?: string;
  totalSalons?: number;
}

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
  subData?: SubDataItem[];
  status?: string;
}
function Member() {
  const [selectedMember, setSelectedMember] = useState<props | null>(null);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between sm:items-center lg:mt-7 md:mt-8 sm:mt-5 mt-4 gap-1">
        <Pera className="text-lg font-semibold" title="Total Members:16" />
        <div className="flex sm:gap-2 gap-1 sm:flex-row flex-col-reverse justify-end items-end">
          <Search />
          <div className="flex sm:gap-2 gap-1">
            <Fluentcard />
            <Tablericon />
          </div>
        </div>
      </div>
      <div className="lg:mt-7 md:mt-6 sm:mt-5 mt-4">
        {someData.map((item, index) => (
          <div key={index} className="lg:mt-[30px] md:mt-6 sm:mt-5 mt-4">
            <Heading
              title={item.heading}
              className="lg:!text-xl md:!text-lg !text-base"
            />
            <div className="flex flex-wrap gap-5 md:mt-4 mt-3 items-center">
              {item.tcList.map((Items, idxs) => (
                <div
                  key={idxs}
                  onClick={() => {
                    setSelectedMember(Items);
                    setOpen(true);
                  }}
                  className={`sm:rounded-md rounded-sm border border-[#E4E7EB] group md:py-3 py-2 hover:bg-[#F1DCFF] bg-[#fff] shadow-lg min-[1150px]:w-[23%] min-[850px]:w-[31%] min-[550px]:w-[48%] w-full cursor-pointer`}
                >
                  <span
                    className={`rounded-full h-3 w-3 ml-2 block ${
                      Items.status === "Working"
                        ? "bg-[green]"
                        : Items.status === "Not Working"
                        ? "bg-[red]"
                        : ""
                    }`}
                  ></span>
                  <div className="flex items-center xl:gap-4 gap-3 xl:px-6 md:px-4 px-3">
                    <span>{Items.avatar}</span>
                    <div>
                      <h2 className="xl:text-lg md:text-base text-sm font-semibold">
                        {Items.name}
                      </h2>
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
                        <div className="mt-4 space-y-2 sm:text-sm text-xs w-full text-gray-700 border-t border-[#E4E7EB] group-hover:border-white  md:pt-4 sm:pt-3 pt-2 xl:px-6 md:px-4 px-3">
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
                <div className="px-4 sm:py-5 py-4 border-b border-grayE4">
                  <div className="flex gap-2 items-center">
                    <SmallHeading
                      title="Member detail"
                      className="!text-base"
                    />
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <KebabMenuIcon className="h-max" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="!p-0">
                        <DropdownMenuItem className="hover:!bg-[#F1DCFF] !runded-0 group">
                          <ShowPassIcon className="group-hover:fill-primary" />
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group hover:!bg-[#F1DCFF] !runded-0">
                          <EditIcon className="group-hover:fill-primary" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="group hover:!bg-[#F1DCFF] !runded-0">
                          <EnbDisbleIcon className="group-hover:fill-primary" />
                          Enable / Disable
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="sm:border border-b border-grayE4 lg:mt-[30px] md:mt-6 sm:mt-5 sm:mx-5 md:p-[15px] p-3 flex items-center justify-between gap-1 sm:rounded-[6px]">
                  <div className="flex items-center sm:gap-2 gap-1">
                    {selectedMember && <div>{selectedMember.avatar}</div>}
                    <div>
                      <div className="flex">
                        {selectedMember && (
                          <h3 className="text-[#030712] sm:text-base text-sm font-semibold leading-[142%] -tracking-[0.28px] border-r border-grayE4 pr-2.5">
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
                            {selectedMember.gender}
                          </span>
                        )}
                      </div>
                      {selectedMember?.subData && (
                        <div className=" text-gray-700">
                          {selectedMember.subData.map((item, idx) => (
                            <div key={idx} className="mb-3">
                              {item.email && (
                                <div className="flex items-center sm:gap-2 gap-1">
                                  <MailIcon />{" "}
                                  <span className="text-sm">{item.email}</span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-[5px]">
                        {selectedMember && (
                          <p className="text-[13px] text-grayE4">
                            {selectedMember.email}
                          </p>
                        )}
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
                      }`}
                    >
                      {selectedMember.tag}
                    </span>
                  )}
                </div>
                <div className="sm:py-[15px] py-3 md:px-5 px-4 border-b border-grayE5">
                  <p className="text-gray text-sm font-medium leading-[142%] -tracking-[0.28px]">
                    <span>Status: </span>
                    <span className="text-black">{selectedMember?.status}</span>
                  </p>
                </div>
                <Tabs defaultValue="basicInfo" className="w-full">
                  <TabsList className="flex justify-between w-full bg-transparent mt-3 border-b !p-0">
                    <TabsTrigger
                      value="basicInfo"
                      className="flex items-center gap-1 !border-b !border-t-0 !rounded-none !border-x-0 border-transparent data-[state=active]:border-[#B751FB] !shadow-none !py-2.5 data-[state=active]:text-[#B751FB] text-[#808188]"
                    >
                      Basic Details
                    </TabsTrigger>

                    <TabsTrigger
                      value="performance"
                      className="flex items-center gap-1 !border-b !border-t-0 !rounded-none !border-x-0 border-transparent data-[state=active]:border-[#B751FB] !shadow-none !py-2.5 data-[state=active]:text-[#B751FB] text-[#808188]"
                    >
                      Performance
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="basicInfo"
                    className="space-y-1.5 md:space-y-2 mt-3 !w-full"
                  >
                    <SmallHeading title="Basic Info" className="px-5" />
                    <div>
                      <div className="sm:text-sm text-xs font-medium leading-[142%] -tracking-[0.28px] lg:px-5 px-4 md:py-3 py-2 border-b border-grayE4">
                        <span className="sm:w-[150px] w-[100px] inline-block text-[#808188]">
                          Name
                        </span>
                        <span className="text-[#030712] font-semibold">
                          {selectedMember?.name}
                        </span>
                      </div>
                      <div className="sm:text-sm text-xs font-medium leading-[142%] -tracking-[0.28px] lg:px-5 px-4 md:py-3 py-2 border-b border-grayE4 flex">
                        <span className="sm:w-[150px] w-[100px] inline-block text-[#808188]">
                          Gender
                        </span>
                        <span className="text-[#030712] font-semibold">
                          {selectedMember?.gender == "Male" ? (
                            <span className="flex items-center gap-1">
                              <MaleteamCard /> {selectedMember?.gender}
                            </span>
                          ) : selectedMember?.gender == "Female" ? (
                            <span className="flex items-center gap-1">
                              <FemaleteamCard /> {selectedMember?.gender}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                      <div className="sm:text-sm text-xs font-medium leading-[142%] -tracking-[0.28px] lg:px-5 px-4 md:py-3 py-2 border-b border-grayE4">
                        <span className="sm:sm:w-[150px] w-[100px] w-[100px] inline-block text-[#808188]">
                          Email
                        </span>
                        <span className="text-[#030712] font-semibold">
                          {selectedMember?.subData?.length ? (
                            selectedMember.subData.map((item, idx) => (
                              <span key={idx}>
                                {item.email && <span>{item.email}</span>}
                              </span>
                            ))
                          ) : (
                            <span>No emails found</span>
                          )}
                        </span>
                      </div>
                      <div className="sm:text-sm text-xs font-medium leading-[142%] -tracking-[0.28px] lg:px-5 px-4 md:py-3 py-2 border-b border-grayE4">
                        <span className="sm:w-[150px] w-[100px] inline-block text-[#808188]">
                          Role
                        </span>
                        <span className="text-[#030712] font-semibold">
                          {selectedMember?.tag}
                        </span>
                      </div>
                      <div className="sm:text-sm text-xs font-medium leading-[142%] -tracking-[0.28px] lg:px-5 px-4 md:py-3 py-2 border-b border-grayE4">
                        <span className="sm:w-[150px] w-[100px] inline-block text-[#808188]">
                          Assigned
                        </span>
                        <span className="text-[#030712] font-semibold">
                          {selectedMember?.name}
                        </span>
                      </div>
                      <div className="sm:text-sm text-xs font-medium leading-[142%] -tracking-[0.28px] lg:px-5 px-4 md:py-3 py-2 border-b border-grayE4">
                        <span className="sm:w-[150px] w-[100px] inline-block text-[#808188]">
                          Facebook
                        </span>
                        <span className="text-[#030712] font-semibold">
                          https/www.instagram.com
                        </span>
                      </div>
                      <div className="sm:text-sm text-xs font-medium leading-[142%] -tracking-[0.28px] lg:px-5 px-4 md:py-3 py-2 border-b border-grayE4">
                        <span className="sm:w-[150px] w-[100px] inline-block text-[#808188]">
                          Instagram
                        </span>
                        <span className="text-[#030712] font-semibold">
                          https/www.facebook.com
                        </span>
                      </div>
                      <div className="md:p-5 p-4">
                        <SmallHeading
                          title="Manage : 2 RM"
                          className="sm:!text-sm !text-xs"
                        />
                        <div className="flex justify-between sm:mt-3 mt-2 sm:text-sm text-xs font-medium leading-[142%] -tracking-[0.28px]">
                          <p className="">
                            <span className="text-[#808188]">RM: </span>
                            <span>Rohit Sharma</span>
                          </p>
                          <div className="flex items-center gap-1.5">
                            <PhoneSmallIcon className="h-max" />
                            <span className="text-[#030712]">23348-32948</span>
                          </div>
                        </div>
                        <div className="flex justify-between sm:mt-3 mt-2 sm:text-sm text-xs font-medium leading-[142%] -tracking-[0.28px]">
                          <p className="">
                            <span className="text-[#808188]">RM: </span>
                            <span>RM: Priya Kumari</span>
                          </p>
                          <div className="flex items-center gap-1.5">
                            <PhoneSmallIcon className="h-max" />
                            <span className="text-[#030712]">23348-32948</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="performance">
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      defaultValue="item-1"
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="md:px-5 px-4 md:!py-4 !py-3 hover:!underline-none text-[#030712] sm:text-sm text-xs font-semibold">
                          <div className="flex items-center gap-2">
                            <CurrentPerformanceIcon />
                            Current Performance
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance px-5">
                          {performDetail.map((card, index) => (
                            <div key={index}>
                              <div className="flex justify-between gap-2 items-center w-full">
                                <div className="flex items-center gap-2">
                                  <span>{card.Icon}</span>
                                  <span className="text-[#030712] text-sm font-medium leading-[142%] later-spacing-[-0.28px]">
                                    {card.para1}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[#2EE560] text-xs font-medium leading-[133%] later-spacing-[-0.24px]">
                                    {card.para2}
                                  </span>
                                  <span className="text-[#000] text-xs font-medium leading-[133%] later-spacing-[-0.24px]">
                                    {card.para3}
                                  </span>
                                </div>
                              </div>
                              <Progress
                                value={card.Value}
                                className="[&>div]:bg-[#F1DCFF] mt-2 bg-[#EAEEF5]"
                              />
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="md:px-5 px-4 md:!py-4 !py-3 hover:!underline-none text-[#030712] text-sm font-semibold">
                          <div className="flex items-center gap-2">
                            <PastPerformanceIcon />
                            Past Performance
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance px-5">
                          {performDetail.map((card, index) => (
                            <div key={index}>
                              <div className="flex justify-between gap-2 items-center w-full">
                                <div className="flex items-center gap-2">
                                  <span>{card.Icon}</span>
                                  <span className="text-[#030712] text-sm font-medium leading-[142%] later-spacing-[-0.28px]">
                                    {card.para1}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[#2EE560] text-xs font-medium leading-[133%] later-spacing-[-0.24px]">
                                    {card.para2}
                                  </span>
                                  <span className="text-[#000] text-xs font-medium leading-[133%] later-spacing-[-0.24px]">
                                    {card.para3}
                                  </span>
                                </div>
                              </div>
                              <Progress
                                value={card.Value}
                                className="[&>div]:bg-[#F1DCFF] mt-2 bg-[#EAEEF5]"
                              />
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
                <div className="py-3 px-5 border-t border-grayE4 flex justify-end gap-2 bg-white">
                  <Button
                    variant={"outline"}
                    className="w-max"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    Cancel
                  </Button>
                  <AddTarget />
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
