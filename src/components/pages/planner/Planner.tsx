'use client'
import DotColor from '@/components/common/DotColor'
import TopCommon from '@/components/common/TopCommon'
import React, { useState } from 'react'
import SelecteStatus from '../insights/SelecteStatus'
import { Button } from '@/components/ui/button'
import Addnewpartner from '../partner/Addnewpartner'
import {
  Fluentcard,
  IconChevronleft,
  IconChevronright,
  Iconprospectivetab,
  Iconregisterdtab,
  Tablericon,
} from '@/components/helper/Icon1'
import Tab from '@/components/common/Tab'
import Registeredtab from '../partner/Registeredtab'
import Prospectivetab from '../partner/Prospectivetab'
import FollowUpPlans from './FollowUpPlans'
import Followankit from './Followankit'

function PlannerMain() {
  const [selectedUser, setSelectedUser] = useState<null>(null)
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('followup')
  console.log(activeTab)

  return (
    <>
      <div className="w-full">
        <TopCommon title="Planner" />
        <Tab
          tabs={[
            {
              id: 'visitPlans',
              value: 'visitPlans',
              title: 'Visit Plans',
              icon: <Iconregisterdtab />,
              content: <Followankit />,
            },
            {
              id: 'followup',
              value: 'followup',
              title: 'Follow up Plans',
              icon: <Iconprospectivetab />,
              content: <Followankit />,
            },
          ]}
          value={activeTab}
          onChange={setActiveTab}
          rightSection={
            <>
              <div className="flex items-center justify-between gap-4">
                <DotColor title="Registered" className="bg-[#31A553]" />
                <DotColor title="Prospective" className="bg-[#8EBAF6]" />
                <Addnewpartner />
              </div>
            </>
          }
        />
      </div>
    </>
  )
}

export default PlannerMain
