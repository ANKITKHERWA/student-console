import Selecte from "@/components/common/Selecte";
import TableBody from "@/components/common/TableBody";
import TableHead from "@/components/common/TableHead";
import { earningDetailsData, monthEarning } from "@/components/helper/Helper2";
import React from "react";

function EarningDetails() {
  return (
    <div>
      <div className="lg:py-6 md:py-5 sm:py-4 py-3 items-center flex justify-end gap-5">
        {monthEarning.map((item, index) => (
          <Selecte
            key={index}
            placeholder={item.placeholder}
            options={item.options}
            className="sm:w-[135px] w-[100px]"
          />
        ))}
      </div>

      <div>
        {earningDetailsData?.map((items, index) => (
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
      </div>
    </div>
  );
}

export default EarningDetails;
