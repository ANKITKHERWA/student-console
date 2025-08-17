import Tab from '@/components/common/Tab';
import TopCommon from '@/components/common/TopCommon';
import { PiggiBankIcon, PlatFormtIcon } from '@/components/helper/Icon2';
import React from 'react'
import PlatformEarning from './PlatformEarning';
import EarningDetails from './EarningDetails';



function Earning() {
  return (
    <div>
      <TopCommon title="Earning" />
      <div>
        <Tab
          tabs={[
            {
              id: "platformEarning",
              value: "platformEarning",
              title: "Platform Earning",
              icon: <PlatFormtIcon />,
              content: <PlatformEarning/>,
            },
            {
              id: "earningDetails",
              value: "earningDetails",
              title: "Earning Details",
              icon: <PiggiBankIcon />,
              content: <EarningDetails/>,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Earning