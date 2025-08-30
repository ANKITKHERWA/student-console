import React from 'react'

interface Iprops {
  title: string
  className?: string
  span: string
  spanClassName?: string
}

const Pera2: React.FC<Iprops> = ({ className, title, span, spanClassName }) => {
  return (
    <div
      className={`${className} text-[#808188] text-xs md:text-sm lg:text-base font-medium leading-[150%] tracking-[0.32px]`}>
      {title}
      {span && <span className={spanClassName}>{span}</span>}
    </div>
  )
}

export default Pera2
