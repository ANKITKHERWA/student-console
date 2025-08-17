"use clinet";
import TableBody from "@/components/common/TableBody";
import TableHead from "@/components/common/TableHead";
import { monthEarning, platformEarningTableData, selecteMemberEarning } from "@/components/helper/Helper2";
import React from "react";
import Selecte from "@/components/common/Selecte";


function PlatformEarning() {
  return (
    <div>
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

        <div>
          {monthEarning.map((item, index) => (
            <Selecte
              key={index}
              placeholder={item.placeholder}
              options={item.options}
              className="sm:w-[135px] w-[100px]"
            />
          ))}
        </div>
      </div>
      {platformEarningTableData.map((items, index) => (
        <div
          key={index}
          className="overflow-auto border rounded-[6px] border-[#D9DDE3]"
        >
          <table
            key={index}
            className="text-nowrap w-full text-xs sm:text-sm min-w-[340px]"
          >
            <TableHead data={items.head} className="md:py-2 py-1" />
            <TableBody
              body={items.body}
              className="!py-2 sm:!py-3 md:!py-3 lg:!py-4"
            />
          </table>
        </div>
      ))}
      <p className="text-[#808188] md:text-sm text-xs flex gap-1 flex-wrap font-medium leading-[133%] -tracking-[0.24px] lg:mt-6 md:mt-5 sm:mt-4 mt-3">
        Status : Payment of <span className="text-[#030712]">₹25,000</span>{" "}
        processed on
        <span className="text-[#030712]">09 June 2025</span> | TXN ID:
        <span className="text-[#030712]">TXN20250609ABC123</span>
      </p>
    </div>
  );
}

export default PlatformEarning;
