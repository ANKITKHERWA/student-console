import Pera from "@/components/common/Pera";
import Search from "@/components/common/Search";
import TopCommon from "@/components/common/TopCommon";
import { Fluentcard, Tablericon } from "@/components/helper/Icon1";
import React from "react";
import Card from "./Card";
import Tab from "@/components/common/Tab";
import { MembersIcon, PerformanceIcon } from "@/components/helper/Icon2";
import PlatformEarning from "../settings/earning/PlatformEarning";
import EarningDetails from "../settings/earning/EarningDetails";

function TeamMain() {
  return (
    <div>
      <TopCommon title="Team" />
      <div>
        <Tab tabs={[
            {
              id: "platformEarning",
              value: "platformEarning",
              title: "Platform Earning",
              icon: <MembersIcon />,
              content: <PlatformEarning/>,
            },
            {
              id: "earningDetails",
              value: "earningDetails",
              title: "Earning Details",
              icon: <PerformanceIcon />,
              content: <EarningDetails/>,
            },
          ]}/>
      </div>
      <div className="flex justify-between items-center px-6 mt-7">
        <div>
          <Pera className="text-lg font-semibold" title="Total Members:16" />
        </div>
        <div className="flex gap-2">
          <Search />
          <Fluentcard />
          <Tablericon />
        </div>
      </div>
      <div className="px-6 mt-7">
        <Card />
      </div>
    </div>
  );
}

export default TeamMain;
