import SmallHeading from "@/components/common/SmallHeading";
import TopCommon from "@/components/common/TopCommon";
import { baProfileData } from "@/components/helper/Helper2";
import { ParsoneIcon, RightArrowIcon } from "@/components/helper/Icon2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const tabItems = [
  {},
  //   {
  //     value: "personal",
  //     label: "Personal Details",
  //     icon: <UserIcon className="w-4 h-4" />,
  //     content: (
  //       <div className="space-y-3 text-sm">
  //         <div className="flex gap-2">
  //           <span className="w-28 font-medium">Name:</span>
  //           <span>Wade Warren</span>
  //         </div>
  //         <div className="flex gap-2">
  //           <span className="w-28 font-medium">Gender:</span>
  //           <span>♂ Male</span>
  //         </div>
  //         <div className="flex gap-2">
  //           <span className="w-28 font-medium">Phone no.:</span>
  //           <span>+911233222423</span>
  //         </div>
  //         <div className="flex gap-2">
  //           <span className="w-28 font-medium">Email:</span>
  //           <span>kuldeep@gmail.com</span>
  //         </div>
  //         <div className="flex gap-2">
  //           <span className="w-28 font-medium">Address:</span>
  //           <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     value: "contract",
  //     label: "Contract Details",
  //     icon: <UserIcon className="w-4 h-4" />,
  //     content: <div>Contract details here...</div>,
  //   },
  //   {
  //     value: "incentive",
  //     label: "Incentive",
  //     icon: <UserIcon className="w-4 h-4" />,
  //     content: <div>Incentive details here...</div>,
  //   },
];
function BaProfile() {
  return (
    <div>
      <TopCommon title="Setting" />
      <div className="md:px-5 px-4 lg:px-6 flex justify-center mt-10">
        <div>
          <h3 className="flex items-center gap-1 text-[#030712] text-base font-medium leading-[150%] -tracking-[0.32px]">
            <span className="text-[#808188]">Settings</span>
            <span className="mt-1">
              <RightArrowIcon />
            </span>
            <Link href={""} className="text-[#030712]">
              BA Profiles
            </Link>
          </h3>
          {baProfileData.map((item, index) => (
            <div key={index} className="mt-8">
              <div className="flex gap-[15px] items-center border p-[15px] rounded-[6px] border-[#E4E7EB]">
                <div>
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt="user Profile"
                  />
                </div>
                <div>
                  <SmallHeading title={item.name} className="!text-base" />
                  <p className="text-[#808188]">{item.jobTitle}</p>
                </div>
              </div>
              <div className="flex mt-6">
                <Tabs defaultValue="personalDetails" className="w-full">
                  <TabsList className="w-full flex !bg-transparent border-b rounded-none p-0 border-[#E4E7EB]">
                    {item.trigger.map((tab, indextab) => (
                      <TabsTrigger
                        key={indextab}
                        value={tab.value}
                        className={`flex items-center gap-2 h-[36px] !border-b-[1.5px] md:!border-b-[3px] border-t-0 border-x-0 !rounded-none !px-[23px] !shadow-none  data-[state=active]:border-[#B751FB] data-[state=active]:text-[#B751FB]`}
                      >
                        <ParsoneIcon className="data-[state=active]:fill-[#B751FB]" />
                        {tab.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {item.content.map((content, contentIndex) => (
                    <TabsContent
                      key={contentIndex}
                      value={content.value}
                      className=""
                    >
                      <div className="flex mt-[18px]">
                        {/* <span>{data.details}</span>
                          <span>{data.detailsData}</span> */}
                        <table className="w-full">
                          <tbody>
                            {content.data.map((data, dataIndex) => (
                              <tr
                                key={dataIndex}
                                className="border-b w-full text-sm leading-[142%] -tracking-[0.28px]"
                              >
                                <td className="px-5 py-3 min-w-[130px] overflow-hidden font-medium text-[#808188]">
                                  {data.details}
                                </td>
                                <td className="px-5 py-3 flex items-center gap-1 font-semibold">
                                  <span>{data.icon}</span>
                                  {data.detailsData}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BaProfile;
