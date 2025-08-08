import React from 'react'

interface Iprops {
    title: string;
    className?: string;
}

const DotColor: React.FC<Iprops>=({className,title})=> {
  return (
    <div className={`flex items-center gap-2`}>
      <div className={`w-[16px] h-[16px] ${className} rounded-full`}></div>
      <span className="text-[#030712] text-sm font-semibold leading-[142%] -tracking-[0.28px]">{title}</span>
    </div>
  );
}

export default DotColor 