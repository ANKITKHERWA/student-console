"use client";
import TopCommon from "@/components/common/TopCommon";
import React, { useState } from "react";
import Tab from "@/components/common/Tab";
import { MembersIcon, PerformanceIcon } from "@/components/helper/Icon2";
import Member from "./Member";
import Performance from "./Performance";
import Addmember from "./Addmember";
import DotColor from "@/components/common/DotColor";

function TeamMain() {
  const [activeTab, setActiveTab] = useState("members");

  return (
    <div>
      <TopCommon title="Team" />
      <div>
        <Tab
          tabs={[
            {
              id: "members",
              value: "members",
              title: "Members",
              icon: <MembersIcon />,
              content: <Member />,
            },
            {
              id: "performance",
              value: "performance",
              title: "Performance",
              icon: <PerformanceIcon />,
              content: <Performance />,
            },
          ]}
          value={activeTab}
          onChange={setActiveTab}
          rightSection={
            <>
              {activeTab === "members" ? (
                <>
                  <DotColor title="Critical" className="bg-[#FF0000]" />
                  <DotColor title="Growth" className="bg-[#F5640A]" />
                  <Addmember />
                </>
              ) : activeTab === "performance" ? (
                <>
                  <Addmember />
                </>
              ) : null}
            </>
          }
        />
      </div>
      {/* <div className="flex justify-between items-center px-6 mt-7">
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
      </div> */}
    </div>
  );
}

export default TeamMain;
