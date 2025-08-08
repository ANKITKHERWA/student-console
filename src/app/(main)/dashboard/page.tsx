import DashDetailCard from '@/components/common/DashDetailCard'
import TopBar from '@/components/common/TopBar'
import React from 'react'

function page() {
  return (
    <div className="w-full min-h-screen bg-white ">
      <TopBar />
      <DashDetailCard />
    </div>
  )
}

export default page
