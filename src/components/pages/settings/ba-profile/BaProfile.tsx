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
    <div className="h-screen">
      <TopCommon title="Setting" />
      <div className="md:px-5 px-4 lg:px-6 flex justify-center py-5 sm:h-[80%]">
        <div className="w-full  max-w-[545px] my-auto">
          <h3 className="flex items-center gap-1 text-[#030712] text-base font-medium leading-[150%] -tracking-[0.32px]">
            <Link href={"/settings"} className="text-[#808188]">
              Settings
            </Link>
            <span className="mt-1">
              <RightArrowIcon />
            </span>
            <span className="text-[#030712]">BA Profiles</span>
          </h3>
          {baProfileData.map((item, index) => (
            <div key={index} className="mt-5 md:mt-6 lg:mt-8">
              <div className="flex gap-2 md:gap-[15px] items-center border md:p-3 p-2 lg:p-[15px] rounded-[6px] border-[#E4E7EB]">
                <div>
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt="user Profile"
                    className="md:w-[50px] w-[40px]"
                  />
                </div>
                <div>
                  <SmallHeading
                    title={item.name}
                    className="!text-sm lg:!text-base"
                  />
                  <p className="text-[#808188] text-xs md:text-[13px]">
                    {item.jobTitle}
                  </p>
                </div>
              </div>
              <div className="flex md:mt-5 mt-4 lg:mt-6">
                <Tabs defaultValue="personalDetails" className="w-full">
                  <TabsList className="w-full flex !justify-start !bg-transparent h-[30px] lg:h-[36px] border-b overflow-x-auto overflow-y-hidden rounded-none p-0 border-[#E4E7EB]">
                    {item.trigger.map((tab, indextab) => (
                      <TabsTrigger
                        key={indextab}
                        value={tab.value}
                        className={`flex items-center gap-1 text-xs sm:text-sm md:gap-2 text-[#808188] h-[30px] lg:h-[36px] !border-b-[1.5px] md:!border-b-[3px] border-t-0 border-x-0 !rounded-none lg:!px-[23px] md:!px-5 sm:!px-4 !px-3 !shadow-none  data-[state=active]:border-[#B751FB] data-[state=active]:text-[#B751FB]`}
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
                      <div className="flex md:mt-4 lg:mt-[18px]">
                        {/* <span>{data.details}</span>
                          <span>{data.detailsData}</span> */}
                        <table className="w-full">
                          <tbody>
                            {content.data.map((data, dataIndex) => (
                              <tr
                                key={dataIndex}
                                className="border-b w-full text-xs md:text-sm leading-[142%] -tracking-[0.28px]"
                              >
                                <td className="lg:px-5 px-2 sm:px-3 md:px-4 md:py-2 py-1.5 lg:py-3 min-w-[130px] overflow-auto w-[150px] truncate font-medium text-[#808188] max">
                                  {data.details}
                                </td>
                                <td className="lg:px-5 px-2 sm:px-3 md:px-4 md:py-2 py-1.5 lg:py-3 flex items-center gap-1 font-semibold">
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
