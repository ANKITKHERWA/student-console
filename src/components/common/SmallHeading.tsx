import React from "react";
interface Iprops {
  title: string;
  className?: string;
}
const SmallHeading: React.FC<Iprops> = ({ className, title }) => {
  return (
    <h3
      className={`${className} text-[#030712] text-sm font-semibold leading-[142%] -tracking-[0.28px]`}
    >
      {title}
    </h3>
  );
};

export default SmallHeading;
