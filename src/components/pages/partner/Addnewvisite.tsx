'use client'

import Pera from '@/components/common/Pera'
import SecondryBtn from '@/components/common/SecondryBtn'
import SmallHeading from '@/components/common/SmallHeading'
import StatusBadgeSec from '@/components/common/StatusBadgeSec'
import TableKebabMenu from '@/components/common/TableKebabMenu'
import { sidebarData } from '@/components/helper/Helper2'
import {
  ActionIocn,
  CalenderBlackSmallIocn,
  ClenderIcon,
  FollowUpIcon,
  GrothTask,
  IssueIcon,
  PartnerIcon,
  PhoneSmallIcon,
  SmallCriticalIcon,
  SmallEyeIcon,
  ViewReportIcon,
} from '@/components/helper/Icon2'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { useState } from 'react'

export default function Addnewvisite() {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState<string | null>(null)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files) {
      const file = e.target.files[0] // Access the first file
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImage(reader.result as string)
        }
        reader.readAsDataURL(file) // Pass the file to readAsDataURL
      }
    }
  }

  return (
    <>
      <Button
        className="bg-[#B751FB] cursor-pointer"
        onClick={() => setOpen(true)}>
        Add Visit Report
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:w-[400px] overflow-auto ">
          <Card className="w-full h-full border-0 ronder-none shadow-none flex justify-between">
            <div>
              <CardHeader className="border-b">
                <CardTitle>Add Visit Report</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 px-0">
                <div className=" pb-7.5 border-b  px-6">
                  {sidebarData?.map((itm, idx) => (
                    <div key={idx}>
                      <div className="lg:pt-5 lg:ps-6 lg:pb-[30px] md:py-5  lg:pe-[30px]">
                        <div className="flex justify-between gap-2">
                          <div>
                            <div className="flex gap-2 md:gap-2.5 items-center text-[#030712]">
                              <div className="lg:w-[70px] lg:h-[70px] w-[50px] h-[50px]">
                                <Image
                                  src={itm.img}
                                  width={70}
                                  height={70}
                                  alt="studio img"
                                />
                              </div>
                              <div className="flex flex-col gap-0.5">
                                <h3 className="font-semibold leading-[125%] lg:text-base text-sm -tracking-[0.32px]">
                                  {itm.name}
                                </h3>
                                {itm.contacte.map((contact, contIndex) => (
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
                            <div className="flex justify-between mt-5 ">
                              {itm.condetions.map(
                                (condetionItem, condIndex) => (
                                  <span
                                    key={condIndex}
                                    className={` ${
                                      condIndex === 0
                                        ? 'text-[#F13737]  '
                                        : condIndex === 2
                                        ? 'text-[#F58400]'
                                        : 'text-[#5B14D1] '
                                    } ${
                                      condIndex === 1
                                        ? 'border-l'
                                        : condIndex === 3
                                        ? 'border-r'
                                        : ''
                                    } text-xs leading-[166%] border-[#808188] -tracking-[0.24px]`}>
                                    {condetionItem.count}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                          <TableKebabMenu
                            items={[
                              {
                                label: 'View as partner',
                                extra: <SmallEyeIcon className="w-4 h-4" />,
                                // onClick: () => console.log("Edit clicked"),
                              },
                              {
                                label: 'View Report',
                                extra: <ViewReportIcon className="w-4 h-4" />,
                                // onClick: () => console.log("Delete clicked"),
                              },
                              {
                                label: 'Add Visit',
                                extra: (
                                  <CalenderBlackSmallIocn className="w-4 h-4" />
                                ),
                                // onClick: () => console.log("Share clicked"),
                              },
                              {
                                label: 'Add Follow Up',
                                extra: <FollowUpIcon className="w-4 h-4" />,
                                // onClick: () => console.log("Share clicked"),
                              },
                              {
                                label: 'Add Visit Report',
                                extra: <PlusIcon className="w-4 h-4" />,
                                // onClick: () => console.log("Share clicked"),
                              },
                              {
                                label: 'Assign Partner',
                                extra: <PartnerIcon className="w-4 h-4" />,
                                // onClick: () => console.log("Share clicked"),
                              },
                            ]}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 pt-5">
                  {/* Title */}
                  <div className="mb-4 ">
                    <Pera
                      title="Schedule Follow Up"
                      className="text-black pb-4"
                    />

                    {/* Assign to FE */}
                    <Label htmlFor="partnerName" className="pb-2">
                      Assign to FE
                    </Label>
                    <Input id="partnerName" placeholder="John Smith" />
                  </div>

                  {/* Partner Address */}
                  <div className="mb-4">
                    <Label htmlFor="partnerAddress" className="pb-2">
                      Partner Address
                    </Label>
                    <Input id="partnerAddress" placeholder="Enter Address" />
                  </div>

                  {/* Pincode */}
                  <div className="mb-4">
                    <Label htmlFor="pincode" className="pb-2">
                      Pincode
                    </Label>
                    <Input
                      id="pincode"
                      placeholder="Enter Pincode"
                      type="number"
                    />
                  </div>

                  {/* Contact no */}
                  <div className="mb-4">
                    <Label htmlFor="contact" className="pb-2">
                      Contact No.
                    </Label>
                    <Input
                      id="contact"
                      placeholder="Enter Contact No."
                      type="tel"
                    />
                  </div>

                  {/* Date */}
                  <div className="mb-4">
                    <Label htmlFor="date" className="pb-2">
                      Date
                    </Label>
                    <Input id="date" type="date" placeholder="Pick a date" />
                  </div>

                  {/* Time */}
                  <div className="mb-4">
                    <Label htmlFor="time" className="pb-2">
                      Time
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      placeholder="Pick a time slot"
                    />
                  </div>

                  {/* Follow up reason */}
                  <div className="mb-4">
                    <Label htmlFor="reason" className="pb-2">
                      Follow up reason
                    </Label>
                    <select
                      id="reason"
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400">
                      <option>Select a reason for follow up</option>
                      <option>Pending Document</option>
                      <option>Client Request</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Remarks */}
                  <div className="mb-4">
                    <Label htmlFor="remarks" className="pb-2">
                      Remarks
                    </Label>
                    <textarea
                      id="remarks"
                      placeholder="Enter any remarks or additional notes"
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-400 min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
            </div>
            <CardFooter className="border-t flex justify-end gap-2 ">
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
              <Button className="bg-[#B751FB] cursor-pointer">Save</Button>
            </CardFooter>
          </Card>
        </SheetContent>
      </Sheet>
    </>
  )
}
