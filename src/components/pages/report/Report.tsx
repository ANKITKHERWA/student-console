"use client";
import TopCommon from "@/components/common/TopCommon";

import Tab from "@/components/common/Tab";
import {
  Iconprospectivetab,
  Iconregisterdtab,
} from "@/components/helper/Icon1";
import Registered from "./Registered";
import Prospective from "./Prospective";
import { useState } from "react";
function Report() {
  const [activeTab, setActiveTab] = useState("registered");

  return (
    <div className="pb-10">
      <TopCommon title="Report" />
      <div>
        <Tab
          tabs={[
            {
              id: "registered",
              value: "registered",
              title: "Registered",
              icon: <Iconregisterdtab />,
              content: <Registered />,
            },
            {
              id: "prospective",
              value: "prospective",
              title: " Prospective",
              icon: <Iconprospectivetab />,
              content: <Prospective />,
            },
          ]}
          value={activeTab}
          onChange={setActiveTab}
        />
      </div>
    </div>
  );
}

export default Report;
