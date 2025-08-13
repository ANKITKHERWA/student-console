import React from 'react'

interface Iprops {
    title: string;
    className?: string;
}

const DotColor: React.FC<Iprops>=({className,title})=> {
  return (
    <div className={`flex items-center gap-1 md:gap-2`}>
      <div className={`w-[12px] h-[12px] md:w-[16px] md:h-[16px] ${className} rounded-full`}></div>
      <span className="text-[#030712] text-xs md:text-sm font-semibold leading-[142%] -tracking-[0.28px]">{title}</span>
    </div>
  );
}

export default DotColor 