"use client";

import { z } from "zod";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import Heading from "@/components/common/Heading";
import Pera from "@/components/common/Pera";
import TextInput from "@/components/common/TextInput";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { useFormContext, useWatch } from "react-hook-form";

// ========== SCHEMAS ==========
const emailSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

const codeSchema = z.object({
  otp: z.array(z.string().length(1)).length(4, "Enter 4 digits"),
});

const passwordSchema = z
  .object({
    password: z.string().min(6, "Password too short"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ========== COMPONENT ==========
export default function ForgetPasswordFlow() {
  const [step, setStep] = useState(1);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Step 1: Email
  const {
    register: emailRegister,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors },
  } = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
  });

  // Step 2: Code
  const {
    register: codeRegister,
    handleSubmit: handleCodeSubmit,
    formState: { errors: codeErrors },
  } = useForm<z.infer<typeof codeSchema>>({
    resolver: zodResolver(codeSchema),
    defaultValues: { otp: ["", "", "", ""] },
  });

  // Step 3: New Password
  const {
    register: passRegister,
    handleSubmit: handlePassSubmit,
    formState: { errors: passErrors },
  } = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
  });

  const onEmailSubmit = (data: z.infer<typeof emailSchema>) => {
    console.log("Email:", data);
    setStep(2);
  };

  const onCodeSubmit = (data: z.infer<typeof codeSchema>) => {
    const enteredCode = data.otp.join("");
    if (enteredCode === "1111") {
      setStep(3);
    } else {
      alert("Invalid Code");
    }
  };

  const onPasswordSubmit = (data: z.infer<typeof passwordSchema>) => {
    console.log("New Password:", data);
    alert("Password reset successful!");
  };

  return (
    <div className="w-full max-w-[440px] mx-auto mt-10">
      <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3">
        <Heading title="Forget Password" className="text-center" />
        <Pera
          title="Please complete the steps to reset your password"
          className="text-center"
        />
      </div>

      {step === 1 && (
        <form onSubmit={handleEmailSubmit(onEmailSubmit)}>
          <TextInput
            type="email"
            id="email"
            placeholder="ex. dasalon@gmail.com"
            label="Email"
            className="md:mt-6 sm:mt-5 mt-3 lg:mt-8"
            register={emailRegister}
            errors={emailErrors}
          />
          <Pera
            title="*We will send you a code to reset your password"
            className="text-xs font-medium text-[#030712] mt-2"
          />
          <PrimaryBtn title="Next" className="mt-6 lg:mt-8" />
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleCodeSubmit(onCodeSubmit)}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Verification Code
          </label>

          {/* <InputOTP
            maxLength={4}
            {...codeRegister("otp", {
              onChange: (e) => {
                const value = e.target.value;
                if (value.length === 4) {
                  const digits = value.split("");
                  setValue("otp", digits);
                }
              },
            })}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP> */}

          {codeErrors.otp && (
            <p className="text-red-500 text-sm mt-1">
              {codeErrors.otp.message as string}
            </p>
          )}

          <PrimaryBtn title="Verify Code" className="mt-6 lg:mt-8" />
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handlePassSubmit(onPasswordSubmit)}>
          <TextInput
            type="password"
            id="password"
            placeholder="New Password"
            label="New Password"
            className="md:mt-6 sm:mt-5 mt-3 lg:mt-8"
            register={passRegister}
            errors={passErrors}
          />
          <TextInput
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            label="Confirm Password"
            className="mt-4"
            register={passRegister}
            errors={passErrors}
          />
          <PrimaryBtn title="Reset Password" className="mt-6 lg:mt-8" />
        </form>
      )}

      {/* Footer */}
      <p className="text-xs md:text-sm font-medium text-[#808188] justify-center mt-4 leading-[142.857%] flex items-center text-center gap-1 -tracking-[0.28px]">
        <span>Remembered your password?</span>
        <Link href="/login" className="text-[#B751FB]">
          Login
        </Link>
      </p>
    </div>
  );
}
