import SaloneRatting from "@/components/common/SaloneRatting";
import Search from "@/components/common/Search";
import SmallHeading from "@/components/common/SmallHeading";
import { trainingCardData } from "@/components/helper/Helper2";
import React from "react";
import Filter from "../insights/Filter";

function LiveTraining() {
  return (
    <div>
      <div className="flex justify-between items-center lg:pt-6 lg:pb-[18px] py-3 md:py-4 gap-3 min-[400px]:flex-row flex-col">
        <SmallHeading title="Live Training" className="!text-base" />
        <form className="flex md:gap-4 gap-3 lg:gap-5">
          <Search />
          <Filter />
        </form>
      </div>
      <div className="overflow-y-auto h-screen md:pb-8 pb-6 lg:pb-10 scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-600 scrollbar-track-blue-200 hover:scrollbar-thumb-blue-800">
        <div
          className="grid  grid-cols-1
    min-[500px]:grid-cols-2
    min-[850px]:grid-cols-3
    
    min-[1150px]:!grid-cols-4
    gap-4 lg:gap-6 xl:gap-[36px]"
        >
          {trainingCardData.map((item, index) => (
            <SaloneRatting
              key={index}
              id={item.id}
              img={item.img}
              heading={item.heading}
              ratting={item.ratting}
              pera={item.description}
              path={item.path}
              dateTime={item.dateTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveTraining;
