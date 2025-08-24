"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CalenderBlackSmallIocn,
  FollowUpIcon,
  KebabMenuIcon,
  PartnerIcon,
  PlusIcon,
  SmallEyeIcon,
  ViewReportIcon,
} from "../helper/Icon2";
import Addnewvisite from "../pages/partner/Addnewvisite";

// Main menu component
interface KebabMenuCommonProps {
  align?: "start" | "end" | "center" | undefined;
}

const KebabMenucommon: React.FC<KebabMenuCommonProps> = ({ align }) => {
  const [activeSidebar, setActiveSidebar] = useState(null);

  // Function to close active sidebar
  const closeSidebar = () => setActiveSidebar(null);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="!ring-0 h-max">
          <button className={`p-2 rounded`}>
            <KebabMenuIcon />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align={align}
          className="sm:w-[258px] !p-0 flex flex-col gap-[5px]"
        >
          <DropdownMenuItem onClick={() => setActiveSidebar("addnewvisite")}>
            <SmallEyeIcon /> Add New Visit
          </DropdownMenuItem>
          {/* <DropdownMenuItem onClick={() => setActiveSidebar("viewReport")}>
            <ViewReportIcon /> View Report
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveSidebar("addVisit")}>
            <CalenderBlackSmallIocn /> Add Visit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveSidebar("addVisitReport")}>
            <FollowUpIcon /> Add Visit Report
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveSidebar("plusVisitReport")}>
            <PlusIcon /> Add Visit Report
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveSidebar("assignPartner")}>
            <PartnerIcon /> Assign Partner
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Sidebar components */}
      {activeSidebar === "addnewvisite" && (
        <Addnewvisite onClose={closeSidebar} />
      )}
      {activeSidebar === "viewReport" && <ViewReport onClose={closeSidebar} />}
      {activeSidebar === "addVisit" && (
        <AddVisitSidebar onClose={closeSidebar} />
      )}
      {activeSidebar === "addVisitReport" && (
        <AddVisitReportSidebar onClose={closeSidebar} />
      )}
      {activeSidebar === "plusVisitReport" && (
        <AddVisitReportSidebar onClose={closeSidebar} />
      )}
      {activeSidebar === "assignPartner" && (
        <AssignPartnerSidebar onClose={closeSidebar} />
      )}
    </>
  );
};

export default KebabMenucommon;
