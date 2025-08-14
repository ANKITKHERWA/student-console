"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type TabItem = {
  id: string;
  value: string;
  title: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
};

type CommonTabsProps = {
  tabs: TabItem[];
  rightSection?: React.ReactNode; // <- right side me jo bhi render karna ho
};

export default function Tab({ tabs, rightSection }: CommonTabsProps) {
  return (
    <Tabs defaultValue={tabs[0]?.value} className="w-full">
      {/* Header */}
      <div className="border-y border-[#E4E7EB] h-[40px] md:h-[56px] lg:h-[62px] flex md:px-5 px-4 lg:px-6 items-center">
        <TabsList defaultValue={1} className="rounded-none bg-transparent !w-full flex !justify-start ">
          <div className="flex gap-3 items-center">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                id={tab.id}
                value={tab.value}
                className="p-0 flex !items-center text-sm font-medium leading-[142%] !border-b-[3px] !border-t-none !rounded-none -tracking-[0.28px] !text-[#B751FB] lg:h-[62px] md:h-[56px] h-[40px] fill-[#B751FB] data-[state=inactive]:!text-[#808188] data-[state=inactive]:!border-b-transparent data-[state=inactive]:fill-[#808188] !shadow-none px-2"
              >
                {tab.icon}
                {tab.title}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>

        {/* Example right side dots */}
        {/* <div className="sm:flex hidden items-center gap-2 sm:gap-4 md:gap-[30px] ml-auto">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F00]" />
            <span className="text-xs">Critical</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5640A]" />
            <span className="text-xs">Growth</span>
          </div>
        </div> */}

        {/* Right Section (Custom) */}
        {rightSection && (
          <div className="sm:flex hidden items-center gap-2 sm:gap-4 md:gap-[30px] ml-auto">
            {rightSection}
          </div>
        )}
      </div>

      {/* Content */}
      {tabs.map((tab) => (
        <TabsContent
          key={tab.id}
          value={tab.value}
          className="md:px-5 px-4 lg:px-6"
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
