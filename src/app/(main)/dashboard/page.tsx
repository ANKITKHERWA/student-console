import DashDetailCard from '@/components/common/DashDetailCard'
import TopBar from '@/components/common/TopBar'
import Perform from '@/components/pages/dashboard/Perform'
import React from 'react'

function page() {
  return (
    <div className="w-full min-h-screen bg-white ">
      <TopBar />
      <DashDetailCard />
      <Perform />
    </div>
  )
}

export default page
