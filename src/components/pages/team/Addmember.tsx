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
  image: z
    .any()
    .refine((file) => file?.length === 1, "Image is required")
    .refine(
      (file) => file?.[0]?.type.startsWith("image/"),
      "File must be an image"
    ),
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
  const [imagePreview, setImagePreview] = useState<string | null>(null);
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

  const handleImageChange = (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };

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
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        htmlFor="partner-image"
                        className="mb-2 font-semibold"
                      >
                        Profile Image
                      </FormLabel>
                      <FormControl>
                        {!imagePreview ? (
                          <div
                            className="relative border-dashed border-2 rounded-lg border-gray-300 flex flex-col items-center justify-center cursor-pointer h-44 w-full bg-[#fafafd] hover:border-[#B751FB] transition-all"
                            onClick={() =>
                              document.getElementById("partner-image")?.click()
                            }
                            onDrop={(e) => {
                              e.preventDefault();
                              field.onChange(e.dataTransfer.files);
                              handleImageChange(e.dataTransfer.files);
                            }}
                            onDragOver={(e) => e.preventDefault()}
                          >
                            {/* Use your SVG, Lucide, or Heroicons upload icon here */}
                            <svg
                              className="h-10 w-10 text-[#B751FB]"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4v12"
                              />
                            </svg>
                            <p className="mt-2 text-gray-600">
                              Drag and drop image or{" "}
                              <span
                                className="text-[#B751FB] underline cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  document
                                    .getElementById("partner-image")
                                    ?.click();
                                }}
                              >
                                browse
                              </span>
                            </p>
                            <input
                              id="partner-image"
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              onChange={(e) => {
                                field.onChange(e.target.files);
                                handleImageChange(e.target.files);
                              }}
                              tabIndex={-1}
                              style={{ display: "none" }}
                            />
                          </div>
                        ) : (
                          <div className="mt-2">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-full max-h-[200px] object-contain rounded-lg border"
                            />
                            {/* Optional: Add remove button */}
                            <button
                              type="button"
                              onClick={() => {
                                setImagePreview(null);
                                field.onChange(null);
                              }}
                              className="mt-2 text-sm text-red-500 underline"
                            >
                              Remove Image
                            </button>
                          </div>
                        )}
                      </FormControl>
                      <FormMessage />
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
