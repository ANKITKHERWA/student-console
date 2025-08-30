"use client";
import DotColor from "@/components/common/DotColor";
import TopCommon from "@/components/common/TopCommon";
import React, { useState } from "react";
import SelecteStatus from "../insights/SelecteStatus";
import { Button } from "@/components/ui/button";
import Addnewpartner from "../partner/Addnewpartner";
import {
  Fluentcard,
  IconChevronleft,
  IconChevronright,
  Iconprospectivetab,
  Iconregisterdtab,
  Tablericon,
} from "@/components/helper/Icon1";
import Tab from "@/components/common/Tab";
import Registeredtab from "../partner/Registeredtab";
import Prospectivetab from "../partner/Prospectivetab";
import FollowUpPlans from "./FollowUpPlans";

function PlannerMain() {
  const [selectedUser, setSelectedUser] = useState<null>(null);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("followup");
  console.log(activeTab);

  return (
    <>
      <div className="w-full">
        <TopCommon title="Planner" />
        <Tab
          tabs={[
            {
              id: "visitPlans",
              value: "visitPlans",
              title: "Visit Plans",
              icon: <Iconregisterdtab />,
              content: <Registeredtab />,
            },
            {
              id: "followup",
              value: "followup",
              title: "Follow up Plans",
              icon: <Iconprospectivetab />,
              content: <FollowUpPlans />,
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
        {/* <form className="md:py-5 py-3 sm:py-4 lg:py-6 px-6">
          <div className="flex justify-between items-center gap-2 flex-wrap ">
            <div className="flex items-center flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              <SelecteStatus />
              <SelecteStatus />
              <SelecteStatus />
            </div>
            <div className="flex items-center flex-wrap gap-2 ">
              <Button
                variant="secondary"
                className="!rounded-[6px] md:!rounded-[8px] h-[40px] bg-white  border-[#E4E7EB]! border"
                onClick={() => setOpen(true)}
              >
                <IconChevronleft /> Preview
              </Button>
              <Button
                variant="secondary"
                className="!rounded-[6px] md:!rounded-[8px] h-[40px] bg-white  border-[#E4E7EB]! border"
                onClick={() => setOpen(true)}
              >
                Today
              </Button>
              <Button
                variant="secondary"
                className="!rounded-[6px] md:!rounded-[8px] h-[40px] bg-white  border-[#E4E7EB]! border"
                onClick={() => setOpen(true)}
              >
                Next
                <IconChevronright />
              </Button>
              <button onClick={() => setOpen(true)}>
                <Fluentcard />
              </button>
              <button onClick={() => setOpen(true)}>
                <Tablericon />
              </button>
            </div>
          </div>
        </form> */}
      </div>
    </>
  );
}

export default PlannerMain;
