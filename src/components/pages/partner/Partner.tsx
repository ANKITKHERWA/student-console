'use client'
import DotColor from '@/components/common/DotColor'
import Tab from '@/components/common/Tab'
import TopCommon from '@/components/common/TopCommon'
import React from 'react'
import Registeredtab from './Registeredtab'
import Prospectivetab from './Prospectivetab'
import {
  Icon10thimg,
  Iconprospectivetab,
  Iconregisterdtab,
} from '@/components/helper/Icon1'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Addnewpartner from './Addnewpartner'
function Partner() {
  const [activeTab, setActiveTab] = useState('Registered')
  console.log(activeTab)

  return (
    <>
      <TopCommon title="Partner" />
      <Tab
        tabs={[
          {
            id: 'Registered',
            value: 'Registered',
            title: 'Registered',
            icon: <Iconregisterdtab />,
            content: <Registeredtab />,
          },
          {
            id: 'Prospective',
            value: 'Prospective',
            title: 'Prospective',
            icon: <Iconprospectivetab />,
            content: <Prospectivetab />,
          },
        ]}
        value={activeTab}
        onChange={setActiveTab}
        rightSection={
          <>
            {activeTab === 'Registered' ? (
              <>
                <DotColor title="Critical" className="bg-[#FF0000]" />
                <DotColor title="Growth" className="bg-[#F5640A]" />
              </>
            ) : activeTab === 'Prospective' ? (
              <Addnewpartner />
            ) : null}
          </>
        }
      />
    </>
  )
}

export default Partner
