// import { Dialog } from '';
'use client'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Button } from '@/components/ui/button'
import {
  IconGrow,
  IconManage,
  Iconoutcome,
  IconProfile,
  IconPromote,
} from '../helper/Icon1'
import { modalData } from '../helper/Helper1'

function Reportmodal() {
  const form = useForm()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOpenDate = () => {
    inputRef.current?.showPicker()
  }

  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-[#B751FB] sm:px-3 px-2  lg:px-4 md:py-2 py-1 lg:py-2.5 text-center cursor-pointer rounded md:rounded-[6px] shadow-[0_1px_4px_0_rgba(3,7,18,0.08)] border border-[#B751FB] text-[#fff] text-xs sm:text-sm font-semibold leading-[142.857%] -tracking-[0.28px]">
          Add Visit Report
        </DialogTrigger>

        <DialogContent className="p-0  max-w- w-full  sm:mx-4  lg:my-8  lg:mx-auto  h-[90vh] overflow-hidden">
          {modalData.map((item, index) => (
            <div key={index}>
              <DialogHeader className="px-4 py-5">
                <DialogTitle>Visit Report</DialogTitle>
              </DialogHeader>
              <Tabs
                defaultValue={'VisitReport'}
                className="w-full !bg-[transparent] ">
                <div>
                  <div className="flex w-full overflow-auto lg:flex-row flex-col">
                    <div className="bg-[#F9FAFB] border-r border-grayE4 lg:w-[300px] w-full flex-shrink-0">
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
                                className="flex items-center gap-1 text-xs">
                                <span>{contact.icon}</span>
                                <span>{contact.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between mt-5 gap-1  ">
                          {item.condetions.map((condetionItem, condIndex) => (
                            <span
                              key={condIndex}
                              className={` ${
                                condIndex === 0
                                  ? 'text-[#F13737]  '
                                  : condIndex === 2
                                  ? 'text-[#31A553]'
                                  : 'text-[#5B14D1] '
                              } ${
                                condIndex === 1
                                  ? 'border-l'
                                  : condIndex === 3
                                  ? 'border-r'
                                  : ''
                              } text-xs leading-[166%] border-[#808188] -tracking-[0.24px] font-semibold`}>
                              {condetionItem.count}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <TabsList className="flex !items-start !h-max  !flex-col !bg-transparent w-full !p-0">
                          <TabsTrigger
                            value={'lastVisit'}
                            className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start">
                            <IconProfile />
                            Profile
                          </TabsTrigger>
                          <TabsTrigger
                            value={'catalogStaff'}
                            className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start">
                            <IconManage />
                            Manage
                          </TabsTrigger>
                          <TabsTrigger
                            value={'offers'}
                            className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start">
                            <IconGrow />
                            Grow
                          </TabsTrigger>
                          <TabsTrigger
                            value={'promoteUse'}
                            className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start">
                            <IconPromote />
                            Promote
                          </TabsTrigger>
                          <TabsTrigger
                            value={'clientEngagement'}
                            className="flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start">
                            <Iconoutcome />
                            Outcome
                          </TabsTrigger>
                        </TabsList>
                      </div>
                    </div>

                    <div className="w-full overflow-auto ">
                      <TabsContent
                        value={'lastVisit'}
                        className="px-6 pt-[30px]">
                        <Form {...form}>
                          <form
                            className="space-y-6"
                            onSubmit={form.handleSubmit(console.log)}>
                            {/* Business Name */}
                            <FormField
                              control={form.control}
                              name="businessName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Person in contact name</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Business Name"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Decision Maker */}
                            <FormField
                              control={form.control}
                              name="decisionMaker"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel>Decision maker</FormLabel>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Contact Person Role */}
                            <FormField
                              control={form.control}
                              name="contactRole"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Contact Person Role</FormLabel>
                                  <FormControl>
                                    <Input placeholder="" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Contact Phone */}
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Contact Person Phone</FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter phone no."
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Software Currently Used */}
                            <FormField
                              control={form.control}
                              name="software"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Software Currently Used</FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select software or usage status" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="none">
                                          None
                                        </SelectItem>
                                        <SelectItem value="xyz">
                                          XYZ Software
                                        </SelectItem>
                                        <SelectItem value="other">
                                          Other
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Size of salon */}
                            <FormField
                              control={form.control}
                              name="seats"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Size of salon</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      value={field.value}
                                      onValueChange={field.onChange}>
                                      <RadioGroupItem value="0-3" id="0-3" /> 0
                                      - 3 seats <br />
                                      <RadioGroupItem value="4-7" id="4-7" /> 4
                                      - 7 seats <br />
                                      <RadioGroupItem
                                        value="8-12"
                                        id="8-12"
                                      />{' '}
                                      8 - 12 seats <br />
                                      <RadioGroupItem
                                        value="13-15"
                                        id="13-15"
                                      />{' '}
                                      13 - 15 seats <br />
                                      <RadioGroupItem
                                        value="16-above"
                                        id="16-above"
                                      />{' '}
                                      16 & above
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </form>
                        </Form>
                      </TabsContent>

                      {/* {item.catalogStaff.map((staffItem, staffIndex) => (
                        <TabsContent
                          key={staffIndex}
                          value={'catalogStaff'}
                          className="px-6 pt-[30px]">
                          <div>
                            <SmallHeading
                              title={staffItem.heading}
                              className="!text-base"
                            />
                            <div className="flex gap-2 mt-2.5 flex-col">
                              {staffItem.data.map((dataItem, dataIndex) => (
                                <p
                                  key={dataIndex}
                                  className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]">
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
                                    className="w-full border-collapse text-sm">
                                    <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                      <tr>
                                        {itm.th.map((thItm, thIndex) => (
                                          <th
                                            key={thIndex}
                                            className="px-6 py-2 text-left !font-semibold">
                                            {thItm.th}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
                                      {(() => {
                                        const lastRowIndex =
                                          itm.tdRow.length - 1 // 👈 yaha define karein

                                        return itm.tdRow.map(
                                          (tdItm, tdRowIndex) => (
                                            <tr
                                              key={tdRowIndex}
                                              className="border-y border-[#E4E7EB]">
                                              {tdItm.td.map(
                                                (tdItem, tdindex) => (
                                                  <td
                                                    key={tdindex}
                                                    className={`px-6 py-4 text-nowrap ${
                                                      tdindex === 2
                                                        ? tdRowIndex === 0 ||
                                                          tdRowIndex ===
                                                            lastRowIndex
                                                          ? 'text-[#f00]' // red for first & last row in column 2
                                                          : 'text-[#31A553]' // green for other rows in column 2
                                                        : 'text-black' // black for all other columns
                                                    }`}>
                                                    {tdItem.td}
                                                  </td>
                                                )
                                              )}
                                            </tr>
                                          )
                                        )
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
                          value={'offers'}
                          className="px-6 pt-[30px]">
                          <div>
                            <SmallHeading
                              title={offerItem.heading}
                              className="!text-base"
                            />
                            <div className="flex gap-2 mt-2.5 flex-col">
                              {offerItem.data.map((dataItem, dataIndex) => (
                                <p
                                  key={dataIndex}
                                  className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]">
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
                                    className="w-full border-collapse text-sm">
                                    <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                      <tr>
                                        {itm.th.map((thItm, thIndex) => (
                                          <th
                                            key={thIndex}
                                            className="px-6 py-2 text-left !font-semibold">
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
                                              className="border-y border-[#E4E7EB]">
                                              {tdItm.td.map(
                                                (tdItem, tdindex) => (
                                                  <td
                                                    key={tdindex}
                                                    className={`px-6 py-4 text-nowrap ${
                                                      tdindex === 2
                                                        ? tdRowIndex === 0
                                                          ? 'text-[#f00]' // red for first & last row in column 2
                                                          : 'text-[#31A553]' // green for other rows in column 2
                                                        : 'text-black' // black for all other columns
                                                    }`}>
                                                    {tdItem.td}
                                                  </td>
                                                )
                                              )}
                                            </tr>
                                          )
                                        )
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
                          value={'promoteUse'}
                          className="px-6 pt-[30px]">
                          <div>
                            <SmallHeading
                              title={promoteItems.heading}
                              className="!text-base"
                            />
                            <div className="flex gap-2 mt-2.5 flex-col">
                              {promoteItems.data.map((dataItem, dataIndex) => (
                                <p
                                  key={dataIndex}
                                  className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]">
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
                                    className="w-full border-collapse text-sm">
                                    <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                      <tr>
                                        {itm.th.map((thItm, thIndex) => (
                                          <th
                                            key={thIndex}
                                            className="px-6 py-2 text-left !font-semibold">
                                            {thItm.th}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
                                      {(() => {
                                        const lastRowIndex =
                                          itm.tdRow.length - 2 // 👈 yaha define karein

                                        return itm.tdRow.map(
                                          (tdItm, tdRowIndex) => (
                                            <tr
                                              key={tdRowIndex}
                                              className="border-y border-[#E4E7EB]">
                                              {tdItm.td.map(
                                                (tdItem, tdindex) => (
                                                  <td
                                                    key={tdindex}
                                                    className={`px-6 py-4 text-nowrap ${
                                                      tdindex === 2
                                                        ? tdRowIndex === 0 ||
                                                          tdRowIndex ===
                                                            lastRowIndex
                                                          ? 'text-[#f00]' // red for first & last row in column 2
                                                          : 'text-[#31A553]' // green for other rows in column 2
                                                        : 'text-black' // black for all other columns
                                                    }`}>
                                                    {tdItem.td}
                                                  </td>
                                                )
                                              )}
                                            </tr>
                                          )
                                        )
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
                          value={'clientEngagement'}
                          className="px-6 pt-[30px]">
                          <div>
                            <SmallHeading
                              title={cleintItem.heading}
                              className="!text-base"
                            />
                            <div className="flex gap-2 mt-2.5 flex-col">
                              {cleintItem.data.map((dataItem, dataIndex) => (
                                <p
                                  key={dataIndex}
                                  className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]">
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
                                    className="w-full border-collapse text-sm">
                                    <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                      <tr>
                                        {itm.th.map((thItm, thIndex) => (
                                          <th
                                            key={thIndex}
                                            className="px-6 py-2 text-left !font-semibold">
                                            {thItm.th}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
                                      {(() => {
                                        const lastRowIndex =
                                          itm.tdRow.length - 1 // 👈 yaha define karein
                                        const lastFourth = itm.tdRow.length - 4 // 👈 yaha define karein

                                        return itm.tdRow.map(
                                          (tdItm, tdRowIndex) => (
                                            <tr
                                              key={tdRowIndex}
                                              className="border-y border-[#E4E7EB]">
                                              {tdItm.td.map(
                                                (tdItem, tdindex) => (
                                                  <td
                                                    key={tdindex}
                                                    className={`px-6 py-4 text-nowrap ${
                                                      tdindex === 2
                                                        ? tdRowIndex === 0 ||
                                                          tdRowIndex ===
                                                            lastRowIndex
                                                          ? 'text-[#f00]' // red for first & last row in column 2
                                                          : 'text-[#31A553]' // green for other rows in column 2
                                                        : 'text-black' // black for all other columns
                                                    } ${
                                                      tdindex === 2
                                                        ? tdRowIndex === 0 ||
                                                          tdRowIndex ===
                                                            lastFourth
                                                          ? 'text-[#f00]' // red for first & last row in column 2
                                                          : 'text-[#31A553]' // green for other rows in column 2
                                                        : 'text-black'
                                                    }`}>
                                                    {tdItem.td}
                                                  </td>
                                                )
                                              )}
                                            </tr>
                                          )
                                        )
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
                          value={'setUp'}
                          className="px-6 pt-[30px]">
                          <div>
                            <SmallHeading
                              title={setIPItem.heading}
                              className="!text-base"
                            />
                            <div className="flex gap-2 mt-2.5 flex-col">
                              {setIPItem.data.map((dataItem, dataIndex) => (
                                <p
                                  key={dataIndex}
                                  className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]">
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
                                    className="w-full border-collapse text-sm">
                                    <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
                                      <tr>
                                        {itm.th.map((thItm, thIndex) => (
                                          <th
                                            key={thIndex}
                                            className="px-6 py-2 text-left !font-semibold">
                                            {thItm.th}
                                          </th>
                                        ))}
                                      </tr>
                                    </thead>
                                    <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
                                      {(() => {
                                        const lastRowIndex =
                                          itm.tdRow.length - 1 // 👈 yaha define karein
                                        const lastFourth = itm.tdRow.length - 4 // 👈 yaha define karein

                                        return itm.tdRow.map(
                                          (tdItm, tdRowIndex) => (
                                            <tr
                                              key={tdRowIndex}
                                              className="border-y border-[#E4E7EB]">
                                              {tdItm.td.map(
                                                (tdItem, tdindex) => (
                                                  <td
                                                    key={tdindex}
                                                    className={`px-6 py-4 text-nowrap ${
                                                      tdindex === 2
                                                        ? tdRowIndex === 0 ||
                                                          tdRowIndex ===
                                                            lastRowIndex
                                                          ? 'text-[#f00]' // red for first & last row in column 2
                                                          : 'text-[#31A553]' // green for other rows in column 2
                                                        : 'text-black' // black for all other columns
                                                    } ${
                                                      tdindex === 2
                                                        ? tdRowIndex === 0 ||
                                                          tdRowIndex ===
                                                            lastFourth
                                                          ? 'text-[#f00]' // red for first & last row in column 2
                                                          : 'text-[#31A553]' // green for other rows in column 2
                                                        : 'text-black'
                                                    }`}>
                                                    {tdItem.td}
                                                  </td>
                                                )
                                              )}
                                            </tr>
                                          )
                                        )
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
                          value={'submit'}
                          className="px-6 pt-[30px]">
                          <div>
                            <SmallHeading
                              title={submiItem.heading}
                              className="!text-base"
                            />
                            <div className="flex gap-2 mt-2.5 flex-col">
                              {submiItem.data.map((dataItem, dataIndex) => (
                                <p
                                  key={dataIndex}
                                  className="flex items-center gap-2 text-xs  leading-[166%] -tracking-[0.24px]">
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
                                        <SmallHeading
                                          title={dateItem.heading}
                                        />
                                      </label>
                                      <div className="py-2 px-3 w-full flex gap-5 mt-2 items-center justify-between border rounded-[6px]">
                                        <input
                                          type="date"
                                          id={dateItem.id}
                                          ref={inputRef}
                                          value={'Pick a date'}
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
                      ))} */}
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          ))}
          <DialogFooter className="flex fixed bottom-0  gap-3  right-0 p-6 border-t border-grayE4 w-full bg-white">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Next</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Reportmodal
