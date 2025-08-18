import React from "react";
interface props {
  title: string;
  className?: string;
}
const Heading: React.FC<props> = ({ className, title }) => {
  return (
    <h2
      className={`${className} text-[#030712] md:text-2xl text-xl lg:text-3xl font-semibold leading-[120%] -tracking-[0.6px]`}
    >
      {title}
    </h2>
  );
};

export default Heading;
