import React from "react";
interface Iprops {
  title: string;
  className?: string;
}
const PrimaryBtn: React.FC<Iprops> = ({ title, className }) => {
  return (
    <button
      className={`${className} bg-[#B751FB] sm:px-3 px-2  lg:px-4 md:py-2 py-1 lg:py-2.5 text-center cursor-pointer rounded md:rounded-[6px] shadow-[0_1px_4px_0_rgba(3,7,18,0.08)] border border-[#B751FB] text-[#fff] text-xs sm:text-sm font-semibold leading-[142.857%] -tracking-[0.28px] w-full`}
    >
      {title}
    </button>
  );
};

export default PrimaryBtn;
