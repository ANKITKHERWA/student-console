import React from "react";
import { FemaleteamCard, MaleteamCard } from "../helper/Icon1";

type SubData = {
  icon: React.ReactElement;
  title: string;
};

interface Props {
  avatar?: React.ReactElement;
  name?: string;
  icon?: React.ReactElement;
  gender?: string;
  tag?: string;

  subData: SubData[];
}

const TeamPageCard: React.FC<Props> = ({
  avatar,
  name,
  gender,
  tag,
  subData,
}) => {
  return (
    <div
      className={`max-w-xs rounded-xl border border-[#E4E7EB] group py-3 hover:bg-[#F1DCFF] bg-[#fff] shadow-lg w-307 `}
    >
      <span className={`rounded-full h-3 w-3 ml-2 block`}> </span>
      <div className="flex items-center gap-4 px-6">
        <span>{avatar}</span>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex gap-2 mt-1">
            <span
              className={`rounded-full text-black px-2.5 py-0.5 text-xs border font-medium flex items-center gap-1`}
            >
              {gender == "Male" ? (
                <MaleteamCard />
              ) : gender == "Female" ? (
                <FemaleteamCard />
              ) : (
                ""
              )}
              {/* {icon} */}
              {gender}
            </span>
            <span className="w-[1px] h-[20px] bg-[#E4E7EB] group-hover:bg-white"></span>
            <span
              className={`rounded-full text-black px-2.5 py-0.5 text-xs font-medium border  ${
                tag === "TC"
                  ? "border-[#FFAB47] bg-[#FFEFDB]"
                  : tag === "RM"
                  ? "border-[#8EBAF6] bg-[rgba(207,226,252,0.20]"
                  : tag === "FE"
                  ? "border-[#31A553] bg-[#E3F7E9]"
                  : ""
              }`}
            >
              {tag}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm text-gray-700 border-t border-[#E4E7EB] group-hover:border-white pt-4 px-6">
        {subData.map((items, indexs) => (
          <div key={indexs} className="flex items-center gap-2">
            {items.icon} {items.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPageCard;
