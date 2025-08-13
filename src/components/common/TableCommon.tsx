"use client";
import React, { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import Image from "next/image";
import StatusBadge from "./StatusBadge";
import StatusBadgeSec from "./StatusBadgeSec";

import { criticalData } from "../helper/Helper2"; // ✅ changed here
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  ActionIocn,
  ClenderIcon,
  GrothTask,
  IssueIcon,
  KebabMenuIcon,
  PhoneSmallIcon,
  SmallCriticalIcon,
} from "../helper/Icon2";
import SmallHeading from "./SmallHeading";
import SecondryBtn from "./SecondryBtn";
import VisitReportMudal from "../pages/insights/VisitReportMudal";

type SaloneName = {
  img: string;
  name: string;
};

type Issue = {
  issu1: string;
  issu2: string;
};

type Iprops = {
  id: number;
  saloneName: SaloneName[];
  add: string;
  health: string;
  issue: Issue[];
  staff: string;
  onboarding: React.ReactNode;
  bankAcc: React.ReactNode;
  monthlyTarget: React.ReactNode;
  subscription: string;
  lastVisit: string;
  nextVisit: string;
  tcName: string;
  rmName: string;
  feName: string;
  action: string;
};

type TableData = {
  head: { title: string }[];
  body: Iprops[];
};

type TableCommonProps = {
  data: TableData[];
};

const TableCommon: React.FC<TableCommonProps> = ({ data }) => {
  const [selectedUser, setSelectedUser] = useState<Iprops | null>(null);
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
    <>
      <div className="overflow-auto border rounded-[6px] border-[#D9DDE3]">
        {data.map((items, index) => (
          <table key={index} className="text-nowrap w-full">
            <thead>
              <tr className="bg-[#fff] text-sm leading-[142%] tracking-normal text-[#808188] ">
                {items.head.map((headItem, headIndex) => (
                  <th
                    key={headIndex}
                    className="font-semibold px-3 py-1.5 text-left"
                  >
                    {headItem.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.body.map((bodyitems) => (
                <tr
                  key={bodyitems.id}
                  onClick={() => {
                    setSelectedUser(bodyitems as Iprops);
                    setOpen(true);
                  }}
                  className={`cursor-pointer hover:bg-[#F1DCFF] text-sm text-[#030712] ${
                    selectedUser?.id === bodyitems.id ? "bg-[#F1DCFF]" : ""
                  }`}
                >
                  {bodyitems.saloneName.map((salon, saloneIndex) => (
                    <td
                      key={saloneIndex}
                      className="px-3 py-1.5 truncate max-w-[200px]"
                    >
                      <div className="flex items-center gap-2 ">
                        <Image
                          src={salon.img}
                          width={20}
                          height={20}
                          alt="img"
                        />
                        <span>{salon.name}</span>
                      </div>
                    </td>
                  ))}
                  <td className="px-3 py-1.5 truncate max-w-[200px]">
                    <span>{bodyitems.add}</span>
                  </td>
                  <td className="px-3 py-1.5">{bodyitems.health}</td>
                  {bodyitems.issue.map((issue, issueIndex) => (
                    <td key={issueIndex} className="px-3 py-1.5">
                      <div className="flex gap-2 text-[10px] text-[rgba(3,7,18,0.70)]">
                        <span className="w-[20px] h-[20px] rounded-full border border-[#F00] bg-[rgba(255,136,136,0.34)] flex justify-center items-center">
                          {issue.issu1}
                        </span>
                        <span className="w-[20px] h-[20px] rounded-full border bg-[#F3CED6] border-[#F5640A] flex justify-center items-center">
                          {issue.issu2}
                        </span>
                      </div>
                    </td>
                  ))}
                  <td className="px-3 py-1.5">{bodyitems.staff}</td>
                  <td className="px-3 py-1.5">{bodyitems.onboarding}</td>
                  <td className="px-3 py-1.5">{bodyitems.bankAcc}</td>
                  <td className="px-3 py-1.5">{bodyitems.monthlyTarget}</td>
                  <td className="px-3 py-1.5">
                    <StatusBadge status={bodyitems.subscription} />
                  </td>
                  <td className="px-3 py-1.5">{bodyitems.lastVisit}</td>
                  <td className="px-3 py-1.5">{bodyitems.nextVisit}</td>
                  <td className="px-3 py-1.5">{bodyitems.tcName}</td>
                  <td className="px-3 py-1.5">{bodyitems.rmName}</td>
                  <td className="px-3 py-1.5">{bodyitems.feName}</td>
                  <td className="px-3 py-1.5">{bodyitems.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[400px] overflow-auto !pb-3">
          <div className="py-5 px-4 border-b border-[#E4E7EB]">
            <StatusBadgeSec status={"registered"} />
          </div>
          <div className="flex flex-col justify-between h-full pb-3">
            {criticalData.map((item, indexs) => (
              <div key={indexs}>
                {item.body.map((items, index) => (
                  <div key={index}>
                    {items.sidebarData?.map((itm, idx) => (
                      <div key={idx}>
                        {/* profile */}
                        <div className="pt-5 ps-6 pb-[30px] pe-[30px]">
                          <div className="flex justify-between gap-2">
                            <div>
                              <div className="flex gap-2.5 items-center text-[#030712]">
                                <div>
                                  <Image
                                    src={itm.img}
                                    width={70}
                                    height={70}
                                    alt="studio img"
                                  />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                  <h3 className="font-semibold leading-[125%] text-sm -tracking-[0.32px]">
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
                            <KebabMenuIcon />
                          </div>
                          <div className="flex justify-between gap-2 mt-4 xl:pr-10">
                            <div className="px-1.5 py-[3px] border-[0.5px] w-max  rounded border-[#E4E7EB] flex gap-1 items-center text-[#030712] text-xs font-semibold leading-[166%] -tracking-[0.24px]">
                              <span className="text-[#808188] font-normal">
                                Next Visit{" "}
                              </span>
                              {itm.nextVisit}
                            </div>
                            <div className="px-1.5 py-[3px] border-[0.5px] w-max  rounded border-[#E4E7EB] flex gap-1 items-center text-[#030712] text-xs font-semibold leading-[166%] -tracking-[0.24px]">
                              <span className="text-[#808188] font-normal">
                                Next Follow Up:
                              </span>
                              {itm.lastVisit}
                            </div>
                          </div>
                        </div>
                        {/* additional details */}
                        <div className="border-t pt-5 pb-3 px-[30px]">
                          <SmallHeading title="Additional details" />
                          <div className="flex justify-between items-center mt-3 text-sm">
                            <p className="text-[#808188] font-medium leading-[142%] -tracking-[0.28px]">
                              Owner:{" "}
                              <span className="font-semibold text-[#030712]">
                                {itm.ownerName}
                              </span>
                            </p>
                            <div className="flex gap-1.5 items-center text-[#030712] font-semibold leading-[142%] -tracking-[0.28px]">
                              <PhoneSmallIcon />
                              {itm.ownerNo}
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-3 text-sm">
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
                        {/* assigned parsnole */}
                        <div className="border-t pt-5 pb-3 px-[30px]">
                          <SmallHeading title="Assigned Personnel" />
                          <div className="flex justify-between items-center mt-3 text-sm">
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
                          <div className="flex justify-between items-center mt-3 text-sm">
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
                          <div className="flex justify-between items-center mt-3 text-sm">
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
                        {/* issuss */}
                        <div className="border-t pt-5 pb-3 px-[30px]">
                          <div className="flex gap-2 items-center">
                            <IssueIcon />
                            <SmallHeading title="Issues" />
                          </div>
                          <div>
                            <Tabs defaultValue="critical" className="w-80">
                              {/* Tab Header */}
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

                              {/* Critical Content */}
                              <TabsContent
                                value="critical"
                                className="space-y-2 mt-3"
                              >
                                {data2.critical.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex justify-between items-center rounded-[6px] border border-[#E4E7EB] py-1.5 px-2.5 font-semibold leading-[142%] -tracking-[0.28px] text-sm"
                                  >
                                    <span>{item.title}</span>
                                    <span className="text-[#808188]">
                                      {item.days}
                                    </span>
                                  </div>
                                ))}
                              </TabsContent>

                              {/* Growth Content */}
                              <TabsContent
                                value="growth"
                                className="space-y-2 mt-3"
                              >
                                {data2.growth.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex justify-between items-center rounded-[6px] border border-[#E4E7EB] py-1.5 px-2.5 font-semibold leading-[142%] -tracking-[0.28px] text-sm"
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
                        {/* action report */}
                        <div className="border-t pt-5 pb-3 px-[30px]">
                          <div className="flex justify-between items-center mb-[5px]">
                            <div className="flex items-center gap-2">
                              <ActionIocn />
                              <SmallHeading
                                title="Assigned Personnel"
                                className="!text-base"
                              />
                            </div>
                            <ClenderIcon />
                          </div>
                          {itm.actionData.map((action, actionIndex) => (
                            <div
                              key={actionIndex}
                              className="border rounded-[8px] p-[15px] mt-2.5"
                            >
                              <div className="flex gap-[5px] flex-col">
                                <div className="flex justify-between">
                                  <SmallHeading title={action.heaing} />
                                  <div className="flex gap-2.5 items-center">
                                    <Image
                                      src={"/assest/svg/prsone-img.svg"}
                                      width={18}
                                      height={18}
                                      alt="prsone img"
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
                  </div>
                ))}
              </div>
            ))}
            <div className="px-[30px] flex justify-end gap-2">
              <SecondryBtn title="Cancel" className="w-max" />
              <VisitReportMudal />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default TableCommon;
