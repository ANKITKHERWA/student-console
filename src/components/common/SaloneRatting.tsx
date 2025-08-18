import Image from "next/image";
import React from "react";
import SmallHeading from "./SmallHeading";
import Pera from "./Pera";
import Link from "next/link";

type DateTime = {
  icon: React.ReactNode;
  dateTime: string;
};

type props = {
  id: number;
  img: string;
  heading: string;
  ratting: React.ReactNode;
  pera: string;
  path: string;
  dateTime: DateTime[];
};

const SaloneRatting: React.FC<props> = ({
  id,
  img,
  heading,
  ratting,
  pera,
  path,
  dateTime,
}) => {
  return (
    <article
      key={id}
      className="border border-[#E4E7EB] bg-[#fff] flex flex-col justify-between rounded-[6px] hover:bg-[#b751fb39] group transition-all duration-500 ease-in-out"
    >
      <div className="md:p-3 p-2 lg:p-[15px] !pb-0 flex flex-col justify-between h-full">
        <div className="overflow-hidden rounded ">
          <Image
            src={img}
            width={277}
            height={203}
            alt="salon img"
            className="group-hover:scale-[1.1] transition-all duration-500 ease-in-out mx-auto"
          />
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-3 gap-2 mb-1 md:mb-1.5">
          <SmallHeading
            title={heading}
            className=" !font-bold !leading-[150%] !text-sm lg:!text-base"
          />
          <div className="flex items-center gap-[3px]">
            {ratting}
            {ratting}
            {ratting}
            {ratting}
            {ratting}
          </div>
        </div>
        <Pera
          title={pera}
          className="!text-xs !font-normal !text-[rgba(0,0,0,0.70)]"
        />
        <Link
          href={path}
          className="text-[#5B14D1] tex-xs font-semibold leading-[200%] -tracking-[0.24px] underline block w-max md:mt-[5px]"
        >
          https/da salon partner.com
        </Link>
      </div>
      <div className="border-t border-[E4E7EB] md:px-3 px-2 lg:px-[15px] py-1 md:py-2 text-[rgba(0,0,0,0.70)] text-xs leading-[141%] -tracking-[0.24px] flex justify-between gap-2 sm:mt-2.5 mt-2 md:mt-3">
        {dateTime.map((item, index) => (
          <div key={index} className="flex items-center gap-0.5 sm:gap-[5px]">
            {item.icon}
            <span>{item.dateTime}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default SaloneRatting;
