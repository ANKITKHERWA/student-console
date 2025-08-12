import React from 'react'
import Heading from './Heading'
import Comselect from './Comselect'

function TopBar() {
  return (
    <>
      <div className="flex items-center justify-between  bg-white py-5 px-6 border-b border-[#DCE0E5]">
        <Heading
          className="text-[ #030712] text-xl  font-semibold leading-[120%] text-spacing-[-0.4px] "
          title="Dashboard"
        />
        <Comselect
          placeholder="Last 7 Days"
          label="Last Days"
          options={['Last 7 Days', 'Last 30 days', 'Last month']}
        />
      </div>
    </>
  )
}

export default TopBar
