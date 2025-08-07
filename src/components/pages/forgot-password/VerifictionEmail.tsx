"use client";
import Heading from "@/components/common/Heading";
import Pera from "@/components/common/Pera";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import TextInput from "@/components/common/TextInput";
import { MailIcon } from "@/components/helper/Icon2";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export const emailVerifictionSchema = z.object({
  email: z.string().email("Invalid email"),
});

type emailVerifiction = z.infer<typeof emailVerifictionSchema>;
function VerifictionEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<emailVerifiction>({
    resolver: zodResolver(emailVerifictionSchema),
  });

  const onSubmit = (data: emailVerifiction) => {
    console.log("Login Data:", data);
  };
  return (
    <div className="max-w-[1440px] mx-auto w-full min-h-dvh lg:px-8 md:px-6 sm:px-5 px-4">
      <div className="min-h-dvh flex flex-col items-center justify-between">
        <div className="flex justify-center">
          <Link href={"/"} className="w-max md:mt-10 mt-6 lg:mt-12 xl:mt-[68px] lg:max-w-[199px] md:max-w-[180px] max-w-[150px]">
            <Image
              src={"/assest/svg/logonavbar.svg"}
              width={199}
              height={46}
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-full max-w-[440px]">
          <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3">
            <Heading title="Verification Email" className="text-center" />
            <Pera
              title="Welcome back! Please enter your account"
              className="text-center"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              type="email"
              id="email"
              placeholder="ex. dasalon@gmail.com"
              label="Email"
              className="md:mt-6 sm:mt-5 mt-3 lg:mt-8"
              register={register}
              errors={errors} // ✅ pass full object here
            />
            <Pera
              title="*We will send you a code to reset your password"
              className="md:!text-sm !text-xs !font-medium !text-[#030712] mt-1 md:mt-2"
            />
            <PrimaryBtn title="Login" className="mt-6 lg:mt-8" />
            <p className="text-xs md:text-sm font-medium text-[#808188] justify-center md:mt-3 mt-2 lg:mt-4 leading-[142.857%] flex items-center text-center gap-1 -tracking-[0.28px]">
              <span> Not Have an account?</span>
              <Link href={"/"} className="text-[#B751FB]">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
        <div className="text-[#808188] text-xs md:text-sm font-medium leading-[142.857%] -tracking-[0.28px] flex items-center justify-between lg:p-8 md:p-6 sm:p-5 p-4 mt-10 lg:-mb-10 w-full">
          <span className=""> © daSalon {new Date().getFullYear()}</span>
          <Link href={"mailto:"} className="flex items-center gap-1 md:gap-2">
            <span>
              <MailIcon />
            </span>
            help@dasalon.com
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VerifictionEmail;
