import React from "react";
import Image from "next/image";
import { Iprops } from "@/components/common/Type";
import StatusBadgeSec from "@/components/common/StatusBadgeSec";
import {
  ActionIocn,
  CalenderBlackSmallIocn,
  ClenderIcon,
  FollowUpIcon,
  GrothTask,
  IssueIcon,
  LocationIcon,
  PartnerIcon,
  PhoneSmallIcon,
  SmallCriticalIcon,
  SmallEyeIcon,
  ViewReportIcon,
} from "@/components/helper/Icon2";
import TableKebabMenu from "@/components/common/TableKebabMenu";
import { PlusIcon } from "lucide-react";
import SmallHeading from "@/components/common/SmallHeading";
import SecondryBtn from "@/components/common/SecondryBtn";
import VisitReportMudal from "./VisitReportMudal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScheduleVisit from "./ScheduleVisit";
import ScheduleFollowUp from "./ScheduleFollowUp";
import { SheetFooter } from "@/components/ui/sheet";
import Assignpartner from "../partner/Assignpartner";
import AssgnPartner from "./AssgnPartner";

interface Issue {
  title: string;
  days: string;
}

interface ActionItem {
  heading: string; // Fixed: was "heading"
  person: string; // Fixed: was "persone"
  para: Array<{
    // Fixed: was "pera"
    strongText: string; // Fixed: was "stronText"
    text: string;
  }>;
}

interface PersonnelInfo {
  name: string;
  phone: string;
  role: string;
}

type SidebarContentProps = {
  user: Iprops;
  onClose: () => void;
};

const SidebarContent: React.FC<SidebarContentProps> = ({ user, onClose }) => {
  const row = user.td;

  // Extract data from user object with better error handling
  const salonData = row?.find((item) => item.saloneName)?.saloneName?.[0];
  const subscription = row?.find((item) => item.subscription)?.subscription;
  const nextVisit = row?.find((item) => item.nextVisit)?.nextVisit;
  const lastVisit = row?.find((item) => item.lastVisit)?.lastVisit;
  const feName = row?.find((item) => item.feName)?.feName;
  const rmName = row?.find((item) => item.rmName)?.rmName;
  const tcName = row?.find((item) => item.tcName)?.tcName;

  // Default contact information - ideally this should come from props or API
  const contactInfo = {
    owner: { name: "John Doe", phone: "+91 99999 88888", role: "Owner" },
    manager: { name: "Jane Smith", phone: "+91 77777 66666", role: "Manager" },
    fe: { name: feName || "N/A", phone: "+91 55555 44444", role: "FE" },
    rm: { name: rmName || "N/A", phone: "+91 33333 22222", role: "RM" },
    tc: { name: tcName || "N/A", phone: "+91 11111 00000", role: "TC" },
  };

  // Issues data - should ideally come from props or state management
  const criticalIssues: Issue[] = [
    { title: "Network Down", days: "3 days" },
    { title: "Power Failure", days: "1 day" },
  ];

  const growthIssues: Issue[] = [
    { title: "New Booth Added", days: "10 days" },
    { title: "Client Growth", days: "5 days" },
  ];

  // Action reports data - Fixed property names
  const actionData: ActionItem[] = [
    {
      heading: "Visit on April 10th, 2024", // Fixed: was "heaing"
      person: contactInfo.fe.name, // Fixed: was "persone"
      para: [
        // Fixed: was "pera"
        { strongText: "Overall Score:", text: "30/50" }, // Fixed: was "stronText"
        {
          strongText: "Remarks: ", // Fixed: was "stronText"
          text: "Showed keen interest in CRM and membership features. Demo scheduled.",
        },
      ],
    },
    {
      heading: "Visit on April 15th, 2024", // Fixed: was "heaing"
      person: contactInfo.fe.name, // Fixed: was "persone"
      para: [
        // Fixed: was "pera"
        { strongText: "Overall Score:", text: "35/50" }, // Fixed: was "stronText"
        {
          strongText: "Remarks: ", // Fixed: was "stronText"
          text: "Follow-up completed. Client requested additional features demo.",
        },
      ],
    },
    {
      heading: "Visit on April 20th, 2024", // Fixed: was "heaing"
      person: contactInfo.fe.name, // Fixed: was "persone"
      para: [
        // Fixed: was "pera"
        { strongText: "Overall Score:", text: "42/50" }, // Fixed: was "stronText"
        {
          strongText: "Remarks: ", // Fixed: was "stronText"
          text: "Final presentation delivered. Awaiting decision from management.",
        },
      ],
    },
  ];

  // Condition counts - should come from actual data
  const conditions = [
    { count: "Critical: 6", color: "text-[#F13737]", divider: false },
    { count: "", color: "", divider: true },
    { count: "Growth: 4", color: "text-[#31A553]", divider: false },
    { count: "", color: "", divider: true },
    { count: "Health: 8", color: "text-[#5B14D1]", divider: false },
  ];

  // Menu items for kebab menu
  const menuItems = [
    {
      label: "View as partner",
      extra: <SmallEyeIcon className="w-4 h-4" />,
      onClick: () => console.log("View as partner clicked"),
    },
    {
      label: "View Report",
      extra: <ViewReportIcon className="w-4 h-4" />,
      onClick: () => console.log("View Report clicked"),
    },
    {
      label: "Add Visit",
      extra: <CalenderBlackSmallIocn className="w-4 h-4" />,
      onClick: () => console.log("Add Visit clicked"),
    },
    {
      label: "Add Follow Up",
      extra: <FollowUpIcon className="w-4 h-4" />,
      onClick: () => console.log("Add Follow Up clicked"),
    },
    {
      label: "Add Visit Report",
      extra: <PlusIcon className="w-4 h-4" />,
      onClick: () => console.log("Add Visit Report clicked"),
    },
    {
      label: "Assign Partner",
      extra: <PartnerIcon className="w-4 h-4" />,
      onClick: () => console.log("Assign Partner clicked"),
    },
  ];

  const PersonnelRow: React.FC<{ label: string; info: PersonnelInfo }> = ({
    label,
    info,
  }) => (
    <div className="flex justify-between items-center mt-2 sm:mt-3">
      <p className="text-[#808188] font-medium leading-[142%] -tracking-[0.28px] flex items-center gap-1">
        {label}:
        <span className="font-semibold text-[#030712]">{info.name}</span>
      </p>
      <div className="flex gap-1.5 items-center text-[#030712] font-semibold leading-[142%] -tracking-[0.28px]">
        <PhoneSmallIcon />
        {info.phone}
      </div>
    </div>
  );

  const IssueItem: React.FC<{ issue: Issue }> = ({ issue }) => (
    <div className="flex justify-between text-sm w-full items-center rounded border border-[#E4E7EB] py-1.5 px-3 font-semibold leading-[142%] -tracking-[0.28px]">
      <span>{issue.title}</span>
      <span className="text-[#808188]">{issue.days}</span>
    </div>
  );

  const ActionReport: React.FC<{ action: ActionItem; index: number }> = ({
    action,
    index,
  }) => (
    <div className="border rounded-md md:p-4 p-3 mt-[15px]">
      <div className="flex justify-between gap-1 flex-wrap">
        <SmallHeading title={action.heading} className="!text-sm" />{" "}
        {/* Fixed: was action.heaing */}
        <div className="flex gap-2 items-center font-semibold">
          <Image
            src="/assest/svg/prsone-img.svg"
            width={18}
            height={18}
            alt="person img"
            className="rounded-full"
          />
          <span className="text-[rgba(3,7,18,0.60)] text-xs leading-[200%] -tracking-[0.2px]">
            {action.person} {/* Fixed: was action.persone */}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-[5px]">
        {action.para.map((item, idx /* Fixed: was action.pera */) => (
          <p
            key={`${index}-${idx}`}
            className="text-xs font-medium leading-[140%] -tracking-[0.24px] flex gap-1"
          >
            {item.strongText} {/* Fixed: was item.stronText */}
            <span className="text-[rgba(3,7,18,0.60)]">{item.text}</span>
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Status Header */}
      <div className="md:py-5 py-4 px-6 border-b border-[#E4E7EB]">
        <StatusBadgeSec status={subscription || "Registered"} />
      </div>

      {/* Salon Info Section */}
      <div className="lg:p-5 p-4 border-b border-[#E4E7EB] text-sm">
        <div className="flex justify-between gap-2">
          <div>
            <div className="flex gap-2 md:gap-2.5 items-center text-[#030712]">
              <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] relative rounded-full overflow-hidden bg-gray-200">
                {salonData?.img && (
                  <Image
                    src={salonData.img}
                    alt={`${salonData?.name || "Salon"} image`}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-semibold leading-[125%] lg:text-base text-sm -tracking-[0.32px]">
                  {salonData?.name || "Salon Name"}
                </h3>
                <div className="text-xs text-[#808188] flex items-center gap-1">
                  <LocationIcon />
                  123 Sparkle Ave, Glam City
                </div>
                <div className="text-xs text-[#808188] flex items-center gap-1">
                  <PhoneSmallIcon />
                  55523-32324
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="flex justify-between mt-5">
              {conditions.map((condition, condIndex) => (
                <span
                  key={condIndex}
                  className={`${condition.color} ${
                    condition.divider
                      ? condIndex === 1
                        ? "border-l"
                        : "border-r"
                      : ""
                  } text-xs leading-[166%] border-[#808188] -tracking-[0.24px] font-semibold`}
                >
                  {condition.count}
                </span>
              ))}
            </div>
          </div>

          <TableKebabMenu items={menuItems} />
        </div>

        {/* Visit Schedule */}
        <div className="flex justify-between gap-2 mt-4 text-xs text-[#030712]">
          <div className="px-1.5 py-[3px] border rounded border-[#E4E7EB] flex items-center gap-2 font-semibold leading-[166%] -tracking-[0.24px]">
            <span className="font-semibold">Next Visit:</span>
            {nextVisit || <ScheduleVisit />}
          </div>
          <div className="px-1.5 py-[3px] border rounded border-[#E4E7EB] flex items-center gap-2 font-semibold leading-[166%] -tracking-[0.24px]">
            <span className="font-semibold">Next Follow Up:</span>
            {lastVisit || <ScheduleFollowUp />}
          </div>
        </div>
      </div>

      {/* Additional Details */}
      <div className="border-t lg:p-5 p-4 sm:!text-sm text-xs">
        <SmallHeading title="Additional details" />
        <PersonnelRow label="Owner" info={contactInfo.owner} />
        <PersonnelRow label="Manager" info={contactInfo.manager} />
      </div>

      {/* Assigned Personnel */}
      <div className="border-t lg:p-5 p-4 sm:!text-sm text-xs">
        <SmallHeading title="Assigned Personnel" />
        <PersonnelRow label="FE" info={contactInfo.fe} />
        <PersonnelRow label="RM" info={contactInfo.rm} />
        <PersonnelRow label="TC" info={contactInfo.tc} />
      </div>

      {/* Issues Section */}
      <div className="border-t lg:p-5 p-4">
        <div className="flex items-center gap-2">
          <IssueIcon />
          <SmallHeading title="Issues" />
        </div>

        <Tabs defaultValue="critical" className="w-full mt-3">
          <TabsList className="flex justify-between w-full bg-transparent border-b border-grayE4 !rounded-0 !py-0">
            <TabsTrigger
              value="critical"
              className="flex items-center gap-1 border-b-3 border-t-0 rounded-none border-x-0 border-transparent data-[state=active]:border-[#B751FB] py-2.5 data-[state=active]:text-[#B751FB] text-[#808188] !shadow-none"
            >
              <SmallCriticalIcon />
              Critical ({criticalIssues.length})
            </TabsTrigger>
            <TabsTrigger
              value="growth"
              className="flex items-center gap-1 border-b-3 border-t-0 rounded-none border-x-0 border-transparent data-[state=active]:border-[#B751FB] py-2.5 data-[state=active]:text-[#B751FB] text-[#808188] !shadow-none"
            >
              <GrothTask />
              Growth ({growthIssues.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="critical" className="space-y-2 mt-3">
            {criticalIssues.length > 0 ? (
              criticalIssues.map((issue, idx) => (
                <IssueItem key={`critical-${idx}`} issue={issue} />
              ))
            ) : (
              <p className="text-[#808188] text-sm py-2">
                No critical issues found
              </p>
            )}
          </TabsContent>

          <TabsContent value="growth" className="space-y-2 mt-3">
            {growthIssues.length > 0 ? (
              growthIssues.map((issue, idx) => (
                <IssueItem key={`growth-${idx}`} issue={issue} />
              ))
            ) : (
              <p className="text-[#808188] text-sm py-2">
                No growth opportunities found
              </p>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Action Reports */}
      <div className="border-t lg:p-5 p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <ActionIocn />
            <SmallHeading title="Action Report" />
          </div>
          <ClenderIcon />
        </div>
        {actionData.length > 0 ? (
          actionData.map((action, i) => (
            <ActionReport key={`action-${i}`} action={action} index={i} />
          ))
        ) : (
          <p className="text-[#808188] text-sm py-4">
            No action reports available
          </p>
        )}
      </div>

      {/* Footer */}
      <SheetFooter className="sticky bottom-0 bg-white px-0">
        <div className="px-6 flex justify-end gap-2 pb-3 mt-auto">
          <SecondryBtn title="Cancel" className="w-max" onClick={onClose} />
          <VisitReportMudal />
        </div>
      </SheetFooter>
      <AssgnPartner />
    </div>
  );
};

export default SidebarContent;
