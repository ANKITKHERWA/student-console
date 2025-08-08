'use client'
import React from 'react'
import Heading from './Heading'
import { Select1 } from './Select1'

function TopBar() {
  const [pathName, setPathName] = React.useState()
  return (
    <>
      <div className="flex items-center justify-between  bg-white py-5 px-6 border-b border-[#DCE0E5]">
        <Heading
          className="text-[ #030712] text-xl font-semibold leading-[120%] text-spacing-[-0.4px] "
          title="Dashboard"
        />
        {/* <div className={`${pathName === '/dashboard' ? 'block' : 'hidden'}`}>
          <Select1 />
        </div> */}
      </div>
    </>
  )
}

export default TopBar
