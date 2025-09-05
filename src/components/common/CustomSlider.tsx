"use client";
import { useState } from "react";

export default function CustomSlider() {
  const min = 1;
  const max = 10;
  const [value, setValue] = useState(5); // default middle

  // percentage calculation
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full  mx-auto flex items-center gap-6 lg:mt-[30px] md:mt-8 sm:mt-5 mt-4 ">
      {/* Top Labels */}

      {/* Slider Wrapper */}
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        {/* Filled Part */}
        <div
          className="absolute h-2 bg-[#B751FB] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Circle Handle */}
        <div
          className="absolute -top-2 w-6 h-6 bg-white border-2 border-[#B751FB] rounded-full cursor-pointer"
          style={{
            left: `calc(${percentage}% - 12px)`,
          }}
        ></div>

        {/* Invisible Input for Drag */}
        <input
          type="range"
          min={min}
          max={max}
          step={0.1}
          value={value}
          onChange={(e) => setValue(parseFloat(e.target.value))}
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <div className="flex text-nowrap mb-2 lg:text-xl md:text-lg sm:text-base textsm font-semibold leading-[100%] -tracking-[0.4px] text-[#B751FB]">
        {/* <span>{min}</span> */}
        <span>{value.toFixed(2)}</span>
        <span> / 10</span>
      </div>
    </div>
  );
}
