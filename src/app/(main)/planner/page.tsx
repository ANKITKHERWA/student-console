import TeamCard from '@/components/common/TeamCard'
import { FemaleteamCard, MaleteamCard } from '@/components/helper/Icon1'
import React from 'react'

function page() {
  return (
    <>
      <TeamCard
        dotclass="bg-[green] "
        avatar="/assest/png/salone-small-img.png"
        name="Aarav Sharma"
        icon={<MaleteamCard />}
        gender="Male"
        tag="TC"
        phone="+919876500101"
        email="aarav.sharma@example.com"
        manages="Manages: 2 RM & 3 FE"
        totalSalons={1100}
        className="mb-4"
      />
      <TeamCard
        dotclass="bg-[red] "
        avatar="/assest/png/salone-small-img.png"
        name="Priya Singh"
        icon={<FemaleteamCard />}
        gender="Female"
        tag="TC"
        phone="+919876500101"
        email="tanya.hill@example.com"
        manages="Manages: 2 RM & 3 FE"
        totalSalons={1100}
        className="mb-4"
      />
    </>
  )
}

export default page
