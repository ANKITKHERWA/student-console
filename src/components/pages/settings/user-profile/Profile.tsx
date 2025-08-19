"use client";
import Pera from "@/components/common/Pera";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import SmallHeading from "@/components/common/SmallHeading";
import TopCommon from "@/components/common/TopCommon";
import { baProfileData, userProfileData } from "@/components/helper/Helper2";
import {
  LockIcon,
  ParsoneIcon,
  RightArrowIcon,
} from "@/components/helper/Icon2";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

const schema = z.object({
  displayName: z.string().min(1, "Display Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .max(15, "Phone must be max 15 digits")
    .regex(/^[0-9]+$/, "Phone must contain only numbers"),
});

function Profile() {
  const [countryCode, setCountryCode] = useState("+91");
  const [imageSrc, setImageSrc] = useState("/default-profile.png"); // default image
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<{
    displayName?: string[];
    email?: string[];
    phone?: string[];
  }>({});

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]; // single File (Blob) object
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = schema.safeParse({
      displayName: form.displayName,
      email: form.email,
      phone: form.phone,
    });
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }
    console.log(result);
    
    setErrors({});
    // handle update logic here, e.g. API call
  };

  return (
    <div>
      <TopCommon title="Setting" />
      <div className="md:px-5 px-4 lg:px-6 flex justify-center py-5 h-screen">
        <div className="w-full  max-w-[545px] my-auto">
          <h3 className="flex items-center gap-1 text-[#030712] text-base font-medium leading-[150%] -tracking-[0.32px]">
            <span className="text-[#808188]">Settings</span>
            <span className="mt-1">
              <RightArrowIcon />
            </span>
            <Link href={""} className="text-[#030712]">
              User Profiles
            </Link>
          </h3>
          {userProfileData.map((item, index) => (
            <div key={index} className="mt-5 md:mt-6 lg:mt-8">
              <div className="flex gap-2 md:gap-[15px] items-center border md:p-3 p-2 lg:p-[15px] rounded-[6px] border-[#E4E7EB]">
                <div>
                  <Image
                    src={imageSrc}
                    width={50}
                    height={50}
                    alt="User Profile"
                    className="rounded-full"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
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
                <Tabs defaultValue="parsonalDetails" className="w-full">
                  <TabsList className="w-full flex !justify-start !bg-transparent h-[30px] lg:h-[36px] border-b overflow-x-auto overflow-y-hidden rounded-none p-0 border-[#E4E7EB]">
                    <TabsTrigger
                      value={"parsonalDetails"}
                      className={`flex items-center gap-1 text-xs sm:text-sm md:gap-2 text-[#808188] h-[30px] lg:h-[36px] !border-b-[1.5px] md:!border-b-[3px] border-t-0 border-x-0 !rounded-none lg:!px-[23px] md:!px-5 sm:!px-4 !px-3 !shadow-none  data-[state=active]:border-[#B751FB] data-[state=active]:text-[#B751FB]`}
                    >
                      <ParsoneIcon />
                      Personal Details
                    </TabsTrigger>
                    <TabsTrigger
                      value={"changePassword"}
                      className={`flex items-center gap-1 text-xs sm:text-sm md:gap-2 text-[#808188] h-[30px] lg:h-[36px] !border-b-[1.5px] md:!border-b-[3px] border-t-0 border-x-0 !rounded-none lg:!px-[23px] md:!px-5 sm:!px-4 !px-3 !shadow-none  data-[state=active]:border-[#B751FB] data-[state=active]:text-[#B751FB]`}
                    >
                      <LockIcon /> Change Password
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value={"parsonalDetails"}>
                    <form onSubmit={onSubmitHandler}>
                      <div className="w-full pt-[30px] pb-[60px] flex flex-col gap-6">
                        <div className="grid w-full items-center gap-2 text-[#030712] text-sm font-semibold leading-[142%] -tracking-[0.28px]">
                          <label htmlFor="displayName">Display Name</label>
                          <Input
                            type="text"
                            id="displayName"
                            value={form.displayName}
                            onChange={handleChange}
                            placeholder="Wade Warren"
                            className="!ring-0 !rounded-[6px] h-[36px] !w-full"
                          />
                          {errors.displayName && (
                            <span className="text-red-500 text-xs">
                              {Array.isArray(errors.displayName)
                                ? errors.displayName[0]
                                : errors.displayName}
                            </span>
                          )}
                          <Pera
                            title="This is your public display name. It will be visible to everyone."
                            className="!text-xs"
                          />
                        </div>
                        <div className="grid w-full items-center gap-2 text-[#030712] text-sm font-semibold leading-[142%] -tracking-[0.28px]">
                          <label htmlFor="email">Email</label>
                          <Input
                            type="Email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="wade warren123@gmail.com"
                            className="!ring-0 !rounded-[6px] h-[36px] !w-full"
                          />
                          {errors.email && (
                            <span className="text-red-500 text-xs">
                              {Array.isArray(errors.email)
                                ? errors.email[0]
                                : errors.email}
                            </span>
                          )}
                          <Pera
                            title="This email is linked to your account can be used to authenticate and notification purpose."
                            className="!text-xs"
                          />
                        </div>
                        <div>
                          <div className="grid w-full items-center gap-2 text-[#030712] text-sm font-semibold leading-[142%] -tracking-[0.28px]">
                            <label htmlFor="phone">Phone no.</label>
                            <div className="flex gap-1">
                              <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="w-20 border border-gray-300 rounded-[6px] px-3 py-2 focus:outline-none"
                              >
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                              </select>
                              <Input
                                type="number"
                                id="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone no."
                                className="!ring-0 !rounded-[6px] h-[36px] !w-full"
                              />
                            </div>
                            {errors.phone && (
                              <span className="text-red-500 text-xs">
                                {Array.isArray(errors.phone)
                                  ? errors.phone[0]
                                  : errors.phone}
                              </span>
                            )}
                            <Pera
                              title="This mobile number is linked to your business account and required in case of password reset or other authentications."
                              className="!text-xs"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-[#E4E7EB] py-3 px-5 flex justify-end">
                        <PrimaryBtn title="Update" className="w-max" />
                      </div>
                    </form>
                  </TabsContent>
                  <TabsContent value={"changePassword"}>mansih</TabsContent>
                </Tabs>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
