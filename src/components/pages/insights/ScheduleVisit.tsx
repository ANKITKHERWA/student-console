"use client";

import Heading from "@/components/common/Heading";
import TableKebabMenu from "@/components/common/TableKebabMenu";
import { sidebarData } from "@/components/helper/Helper2";
import {
  CalenderBlackSmallIocn,
  ClenderIcon,
  FollowUpIcon,
  PartnerIcon,
  SmallEyeIcon,
  ViewReportIcon,
} from "@/components/helper/Icon2";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { check, z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import Pera from "@/components/common/Pera";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  nextVisit: z.string(),
  date: z.string().min(1, { message: "date is required." }),
  time: z.string().min(1, { message: "time is required." }),
  remarks: z.string().min(1, { message: "remarks is required." }),
  withRm: z.check,
});
export default function ScheduleVisit() {
  const [open, setOpen] = useState(false);
  // const [image, setImage] = useState<string | null>(null);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nextVisit: "",
      date: "",
      time: "",
      remarks: "",
      withRm: check,
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Submitted ", data);
    setOpen(false);
  }

  return (
    <>
      {/* <Button className="bg-[#B751FB] cursor-pointer"></Button> */}
      <button onClick={() => setOpen(true)} className="cursor-pointer">
        <ClenderIcon />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-[400px]  !max-w-none overflow-auto "
        >
          <SheetTitle className="sr-only">Add New Visit Form</SheetTitle>
          <div>
            <Heading
              title="Add New Visit"
              className="py-5 text-base! px-6 border-b"
            />
            {sidebarData?.map((itm, idx) => (
              <div key={idx} className="px-6 border-b">
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
                              className="flex items-center gap-1 text-xs"
                            >
                              <span>{contact.icon}</span>
                              <span>{contact.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between mt-5 ">
                        {itm.condetions.map((condetionItem, condIndex) => (
                          <span
                            key={condIndex}
                            className={` ${
                              condIndex === 0
                                ? "text-[#F13737]  "
                                : condIndex === 2
                                ? "text-[#F58400]"
                                : "text-[#5B14D1] "
                            } ${
                              condIndex === 1
                                ? "border-l"
                                : condIndex === 3
                                ? "border-r"
                                : ""
                            } text-xs leading-[166%] border-[#808188] -tracking-[0.24px]`}
                          >
                            {condetionItem.count}
                          </span>
                        ))}
                      </div>
                    </div>
                    <TableKebabMenu
                      items={[
                        {
                          label: "View as partner",
                          extra: <SmallEyeIcon className="w-4 h-4" />,
                          // onClick: () => console.log("Edit clicked"),
                        },
                        {
                          label: "View Report",
                          extra: <ViewReportIcon className="w-4 h-4" />,
                          // onClick: () => console.log("Delete clicked"),
                        },
                        {
                          label: "Add Visit",
                          extra: <CalenderBlackSmallIocn className="w-4 h-4" />,
                          // onClick: () => console.log("Share clicked"),
                        },
                        {
                          label: "Add Follow Up",
                          extra: <FollowUpIcon className="w-4 h-4" />,
                          // onClick: () => console.log("Share clicked"),
                        },
                        {
                          label: "Add Visit Report",
                          extra: <PlusIcon className="w-4 h-4" />,
                          // onClick: () => console.log("Share clicked"),
                        },
                        {
                          label: "Assign Partner",
                          extra: <PartnerIcon className="w-4 h-4" />,
                          // onClick: () => console.log("Share clicked"),
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            ))}
            <Form {...form}>
              <Pera
                title="Schedule New Visit"
                className="text-base text-black px-6 py-5"
              />
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 px-6"
              >
                <FormField
                  control={form.control}
                  name="nextVisit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="Assign to FE">Assign to FE</FormLabel>
                      <FormControl>
                        <select
                          id="Assign to FE"
                          {...field}
                          className="w-full rounded border p-2 text-base "
                        >
                          <option value="">Select partner type</option>
                          <option value="supplier">Supplier</option>
                          <option value="distributor">Distributor</option>
                          <option value="retailer">Retailer</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="withRm"
                  render={({}) => (
                    <FormItem className="flex">
                      <FormControl>
                        <Checkbox id="joinVisitRm" />
                      </FormControl>
                      <FormLabel htmlFor="joinVisitRm">
                        Join visit with RM{" "}
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="partner-date"> Date</FormLabel>
                      <FormControl>
                        <input
                          type="date"
                          id="partner-date"
                          placeholder="date"
                          {...field}
                          className="w-full rounded border p-2"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="Pick a Time slot">Time</FormLabel>
                      <FormControl>
                        <Input
                          id="Pick a Time slot"
                          type="time"
                          placeholder="time"
                          {...field}
                          className="w-full rounded border p-2 block"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="remarks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="remarks">Remarks</FormLabel>
                      <FormControl>
                        <textarea
                          id="remarks"
                          placeholder="Enter any remarks or additional notes"
                          {...field}
                          className="w-full rounded border p-2 block min-h-[80px] resize-y"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SheetFooter className="sticky bottom-0 bg-white">
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-[#B751FB]">
                      Submit
                    </Button>
                  </div>
                </SheetFooter>
              </form>
            </Form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
