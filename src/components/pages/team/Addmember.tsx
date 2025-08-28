"use client";
import { PlusIcon } from "@/components/helper/Icon2";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import SmallHeading from "@/components/common/SmallHeading";
import Selecte from "@/components/common/Selecte";
import Image from "next/image";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Enter Valid email",
  }),
  phoneNo: z.string().min(1, {
    message: "Enter Valid Phone Number",
  }),
  gender: z.string().min(1, {
    message: "Please select gender",
  }),
  role: z.string().min(1, {
    message: "Please select role",
  }),
  assigned: z.string().min(1, {
    message: "Please select role",
  }),
  facebookLink: z.string(),
  instagramLink: z.string(),
  lineAddress: z.string(),
  lineAddress2: z.string(),
  postalCode: z.string(),
  city: z.string(),
  staeprovinceRegion: z.string(),
  country: z.string(),
  profileImage: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

function Addmember() {
  const [open, setOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phoneNo: "",
      gender: "",
      role: "",
      assigned: "",
      facebookLink: "",
      instagramLink: "",
      lineAddress: "",
      lineAddress2: "",
      postalCode: "",
      city: "",
      staeprovinceRegion: "",
      country: "",
      profileImage: "",
    },
  });

  function onSubmit(data: FormValues) {
    // handle form submission
    console.log(data);
    // setOpen(false);
  }

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        <PlusIcon /> Add Member
      </Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="sm:!w-[400px] !w-full overflow-y-auto">
          <div className="px-4 py-5 ">
            <SmallHeading title="Add Member" />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 ">
              <div className="py-5 border-t border-grayE4 lg:px-5 px-4 flex flex-col sm:gap-3 gap-2.5 lg:gap-4">
                <FormField
                  control={form.control}
                  name="profileImage"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Profile Image
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setImagePreview(URL.createObjectURL(file));
                              field.onChange(file);
                            }
                          }}
                          className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                        />
                      </FormControl>
                      {/* Show preview below input */}
                      {imagePreview && (
                        <Image
                          width={340}
                          height={140}
                          src={imagePreview}
                          alt="Preview"
                          className="mt-2 w-16 h-16 object-cover rounded-full border"
                        />
                      )}
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="flex  flex-col gap-1">
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Name"
                          {...field}
                          className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex  flex-col gap-1">
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter address"
                          {...field}
                          className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNo"
                  render={({ field }) => (
                    <FormItem className="flex  flex-col gap-1">
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Phone No
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="ex. 0998 8891"
                          {...field}
                          className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Gender
                      </FormLabel>
                      <FormControl>
                        <Selecte
                          placeholder="Select gender"
                          options={[
                            { title: "Male", value: "male" },
                            { title: "Female", value: "female" },
                          ]}
                          className="w-full"
                          value={field.value}
                          onValueChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Role
                      </FormLabel>
                      <FormControl>
                        <Selecte
                          placeholder="Select role"
                          options={[
                            { title: "TC", value: "tc" },
                            { title: "RM", value: "rm" },
                            { title: "FE", value: "fe" },
                          ]}
                          className="w-full"
                          value={field.value}
                          onValueChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="assigned"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Assigned
                      </FormLabel>
                      <FormControl>
                        <Selecte
                          placeholder="Select assigned"
                          options={[
                            { title: "First", value: "first" },
                            { title: "Sec", value: "sec" },
                          ]}
                          className="w-full"
                          value={field.value}
                          onValueChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="py-5 border-t border-grayE4 lg:px-5 px-4 flex flex-col sm:gap-3 gap-2.5 lg:gap-4">
                <FormField
                  control={form.control}
                  name="facebookLink"
                  render={({ field }) => (
                    <FormItem className="flex  flex-col gap-1">
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Facebook Link
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.facebook.com/"
                          {...field}
                          className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="instagramLink"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1 ">
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Instagram Link
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://www.instagram.com/"
                          {...field}
                          className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
              </div>
              <div className="py-5 border-t border-grayE4 lg:px-5 px-4 flex flex-col sm:gap-3 gap-2.5 lg:gap-4">
                <div>
                  <SmallHeading
                    title="lineAddress"
                    className="!font-normal mb-[7px]"
                  />
                  <FormField
                    control={form.control}
                    name="lineAddress"
                    render={({ field }) => (
                      <FormItem className="flex  flex-col gap-1">
                        <FormLabel className="sm:text-sm text-xs mb-1">
                          Line 1
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Address 1"
                            {...field}
                            className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                          />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="lineAddress2"
                  render={({ field }) => (
                    <FormItem className="flex  flex-col gap-1">
                      <FormLabel className="sm:text-sm text-xs mb-1">
                        Line 2{" "}
                        <span className="!font-normal">( Optional )</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Address 2"
                          {...field}
                          className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                        />
                      </FormControl>
                      <FormMessage className="text-[10px]" />
                    </FormItem>
                  )}
                />
                <div>
                  <div className="grid grid-cols-2  sm:gap-4 gap-2.5">
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem className="flex  flex-col gap-1">
                          <FormLabel className="sm:text-sm text-xs mb-1">
                            Postal Code
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Postal code"
                              {...field}
                              className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                            />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="flex  flex-col gap-1">
                          <FormLabel className="sm:text-sm text-xs mb-1">
                            City
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="City"
                              {...field}
                              className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                            />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2  sm:gap-4 gap-2.5 mt-2.5">
                    <FormField
                      control={form.control}
                      name="staeprovinceRegion"
                      render={({ field }) => (
                        <FormItem className="flex  flex-col gap-1">
                          <FormLabel className="sm:text-sm text-xs mb-1">
                            State / Province / Region
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="State/Province/Region"
                              {...field}
                              className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                            />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem className="flex flex-col gap-1 !justify-between">
                          <div className="flex flex-col gap-1 !justify-between h-full">
                            <FormLabel className="sm:text-sm text-xs mb-1">
                              Country
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Country"
                                {...field}
                                className="sm:px-3 px-2 sm:py-2 py-1.5 border border-grayE4 sm:!rounded-sm !rounded !ring-0 sm:text-sm text-xs"
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 lg:px-5 px-4 justify-end py-4 border-t border-grayE4">
                <Button variant={"outline"} onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Addmember;
