"use client";
import DotColor from '@/components/common/DotColor';
import TopBar from '@/components/common/TopBar';
import { CriticalTask, GrothTask, SearchIcon } from '@/components/helper/Icon2';
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tabs } from '@radix-ui/react-tabs'
import React from 'react'

import { Input } from '@/components/ui/input';
import Filter from './Filter';
import SelecteStatus from './SelecteStatus';
import TableCommon from '@/components/common/TableCommon';
import { criticalData } from "@/components/helper/Helper2";


function Insights() {

  return (
    <div className="pb-10 max-w-[1385px]">
      <TopBar />
      <div>
        <Tabs defaultValue="critical-task" className="w-full">
          <div className="border-y border-[#E4E7EB] py-[17px] flex px-6 items-center">
            <TabsList className="rounded-none bg-transparent !w-full flex !justify-start  mr-[55.33px] ">
              <div className="flex gap-3">
                <TabsTrigger
                  id="critical-task"
                  value="critical-task"
                  className="p-0 flex !items-center text-sm font-medium leading-[142%] !border-b-[3px] !border-t-none !rounded-none -tracking-[0.28px] !text-[#B751FB] py-[24px] fill-[#B751FB] data-[state=inactive]:!text-[#808188] data-[state=inactive]:!border-b-transparent data-[state=inactive]:fill-[#808188] !shadow-none px-2"
                >
                  <CriticalTask />
                  Critical Task
                </TabsTrigger>
                <TabsTrigger
                  id="groth-task"
                  value="groth-task"
                  className="p-0 flex !items-center text-sm font-medium leading-[142%] !border-b-[3px] !border-t-none !rounded-none  -tracking-[0.28px] !text-[#B751FB] py-[24px] data-[state=inactive]:!text-[#808188] data-[state=inactive]:!border-b-transparent !shadow-none data-[state=inactive]:fill-[#808188]"
                >
                  <GrothTask className="" />
                  Growth Task
                </TabsTrigger>
              </div>
            </TabsList>
            <div className="flex items-center gap-[30px] ml-auto">
              <DotColor title="Critical" className="bg-[#F00]" />
              <DotColor title="Growth" className="bg-[#F5640A]" />
            </div>
          </div>

          <TabsContent value="critical-task" className="px-6">
            <form className="py-6">
              <div className="flex justify-between items-center">
                <SelecteStatus />
                <div className="flex items-center gap-[30px]">
                  <div className="flex items-center gap-1 w-full xl:min-w-[290px] py-1.5 px-3 !border-[#D9DDE3] border rounded-[6px]">
                    <Input
                      placeholder="Search..."
                      // value={}
                      className="max-w-sm !ring-0 w-full !shadow-none !border-none !rounded-[0px] !h-[20px] !p-0"
                    />
                    <SearchIcon />
                  </div>
                  <Filter />
                </div>
              </div>
            </form>
            {/* <div className="overflow-scroll max-h-dvh border rounded-[6px] border-[#D9DDE3]"> */}
            <TableCommon data={criticalData} />
            {/* </div> */}
          </TabsContent>
          <TabsContent value="groth-task">hellodflksdfkl</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Insights
