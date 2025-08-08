import DotColor from '@/components/common/DotColor';
import TopBar from '@/components/common/TopBar';
import { CriticalTask, GrothTask } from '@/components/helper/Icon2';
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tabs } from '@radix-ui/react-tabs'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


function Insights() {
  return (
    <div className="max-w-[1385px]">
      <TopBar />
      <div>
        <Tabs defaultValue="critical-task " className="w-full">
          <div className="border-y border-[#E4E7EB] py-[17px] flex px-6 items-center">
            <TabsList className="rounded-none bg-transparent !w-full flex !justify-start ">
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
          <div>
            {/* <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}
          </div>
          <TabsContent value="critical-task"></TabsContent>
          <TabsContent value="groth-task">hellodflksdfkl</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Insights
