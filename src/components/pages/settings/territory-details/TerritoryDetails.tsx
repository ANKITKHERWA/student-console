"use client";
import Heading from "@/components/common/Heading";
import Pera from "@/components/common/Pera";
import Search from "@/components/common/Search";
import Selecte from "@/components/common/Selecte";
import TableCommon from "@/components/common/TableCommon";
import TopCommon from "@/components/common/TopCommon";
import {
  selecteMemberEarning,
  territoryCardDetails,
  territoryTableData,
} from "@/components/helper/Helper2";
import React from "react";
import { Businessdetails } from "../bank-details/Businessdetails";
import { useRouter } from "next/navigation";
function TerritoryDetails() {
  const router = useRouter();

  return (
    <div>
      <TopCommon title="Setting" />
      <div className="lg:py-5 md:py-4 py-3 lg:px-6 md:px-5 px-4 border-b border-[#E4E7EB] flex justify-between items-center gap-2">
        <Heading
          title="Territory Details"
          className="lg:!text-xl md:!text-lg !text-base"
        />

        <Businessdetails />
      </div>
      <div className="lg:px-6 md:px-5 px-4 lg:pt-6 md:pt-5 pt-4 pb-6">
        <Pera
          title="Total PIN Codes : 50"
          className="!text-[#030712] md:!text-sm !text-xs"
        />
        <div className="grid min-[1150px]:grid-cols-3 min-[635px]:grid-cols-2 grid-cols-1 md:gap-5 sm:gap-4 gap-3 lg:gap-6 mt-[15px]">
          {territoryCardDetails.map((item, index) => (
            <div
              onClick={() => router.push(item.route)}
              key={index}
              className="border-2 border-[#E4E7EB] bg-white rounded-[8px] p-4 w-full cursor-pointer hover:bg-[#EAEEF5] transition-all duration-300"
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
                    <div className=" flex items-end gap-1">
                      <span>{item.righticon}</span>
                      <span className="text-[#31A553]! text-sm">
                        {item.para}
                      </span>
                    </div>
                    <Pera
                      title={item.month || ""}
                      className="!text-xs max-w-[100px]"
                    />
                  </div>
                </div>
                <Pera
                  title={item.percentage}
                  className="text-[#030712]! text-sm bg-[#E0F6E6] rounded-[4px] px-2 py-1"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="lg:py-6 md:py-5 sm:py-4 py-3 items-center flex justify-between gap-5">
          {selecteMemberEarning.map((item, index) => (
            <Selecte
              key={index}
              placeholder={item.placeholder}
              icon={item.icon}
              options={item.options}
              className="sm:w-[174px] w-[130px]"
            />
          ))}

          <div className="max-w-[290px]">
            <Search />
          </div>
        </div>
        <TableCommon data={territoryTableData} />
      </div>
    </div>
  );
}

export default TerritoryDetails;
