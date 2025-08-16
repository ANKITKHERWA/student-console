import SaloneRatting from "@/components/common/SaloneRatting";
import { trainingCardData } from "@/components/helper/Helper2";
import React from "react";

function Platform() {
  return (
    <div className="overflow-y-auto h-screen pb-10 scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-blue-600 scrollbar-track-blue-200 hover:scrollbar-thumb-blue-800">
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
  );
}

export default Platform;
