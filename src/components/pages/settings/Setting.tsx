import Pera from "@/components/common/Pera";
import SmallHeading from "@/components/common/SmallHeading";
import TopCommon from "@/components/common/TopCommon";
import { settingCard } from "@/components/helper/Helper2";
import Link from "next/link";
import React from "react";

function Setting() {
  return (
    <div className="h-screen">
      <TopCommon title="Setting" />
      <div className="sm:h-[80%] flex items-center md:px-5 px-4 lg:px-6 !py-10">
        <div className="xl:gap-[50px] lg:gap-8 gap-4 sm:gap-5 md:gap-6 flex flex-wrap justify-center max-w-[1000px] m-auto">
          {settingCard.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="border border-[#E4E7EB] block rounded-[6px] md:rounded-[12px] w-full sm:w-[45%] md:w-[40%] lg:w-[34.5%] p-2.5 lg:p-[15px]"
            >
              <div>{item.icon}</div>
              <div className="flex flex-col mt-2 sm:mt-2.5">
                <SmallHeading
                  title={item.heading}
                  className="!font-semibold !text-sm md:!text-base"
                />
                <Pera
                  title={item.pera}
                  className="!tex-xs md:!text-sm !text-[#030712] !font-normal"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Setting;
