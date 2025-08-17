import Tab from '@/components/common/Tab';
import TopCommon from '@/components/common/TopCommon';
import {  LiveVideoIcon, LocationSmallIcon, PlatFormtIcon } from '@/components/helper/Icon2';
import React from 'react'
import Platform from './Platform';
import Marketing from './Marketing';
import LiveTraining from './LiveTraining';

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
              content: <Marketing/>,
            },
            {
              id: "liveTraining",
              value: "liveTraining",
              title: "Live Training",
              icon: <LiveVideoIcon />,
              content: <LiveTraining/>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Training