"use client";
import Tab from "@/components/common/Tab";
import TopCommon from "@/components/common/TopCommon";
import { PiggiBankIcon, PlatFormtIcon } from "@/components/helper/Icon2";
import React from "react";
import PlatformEarning from "./PlatformEarning";
import EarningDetails from "./EarningDetails";

function Earning() {
  const [activeTab, setActiveTab] = React.useState("platformEarning");
  return (
    <div>
      <TopCommon title="Earning" />
      <div>
        <Tab
          onChange={setActiveTab}
          value={activeTab}
          tabs={[
            {
              id: "platformEarning",
              value: "platformEarning",
              title: "Platform Earning",
              icon: <PlatFormtIcon />,
              content: <PlatformEarning />,
            },
            {
              id: "earningDetails",
              value: "earningDetails",
              title: "Earning Details",
              icon: <PiggiBankIcon />,
              content: <EarningDetails />,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Earning;
