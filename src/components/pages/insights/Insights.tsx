"use client";
import DotColor from "@/components/common/DotColor";
import { CriticalTask, GrothTask, SearchIcon } from "@/components/helper/Icon2";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import React from "react";

import { Input } from "@/components/ui/input";
import Filter from "./Filter";
import SelecteStatus from "./SelecteStatus";
import TableCommon from "@/components/common/TableCommon";
import { criticalData } from "@/components/helper/Helper2";
import TopCommon from "@/components/common/TopCommon";
import Growth from "./Growth";
function Insights() {

  return (
    <div className="pb-10">
      <TopCommon title="Insights - Registered Partners" />
      <div>
        <Tabs defaultValue="critical-task" className="w-full">
          <div className="border-y border-[#E4E7EB] h-[40px] md:h-[56px] lg:h-[62px] flex md:px-5 px-4 lg:px-6 items-center">
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
                  Critical Task
                </TabsTrigger>
                {/* <TabsTrigger
                  id="groth-task"
                  value="groth-task"
                  className="p-0 flex !items-center text-sm font-medium leading-[142%] !border-b-[3px] !border-t-none !rounded-none  -tracking-[0.28px] !text-[#B751FB] lg:h-[62px] md:h-[56px] h-[40px] data-[state=inactive]:!text-[#808188] data-[state=inactive]:!border-b-transparent !shadow-none data-[state=inactive]:fill-[#808188]"
                >
                  <GrothTask className="" />
                  Growth Task
                </TabsTrigger> */}
              </div>
            </TabsList>
            <div className="sm:flex hidden items-center gap-2 sm:gap-4 md:gap-[30px] ml-auto">
              <DotColor title="Critical" className="bg-[#F00]" />
              <DotColor title="Growth" className="bg-[#F5640A]" />
            </div>
          </div>
          <TabsContent value="critical-task" className="md:px-5 px-4 lg:px-6 ">
            <form className="md:py-5 py-3 sm:py-4 lg:py-6">
              <div className="flex justify-center min-[460px]:justify-between  items-center gap-2 flex-wrap min-[460px]:flex-nowrap">
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
            <TableCommon data={criticalData} />
          </TabsContent>
          {/* <TabsContent value="growth-task">
           
          </TabsContent> */}
          <TabsContent value="growth-task" className="md:px-5 px-4 lg:px-6 ">
            <form className="md:py-5 py-3 sm:py-4 lg:py-6">
              <div className="flex justify-center min-[460px]:justify-between  items-center gap-2 flex-wrap min-[460px]:flex-nowrap">
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
            {/* <Growth /> */}
          </TabsContent>
        </Tabs>

        {/* <Tab
          tabs={[
            {
              id: "critical-task",
              value: "critical-task",
              title: "Critical Task",
              icon: <CriticalTask />,
              content: "klsdjfklsd",
            },
          ]}
          rightSection={"lkdskl"}
        /> */}

        <div></div>
      </div>
    </div>
  );
}

export default Insights;
