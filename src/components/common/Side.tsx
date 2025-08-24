import React from "react";
import Image from "next/image";
import {
  SmallEyeIcon,
  ViewReportIcon,
  CalenderBlackSmallIocn,
  FollowUpIcon,
  PlusIcon,
  PartnerIcon,
  PhoneSmallIcon,
  IssueIcon,
  SmallCriticalIcon,
  GrothTask,
} from "../helper/Icon2";
import TableKebabMenu from "./TableKebabMenu";
import SmallHeading from "./SmallHeading";
import SecondryBtn from "./SecondryBtn";
import VisitReportMudal from "../pages/insights/VisitReportMudal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import StatusBadgeSec from "./StatusBadgeSec";
import { Iprops } from "./Type";

type SidebarContentProps = {
  user: Iprops;
  onClose: () => void;
};

const SidebarContent: React.FC<SidebarContentProps> = ({ user, onClose }) => {
  const row = user.td;

  const salonData = row.find((item) => item.saloneName)?.saloneName?.[0];
  const subscription = row.find((item) => item.subscription)?.subscription;
  const nextVisit = row.find((item) => item.nextVisit)?.nextVisit;
  const lastVisit = row.find((item) => item.lastVisit)?.lastVisit;
  const feName = row.find((item) => item.feName)?.feName;
  const rmName = row.find((item) => item.rmName)?.rmName;
  const tcName = row.find((item) => item.tcName)?.tcName;

  // Placeholder data for additional details
  const ownerName = "John Doe";
  const ownerNo = "+91 99999 88888";
  const manager = "Jane Smith";
  const managerNo = "+91 77777 66666";
  const feNo = "+91 55555 44444";
  const rmNo = "+91 33333 22222";
  const tcNo = "+91 11111 00000";

  const criticalIssues = [
    { title: "Network Down", days: "3 days" },
    { title: "Power Failure", days: "1 day" },
  ];

  const growthIssues = [
    { title: "New Booth Added", days: "10 days" },
    { title: "Client Growth", days: "5 days" },
  ];

  const actionData = [
    {
      heaing: "Assigned FE",
      persone: feName || "N/A",
      pera: [
        { stronText: "Email: ", text: "fe@example.com" },
        { stronText: "Phone: ", text: feNo },
      ],
    },
    {
      heaing: "Assigned RM",
      persone: rmName || "N/A",
      pera: [
        { stronText: "Email: ", text: "rm@example.com" },
        { stronText: "Phone: ", text: rmNo },
      ],
    },
    {
      heaing: "Assigned TC",
      persone: tcName || "N/A",
      pera: [
        { stronText: "Email: ", text: "tc@example.com" },
        { stronText: "Phone: ", text: tcNo },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full pb-3">
      <div className="md:py-5 py-4 px-6 border-b border-[#E4E7EB]">
        <StatusBadgeSec status={subscription || "registered"} />
      </div>

      <div className="lg:p-5 p-4  border-b border-[#E4E7EB]">
        <div className="flex justify-between gap-2">
          <div>
            <div className="flex gap-2 md:gap-2.5 items-center text-[#030712]">
              <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px] relative rounded-full overflow-hidden bg-gray-200">
                {salonData ? (
                  <Image src={salonData.img} alt="studio img" fill />
                ) : null}
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-semibold leading-[125%] lg:text-base text-sm -tracking-[0.32px]">
                  {salonData?.name || "Salon Name"}
                </h3>
                <div className="text-xs text-[#808188]">
                  Next Visit: {nextVisit || "N/A"}
                </div>
                <div className="text-xs text-[#808188]">
                  Last Visit: {lastVisit || "N/A"}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-5 text-xs text-[#808188]">
              <span>Owner: {ownerName}</span>
              <span>Manager: {manager}</span>
            </div>
          </div>

          <TableKebabMenu
            items={[
              {
                label: "View as partner",
                extra: <SmallEyeIcon className="w-4 h-4" />,
              },
              {
                label: "View Report",
                extra: <ViewReportIcon className="w-4 h-4" />,
              },
              {
                label: "Add Visit",
                extra: <CalenderBlackSmallIocn className="w-4 h-4" />,
              },
              {
                label: "Add Follow Up",
                extra: <FollowUpIcon className="w-4 h-4" />,
              },
              {
                label: "Add Visit Report",
                extra: <PlusIcon className="w-4 h-4" />,
                onClick: () => alert("Add Visit Report clicked"),
              },
              {
                label: "Assign Partner",
                extra: <PartnerIcon className="w-4 h-4" />,
              },
            ]}
          />
        </div>

        <div className="flex justify-between gap-2 mt-4 text-xs text-[#030712]">
          <div className="px-1.5 py-[3px] border rounded border-[#E4E7EB] flex items-center gap-1 font-semibold leading-[166%] -tracking-[0.24px]">
            <span className="text-[#808188] font-normal">Next Visit</span>
            {nextVisit || "N/A"}
          </div>
          <div className="px-1.5 py-[3px] border rounded border-[#E4E7EB] flex items-center gap-1 font-semibold leading-[166%] -tracking-[0.24px]">
            <span className="text-[#808188] font-normal">Next Follow Up:</span>
            {lastVisit || "N/A"}
          </div>
        </div>
      </div>

      <div className="border-t lg:p-5 p-4 text-sm">
        <SmallHeading title="Additional details" />
        <div className="flex justify-between items-center mt-2 sm:mt-3">
          <p className="text-[#808188] text-sm font-medium leading-[142%] -tracking-[0.28px]">
            Owner:{" "}
            <span className="font-semibold text-[#030712]">{ownerName}</span>
          </p>
          <div className="flex gap-1.5 items-center text-[#030712] font-semibold leading-[142%] -tracking-[0.28px]">
            <PhoneSmallIcon />
            {ownerNo}
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 sm:mt-3">
          <p className="text-[#808188] font-medium leading-[142%] -tracking-[0.28px]">
            Manager:{" "}
            <span className="font-semibold text-[#030712]">{manager}</span>
          </p>
          <div className="flex gap-1.5 items-center text-[#030712] font-semibold leading-[142%] -tracking-[0.28px]">
            <PhoneSmallIcon />
            {managerNo}
          </div>
        </div>
      </div>

      <div className="border-t lg:p-5 p-4">
        <SmallHeading title="Assigned Personnel" />
        {actionData.map((action, i) => (
          <div key={i} className="border rounded-md md:p-4 p-3 mt-3">
            <div className="flex justify-between gap-1 flex-wrap">
              <SmallHeading title={action.heaing} className="!text-sm" />
              <div className="flex gap-2 items-center font-semibold">
                <Image
                  src="/assest/svg/prsone-img.svg"
                  width={18}
                  height={18}
                  alt="person img"
                  className="rounded-full"
                />
                <span className="text-[rgba(3,7,18,0.60)] text-xs leading-[200%] -tracking-[0.2px]">
                  {action.persone}
                </span>
              </div>
            </div>
            {action.pera.map((pera, idx) => (
              <p
                key={idx}
                className="text-xs font-medium leading-[140%] -tracking-[0.24px]"
              >
                <span>{pera.stronText}</span>
                <span className="text-[rgba(3,7,18,0.60)]">{pera.text}</span>
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t lg:p-5 p-4">
        <div className="flex items-center gap-2">
          <IssueIcon />
          <SmallHeading title="Issues" />
        </div>

        <Tabs defaultValue="critical" className="w-full mt-3">
          <TabsList className="flex justify-between w-full bg-transparent">
            <TabsTrigger
              value="critical"
              className="flex items-center gap-1 border-b-0 border-t-0 rounded-none border-x-0 border-transparent data-[state=active]:border-[#B751FB] shadow-none py-2.5 data-[state=active]:text-[#B751FB] text-[#808188]"
            >
              <SmallCriticalIcon />
              Critical
            </TabsTrigger>
            <TabsTrigger
              value="growth"
              className="flex items-center gap-1 border-b-0 border-t-0 rounded-none border-x-0 border-transparent data-[state=active]:border-[#B751FB] shadow-none py-2.5 data-[state=active]:text-[#B751FB] text-[#808188]"
            >
              <GrothTask />
              Growth
            </TabsTrigger>
          </TabsList>

          <TabsContent value="critical" className="space-y-2 mt-3">
            {criticalIssues.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between text-sm w-full items-center rounded border border-[#E4E7EB] py-1.5 px-3 font-semibold leading-[142%] -tracking-[0.28px]"
              >
                <span>{item.title}</span>
                <span className="text-[#808188]">{item.days}</span>
              </div>
            ))}
          </TabsContent>

          <TabsContent value="growth" className="space-y-2 mt-3">
            {growthIssues.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center rounded border border-[#E4E7EB] py-1.5 px-3 font-semibold leading-[142%] -tracking-[0.28px]"
              >
                <span>{item.title}</span>
                <span className="text-[#808188]">{item.days}</span>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>

      <div className="px-6 flex justify-end gap-2 pb-3 mt-auto">
        <SecondryBtn title="Cancel" className="w-max" onClick={onClose} />
        <VisitReportMudal />
      </div>
    </div>
  );
};

export default SidebarContent;
