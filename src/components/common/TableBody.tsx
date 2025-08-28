import React, { JSX } from "react";
import Image from "next/image"; // ya jo bhi aap image component use kar rahe ho
import {
  CalenderBlackSmallIocn,
  FollowUpIcon,
  GreenRightIcon,
  PartnerIcon,
  RedWrongtIcon,
  SmallEyeIcon,
  VenueIcon,
  ViewReportIcon,
} from "../helper/Icon2";
import StatusBadge from "./StatusBadge";
import TableKebabMenu from "./TableKebabMenu";
import { PlusIcon } from "lucide-react";
import NewStatusbadge from "./NewStatusbadge";

type SaloneName = {
  img: string;
  name: string;
  subtext?: string;
};

type Issue = {
  issu1: string;
  issu2: string;
};

type dateTime = {
  date?: string;
  time?: string;
};
type work = {
  work?: string;
  workCount?: string;
};
type appointmentId = {
  icon?: React.ReactNode;
  id?: string;
};

type Td = {
  saloneName?: SaloneName[];
  add?: string;
  health?: string;
  issue?: Issue[];
  staff?: string;
  onboarding?: string;
  bankAcc?: string;
  monthlyTarget?: string;
  subscription?: string;
  status?: string;
  lastVisit?: string;
  nextVisit?: string;
  tcName?: string;
  rmName?: string;
  feName?: string;
  action?: React.ReactNode | React.ReactNode[];
  tdData?: string | number | JSX.Element;
  dateTime?: dateTime[];
  work?: work[];
  appointmentId?: appointmentId[];
  venue?: string;
};

type Iprops = {
  id: number;
  td: Td[];
};

type TableData = {
  body: Iprops[];
  selectedUser?: Iprops | null;
  setSelectedUser?: (user: Iprops) => void;
  setOpen?: (val: boolean) => void;
  className?: string;
};

const TableBody: React.FC<TableData> = ({
  body,
  selectedUser,
  setSelectedUser,
  setOpen,
  className,
}) => {
  return (
    <tbody>
      {body.map((bodyitems) => (
        <tr
          key={bodyitems.id}
          className={`hover:bg-[#F1DCFF] border-y border-[#D9DDE3] text-[#030712] ${
            selectedUser?.id === bodyitems.id ? "bg-[#F1DCFF]" : ""
          }`}
        >
          {bodyitems.td.map((tdItem, tdIndex) => (
            <td
              onClick={() => {
                setSelectedUser?.(bodyitems);
                setOpen?.(true);
              }}
              key={tdIndex}
              className={`md:px-3 font-semibold px-1 sm:px-2 py-2 min-h-[45px] md:min-h-[52px] truncate max-w-[200px] text-sm ${className}`}
            >
              {/* appointnment id */}
              {tdItem.appointmentId?.map((appoint, dtIndex) => (
                <div key={dtIndex} className="flex items-center gap-6">
                  <span>{appoint.icon}</span>
                  <span>{appoint.id}</span>
                </div>
              ))}
              {/* work */}
              {tdItem.work?.map((work, dtIndex) => (
                <div key={dtIndex} className="flex items-center gap-1.5">
                  <span className="bg-[#F3F4F6] border-[0.5px] border-[#EBECF0] rounded-[100px] px-2 py-[3px]">
                    {work.work}
                  </span>
                  <span className="bg-[#F3F4F6] border-[0.5px] border-[#EBECF0] rounded-[100px] px-2 py-[3px]">
                    {work.workCount}
                  </span>
                </div>
              ))}
              {/* date time */}
              {tdItem.dateTime?.map((dt, dtIndex) => (
                <div key={dtIndex} className="flex flex-col gap-0.5">
                  <span>{dt.date}</span>
                  <span className="text-[#808188] font-medium text-xs">
                    {dt.time}
                  </span>
                </div>
              ))}

              {/* Salon name */}
              {tdItem.saloneName?.map((salon, saloneIndex) => (
                <div key={saloneIndex} className="flex items-center gap-2">
                  <Image src={salon.img} width={20} height={20} alt="img" />
                  <div className="flex flex-col gap-0.5">
                    <span>{salon.name}</span>
                    <span className="text-[#808188] font-medium text-xs">
                      {salon.subtext}
                    </span>
                  </div>
                </div>
              ))}
              {/* Address */}
              {tdItem.add && <span>{tdItem.add}</span>}
              {tdItem.venue && (
                <div className="flex items-center gap-1">
                  <VenueIcon />
                  {tdItem.venue}
                </div>
              )}

              {/* Health */}
              {tdItem.health && <span>{tdItem.health}</span>}

              {/* Issues */}
              {tdItem.issue?.map((issue, issueIndex) => (
                <div
                  key={issueIndex}
                  className="md:px-3 px-1 sm:px-2 py-2 sm:py-3 md:py-3 lg:py-4"
                >
                  <div className="flex gap-2 text-[10px] text-[rgba(3,7,18,0.70)]">
                    <span className="w-[20px] h-[20px] rounded-full border border-[#F00] bg-[rgba(255,136,136,0.34)] flex justify-center items-center">
                      {issue.issu1}
                    </span>
                    <span className="w-[20px] h-[20px] rounded-full border bg-[#F3CED6] border-[#F5640A] flex justify-center items-center">
                      {issue.issu2}
                    </span>
                  </div>
                </div>
              ))}

              {/* Staff */}
              {tdItem.staff && <span>{tdItem.staff}</span>}

              {/* Boolean icons */}
              {tdItem?.onboarding && (
                <span>
                  {tdItem.onboarding === "true" ? (
                    <GreenRightIcon />
                  ) : (
                    <RedWrongtIcon />
                  )}
                </span>
              )}
              {tdItem.bankAcc && (
                <span>
                  {tdItem.bankAcc === "true" ? (
                    <GreenRightIcon />
                  ) : (
                    <RedWrongtIcon />
                  )}
                </span>
              )}
              {tdItem.monthlyTarget && (
                <span>
                  {tdItem.monthlyTarget === "true" ? (
                    <GreenRightIcon />
                  ) : (
                    <RedWrongtIcon />
                  )}
                </span>
              )}

              {/* Subscription status */}
              {tdItem.subscription && (
                <span>
                  <StatusBadge status={tdItem.subscription} />
                </span>
              )}

              {tdItem.status && (
                <span>
                  <NewStatusbadge status={tdItem.status} />
                </span>
              )}

              {/* Other strings */}
              {tdItem.lastVisit && <span>{tdItem.lastVisit}</span>}
              {tdItem.nextVisit && <span>{tdItem.nextVisit}</span>}
              {tdItem.tcName && <span>{tdItem.tcName}</span>}
              {tdItem.rmName && <span>{tdItem.rmName}</span>}
              {tdItem.feName && <span>{tdItem.feName}</span>}

              {/* Actions */}
              {tdItem.action && (
                <div>
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
                        onClick: () => {
                          setSelectedUser?.(bodyitems);
                          setOpen?.(true);
                        },
                      },
                      {
                        label: "Assign Partner",
                        extra: <PartnerIcon className="w-4 h-4" />,
                      },
                    ]}
                  />
                </div>
              )}
              {tdItem.tdData && <span>{tdItem.tdData}</span>}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
