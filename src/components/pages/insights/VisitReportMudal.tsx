// import { Dialog } from '';
"use client";
import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { mudalData } from "@/components/helper/Helper2";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CataLogStaff,
  ClenderIcon,
  ClientIcon,
  OfferTockenIcon,
  PromoteIcon,
  SetUpIcon,
  SubmitIcon,
  TimeOutIcon,
} from "@/components/helper/Icon2";
import SmallHeading from "@/components/common/SmallHeading";
import VisitReportTable from "@/components/common/VisitReportTable";
import CustomSlider from "@/components/common/CustomSlider";
import Remark from "@/components/common/Remark";

function VisitReportMudal() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpenDate = () => {
    inputRef.current?.showPicker();
  };

  return (
    <div>
      {" "}
      <Dialog>
        <DialogTrigger className="bg-[#B751FB] sm:px-3 px-2  lg:px-4 md:py-2 py-1 lg:py-2.5 text-center cursor-pointer rounded md:rounded-[6px] shadow-[0_1px_4px_0_rgba(3,7,18,0.08)] border border-[#B751FB] text-[#fff] text-xs sm:text-sm font-semibold leading-[142.857%] -tracking-[0.28px]">
          Open Modal
        </DialogTrigger>
        {mudalData.map((item, index) => (
          <DialogContent
            key={index}
            className="p-0 !w-[90%]"
          >
            <DialogHeader className="px-4 py-5">
              <DialogTitle>Visit Report</DialogTitle>
            </DialogHeader>
            <div className="border-t">
              <Tabs
                defaultValue={"listVisit"}
                className="w-full !bg-[transparent] "
              >
                <div className="flex w-full">
                  <div className="bg-[#F9FAFB] border-r min-w-[300px]">
                    <div className="pt-5 ps-6 pb-[30px] pe-[30px] ">
                      <div className="flex gap-2.5 items-center text-[#030712]">
                        <div>
                          <Image
                            src={item.img}
                            width={70}
                            height={70}
                            alt="studio img"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <h3 className="font-semibold leading-[125%] text-sm -tracking-[0.32px]">
                            {item.name}
                          </h3>
                          {item.contacte.map((contact, contIndex) => (
                            <Link
                              key={contIndex}
                              href={contact.path}
                              className="flex items-center gap-1 text-xs"
                            >
                              <span>{contact.icon}</span>
                              <span>{contact.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between mt-5 ">
                        {item.condetions.map((condetionItem, condIndex) => (
                          <span
                            key={condIndex}
                            className={` ${
                              condIndex === 0
                                ? "text-[#F13737]  "
                                : condIndex === 2
                                ? "text-[#31A553]"
                                : "text-[#5B14D1] "
                            } ${
                              condIndex === 1
                                ? "border-l"
                                : condIndex === 3
                                ? "border-r"
                                : ""
                            } text-xs leading-[166%] border-[#808188] -tracking-[0.24px] font-semibold`}
                          >
                            {condetionItem.count}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <TabsList className="flex !items-start !h-max  !flex-col !bg-transparent w-full !p-0">
                        <TabsTrigger
                          value={"lastVisit"}
                          className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
                        >
                          <TimeOutIcon />
                          Last Visit Summary
                        </TabsTrigger>
                        <TabsTrigger
                          value={"catalogStaff"}
                          className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
                        >
                          <CataLogStaff />
                          Catalog & Staff
                        </TabsTrigger>
                        <TabsTrigger
                          value={"offers"}
                          className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
                        >
                          <OfferTockenIcon />
                          Offer
                        </TabsTrigger>
                        <TabsTrigger
                          value={"promoteUse"}
                          className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
                        >
                          <PromoteIcon />
                          Promote Usage
                        </TabsTrigger>
                        <TabsTrigger
                          value={"clientEngagement"}
                          className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
                        >
                          <ClientIcon />
                          Client Enagagement
                        </TabsTrigger>
                        <TabsTrigger
                          value={"setUp"}
                          className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
                        >
                          <SetUpIcon />
                          Set Up
                        </TabsTrigger>
                        <TabsTrigger
                          value={"submit"}
                          className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
                        >
                          <SubmitIcon />
                          Submit
                        </TabsTrigger>
                      </TabsList>
                    </div>
                  </div>

                  <div className="w-full">
                    {item.lastVisitCotent.map((visit, visitInde) => (
                      <TabsContent
                        key={visitInde}
                        value={"lastVisit"}
                        className="px-6 pt-[30px]"
                      >
                        <div>
                          <SmallHeading
                            title={visit.heading}
                            className="!text-base"
                          />
                          <div className="flex gap-2 mt-2.5 flex-col">
                            {visit.data.map((dataItem, dataIndex) => (
                              <p
                                key={dataIndex}
                                className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]"
                              >
                                {dataItem.icon}
                                <span>
                                  <span className="text-[#030712] font-medium">
                                    {dataItem.title}
                                  </span>
                                   
                                  <span className="text-[rgba(3,7,18,0.70)]">
                                    {dataItem.titleData}
                                  </span>
                                </span>
                              </p>
                            ))}
                          </div>
                          <div className="overflow-auto mt-5 border border-gray-200 rounded-[6px] mb-10">
                            <VisitReportTable data={visit.tableData} />
                          </div>
                          <form className="flex justify-between gap-10">
                            {visit.date.map((dateItem, dateIndex) => (
                              <div key={dateIndex} className="w-full">
                                <label htmlFor={dateItem.id}>
                                  <SmallHeading title={dateItem.heading} />
                                </label>
                                <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
                                  <input
                                    type="date"
                                    id={dateItem.id}
                                    ref={inputRef}
                                    placeholder="Pick a date"
                                    className="outline-none"
                                  />
                                  <div onClick={handleOpenDate}>
                                    <ClenderIcon />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </form>
                        </div>
                      </TabsContent>
                    ))}
                    {item.catalogStaff.map((staffItem, staffIndex) => (
                      <TabsContent
                        key={staffIndex}
                        value={"catalogStaff"}
                        className="px-6 pt-[30px]"
                      >
                        <div>
                          <SmallHeading
                            title={staffItem.heading}
                            className="!text-base"
                          />
                          <div className="flex gap-2 mt-2.5 flex-col">
                            {staffItem.data.map((dataItem, dataIndex) => (
                              <p
                                key={dataIndex}
                                className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]"
                              >
                                {dataItem.icon}
                                <span>
                                  <span className="text-[#030712] font-medium">
                                    {dataItem.title}
                                  </span>
                                   
                                  <span className="text-[rgba(3,7,18,0.70)]">
                                    {dataItem.titleData}
                                  </span>
                                </span>
                              </p>
                            ))}
                            <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] mb-10">
                              {staffItem.tableData.map((itm, idx) => (
                                <table
                                  key={idx}
                                  className="w-full border-collapse text-sm"
                                >
                                  <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                    <tr>
                                      {itm.th.map((thItm, thIndex) => (
                                        <th
                                          key={thIndex}
                                          className="px-6 py-2 text-left !font-semibold"
                                        >
                                          {thItm.th}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
                                    {(() => {
                                      const lastRowIndex = itm.tdRow.length - 1; // 👈 yaha define karein

                                      return itm.tdRow.map(
                                        (tdItm, tdRowIndex) => (
                                          <tr
                                            key={tdRowIndex}
                                            className="border-y border-[#E4E7EB]"
                                          >
                                            {tdItm.td.map((tdItem, tdindex) => (
                                              <td
                                                key={tdindex}
                                                className={`px-6 py-4 text-nowrap ${
                                                  tdindex === 2
                                                    ? tdRowIndex === 0 ||
                                                      tdRowIndex ===
                                                        lastRowIndex
                                                      ? "text-[#f00]" // red for first & last row in column 2
                                                      : "text-[#31A553]" // green for other rows in column 2
                                                    : "text-black" // black for all other columns
                                                }`}
                                              >
                                                {tdItem.td}
                                              </td>
                                            ))}
                                          </tr>
                                        )
                                      );
                                    })()}
                                  </tbody>
                                </table>
                              ))}
                            </div>
                            <form action="">
                              <SmallHeading
                                title="Rate salon on catalog & staff performance"
                                className="!text-xl"
                              />
                              <CustomSlider />
                              <Remark />
                            </form>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                    {item.offers.map((offerItem, offerIndex) => (
                      <TabsContent
                        key={offerIndex}
                        value={"offers"}
                        className="px-6 pt-[30px]"
                      >
                        <div>
                          <SmallHeading
                            title={offerItem.heading}
                            className="!text-base"
                          />
                          <div className="flex gap-2 mt-2.5 flex-col">
                            {offerItem.data.map((dataItem, dataIndex) => (
                              <p
                                key={dataIndex}
                                className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]"
                              >
                                {dataItem.icon}
                                <span>
                                  <span className="text-[#030712] font-medium">
                                    {dataItem.title}
                                  </span>
                                   
                                  <span className="text-[rgba(3,7,18,0.70)]">
                                    {dataItem.titleData}
                                  </span>
                                </span>
                              </p>
                            ))}
                            <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] mb-10">
                              {offerItem.tableData.map((itm, idx) => (
                                <table
                                  key={idx}
                                  className="w-full border-collapse text-sm"
                                >
                                  <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                    <tr>
                                      {itm.th.map((thItm, thIndex) => (
                                        <th
                                          key={thIndex}
                                          className="px-6 py-2 text-left !font-semibold"
                                        >
                                          {thItm.th}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
                                    {(() => {
                                      return itm.tdRow.map(
                                        (tdItm, tdRowIndex) => (
                                          <tr
                                            key={tdRowIndex}
                                            className="border-y border-[#E4E7EB]"
                                          >
                                            {tdItm.td.map((tdItem, tdindex) => (
                                              <td
                                                key={tdindex}
                                                className={`px-6 py-4 text-nowrap ${
                                                  tdindex === 2
                                                    ? tdRowIndex === 0
                                                      ? "text-[#f00]" // red for first & last row in column 2
                                                      : "text-[#31A553]" // green for other rows in column 2
                                                    : "text-black" // black for all other columns
                                                }`}
                                              >
                                                {tdItem.td}
                                              </td>
                                            ))}
                                          </tr>
                                        )
                                      );
                                    })()}
                                  </tbody>
                                </table>
                              ))}
                            </div>
                            <form action="">
                              <SmallHeading
                                title="Rate salon on catalog & staff performance"
                                className="!text-xl"
                              />
                              <CustomSlider />
                              <Remark />
                            </form>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                    {item.promoteUse.map((promoteItems, promoteIndex) => (
                      <TabsContent
                        key={promoteIndex}
                        value={"promoteUse"}
                        className="px-6 pt-[30px]"
                      >
                        <div>
                          <SmallHeading
                            title={promoteItems.heading}
                            className="!text-base"
                          />
                          <div className="flex gap-2 mt-2.5 flex-col">
                            {promoteItems.data.map((dataItem, dataIndex) => (
                              <p
                                key={dataIndex}
                                className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]"
                              >
                                {dataItem.icon}
                                <span>
                                  <span className="text-[#030712] font-medium">
                                    {dataItem.title}
                                  </span>
                                   
                                  <span className="text-[rgba(3,7,18,0.70)]">
                                    {dataItem.titleData}
                                  </span>
                                </span>
                              </p>
                            ))}
                            <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] mb-10">
                              {promoteItems.tableData.map((itm, idx) => (
                                <table
                                  key={idx}
                                  className="w-full border-collapse text-sm"
                                >
                                  <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                    <tr>
                                      {itm.th.map((thItm, thIndex) => (
                                        <th
                                          key={thIndex}
                                          className="px-6 py-2 text-left !font-semibold"
                                        >
                                          {thItm.th}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
                                    {(() => {
                                      const lastRowIndex = itm.tdRow.length - 2; // 👈 yaha define karein

                                      return itm.tdRow.map(
                                        (tdItm, tdRowIndex) => (
                                          <tr
                                            key={tdRowIndex}
                                            className="border-y border-[#E4E7EB]"
                                          >
                                            {tdItm.td.map((tdItem, tdindex) => (
                                              <td
                                                key={tdindex}
                                                className={`px-6 py-4 text-nowrap ${
                                                  tdindex === 2
                                                    ? tdRowIndex === 0 ||
                                                      tdRowIndex ===
                                                        lastRowIndex
                                                      ? "text-[#f00]" // red for first & last row in column 2
                                                      : "text-[#31A553]" // green for other rows in column 2
                                                    : "text-black" // black for all other columns
                                                }`}
                                              >
                                                {tdItem.td}
                                              </td>
                                            ))}
                                          </tr>
                                        )
                                      );
                                    })()}
                                  </tbody>
                                </table>
                              ))}
                            </div>
                            <form action="">
                              <SmallHeading
                                title="Rate salon on catalog & staff performance"
                                className="!text-xl"
                              />
                              <CustomSlider />
                              <Remark />
                            </form>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                    {item.clientEnagagement.map((cleintItem, clientIndex) => (
                      <TabsContent
                        key={clientIndex}
                        value={"clientEngagement"}
                        className="px-6 pt-[30px]"
                      >
                        <div>
                          <SmallHeading
                            title={cleintItem.heading}
                            className="!text-base"
                          />
                          <div className="flex gap-2 mt-2.5 flex-col">
                            {cleintItem.data.map((dataItem, dataIndex) => (
                              <p
                                key={dataIndex}
                                className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]"
                              >
                                {dataItem.icon}
                                <span>
                                  <span className="text-[#030712] font-medium">
                                    {dataItem.title}
                                  </span>
                                   
                                  <span className="text-[rgba(3,7,18,0.70)]">
                                    {dataItem.titleData}
                                  </span>
                                </span>
                              </p>
                            ))}
                            <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] mb-10">
                              {cleintItem.tableData.map((itm, idx) => (
                                <table
                                  key={idx}
                                  className="w-full border-collapse text-sm"
                                >
                                  <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                    <tr>
                                      {itm.th.map((thItm, thIndex) => (
                                        <th
                                          key={thIndex}
                                          className="px-6 py-2 text-left !font-semibold"
                                        >
                                          {thItm.th}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
                                    {(() => {
                                      const lastRowIndex = itm.tdRow.length - 1; // 👈 yaha define karein
                                      const lastFourth = itm.tdRow.length - 4; // 👈 yaha define karein

                                      return itm.tdRow.map(
                                        (tdItm, tdRowIndex) => (
                                          <tr
                                            key={tdRowIndex}
                                            className="border-y border-[#E4E7EB]"
                                          >
                                            {tdItm.td.map((tdItem, tdindex) => (
                                              <td
                                                key={tdindex}
                                                className={`px-6 py-4 text-nowrap ${
                                                  tdindex === 2
                                                    ? tdRowIndex === 0 ||
                                                      tdRowIndex ===
                                                        lastRowIndex
                                                      ? "text-[#f00]" // red for first & last row in column 2
                                                      : "text-[#31A553]" // green for other rows in column 2
                                                    : "text-black" // black for all other columns
                                                } ${
                                                  tdindex === 2
                                                    ? tdRowIndex === 0 ||
                                                      tdRowIndex === lastFourth
                                                      ? "text-[#f00]" // red for first & last row in column 2
                                                      : "text-[#31A553]" // green for other rows in column 2
                                                    : "text-black"
                                                }`}
                                              >
                                                {tdItem.td}
                                              </td>
                                            ))}
                                          </tr>
                                        )
                                      );
                                    })()}
                                  </tbody>
                                </table>
                              ))}
                            </div>
                            <form action="">
                              <SmallHeading
                                title="Rate salon on catalog & staff performance"
                                className="!text-xl"
                              />
                              <CustomSlider />
                              <Remark />
                            </form>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                    {item.setUp.map((setIPItem, setUpIndex) => (
                      <TabsContent
                        key={setUpIndex}
                        value={"setUp"}
                        className="px-6 pt-[30px]"
                      >
                        <div>
                          <SmallHeading
                            title={setIPItem.heading}
                            className="!text-base"
                          />
                          <div className="flex gap-2 mt-2.5 flex-col">
                            {setIPItem.data.map((dataItem, dataIndex) => (
                              <p
                                key={dataIndex}
                                className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]"
                              >
                                {dataItem.icon}
                                <span>
                                  <span className="text-[#030712] font-medium">
                                    {dataItem.title}
                                  </span>
                                   
                                  <span className="text-[rgba(3,7,18,0.70)]">
                                    {dataItem.titleData}
                                  </span>
                                </span>
                              </p>
                            ))}
                            <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] mb-10">
                              {setIPItem.tableData.map((itm, idx) => (
                                <table
                                  key={idx}
                                  className="w-full border-collapse text-sm"
                                >
                                  <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                    <tr>
                                      {itm.th.map((thItm, thIndex) => (
                                        <th
                                          key={thIndex}
                                          className="px-6 py-2 text-left !font-semibold"
                                        >
                                          {thItm.th}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
                                    {(() => {
                                      const lastRowIndex = itm.tdRow.length - 1; // 👈 yaha define karein
                                      const lastFourth = itm.tdRow.length - 4; // 👈 yaha define karein

                                      return itm.tdRow.map(
                                        (tdItm, tdRowIndex) => (
                                          <tr
                                            key={tdRowIndex}
                                            className="border-y border-[#E4E7EB]"
                                          >
                                            {tdItm.td.map((tdItem, tdindex) => (
                                              <td
                                                key={tdindex}
                                                className={`px-6 py-4 text-nowrap ${
                                                  tdindex === 2
                                                    ? tdRowIndex === 0 ||
                                                      tdRowIndex ===
                                                        lastRowIndex
                                                      ? "text-[#f00]" // red for first & last row in column 2
                                                      : "text-[#31A553]" // green for other rows in column 2
                                                    : "text-black" // black for all other columns
                                                } ${
                                                  tdindex === 2
                                                    ? tdRowIndex === 0 ||
                                                      tdRowIndex === lastFourth
                                                      ? "text-[#f00]" // red for first & last row in column 2
                                                      : "text-[#31A553]" // green for other rows in column 2
                                                    : "text-black"
                                                }`}
                                              >
                                                {tdItem.td}
                                              </td>
                                            ))}
                                          </tr>
                                        )
                                      );
                                    })()}
                                  </tbody>
                                </table>
                              ))}
                            </div>
                            <form action="">
                              <SmallHeading
                                title="Rate salon on catalog & staff performance"
                                className="!text-xl"
                              />
                              <CustomSlider />
                              <Remark />
                            </form>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                    {item.submit.map((submiItem, sumitIndex) => (
                      <TabsContent
                        key={sumitIndex}
                        value={"submit"}
                        className="px-6 pt-[30px]"
                      >
                        <div>
                          <SmallHeading
                            title={submiItem.heading}
                            className="!text-base"
                          />
                          <div className="flex gap-2 mt-2.5 flex-col">
                            {submiItem.data.map((dataItem, dataIndex) => (
                              <p
                                key={dataIndex}
                                className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]"
                              >
                                {dataItem.icon}
                                <span>
                                  <span className="text-[#030712] font-medium">
                                    {dataItem.title}
                                  </span>
                                   
                                  <span className="text-[rgba(3,7,18,0.70)]">
                                    {dataItem.titleData}
                                  </span>
                                </span>
                              </p>
                            ))}

                            <form action="">
                              <Remark />
                              <div className="flex justify-between gap-10">
                                {submiItem.date.map((dateItem, dateIndex) => (
                                  <div key={dateIndex} className="w-full">
                                    <label htmlFor={dateItem.id}>
                                      <SmallHeading title={dateItem.heading} />
                                    </label>
                                    <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
                                      <input
                                        type="date"
                                        id={dateItem.id}
                                        ref={inputRef}
                                        value={"Pick a date"}
                                        placeholder="Pick a date"
                                        className="outline-none"
                                      />
                                      <div onClick={handleOpenDate}>
                                        <ClenderIcon />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </form>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </div>
                </div>
              </Tabs>
            </div>
          </DialogContent>
        ))}
      </Dialog>
    </div>
  );
}

export default VisitReportMudal;
