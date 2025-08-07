import React from "react";
interface Iprops {
  title: string;
  className?: string;
}
const Pera: React.FC<Iprops> = ({ className, title }) => {
  return (
    <div
      className={`${className} text-[#808188] text-xs  md:text-sm lg:text-base font-medium leading-[150%] t-racking-[0.32px]`}
    >
      {title}
    </div>
  );
};

export default Pera;
