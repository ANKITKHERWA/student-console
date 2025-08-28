"use client";
import DotColor from "@/components/common/DotColor";
import {
  ActionIocn,
  CalenderBlackSmallIocn,
  ClenderIcon,
  CriticalTask,
  FollowUpIcon,
  GrothTask,
  IssueIcon,
  PartnerIcon,
  PhoneSmallIcon,
  PlusIcon,
  SearchIcon,
  SmallCriticalIcon,
  SmallEyeIcon,
  ViewReportIcon,
} from "@/components/helper/Icon2";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import Filter from "./Filter";
import SelecteStatus from "./SelecteStatus";
import TableCommon from "@/components/common/TableCommon";
import { criticalData, sidebarData } from "@/components/helper/Helper2";
import TopCommon from "@/components/common/TopCommon";
import Growth from "./Growth";
import Image from "next/image";
import Link from "next/link";
import TableKebabMenu from "@/components/common/TableKebabMenu";
import SmallHeading from "@/components/common/SmallHeading";
import SecondryBtn from "@/components/common/SecondryBtn";
import VisitReportMudal from "./VisitReportMudal";
import StatusBadgeSec from "@/components/common/StatusBadgeSec";
import KebabMenucommon from "@/components/common/KebabMenuCommon";
import { Button } from "@/components/ui/button";
import NewStatusbadge from "@/components/common/NewStatusbadge";
function Insights() {
  const [selectedUser, setSelectedUser] = useState<null>(null);
  const [open, setOpen] = useState(false);

  const data2 = {
    critical: [
      { title: "Incomplete Onboarding", days: "30 days" },
      { title: "Off-Peak hours not set", days: "15 days" },
      { title: "Missing Bank Account", days: "20 days" },
      { title: "Subscription overdue", days: "10 days" },
    ],
    growth: [
      { title: "New Service Opportunity", days: "5 days" },
      { title: "Increase Social Media Reach", days: "12 days" },
    ],
  };
  return (
    <div className="pb-10">
      <TopCommon title="Insights - Registered Partners" />
      <div>
        <Tabs defaultValue="critical-task" className="w-full">
          <div className="border-b border-[#E4E7EB] h-[40px] md:h-[56px] lg:h-[62px] flex md:px-5 px-4 lg:px-6 items-center">
            <TabsList className="rounded-none bg-transparent !w-full flex !justify-start ">
              <div className="flex gap-3 items-center">
                <TabsTrigger
                  id="critical-task"
                  value="critical-task"
                  className="p-0 flex !items-center text-sm font-medium leading-[142%] !border-b-[3px] !border-t-none !rounded-none -tracking-[0.28px] !text-[#B751FB] lg:h-[62px] md:h-[56px] h-[40px] fill-[#B751FB] data-[state=inactive]:!text-[#808188] data-[state=inactive]:!border-b-transparent data-[state=inactive]:fill-[#808188] !shadow-none px-2"
                >
                  <CriticalTask />
                  Critical Task
                </TabsTrigger>
                <TabsTrigger
                  id="growth-task"
                  value="growth-task"
                  className="p-0 flex !items-center text-sm font-medium leading-[142%] !border-b-[3px] !border-t-none !rounded-none -tracking-[0.28px] !text-[#B751FB] lg:h-[62px] md:h-[56px] h-[40px] fill-[#B751FB] data-[state=inactive]:!text-[#808188] data-[state=inactive]:!border-b-transparent data-[state=inactive]:fill-[#808188] !shadow-none px-2"
                >
                  <GrothTask />
                  Growth Task
                </TabsTrigger>
              </div>
            </TabsList>
            <div className="sm:flex hidden items-center gap-2 sm:gap-4 md:gap-[30px] ml-auto">
              <DotColor title="Critical" className="bg-[#F00]" />
              <DotColor title="Growth" className="bg-[#F5640A]" />
            </div>
          </div>
          <TabsContent value="critical-task" className="md:px-5 px-4 lg:px-6 ">
            <form className="md:py-5 py-3 sm:py-4 lg:py-6">
              <div className="flex justify-center min-[460px]:justify-between items-center gap-2 flex-wrap min-[460px]:flex-nowrap">
                <SelecteStatus />
                <div className="flex items-center md:gap-5 sm:gap-4 gap-2 lg:gap-[30px]">
                  <div className="flex items-center gap-1 w-full xl:min-w-[290px] py-1.5 px-3 !border-[#D9DDE3] border rounded md:rounded-[6px]">
                    <Input
                      placeholder="Search..."
                      className="max-w-sm !ring-0 w-full !shadow-none !border-none !rounded-[0px] !h-[20px] !p-0"
                    />
                    <SearchIcon />
                  </div>
                  <Filter />
                </div>
              </div>
            </form>
            <TableCommon
              data={criticalData}
              sidebarContent={
                <>
                  <div className="md:py-5 py-4 ms:px-5 px-4 lg:px-6 border-b border-[#E4E7EB]">
                    <StatusBadgeSec status={"registered"} />
                  </div>
                  <div className="flex flex-col justify-between h-full pb-3">
                    {/* {criticalData.map((item, indexs) => (
              <div key={indexs}>
                {item.body.map((items, index) => (
                  <div key={index}>
                    
                  </div>
                ))}
              </div>
            ))} */}

                    {sidebarData?.map((itm, idx) => (
                      <div key={idx}>
                        <div className="lg:pt-5 lg:ps-6 lg:pb-[30px] md:py-5 p-4 md:px-6 lg:pe-[30px]">
                          <div className="flex justify-between gap-2">
                            <div>
                              <div className="flex gap-2 md:gap-2.5 items-center text-[#030712]">
                                <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]">
                                  <Image
                                    src={itm.img}
                                    width={70}
                                    height={70}
                                    alt="studio img"
                                  />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                  <h3 className="font-semibold leading-[125%] lg:text-base text-sm -tracking-[0.32px]">
                                    {itm.name}
                                  </h3>
                                  {itm.contacte.map((contact, contIndex) => (
                                    <Link
                                      key={contIndex}
                                      href={contact.path}
                                      className="flex items-center gap-1 text-xs"
                                    >
                                      <span>{contact.icon}</span>
                                      <span>{contact.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                              <div className="flex justify-between mt-5 ">
                                {itm.condetions.map(
                                  (condetionItem, condIndex) => (
                                    <span
                                      key={condIndex}
                                      className={` ${
                                        condIndex === 0
                                          ? "text-[#F13737]  "
                                          : condIndex === 2
                                          ? "text-[#F58400]"
                                          : "text-[#5B14D1] "
                                      } ${
                                        condIndex === 1
                                          ? "border-l"
                                          : condIndex === 3
                                          ? "border-r"
                                          : ""
                                      } text-xs leading-[166%] border-[#808188] -tracking-[0.24px]`}
                                    >
                                      {condetionItem.count}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                            <TableKebabMenu
                              items={[
                                {
                                  label: "View as partner",
                                  extra: <SmallEyeIcon className="w-4 h-4" />,
                                  // onClick: () => console.log("Edit clicked"),
                                },
                                {
                                  label: "View Report",
                                  extra: <ViewReportIcon className="w-4 h-4" />,
                                  // onClick: () => console.log("Delete clicked"),
                                },
                                {
                                  label: "Add Visit",
                                  extra: (
                                    <CalenderBlackSmallIocn className="w-4 h-4" />
                                  ),
                                  // onClick: () => console.log("Share clicked"),
                                },
                                {
                                  label: "Add Follow Up",
                                  extra: <FollowUpIcon className="w-4 h-4" />,
                                  // onClick: () => console.log("Share clicked"),
                                },
                                {
                                  label: "Add Visit Report",
                                  extra: <PlusIcon className="w-4 h-4" />,
                                  // onClick: () => console.log("Share clicked"),
                                },
                                {
                                  label: "Assign Partner",
                                  extra: <PartnerIcon className="w-4 h-4" />,
                                  // onClick: () => console.log("Share clicked"),
                                },
                              ]}
                            />
                          </div>
                          <div className="flex justify-between gap-2 mt-4 xl:pr-10">
                            <div className="px-1.5 py-[3px] border-[0.5px] w-max  rounded border-[#E4E7EB] flex gap-1 items-center text-[#030712] text-xs font-semibold leading-[166%] -tracking-[0.24px]">
                              {itm.nextVisit ? (
                                <button className="flex gap-2 items-center">
                                  <span className="text-[#808188] font-normal">
                                    Next Visit
                                  </span>
                                  {itm.nextVisit}
                                </button>
                              ) : (
                                itm.addvisit && (
                                  <button className="flex gap-2 items-center">
                                    <span className="text-[#808188] font-normal">
                                      Next Visit
                                    </span>
                                    {itm.addvisit}
                                  </button>
                                )
                              )}
                            </div>
                            <div className="px-1.5 py-[3px] border-[0.5px] w-max  rounded border-[#E4E7EB] flex gap-1 items-center text-[#030712] text-xs font-semibold leading-[166%] -tracking-[0.24px]">
                              {itm.nextFollowUp ? (
                                <button className="flex gap-2 items-center">
                                  <span className="text-[#808188] font-normal">
                                    Next Follow Up:
                                  </span>
                                  {itm.nextFollowUp}
                                </button>
                              ) : (
                                <button className="flex gap-2 items-center">
                                  <span className="text-[#808188] font-normal">
                                    Next Follow Up:
                                  </span>
                                  {itm.addFollowUp}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="border-t md:pt-5 md:pb-3 md:px-5 px-4 py-3 lg:px-[30px] text-sm">
                          <SmallHeading title="Additional details" />
                          <div className="flex justify-between items-center mt-2 sm:mt-3">
                            <p className="text-[#808188] text-sm font-medium leading-[142%] -tracking-[0.28px]">
                              Owner:
                              <span className="font-semibold text-[#030712]">
                                {itm.ownerName}
                              </span>
                            </p>
                            <div className="flex gap-1.5 items-center text-[#030712] font-semibold leading-[142%] -tracking-[0.28px]">
                              <PhoneSmallIcon />
                              {itm.ownerNo}
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-2 sm:mt-3">
                            <p className="text-[#808188] font-medium leading-[142%] -tracking-[0.28px]">
                              Manager:
                              <span className="font-semibold text-[#030712]">
                                {itm.manager}
                              </span>
                            </p>
                            <div className="flex gap-1.5 items-center text-[#030712] font-semibold leading-[142%] -tracking-[0.28px]">
                              <PhoneSmallIcon />
                              {itm.managerNo}
                            </div>
                          </div>
                        </div>

                        <div className="border-t md:pt-5 md:pb-3 md:px-5 px-4 py-3 lg:px-[30px] text-sm ">
                          <SmallHeading title="Assigned Personnel" />
                          <div className="flex justify-between items-center mt-2 sm:mt-3">
                            <p className="text-[#808188] font-medium leading-[142%] -tracking-[0.28px]">
                              FE:{" "}
                              <span className="font-semibold text-[#030712]">
                                {itm.fe}
                              </span>
                            </p>
                            <div className="flex gap-1.5 items-center text-[#030712] font-semibold leading-[142%] -tracking-[0.28px]">
                              <PhoneSmallIcon />
                              {itm.feNo}
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-2 sm:mt-3">
                            <p className="text-[#808188] font-medium leading-[142%] -tracking-[0.28px]">
                              RM:
                              <span className="font-semibold text-[#030712]">
                                {itm.rmNo}
                              </span>
                            </p>
                            <div className="flex gap-1.5 items-center text-[#030712] font-semibold leading-[142%] -tracking-[0.28px]">
                              <PhoneSmallIcon />
                              {itm.managerNo}
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-2 sm:mt-3">
                            <p className="text-[#808188] font-medium leading-[142%] -tracking-[0.28px]">
                              TC:
                              <span className="font-semibold text-[#030712]">
                                {itm.tc}
                              </span>
                            </p>
                            <div className="flex gap-1.5 items-center text-[#030712] font-semibold leading-[142%] -tracking-[0.28px]">
                              <PhoneSmallIcon />
                              {itm.tcNo}
                            </div>
                          </div>
                        </div>

                        <div className="border-t md:pt-5 md:pb-3 md:px-5 px-4 py-3 lg:px-[30px]">
                          <div className="flex gap-2 items-center">
                            <IssueIcon />
                            <SmallHeading title="Issues" />
                          </div>
                          <div>
                            <Tabs defaultValue="critical" className="w-full">
                              <TabsList className="flex justify-between w-full bg-transparent mt-3">
                                <TabsTrigger
                                  value="critical"
                                  className="flex items-center gap-1 !border-b !border-t-0 !rounded-none !border-x-0 border-transparent data-[state=active]:border-[#B751FB] !shadow-none !py-2.5 data-[state=active]:text-[#B751FB] text-[#808188]"
                                >
                                  <SmallCriticalIcon className=" data-[state=active]:fill-[#B751FB]" />
                                  Critical
                                </TabsTrigger>

                                <TabsTrigger
                                  value="growth"
                                  className="flex items-center gap-1 !border-b !border-t-0 !rounded-none !border-x-0 border-transparent data-[state=active]:border-[#B751FB] !shadow-none !py-2.5 data-[state=active]:text-[#B751FB] text-[#808188]"
                                >
                                  <GrothTask className="h-[16px] w-[16px]  data-[state=active]:fill-[#B751FB]" />
                                  Growth
                                </TabsTrigger>
                              </TabsList>

                              <TabsContent
                                value="critical"
                                className="space-y-1.5 md:space-y-2 mt-3 !w-full"
                              >
                                {data2.critical.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex justify-between text-sm w-full items-center rounded sm:rounded-[6px] border border-[#E4E7EB] sm:py-1.5 px-2 py-1 sm:px-2.5 font-semibold leading-[142%] -tracking-[0.28px] "
                                  >
                                    <span>{item.title}</span>
                                    <span className="text-[#808188]">
                                      {item.days}
                                    </span>
                                  </div>
                                ))}
                              </TabsContent>

                              <TabsContent
                                value="growth"
                                className="space-y-2 mt-3"
                              >
                                {data2.growth.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex justify-between items-center rounded-[6px] border border-[#E4E7EB] py-1.5 px-2.5 font-semibold leading-[142%] -tracking-[0.28px] "
                                  >
                                    <span>{item.title}</span>
                                    <span className="text-[#808188]">
                                      {item.days}
                                    </span>
                                  </div>
                                ))}
                              </TabsContent>
                            </Tabs>
                          </div>
                        </div>

                        <div className="border-t md:pt-5 md:pb-3 md:px-5 px-4 py-3 lg:px-[30px]">
                          <div className="flex justify-between items-center mb-[5px]">
                            <div className="flex items-center gap-2">
                              <ActionIocn className="sm:w-[20px] w-[15px]" />
                              <SmallHeading
                                title="Assigned Personnel"
                                className="md:!text-base"
                              />
                            </div>
                            <ClenderIcon className="sm:w-[20px] w-[15px]" />
                          </div>
                          {itm.actionData.map((action, actionIndex) => (
                            <div
                              key={actionIndex}
                              className="border rounded-[6px] md:rounded-[8px] md:p-2.5 p-2 lg:p-[15px] mt-2.5"
                            >
                              <div className="flex gap-[5px] flex-col">
                                <div className="flex justify-between gap-1">
                                  <SmallHeading
                                    title={action.heaing}
                                    className="!text-xs sm:!text-sm"
                                  />
                                  <div className="flex gap-0.5 md:gap-2.5 items-center">
                                    <Image
                                      src={"/assest/svg/prsone-img.svg"}
                                      width={18}
                                      height={18}
                                      alt="prsone img"
                                      className="md:w-[18px] w-[12px]"
                                    />
                                    <span className="text-[rgba(3,7,18,0.60] text-[10px] leading-[200%] -tracking-[0.2px]">
                                      {action.persone}
                                    </span>
                                  </div>
                                </div>
                                {action.pera.map((pera, peraIdx) => (
                                  <p
                                    key={peraIdx}
                                    className="text-xs font-medium leading-[140%] -tracking-[0.24px]"
                                  >
                                    <span>{pera.stronText}</span>
                                    <span className="text-[rgba(3,7,18,0.60)]">
                                      {pera.text}
                                    </span>
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="px-[30px] flex justify-end gap-2 pb-3">
                      <SecondryBtn
                        title="Cancel"
                        className="w-max"
                        onClick={() => setOpen(false)}
                      />
                      <VisitReportMudal />
                    </div>
                  </div>
                </>
              }
            />
            <NewStatusbadge status="New" />
            <NewStatusbadge status="Not Show" />
            <NewStatusbadge status="Expired" />
            <NewStatusbadge status="Confirmed" />
            <NewStatusbadge status="Canceled" />
          </TabsContent>

          <TabsContent value="growth-task" className="md:px-5 px-4 lg:px-6 ">
            <Growth />
          </TabsContent>
        </Tabs>

        <div>
          <KebabMenucommon align="start" />
        </div>
      </div>
    </div>
  );
}

export default Insights;
