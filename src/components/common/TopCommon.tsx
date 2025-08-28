import React from 'react'
interface Iprops {
  title: string
  className?: string
}
const TopCommon: React.FC<Iprops> = ({ className, title }) => {
  return (
    <>
      <div className="flex items-center justify-between  bg-white py-5 px-6 border-b border-[#DCE0E5] w-full">
        <h2
          className={`${className} text-[ #030712] text-xl  font-semibold leading-[120%] text-spacing-[-0.4px] `}>
          {title}
        </h2>
      </div>
    </>
  )
}

export default TopCommon
