import Heading from "@/components/common/Heading";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Pera from "@/components/common/Pera";
import {
  feTeamChartData,
  overallPerformance,
  rmTeamChartData,
  tcTeamChartData,
} from "@/components/helper/Helper2";
import Teamcharts from "./TeamChart";

function Performance() {
  return (
    <div>
      <div className="xl:py-7 lg:py-6 md:py-5 py-4 flex justify-between sm:items-center gap-2">
        <Heading
          title="Overall Team Performance (Last Month)"
          className="lg:!text-xl md:!text-lg !text-base"
        />
        <Select>
          <SelectTrigger className="w-[121px] border border-grayE4 rounded-[6px] text-xs sm:text-sm text-[#18181B] font-medium leading-[142%] -tracking-[0.28px]">
            <SelectValue placeholder="Last 7 days" />
          </SelectTrigger>
          <SelectContent className="!p-0">
            <SelectGroup className="!p-0">
              <SelectItem value="apple">Last 7 days</SelectItem>
              <SelectItem value="banana">Last 30 days</SelectItem>
              <SelectItem value="blueberry">Last month</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid min-[1300px]:!grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 md:gap-5 sm:gap-4 gap-3 lg:gap-6 mt-[15px]">
        {overallPerformance.map((item, index) => (
          <div
            key={index}
            className="border-2 border-[#E4E7EB] bg-white rounded-[8px] p-4 w-full cursor-pointer hover:bg-[#EAEEF5] transition-all duration-300 flex flex-col justify-between"
          >
            <p className="text-[#030712] text-base font-semibold leading-[150%] tracking-[-0.32px] flex items-center gap-3">
              <span>{item.icon}</span>
              {item.title}
            </p>
            <div className="flex justify-between items-end mt-6">
              <div className="flex gap-2.5">
                <h3 className="text-[#1D212C] xl:text-[40px] lg:text-4xl md:text-3xl text-2xl  leading-[120%] tracking-[-0.8px] font-semibold">
                  {item.heading}
                </h3>
                <div className="flex flex-col gap-2 justify-end">
                  <Pera title={item.info || ""} className="!text-xs" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 grid md:!grid-cols-2 lg:grid-cols-1 sm:gap-5 gap-4">
        <Teamcharts
          data={tcTeamChartData}
          title="TC Team's Onboarding Achievement % (Last Month)"
          barColor="#FFF6EB"
          width={27}
        />
        <Teamcharts
          data={rmTeamChartData}
          title="RM Team's Onboarding Achievement % (Last Month)"
          barColor="#F1DCFF"
          width={39}
        />
      </div>
      <div className="mt-6 pb-4">
        <Teamcharts
          data={feTeamChartData}
          title="FE Visits Achievement % (Last Month)"
          barColor="#EAEEF5"
          width={39}
        />
      </div>
    </div>
  );
}

export default Performance;
