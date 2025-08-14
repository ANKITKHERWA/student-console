import TopCommon from '@/components/common/TopCommon'
import React from 'react'
import Card from './Card'
import Pera from '@/components/common/Pera'

function Team() {
  return (
    <>
      <div>
        <TopCommon title="Team" />
        <div className="flex justify-between items-center px-6 mt-7">
          <Pera className="text-lg font-semibold" title="Total Members:16" />
        </div>
        <div className="px-6 mt-7">
          <Card />
        </div>
      </div>
    </>
  )
}

export default Team
