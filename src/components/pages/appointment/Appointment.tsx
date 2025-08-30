"use client";
import Search from "@/components/common/Search";
import Selecte from "@/components/common/Selecte";
import TableCommon from "@/components/common/TableCommon";
import TopCommon from "@/components/common/TopCommon";
import {
  appointment,
  appointmentBooking,
  appointmentTc,
} from "@/components/helper/Helper2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

function Appointment() {
  return (
    <div>
      <Tabs className="!block" defaultValue="all">
        <TopCommon title="Appointment" />
        <div className="py-3 md:px-5 px-4 lg:px-6 border-b">
          <div className="flex justify-between md:items-center md:flex-row flex-col gap-3">
            <div>
              <p className="text-[#808188] sm:text-sm text-xs font-semibold leading-[171%] tracking-[-0.28px]">
                Total Appointments :{" "}
                <span className="text-[#030712]">{" 50"}</span>
              </p>
              <div className="flex items-center xl:gap-7 lg:gap-5 md:gap-4 gap-3 flex-wrap">
                <div className="flex items-center md:gap-2 gap-1">
                  <span
                    className={`md:w-4 md:h-4 h-3 w-3 block border border-[#F58400] bg-[#FFEFDB] rounded-full ${""}`}
                  ></span>
                  <p className="text-[#808188] sm:text-sm text-xs font-medium leading-[171%] tracking-[-0.28px]">
                    New :<span className="text-[#030712]">{" 20"}</span>
                  </p>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <span className="md:w-4 md:h-4 h-3 w-3 block border border-[#8EBAF6] bg-[rgba(207,226,252,0.20)] rounded-full"></span>
                  <p className="text-[#808188] sm:text-sm text-xs font-medium leading-[171%] tracking-[-0.28px]">
                    Confirmed :<span className="text-[#030712]">{" 13"}</span>
                  </p>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <span className="md:w-4 md:h-4 h-3 w-3 block border border-[#7ACD92] bg-[#E3F7E9] rounded-full"></span>
                  <p className="text-[#808188] sm:text-sm text-xs font-medium leading-[171%] tracking-[-0.28px]">
                    Completed :<span className="text-[#030712]">{" 21"}</span>
                  </p>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <span className="md:w-4 md:h-4 h-3 w-3 block border border-[#4710A3] bg-[rgba(91,20,209,0.20)] rounded-full"></span>
                  <p className="text-[#808188] sm:text-sm text-xs font-medium leading-[171%] tracking-[-0.28px]">
                    Expired :<span className="text-[#030712]">{" 15"}</span>
                  </p>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <span className="md:w-4 md:h-4 h-3 w-3 block border border-[#CCC] bg-[#EDEDED] rounded-full"></span>
                  <p className="text-[#808188] sm:text-sm text-xs font-medium leading-[171%] tracking-[-0.28px]">
                    No Show :<span className="text-[#030712]">{" 19"}</span>
                  </p>
                </div>
                <div className="flex items-center md:gap-2 gap-1">
                  <span className="md:w-4 md:h-4 h-3 w-3 block border border-[#FF0000] bg-[rgba(255,136,136,0.34)] rounded-full"></span>
                  <p className="text-[#808188] sm:text-sm text-xs font-medium leading-[171%] tracking-[-0.28px]">
                    Canceled :<span className="text-[#030712]">{" 25"}</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Search />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="md:p-5 p-4 lg:p-6 justify-between sm:items-start items-center gap-4 sm:flex-row flex-col flex ">
            <div className="flex flex-wrap gap-3 sm:flex-row flex-col items-center">
              <div>
                <TabsList
                  className="md:!rounded-sm !rounded-xs"
                >
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="upComing">Up Coming</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="past">Past</TabsTrigger>
                </TabsList>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-normal justify-center">
                {appointmentTc.map((item, index) => (
                  <Selecte
                    key={index}
                    placeholder={item.placeholder}
                    icon={item.icon}
                    options={item.options}
                    className="w-[130px]"
                    onChange={(selecteMemberEarning) => {
                      console.log(
                        "Selected member earning:",
                        selecteMemberEarning
                      );
                    }}
                  />
                ))}
              </div>
            </div>
            <div>
              {appointmentBooking.map((item, index) => (
                <Selecte
                  key={index}
                  placeholder={item.placeholder}
                  options={item.options}
                  className=" w-[150px]"
                  onChange={(selecteMemberEarning) => {
                    console.log(
                      "Selected member earning:",
                      selecteMemberEarning
                    );
                  }}
                />
              ))}
            </div>
          </div>
          <div className="lg:px-6 md:px-5 px-4">
            <TabsContent value="all">
              <TableCommon data={appointment} />
            </TabsContent>
            <TabsContent value="today">today</TabsContent>
            <TabsContent value="upComing">up coming </TabsContent>
            <TabsContent value="new">new </TabsContent>
            <TabsContent value="past">past </TabsContent>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default Appointment;
