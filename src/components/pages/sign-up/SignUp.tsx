"use client";
import GoogleBtn from "@/components/common/GoogleBtn";
import Heading from "@/components/common/Heading";
import Pera from "@/components/common/Pera";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import TextInput from "@/components/common/TextInput";
import { MailIcon, ShowPassIcon } from "@/components/helper/Icon2";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// ✅ Updated Zod schema with confirmPassword match
export const loginSchema = z
  .object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type LoginFormData = z.infer<typeof loginSchema>;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Signup Data:", data);
  };

  return (
    <div className="lg:bg-[url('/assest/png/login-bg-img.png')] lg:bg-[length:50%_100%] bg-no-repeat bg-top md:bg-right min-h-dvh lg:pb-10">
      <div className="max-w-[1440px] mx-auto min-h-dvh">
        <div className="flex md:flex-row flex-col-reverse justify-between min-h-dvh">
          <div className="xl:pr-10 lg:w-1/2 w-full flex flex-col justify-between min-h-dvh ">
            <div className="lg:p-8 md:p-6 sm:p-5 p-4">
              <Link
                href={"/"}
                className="w-max block lg:max-w-[147px] max-w-[120px]"
              >
                <Image
                  src={"/assest/svg/logonavbar.svg"}
                  width={147}
                  height={34}
                  alt="logo"
                />
              </Link>
            </div>
            <div className="lg:px-8 md:px-6 sm:px-5 px-4  mt-10 w-full">
              <div className="mx-auto w-full max-w-[360px]">
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                  <Heading title="Log in" />
                  <Pera title="Welcome back! Please enter your account" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextInput
                    type="email"
                    id="email"
                    placeholder="ex. dasalon@gmail.com"
                    label="Email"
                    className="md:mt-6 sm:mt-5 mt-3 lg:mt-8"
                    register={register}
                    errors={errors}
                  />

                  <TextInput
                    type="password"
                    id="password"
                    placeholder="Password"
                    label="Password"
                    className="mt-5"
                    register={register}
                    errors={errors}
                    icon={<ShowPassIcon />}
                  />

                  <TextInput
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    className="mt-5"
                    register={register}
                    errors={errors}
                    icon={<ShowPassIcon />}
                  />

                  <PrimaryBtn
                    title="Create Account"
                    className="md:mt-5 mt-4 lg:mt-6"
                  />
                  <GoogleBtn
                    title="Sign up with Google"
                    className="mt-3 md:mt-4"
                  />

                  <p className="text-xs md:text-sm font-medium text-[#808188] justify-center md:mt-6 mt-5 lg:mt-8 leading-[142.857%] flex items-center text-center gap-1 -tracking-[0.28px]">
                    <span> Have an account?</span>
                    <Link href={"/login"} className="text-[#B751FB]">
                      Login
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="text-[#808188] text-xs md:text-sm font-medium leading-[142.857%] -tracking-[0.28px] flex items-center justify-between lg:p-8 md:p-6 sm:p-5 p-4 mt-10 lg:-mb-10">
              <span> © daSalon {new Date().getFullYear()}</span>
              <Link
                href={"mailto:"}
                className="flex items-center gap-1 md:gap-2"
              >
                <span>
                  <MailIcon />
                </span>
                help@dasalon.com
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-[#fff] md:w-1/2 lg:mt-10 md:mt-8 xl:mt-[82px] lg:ps-8 xl:ps-10 lg:pr-8 md:px-6 sm:px-5 px-4 lg:flex flex-col justify-center hidden">
            <Link
              href={"/"}
              className="md:py-6 sm:py-5 py-4 md:hidden block max-w-[120px] "
            >
              <Image
                src={"/assest/svg/logonavbar.svg"}
                width={147}
                height={34}
                alt="logo"
                className="w-full"
              />
            </Link>
            <Heading
              title="Organize all your salon activities properly & correctly!"
              className="!text-[#fff] md:-!text-3xl !text-2xl lg:!text-[36px] -tracking-[0.72px] !leading-[140%] max-w-[640px] md:text-start text-center"
            />
            <Pera
              title="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
              className="!text-[rgba(255,255,255,0.8)] lg:!text-lg md:!text-base !text-sm xl:!text-xl font-medium mt-3 !leading-[140%] !-tracking-[0.4px] md:text-start text-center"
            />
            <div>
              <Image
                src={"/assest/png/dashboard-img.png"}
                width={559}
                height={572}
                alt="dashboard img"
                className="mx-auto mt-6 md:mt-8 xl:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
