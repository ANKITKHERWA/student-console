"use client";

import Heading from "@/components/common/Heading";
import TableKebabMenu from "@/components/common/TableKebabMenu";
import { sidebarData } from "@/components/helper/Helper2";
import {
  CalenderBlackSmallIocn,
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
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/sheet";
import Pera from "@/components/common/Pera";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." }),
  date: z.string().min(1, { message: "date is required." }),
  time: z.string().min(1, { message: "time is required." }),
  remarks: z.string().min(1, { message: "remarks is required." }),
});
export default function AssgnPartner() {
  const [open, setOpen] = useState(false);
  // const [image, setImage] = useState<string | null>(null);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      date: "",
      time: "",
      remarks: "",
    },
  });
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Submitted ", data);
    setOpen(false);
  }

  return (
    <>
      <Button
        className="bg-[#B751FB] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Assign Partner
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:w-[400px] overflow-auto !max-w-none"
        >
          <SheetTitle className="sr-only">Assign Partner</SheetTitle>
          <div>
            <Heading
              title="Assign Partner"
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
                title="Assign Partner"
                className="text-base text-black px-6 py-5"
              />
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 px-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="Territory">
                        Territory Coordinator (TC )
                      </FormLabel>
                      <FormControl>
                        <select
                          id="Territory"
                          {...field}
                          className="w-full rounded border p-2 text-base "
                        >
                          <option value="">John Smith</option>
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
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="Relationship ">
                        Relationship Manager (RM)
                      </FormLabel>
                      <FormControl>
                        <select
                          id="Relationship"
                          {...field}
                          className="w-full rounded border p-2 text-base "
                        >
                          <option value="">Priya Sharma</option>
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
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="Field Executive">
                        Field Executive (FE)
                      </FormLabel>
                      <FormControl>
                        <select
                          id="Field Executive"
                          {...field}
                          className="w-full rounded border p-2 text-base "
                        >
                          <option value="">Anita Desai</option>
                          <option value="supplier">Supplier</option>
                          <option value="distributor">Distributor</option>
                          <option value="retailer">Retailer</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <SheetFooter className="bottom-0 sticky bg-white">
                  <div className="flex justify-end gap-2">
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
