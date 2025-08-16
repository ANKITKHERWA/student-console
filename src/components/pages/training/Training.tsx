import Tab from '@/components/common/Tab';
import TopCommon from '@/components/common/TopCommon';
import {  LiveVideoIcon, LocationSmallIcon, PlatFormtIcon } from '@/components/helper/Icon2';
import React from 'react'
import Platform from './Platform';

function Training() {
  return (
    <div>
      <TopCommon title="Training" />
      <div>
        <Tab
          tabs={[
            {
              id: "platform",
              value: "platform",
              title: "Platform",
              icon: <PlatFormtIcon />,
              content: <Platform/>,
            },
            {
              id: "marketing",
              value: "marketing",
              title: "Marketing",
              icon: <LocationSmallIcon />,
              content: "manish",
            },
            {
              id: "liveTraining",
              value: "liveTraining",
              title: "Live Training",
              icon: <LiveVideoIcon />,
              content: "live",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Training