import DotColor from '@/components/common/DotColor'
import Tab from '@/components/common/Tab'
import TopCommon from '@/components/common/TopCommon'
import { CriticalTask } from '@/components/helper/Icon2'
import React from 'react'
import Registeredtab from './Registeredtab'
import Prospectivetab from './Prospectivetab'

function Partner() {
  return (
    <>
      <TopCommon title="Partner" />
      <Tab
        tabs={[
          {
            id: 'Registered',
            value: 'Registered',
            title: 'Registered',
            icon: <CriticalTask />,
            content: <Registeredtab />,
          },
          {
            id: 'Prospective',
            value: 'Prospective',
            title: 'Prospective',
            icon: <CriticalTask />,
            content: <Prospectivetab />,
          },
        ]}
        rightSection={
          <>
            <DotColor title="Critical" className="bg-[#FF0000]" />
            <DotColor title="Growth" className="bg-[#F5640A]" />
          </>
        }
      />
    </>
  )
}

export default Partner
