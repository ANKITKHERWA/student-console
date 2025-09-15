import React from "react";
import { GoogleIcon } from "../helper/Icon2";

interface Iprops {
  title: string;
  className?: string;
  onClick?: () => void; // 👈 function type define kiya
}

const GoogleBtn: React.FC<Iprops> = ({ title, className, onClick }) => {
  return (
    <button
      onClick={onClick} // 👈 pass kar diya
      className={`${className} sm:px-3 px-2  lg:px-4 md:py-2 py-1 lg:py-2.5  border border-[#E4E7EB] bg-[#fff] rounded md:rounded-[6px] text-center flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm font-semibold leading-[142.857%] -tracking-[0.28px] text-[rgba(3,7,18,1)] shadow-[0_1px_4px_0_rgba(3,7,18,0.08)] cursor-pointer w-full`}
    >
      <GoogleIcon />
      {title}
    </button>
  );
};

export default GoogleBtn;
