"use client";
import Pera from "@/components/common/Pera";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import SmallHeading from "@/components/common/SmallHeading";
import TopCommon from "@/components/common/TopCommon";
import { userProfileData } from "@/components/helper/Helper2";
import {
  LockIcon,
  ParsoneIcon,
  RightArrowIcon,
  ShowPassIcon,
} from "@/components/helper/Icon2";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

// ✅ Profile schema
const schema = z.object({
  displayName: z.string().min(1, "Display Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone must be at least 10 digits")
    .max(15, "Phone must be max 15 digits")
    .regex(/^[0-9]+$/, "Phone must contain only numbers"),
});

// ✅ Password schema (without confirm password)
const passwordSchema = z.object({
  oldPassword: z.string().min(6, "Old password is required"),
  newPassword: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

function Profile() {
  const [countryCode, setCountryCode] = useState("+91");
  const [imageSrc, setImageSrc] = useState("/assest/svg/dashboard-2nd.svg"); // default image
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

  // ✅ Password form state
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const [passwordErrors, setPasswordErrors] = useState<{
    oldPassword?: string[];
    newPassword?: string[];
  }>({});

  // ✅ Show/hide password toggles
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // ✅ File uploader
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // ✅ profile form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  // ✅ password form change
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordForm({
      ...passwordForm,
      [e.target.id]: e.target.value,
    });
  };

  // ✅ profile form submit
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }
    console.log("Profile Updated ✅", result.data);
    setErrors({});
  };

  // ✅ password form submit
  const onPasswordSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = passwordSchema.safeParse(passwordForm);
    if (!result.success) {
      setPasswordErrors(result.error.flatten().fieldErrors);
      return;
    }
    console.log("Password Changed ✅", result.data);
    setPasswordErrors({});
  };

  return (
    <div className="h-screen">
      <TopCommon title="Setting" />
      <div className="md:px-5 px-4 lg:px-6 flex justify-center py-5 h-[80%]">
        <div className="w-full max-w-[545px] my-auto">
          <h3 className="flex items-center gap-1 text-[#030712] text-base font-medium leading-[150%] -tracking-[0.32px]">
            <Link href={"/settings"} className="text-[#808188]">
              Settings
            </Link>
            <span className="mt-1">
              <RightArrowIcon />
            </span>
            <span className="text-[#030712]">User Profiles</span>
          </h3>
          {userProfileData.map((item, index) => (
            <div key={index} className="mt-5 md:mt-6 lg:mt-8">
              <div className="flex gap-2 md:gap-[15px] items-center border md:p-3 p-2 lg:p-[15px] rounded-[6px] border-[#E4E7EB]">
                <div className="relative">
                  <Image
                    src={imageSrc}
                    width={50}
                    height={50}
                    alt="User Profile"
                    className="rounded-full"
                  />
                  <Image
                    src={"/assest/svg/profile-pic-layer.svg"}
                    width={50}
                    height={50}
                    alt="img"
                    className="absolute top-0 w-full h-full"
                  />{" "}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute top-0 w-full h-full"
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

                  {/* Personal Details */}
                  <TabsContent value={"parsonalDetails"}>
                    <form onSubmit={onSubmitHandler}>
                      <div className="w-full lg:pt-[30px] md:pt-5 pt-3 lg:pb-[60px] md:pb-12 pb-8 h-full flex flex-col lg:gap-6 md:gap-5 sm:gap-4 gap-3">
                        <div className="grid w-full items-center md:gap-2 gap-1 text-[#030712] md:text-sm text-xs font-semibold leading-[142%] -tracking-[0.28px]">
                          <label htmlFor="displayName">Display Name</label>
                          <Input
                            type="text"
                            id="displayName"
                            value={form.displayName}
                            onChange={handleChange}
                            placeholder="Wade Warren"
                            className="!ring-0 md:!rounded-[6px] !rounded md:h-[36px] h-[30px] !w-full md:text-sm text-xs px-2 md:px-3"
                          />
                          {errors.displayName && (
                            <span className="text-red-500 text-xs">
                              {errors.displayName[0]}
                            </span>
                          )}
                          <Pera
                            title="This is your public display name. It will be visible to everyone."
                            className="!text-xs"
                          />
                        </div>

                        <div className="grid w-full items-center gap-1 md:gap-2 text-[#030712]  md:text-sm text-xs font-semibold leading-[142%] -tracking-[0.28px]">
                          <label htmlFor="email">Email</label>
                          <Input
                            type="Email"
                            id="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="wade warren123@gmail.com"
                            className="!ring-0 md:!rounded-[6px] !rounded md:h-[36px] h-[30px] !w-full md:text-sm text-xs px-2 md:px-3"
                          />
                          {errors.email && (
                            <span className="text-red-500 text-xs">
                              {errors.email[0]}
                            </span>
                          )}
                          <Pera
                            title="This email is linked to your account can be used to authenticate and notification purpose."
                            className="!text-xs"
                          />
                        </div>

                        <div>
                          <div className="grid w-full items-center gap-1 md:gap-2 text-[#030712]  md:text-sm text-xs font-semibold leading-[142%] -tracking-[0.28px]">
                            <label htmlFor="phone">Phone no.</label>
                            <div className="flex gap-1">
                              <select
                                value={countryCode}
                                onChange={(e) => setCountryCode(e.target.value)}
                                className="w-20 border border-gray-300 md:rounded-[6px] rounded md:px-3 px-2 md:h-[36px] h-[30px] focus:outline-none md:text-sm text-xs"
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
                                className="!ring-0 md:!rounded-[6px] !rounded md:h-[36px] h-[30px] !w-full md:text-sm text-xs px-2 md:px-3"
                              />
                            </div>
                            {errors.phone && (
                              <span className="text-red-500 text-xs">
                                {errors.phone[0]}
                              </span>
                            )}
                            <Pera
                              title="This mobile number is linked to your business account and required in case of password reset or other authentications."
                              className="!text-xs"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-[#E4E7EB] py-3 md:px-5 flex justify-end">
                        <PrimaryBtn title="Update" className="w-max" />
                      </div>
                    </form>
                  </TabsContent>

                  {/* Change Password */}
                  <TabsContent value={"changePassword"}>
                    <form onSubmit={onPasswordSubmitHandler}>
                      <div className="w-full lg:pt-[30px] md:pt-5 pt-3 lg:pb-[60px] md:pb-12 pb-8 flex flex-col lg:gap-6 md:gap-5 sm:gap-4 gap-3">
                        {/* Old Password */}
                        <div className="grid md:gap-2 gap-1 font-semibold text-[#030712]  md:text-sm text-xs">
                          <label htmlFor="oldPassword">Old Password</label>
                          <div className="relative">
                            <Input
                              type={showOldPassword ? "text" : "password"}
                              id="oldPassword"
                              value={passwordForm.oldPassword}
                              onChange={handlePasswordChange}
                              placeholder="Enter old password"
                              className="!ring-0 md:!rounded-[6px] !rounded md:h-[36px] h-[30px] !w-full md:text-sm text-xs px-2 md:px-3"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowOldPassword(!showOldPassword)
                              }
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-blue-600"
                            >
                              <ShowPassIcon className="h-full" />
                            </button>
                          </div>
                          {passwordErrors.oldPassword && (
                            <span className="text-red-500 text-xs">
                              {passwordErrors.oldPassword[0]}
                            </span>
                          )}
                        </div>

                        {/* New Password */}
                        <div className="grid gap-2 font-semibold text-[#030712]  md:text-sm text-xs">
                          <label htmlFor="newPassword">New Password</label>
                          <div className="relative">
                            <Input
                              type={showNewPassword ? "text" : "password"}
                              id="newPassword"
                              value={passwordForm.newPassword}
                              onChange={handlePasswordChange}
                              placeholder="Enter new password"
                              className="!ring-0 md:!rounded-[6px] !rounded md:h-[36px] h-[30px] !w-full md:text-sm text-xs px-2 md:px-3"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setShowNewPassword(!showNewPassword)
                              }
                              className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-blue-600"
                            >
                              <ShowPassIcon />
                            </button>
                          </div>
                          {passwordErrors.newPassword && (
                            <span className="text-red-500 text-xs">
                              {passwordErrors.newPassword[0]}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="border-t border-[#E4E7EB] py-3 md:px-5 flex justify-end">
                        <PrimaryBtn title="Change Password" className="w-max" />
                      </div>
                    </form>
                  </TabsContent>
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
