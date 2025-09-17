"use client";
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { mudalData, tabOrder } from "@/components/helper/Helper2";
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
import CustomSlider from "@/components/common/CustomSlider";
import Remark from "@/components/common/Remark";
import { Button } from "@/components/ui/button";
import VisitReportTable from "@/components/common/VisitReportTable";
import { DialogClose } from "@radix-ui/react-dialog";

function VisitReportMudal() {
  const nextFollowRef = useRef<HTMLInputElement>(null);
  const nextVisitRef = useRef<HTMLInputElement>(null);
  const submitNextFollowRef = useRef<HTMLInputElement>(null);
  const submitNextVisitRef = useRef<HTMLInputElement>(null);

  // Generic function for opening date picker
  const handleOpenDate = (ref: React.RefObject<HTMLInputElement | null>) => {
    ref.current?.showPicker();
  };

  const [open, Setopen] = useState(false);
  const [tabValue, SetTabValue] = useState<string>("lastVisit");
  const handleNext = () => {
    const currentIndex = tabOrder.indexOf(tabValue);
    if (currentIndex > -1 && currentIndex < tabOrder.length - 1) {
      SetTabValue(tabOrder[currentIndex + 1]);
    }
  };
  const isLastTab = tabOrder.indexOf(tabValue) === tabOrder.length - 1;

  // --------- Type-safe data collection (no `any`) ----------
  type DataValue = string | File | boolean | string[] | string[] | null;
  type DataObject = Record<string, unknown>;

  const collectAllDataFromDialog = (rootEl: HTMLElement) => {
    const dataObj: DataObject = {};
    const entriesList: Array<{
      name: string;
      value: string | File | boolean | string[];
    }> = [];

    const appendEntry = (
      name: string,
      value: string | File | boolean | string[]
    ) => {
      const prev = dataObj[name];
      if (Array.isArray(prev)) {
        const merged = [...prev, value] as unknown[];
        dataObj[name] = merged;
      } else if (typeof prev !== "undefined") {
        dataObj[name] = [prev, value];
      } else {
        dataObj[name] = value;
      }
      entriesList.push({ name, value });
    };

    // 1) Merge FormData from all forms
    const forms = rootEl.querySelectorAll("form");
    forms.forEach((form) => {
      const fd = new FormData(form as HTMLFormElement);
      for (const [name, value] of fd.entries()) {
        if (typeof value === "string") {
          appendEntry(name, value);
        } else {
          appendEntry(name, value);
        }
      }
    });

    // 2) Sweep standalone inputs/selects/textareas
    const fieldNodes = rootEl.querySelectorAll("input, select, textarea");
    fieldNodes.forEach((el) => {
      const element = el as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLTextAreaElement;
      const key = element.getAttribute("name") || element.getAttribute("id");
      if (!key) return;

      if (element instanceof HTMLInputElement) {
        const type = element.type.toLowerCase();

        if (type === "checkbox") {
          if (element.checked) {
            appendEntry(key, element.value !== "" ? element.value : true);
          }
          return;
        }

        if (type === "radio") {
          if (element.checked) {
            appendEntry(key, element.value);
          }
          return;
        }

        if (type === "file") {
          const files = element.files ? Array.from(element.files) : [];
          if (files.length > 0) {
            // store file names for logging
            appendEntry(
              key,
              files.map((f) => f.name)
            );
          }
          return;
        }

        appendEntry(key, element.value);
        return;
      }

      if (element instanceof HTMLSelectElement) {
        if (element.multiple) {
          const selected = Array.from(element.selectedOptions).map(
            (o) => o.value
          );
          appendEntry(key, selected);
        } else {
          appendEntry(key, element.value);
        }
        return;
      }

      if (element instanceof HTMLTextAreaElement) {
        appendEntry(key, element.value);
      }
    });

    return { dataObj, entriesList };
  };

  const handleSubmitAllData = () => {
    const content = document.querySelector(
      "[data-state='open'] [role='dialog'], [data-state='open'][role='dialog']"
    ) as HTMLElement | null;
    const root = content ?? document.body;
    const { dataObj, entriesList } = collectAllDataFromDialog(root);
    console.log("All data (object):", dataObj); // explicit object for console [4][5]
    console.log("All data (entries):", entriesList); // linearized entries [10][5]
  };
  // --------------------------------------------------------

  return (
    <div>
      {" "}
      <Dialog open={open} onOpenChange={Setopen}>
        <DialogTitle></DialogTitle>
        <DialogTrigger className="bg-[#B751FB] sm:px-3 px-2  lg:px-4 md:py-2 py-1 lg:py-2.5 text-center cursor-pointer rounded md:rounded-[6px] shadow-[0_1px_4px_0_rgba(3,7,18,0.08)] border border-[#B751FB] text-[#fff] text-xs sm:text-sm font-semibold leading-[142.857%] -tracking-[0.28px]">
          Add Visit Report
        </DialogTrigger>
        {mudalData.map((item, index) => (
          <DialogContent
            key={index}
            className="p-0 !w-[90%] !h-[90%] !max-w-none overflow-y-auto"
          >
            <div>
              <DialogHeader className="px-4 py-5">
                <DialogTitle>Visit Report</DialogTitle>
              </DialogHeader>
              <div className="border-t">
                <Tabs
                  className="w-full !bg-[transparent] "
                  value={tabValue}
                  onValueChange={SetTabValue}
                >
                  <div>
                    <div className="flex w-full overflow-auto lg:flex-row flex-col">
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
                              value="lastVisit"
                              className={`items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start  ${
                                tabValue === "lastVisit" ? "" : ""
                              }`}
                              onClick={() => SetTabValue("lastVisit")}
                            >
                              <TimeOutIcon />
                              Last Visit Summary
                            </TabsTrigger>
                            <TabsTrigger
                              value="catalogStaff"
                              className={`items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start ${
                                tabValue === "catalogStaff" ? "" : ""
                              }`}
                              onClick={() => SetTabValue("catalogStaff")}
                            >
                              <CataLogStaff />
                              Catalog & Staff
                            </TabsTrigger>
                            <TabsTrigger
                              value="offers"
                              className={`items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start ${
                                tabValue === "offers" ? "" : ""
                              }`}
                              onClick={() => SetTabValue("offers")}
                            >
                              <OfferTockenIcon />
                              Offer
                            </TabsTrigger>
                            <TabsTrigger
                              value="promoteUse"
                              className={`items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start ${
                                tabValue === "promoteUse" ? "" : ""
                              }`}
                              onClick={() => SetTabValue("promoteUse")}
                            >
                              <PromoteIcon />
                              Promote Usage
                            </TabsTrigger>
                            <TabsTrigger
                              value="clientEngagement"
                              className={`items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start ${
                                tabValue === "clientEngagement" ? "" : ""
                              }`}
                              onClick={() => SetTabValue("clientEngagement")}
                            >
                              <ClientIcon />
                              Client Enagagement
                            </TabsTrigger>
                            <TabsTrigger
                              value="setUp"
                              className={`items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start ${
                                tabValue === "setUp" ? "" : ""
                              }`}
                              onClick={() => SetTabValue("setUp")}
                            >
                              <SetUpIcon />
                              Set Up
                            </TabsTrigger>
                            <TabsTrigger
                              value="submit"
                              className={`items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start ${
                                tabValue === "submit" ? "" : ""
                              }`}
                              onClick={() => SetTabValue("submit")}
                            >
                              <SubmitIcon />
                              Submit
                            </TabsTrigger>
                          </TabsList>
                        </div>
                      </div>
                      <div className="w-full overflow-auto">
                        {item.lastVisitCotent.map((visit, visitInde) => (
                          <TabsContent
                            key={visitInde}
                            value={"lastVisit"}
                            className="lg:px-6 md:px-5 sm:px-4 px-3 lg:pt-[30px] md:pt-8 sm:pt-6 pt-5"
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
                              <div className=" mt-5 border border-gray-200 rounded-[6px] mb-10">
                                <VisitReportTable data={visit.tableData} />
                              </div>
                              <form className="flex justify-between lg:gap-10 md:gap-8 sm:gap-6 gap-4 sm:flex-row flex-col">
                                <div className="w-full">
                                  <label htmlFor={visit.nexFollowtId}>
                                    <SmallHeading title={visit.nextFollow} />
                                  </label>
                                  <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
                                    <input
                                      type="date"
                                      id={visit.nexFollowtId}
                                      ref={nextFollowRef}
                                      placeholder="Pick a date"
                                      className="outline-none"
                                    />
                                    <div
                                      onClick={() =>
                                        handleOpenDate(nextFollowRef)
                                      }
                                    >
                                      <ClenderIcon />
                                    </div>
                                  </div>
                                </div>
                                <div className="w-full">
                                  <label htmlFor={visit.nextVisitId}>
                                    <SmallHeading title={visit.nextVisit} />
                                  </label>
                                  <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
                                    <input
                                      type="date"
                                      id={visit.nextVisitId}
                                      ref={nextVisitRef}
                                      placeholder="Pick a date"
                                      className="outline-none"
                                    />
                                    <div
                                      onClick={() =>
                                        handleOpenDate(nextVisitRef)
                                      }
                                    >
                                      <ClenderIcon />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </TabsContent>
                        ))}
                        {item.catalogStaff.map((staffItem, staffIndex) => (
                          <TabsContent
                            key={staffIndex}
                            value={"catalogStaff"}
                            className="lg:px-6 md:px-5 sm:px-4 px-3 lg:pt-[30px] md:pt-8 sm:pt-6 pt-5"
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
                                <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] lg:mb-10 md:mb-8 sm:mb-6 mb-5">
                                  {staffItem.tableData.map((itm, idx) => (
                                    <table
                                      key={idx}
                                      className="w-full border-collapse sm:text-sm text-xs"
                                    >
                                      <thead className="bg-[#F9FAFB] text-[#808188] leading-[142%] -tracking-[0.28px]">
                                        <tr>
                                          {itm.th.map((thItm, thIndex) => (
                                            <th
                                              key={thIndex}
                                              className="lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 text-left !font-semibold"
                                            >
                                              {thItm.th}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody className="text-[#030712] leading-[142%] -tracking-[0.28px]">
                                        {(() => {
                                          const lastRowIndex =
                                            itm.tdRow.length - 1;
                                          return itm.tdRow.map(
                                            (tdItm, tdRowIndex) => (
                                              <tr
                                                key={tdRowIndex}
                                                className="border-y border-[#E4E7EB]"
                                              >
                                                {tdItm.td.map(
                                                  (tdItem, tdindex) => (
                                                    <td
                                                      key={tdindex}
                                                      className={`lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2  ${
                                                        tdindex === 2
                                                          ? tdRowIndex === 0 ||
                                                            tdRowIndex ===
                                                              lastRowIndex
                                                            ? "text-[#f00]"
                                                            : "text-[#31A553]"
                                                          : "text-black"
                                                      }`}
                                                    >
                                                      {tdItem.td}
                                                    </td>
                                                  )
                                                )}
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
                                    className="lg:!text-xl md:!text-lg !text-base"
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
                            className="lg:px-6 md:px-5 sm:px-4 px-3 lg:pt-[30px] md:pt-8 sm:pt-6 pt-5"
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
                                    className="flex items-center gap-2 sm:text-xs text-xs leading-[166%] -tracking-[0.24px]"
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
                                <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] lg:mb-10 md:mb-8 sm:mb-6 mb-5">
                                  {offerItem.tableData.map((itm, idx) => (
                                    <table
                                      key={idx}
                                      className="w-full border-collapse sm:text-sm text-xs"
                                    >
                                      <thead className="bg-[#F9FAFB] text-[#808188]  leading-[142%] -tracking-[0.28px]">
                                        <tr>
                                          {itm.th.map((thItm, thIndex) => (
                                            <th
                                              key={thIndex}
                                              className="lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 text-left !font-semibold"
                                            >
                                              {thItm.th}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody className="text-[#030712] leading-[142%] -tracking-[0.28px]">
                                        {(() => {
                                          return itm.tdRow.map(
                                            (tdItm, tdRowIndex) => (
                                              <tr
                                                key={tdRowIndex}
                                                className="border-y border-[#E4E7EB]"
                                              >
                                                {tdItm.td.map(
                                                  (tdItem, tdindex) => (
                                                    <td
                                                      key={tdindex}
                                                      className={`lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 ${
                                                        tdindex === 2
                                                          ? tdRowIndex === 0
                                                            ? "text-[#f00]"
                                                            : "text-[#31A553]"
                                                          : "text-black"
                                                      }`}
                                                    >
                                                      {tdItem.td}
                                                    </td>
                                                  )
                                                )}
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
                                    className="lg:!text-xl md:!text-lg !text-base"
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
                            className="lg:px-6 md:px-5 sm:px-4 px-3 lg:pt-[30px] md:pt-8 sm:pt-6 pt-5"
                          >
                            <div>
                              <SmallHeading
                                title={promoteItems.heading}
                                className="!text-base"
                              />
                              <div className="flex gap-2 mt-2.5 flex-col">
                                {promoteItems.data.map(
                                  (dataItem, dataIndex) => (
                                    <p
                                      key={dataIndex}
                                      className="flex items-center gap-2 sm:text-xs text-xs  leading-[166%] -tracking-[0.24px]"
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
                                  )
                                )}
                                <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] lg:mb-10 md:mb-8 sm:mb-6 mb-5">
                                  {promoteItems.tableData.map((itm, idx) => (
                                    <table
                                      key={idx}
                                      className="w-full border-collapse sm:text-sm text-xs"
                                    >
                                      <thead className="bg-[#F9FAFB] text-[#808188] leading-[142%] -tracking-[0.28px]">
                                        <tr>
                                          {itm.th.map((thItm, thIndex) => (
                                            <th
                                              key={thIndex}
                                              className="lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 text-left !font-semibold"
                                            >
                                              {thItm.th}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody className="text-[#030712]  leading-[142%] -tracking-[0.28px]">
                                        {(() => {
                                          const lastRowIndex =
                                            itm.tdRow.length - 2;
                                          return itm.tdRow.map(
                                            (tdItm, tdRowIndex) => (
                                              <tr
                                                key={tdRowIndex}
                                                className="border-y border-[#E4E7EB]"
                                              >
                                                {tdItm.td.map(
                                                  (tdItem, tdindex) => (
                                                    <td
                                                      key={tdindex}
                                                      className={`lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 ${
                                                        tdindex === 2
                                                          ? tdRowIndex === 0 ||
                                                            tdRowIndex ===
                                                              lastRowIndex
                                                            ? "text-[#f00]"
                                                            : "text-[#31A553]"
                                                          : "text-black"
                                                      }`}
                                                    >
                                                      {tdItem.td}
                                                    </td>
                                                  )
                                                )}
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
                                    className="lg:!text-xl md:!text-lg !text-base"
                                  />
                                  <CustomSlider />
                                  <Remark />
                                </form>
                              </div>
                            </div>
                          </TabsContent>
                        ))}
                        {item.clientEnagagement.map(
                          (cleintItem, clientIndex) => (
                            <TabsContent
                              key={clientIndex}
                              value={"clientEngagement"}
                              className="lg:px-6 md:px-5 sm:px-4 px-3 lg:pt-[30px] md:pt-8 sm:pt-6 pt-5"
                            >
                              <div>
                                <SmallHeading
                                  title={cleintItem.heading}
                                  className="!text-base"
                                />
                                <div className="flex gap-2 mt-2.5 flex-col">
                                  {cleintItem.data.map(
                                    (dataItem, dataIndex) => (
                                      <p
                                        key={dataIndex}
                                        className="flex items-center gap-2 sm:text-xs text-xs leading-[166%] -tracking-[0.24px]"
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
                                    )
                                  )}
                                  <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] lg:mb-10 md:mb-8 sm:mb-6 mb-5">
                                    {cleintItem.tableData.map((itm, idx) => (
                                      <table
                                        key={idx}
                                        className="w-full border-collapse sm:text-sm text-xs"
                                      >
                                        <thead className="bg-[#F9FAFB] text-[#808188] leading-[142%] -tracking-[0.28px]">
                                          <tr>
                                            {itm.th.map((thItm, thIndex) => (
                                              <th
                                                key={thIndex}
                                                className="lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 text-left !font-semibold"
                                              >
                                                {thItm.th}
                                              </th>
                                            ))}
                                          </tr>
                                        </thead>
                                        <tbody className="text-[#030712] leading-[142%] -tracking-[0.28px]">
                                          {(() => {
                                            const lastRowIndex =
                                              itm.tdRow.length - 1;
                                            const lastFourth =
                                              itm.tdRow.length - 4;

                                            return itm.tdRow.map(
                                              (tdItm, tdRowIndex) => (
                                                <tr
                                                  key={tdRowIndex}
                                                  className="border-y border-[#E4E7EB]"
                                                >
                                                  {tdItm.td.map(
                                                    (tdItem, tdindex) => (
                                                      <td
                                                        key={tdindex}
                                                        className={`lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 ${
                                                          tdindex === 2
                                                            ? tdRowIndex ===
                                                                0 ||
                                                              tdRowIndex ===
                                                                lastRowIndex
                                                              ? "text-[#f00]"
                                                              : "text-[#31A553]"
                                                            : "text-black"
                                                        } ${
                                                          tdindex === 2
                                                            ? tdRowIndex ===
                                                                0 ||
                                                              tdRowIndex ===
                                                                lastFourth
                                                              ? "text-[#f00]"
                                                              : "text-[#31A553]"
                                                            : "text-black"
                                                        }`}
                                                      >
                                                        {tdItem.td}
                                                      </td>
                                                    )
                                                  )}
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
                                      className="lg:!text-xl md:!text-lg !text-base"
                                    />
                                    <CustomSlider />
                                    <Remark />
                                  </form>
                                </div>
                              </div>
                            </TabsContent>
                          )
                        )}
                        {item.setUp.map((setIPItem, setUpIndex) => (
                          <TabsContent
                            key={setUpIndex}
                            value={"setUp"}
                            className="lg:px-6 md:px-5 sm:px-4 px-3 lg:pt-[30px] md:pt-8 sm:pt-6 pt-5"
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
                                    className="flex items-center gap-2 sm:text-xs text-xs leading-[166%] -tracking-[0.24px]"
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
                                <div className="!overflow-auto mt-5 border border-gray-200 rounded-[6px] lg:mb-10 md:mb-8 sm:mb-6 mb-5">
                                  {setIPItem.tableData.map((itm, idx) => (
                                    <table
                                      key={idx}
                                      className="w-full border-collapse sm:text-sm text-xs"
                                    >
                                      <thead className="bg-[#F9FAFB] text-[#808188]   leading-[142%] -tracking-[0.28px]">
                                        <tr>
                                          {itm.th.map((thItm, thIndex) => (
                                            <th
                                              key={thIndex}
                                              className="lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 text-left !font-semibold"
                                            >
                                              {thItm.th}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody className="text-[#030712] leading-[142%] -tracking-[0.28px]">
                                        {(() => {
                                          const lastRowIndex =
                                            itm.tdRow.length - 1;
                                          const lastFourth =
                                            itm.tdRow.length - 4;
                                          return itm.tdRow.map(
                                            (tdItm, tdRowIndex) => (
                                              <tr
                                                key={tdRowIndex}
                                                className="border-y border-[#E4E7EB]"
                                              >
                                                {tdItm.td.map(
                                                  (tdItem, tdindex) => (
                                                    <td
                                                      key={tdindex}
                                                      className={`lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 ${
                                                        tdindex === 2
                                                          ? tdRowIndex === 0 ||
                                                            tdRowIndex ===
                                                              lastRowIndex
                                                            ? "text-[#f00]"
                                                            : "text-[#31A553]"
                                                          : "text-black"
                                                      } ${
                                                        tdindex === 2
                                                          ? tdRowIndex === 0 ||
                                                            tdRowIndex ===
                                                              lastFourth
                                                            ? "text-[#f00]"
                                                            : "text-[#31A553]"
                                                          : "text-black"
                                                      }`}
                                                    >
                                                      {tdItem.td}
                                                    </td>
                                                  )
                                                )}
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
                                    className="lg:!text-xl md:!text-lg !text-base"
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
                            className="lg:px-6 md:px-5 sm:px-4 px-3 lg:pt-[30px] md:pt-8 sm:pt-6 pt-5"
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
                                    className="flex items-center gap-2 text-xs leading-[166%] -tracking-[0.24px] "
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
                                  <div className="flex justify-between lg:gap-10 md:gap-8 sm:gap-6 gap-4 md:flex-row flex-col">
                                    {/* {submiItem.date.map(
                                      (dateItem, dateIndex) => ( */}
                                    <div className="w-full">
                                      <label htmlFor={"dateItem.id"}>
                                        <SmallHeading
                                          title={"dateItem.heading"}
                                        />
                                      </label>
                                      <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
                                        <input
                                          type="date"
                                          id={"dateItem.id"}
                                          ref={submitNextFollowRef}
                                          placeholder="Pick a date"
                                          className="outline-none"
                                        />
                                        <div
                                          onClick={() =>
                                            handleOpenDate(submitNextFollowRef)
                                          }
                                        >
                                          <ClenderIcon />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="w-full">
                                      <label htmlFor={"dateItem.id"}>
                                        <SmallHeading
                                          title={"dateItem.heading"}
                                        />
                                      </label>
                                      <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
                                        <input
                                          type="date"
                                          id={"dateItem.id"}
                                          ref={submitNextVisitRef}
                                          placeholder="Pick a date"
                                          className="outline-none"
                                        />
                                        <div
                                          onClick={() =>
                                            handleOpenDate(submitNextVisitRef)
                                          }
                                        >
                                          <ClenderIcon />
                                        </div>
                                      </div>
                                    </div>
                                    {/* )
                                    )} */}
                                  </div>
                                </form>
                              </div>
                            </div>
                          </TabsContent>
                        ))}
                      </div>
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
            <DialogFooter className="sticky bottom-0 bg-white">
              <div className="flex justify-end gap-3 lg:p-6 md:p-5 p-4">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                {!isLastTab && <Button onClick={handleNext}>Next</Button>}
                {isLastTab && (
                  <Button onClick={handleSubmitAllData}>Submit</Button>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        ))}
      </Dialog>
    </div>
  );
}

export default VisitReportMudal;

// ("use client");
// import React, { useRef } from "react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { mudalData } from "@/components/helper/Helper2";
// import Image from "next/image";
// import Link from "next/link";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   CataLogStaff,
//   ClenderIcon,
//   ClientIcon,
//   OfferTockenIcon,
//   PromoteIcon,
//   SetUpIcon,
//   SubmitIcon,
//   TimeOutIcon,
// } from "@/components/helper/Icon2";
// import SmallHeading from "@/components/common/SmallHeading";
// import VisitReportTable from "@/components/common/VisitReportTable";
// import Remark from "@/components/common/Remark";
// import { Button } from "@/components/ui/button";

// function VisitReportMudal() {
//   // अलग-अलग refs बनाएं
//   const nextFollowRef = useRef<HTMLInputElement>(null);
//   const nextVisitRef = useRef<HTMLInputElement>(null);
//   const submitNextFollowRef = useRef<HTMLInputElement>(null);
//   const submitNextVisitRef = useRef<HTMLInputElement>(null);

//   // Generic function for opening date picker
//   const handleOpenDate = (ref: React.RefObject<HTMLInputElement | null>) => {
//     ref.current?.showPicker();
//   };

//   return (
//     <div>
//       <Dialog>
//         <DialogTrigger className="bg-[#B751FB] sm:px-3 px-2  lg:px-4 md:py-2 py-1 lg:py-2.5 text-center cursor-pointer rounded md:rounded-[6px] shadow-[0_1px_4px_0_rgba(3,7,18,0.08)] border border-[#B751FB] text-[#fff] text-xs sm:text-sm font-semibold leading-[142.857%] -tracking-[0.28px]">
//           Open Modal
//         </DialogTrigger>
//         {mudalData.map((item, index) => (
//           <DialogContent
//             key={index}
//             className="p-0 !w-[90%] !h-[90%] !max-w-none"
//           >
//             <div>
//               <DialogHeader className="px-4 py-5">
//                 <DialogTitle>Visit Report</DialogTitle>
//               </DialogHeader>
//               <div className="border-t">
//                 <Tabs
//                   defaultValue={"listVisit"}
//                   className="w-full !bg-[transparent] "
//                 >
//                   <div>
//                     <div className="flex w-full overflow-auto lg:flex-row flex-col">
//                       <div className="bg-[#F9FAFB] border-r min-w-[300px]">
//                         <div className="pt-5 ps-6 pb-[30px] pe-[30px] ">
//                           <div className="flex gap-2.5 items-center text-[#030712]">
//                             <div>
//                               <Image
//                                 src={item.img}
//                                 width={70}
//                                 height={70}
//                                 alt="studio img"
//                               />
//                             </div>
//                             <div className="flex flex-col gap-0.5">
//                               <h3 className="font-semibold leading-[125%] text-sm -tracking-[0.32px]">
//                                 {item.name}
//                               </h3>
//                               {item.contacte.map((contact, contIndex) => (
//                                 <Link
//                                   key={contIndex}
//                                   href={contact.path}
//                                   className="flex items-center gap-1 text-xs"
//                                 >
//                                   <span>{contact.icon}</span>
//                                   <span>{contact.title}</span>
//                                 </Link>
//                               ))}
//                             </div>
//                           </div>
//                           <div className="flex justify-between mt-5 ">
//                             {item.condetions.map((condetionItem, condIndex) => (
//                               <span
//                                 key={condIndex}
//                                 className={` ${
//                                   condIndex === 0
//                                     ? "text-[#F13737]  "
//                                     : condIndex === 2
//                                     ? "text-[#31A553]"
//                                     : "text-[#5B14D1] "
//                                 } ${
//                                   condIndex === 1
//                                     ? "border-l"
//                                     : condIndex === 3
//                                     ? "border-r"
//                                     : ""
//                                 } text-xs leading-[166%] border-[#808188] -tracking-[0.24px] font-semibold`}
//                               >
//                                 {condetionItem.count}
//                               </span>
//                             ))}
//                           </div>
//                         </div>
//                         <div>
//                           <TabsList className="flex !items-start !h-max  !flex-col !bg-transparent w-full !p-0">
//                             <TabsTrigger
//                               value={"lastVisit"}
//                               className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
//                             >
//                               <TimeOutIcon />
//                               Last Visit Summary
//                             </TabsTrigger>
//                             <TabsTrigger
//                               value={"catalogStaff"}
//                               className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
//                             >
//                               <CataLogStaff />
//                               Catalog & Staff
//                             </TabsTrigger>
//                             <TabsTrigger
//                               value={"offers"}
//                               className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
//                             >
//                               <OfferTockenIcon />
//                               Offer
//                             </TabsTrigger>
//                             <TabsTrigger
//                               value={"promoteUse"}
//                               className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
//                             >
//                               <PromoteIcon />
//                               Promote Usage
//                             </TabsTrigger>
//                             <TabsTrigger
//                               value={"clientEngagement"}
//                               className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
//                             >
//                               <ClientIcon />
//                               Client Enagagement
//                             </TabsTrigger>
//                             <TabsTrigger
//                               value={"setUp"}
//                               className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
//                             >
//                               <SetUpIcon />
//                               Set Up
//                             </TabsTrigger>
//                             <TabsTrigger
//                               value={"submit"}
//                               className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start"
//                             >
//                               <SubmitIcon />
//                               Submit
//                             </TabsTrigger>
//                           </TabsList>
//                         </div>
//                       </div>

//                       <div className="w-full overflow-auto ">
//                         {item.lastVisitCotent.map((visit, visitInde) => (
//                           <TabsContent
//                             key={visitInde}
//                             value={"lastVisit"}
//                             className="lg:px-6 md:px-5 sm:px-4 px-3 lg:pt-[30px] md:pt-8 sm:pt-6 pt-5"
//                           >
//                             <div>
//                               <SmallHeading
//                                 title={visit.heading}
//                                 className="!text-base"
//                               />
//                               <div className="flex gap-2 mt-2.5 flex-col">
//                                 {visit.data.map((dataItem, dataIndex) => (
//                                   <p
//                                     key={dataIndex}
//                                     className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]"
//                                   >
//                                     {dataItem.icon}
//                                     <span>
//                                       <span className="text-[#030712] font-medium">
//                                         {dataItem.title}
//                                       </span>

//                                       <span className="text-[rgba(3,7,18,0.70)]">
//                                         {dataItem.titleData}
//                                       </span>
//                                     </span>
//                                   </p>
//                                 ))}
//                               </div>
//                               <div className="overflow-auto mt-5 border border-gray-200 rounded-[6px] mb-10">
//                                 <VisitReportTable data={visit.tableData} />
//                               </div>
//                               <form className="flex justify-between gap-10">
//                                 <div className="w-full">
//                                   <label htmlFor={visit.nexFollowtId}>
//                                     <SmallHeading title={visit.nextFollow} />
//                                   </label>
//                                   <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
//                                     <input
//                                       type="date"
//                                       id={visit.nexFollowtId}
//                                       ref={nextFollowRef}
//                                       placeholder="Pick a date"
//                                       className="outline-none w-full"
//                                     />
//                                     <div
//                                       onClick={() =>
//                                         handleOpenDate(nextFollowRef)
//                                       }
//                                       className="cursor-pointer"
//                                     >
//                                       <ClenderIcon />
//                                     </div>
//                                   </div>
//                                 </div>
//                                 <div className="w-full">
//                                   <label htmlFor={visit.nextVisitId}>
//                                     <SmallHeading title={visit.nextVisit} />
//                                   </label>
//                                   <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
//                                     <input
//                                       type="date"
//                                       id={visit.nextVisitId}
//                                       ref={nextVisitRef}
//                                       placeholder="Pick a date"
//                                       className="outline-none w-full"
//                                     />
//                                     <div
//                                       onClick={() =>
//                                         handleOpenDate(nextVisitRef)
//                                       }
//                                       className="cursor-pointer"
//                                     >
//                                       <ClenderIcon />
//                                     </div>
//                                   </div>
//                                 </div>
//                               </form>
//                             </div>
//                           </TabsContent>
//                         ))}

//                         {/* Other tabs content remains same... */}

//                         {item.submit.map((submiItem, sumitIndex) => (
//                           <TabsContent
//                             key={sumitIndex}
//                             value={"submit"}
//                             className="lg:px-6 md:px-5 sm:px-4 px-3 lg:pt-[30px] md:pt-8 sm:pt-6 pt-5"
//                           >
//                             <div>
//                               <SmallHeading
//                                 title={submiItem.heading}
//                                 className="!text-base"
//                               />
//                               <div className="flex gap-2 mt-2.5 flex-col">
//                                 {submiItem.data.map((dataItem, dataIndex) => (
//                                   <p
//                                     key={dataIndex}
//                                     className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]"
//                                   >
//                                     {dataItem.icon}
//                                     <span>
//                                       <span className="text-[#030712] font-medium">
//                                         {dataItem.title}
//                                       </span>

//                                       <span className="text-[rgba(3,7,18,0.70)]">
//                                         {dataItem.titleData}
//                                       </span>
//                                     </span>
//                                   </p>
//                                 ))}

//                                 <form action="">
//                                   <Remark />
//                                   <div className="flex justify-between gap-10">
//                                     {submiItem.date.map(
//                                       (dateItem, dateIndex) => (
//                                         <div key={dateIndex} className="w-full">
//                                           <label htmlFor={dateItem.id}>
//                                             <SmallHeading
//                                               title={dateItem.heading}
//                                             />
//                                           </label>
//                                           <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
//                                             <input
//                                               type="date"
//                                               id={dateItem.id}
//                                               ref={
//                                                 dateIndex === 0
//                                                   ? submitNextFollowRef
//                                                   : submitNextVisitRef
//                                               }
//                                               placeholder="Pick a date"
//                                               className="outline-none w-full"
//                                             />
//                                             <div
//                                               onClick={() =>
//                                                 handleOpenDate(
//                                                   dateIndex === 0
//                                                     ? submitNextFollowRef
//                                                     : submitNextVisitRef
//                                                 )
//                                               }
//                                               className="cursor-pointer"
//                                             >
//                                               <ClenderIcon />
//                                             </div>
//                                           </div>
//                                         </div>
//                                       )
//                                     )}
//                                   </div>
//                                 </form>
//                               </div>
//                             </div>
//                           </TabsContent>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="flex justify-end gap-3 mb-10 p-6 border-t border-grayE4">
//                       <Button variant={"outline"}>Cancel</Button>
//                       <Button>Submit Report</Button>
//                     </div>
//                   </div>
//                 </Tabs>
//               </div>
//             </div>
//           </DialogContent>
//         ))}
//       </Dialog>
//     </div>
//   );
// }

// export default VisitReportMudal;
