// "use client";

// import { z } from "zod";
// import { useState, useRef, useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import Link from "next/link";
// import Heading from "@/components/common/Heading";
// import Pera from "@/components/common/Pera";
// import TextInput from "@/components/common/TextInput";
// import PrimaryBtn from "@/components/common/PrimaryBtn";
// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { REGEXP_ONLY_DIGITS } from "input-otp";
// import Image from "next/image";
// import {
//   ChangeSecces,
//   MailIcon,
//   ShowPassIcon,
// } from "@/components/helper/Icon2";

// // ========== SCHEMAS ==========
// const emailSchema = z.object({
//   email: z.string().email({ message: "Invalid email address" }),
// });

// const codeSchema = z.object({
//   otp: z.array(z.string().length(1)).length(4, "Enter 4 digits"),
// });

// const passwordSchema = z
//   .object({
//     password: z.string().min(6, "Password too short"),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// // ========== COMPONENT ==========
// export default function ForgetPasswordFlow() {
//   const [step, setStep] = useState(1);
//   const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

//   const [otpError, setOtpError] = useState(false);

//   const [seconds, setSeconds] = useState(59);
//   const [showResend, setShowResend] = useState(false);

//   // Step 1: Email
//   const {
//     register: emailRegister,
//     handleSubmit: handleEmailSubmit,
//     formState: { errors: emailErrors },
//   } = useForm<z.infer<typeof emailSchema>>({
//     resolver: zodResolver(emailSchema),
//   });

//   // Step 2: Code
//   const {
//     control: codeControl,
//     handleSubmit: handleCodeSubmit,
//     formState: { errors: codeErrors },
//   } = useForm<z.infer<typeof codeSchema>>({
//     resolver: zodResolver(codeSchema),
//     defaultValues: { otp: ["", "", "", ""] },
//   });

//   // Step 3: New Password
//   const {
//     register: passRegister,
//     handleSubmit: handlePassSubmit,
//     formState: { errors: passErrors },
//   } = useForm<z.infer<typeof passwordSchema>>({
//     resolver: zodResolver(passwordSchema),
//   });

//   const onEmailSubmit = (data: z.infer<typeof emailSchema>) => {
//     console.log("Email:", data);
//     setStep(2);
//   };

//   const onCodeSubmit = (data: z.infer<typeof codeSchema>) => {
//     const enteredCode = data.otp.join("");
//     if (enteredCode === "1111") {
//       setStep(3);
//     } else {
//       alert("Invalid Code");
//     }
//     if (enteredCode === "1111") {
//       setOtpError(false); // ✅ clear any previous error
//       setStep(3);
//     } else {
//       setOtpError(true); // 🔴 show error
//     }
//   };

//   // const onPasswordSubmit = (data: z.infer<typeof passwordSchema>) => {
//   //   console.log("New Password:", data);
//   //   alert("Password reset successful!");
//   // };

//   const onPasswordSubmit = (data: z.infer<typeof passwordSchema>) => {
//     console.log("New Password:", data);
//     setStep(4); // Go to success screen
//   };

//   useEffect(() => {
//     if (step === 2 && seconds > 0) {
//       const timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (step === 2 && seconds === 0) {
//       setShowResend(true);
//     }
//   }, [seconds, step]);

//   return (
//     <>
//       <div className="max-w-[1440px] mx-auto w-full min-h-dvh lg:px-8 md:px-6 sm:px-5 px-4">
//         <div
//           className={`min-h-dvh flex flex-col items-center ${
//             step === 4 ? "justify-center" : "justify-between"
//           }`}
//         >
//           <div className="flex justify-center">
//             {step !== 4 && (
//               <Link
//                 href={"/"}
//                 className="w-max md:mt-10 mt-6 lg:mt-12 xl:mt-[68px] lg:max-w-[199px] md:max-w-[180px] max-w-[150px]"
//               >
//                 <Image
//                   src={"/assest/svg/logonavbar.svg"}
//                   width={199}
//                   height={46}
//                   alt="logo"
//                 />
//               </Link>
//             )}
//           </div>
//           <div className="w-full max-w-[440px] mx-auto mt-10">
//             {step === 1 && (
//               <>
//                 <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3">
//                   <Heading title="Verification Email" className="text-center" />
//                   <Pera
//                     title="Welcome back! Please enter your account"
//                     className="text-center"
//                   />
//                 </div>
//                 <form onSubmit={handleEmailSubmit(onEmailSubmit)}>
//                   <TextInput
//                     type="email"
//                     id="email"
//                     placeholder="ex. dasalon@gmail.com"
//                     label="Email"
//                     className="md:mt-6 sm:mt-5 mt-3 lg:mt-8"
//                     register={emailRegister}
//                     errors={emailErrors}
//                   />
//                   <Pera
//                     title="*We will send you a code to reset your password"
//                     className="text-xs font-medium text-[#030712] mt-2"
//                   />
//                   <PrimaryBtn title="Next" className="mt-6 lg:mt-8" />

//                   <p className="text-xs md:text-sm font-medium text-[#808188] justify-center mt-4 leading-[142.857%] flex items-center text-center gap-1 -tracking-[0.28px]">
//                     <span> Not Have an account?</span>
//                     <Link href={"/"} className="text-[#B751FB]">
//                       Sign Up
//                     </Link>
//                   </p>
//                 </form>
//               </>
//             )}

//             {step === 2 && (
//               <>
//                 <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3">
//                   <Heading title="Verification Code" className="text-center" />
//                   <p className="text-xs md:text-sm lg:text-base font-medium text-[#808188] justify-center  leading-[142.857%] flex items-center text-center gap-1 -tracking-[0.28px]">
//                     <span>Code verification send to </span>
//                     <Link href={"/"} className="text-[#B751FB]">
//                       Email@gmail.com
//                     </Link>
//                   </p>
//                 </div>
//                 <form
//                   onSubmit={handleCodeSubmit(onCodeSubmit)}
//                   className="mt-8"
//                 >
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Code Verification
//                   </label>
//                   <Controller
//                     control={codeControl}
//                     name="otp"
//                     render={({ field }) => (
//                       <InputOTP
//                         maxLength={4}
//                         value={field.value.join("")}
//                         onChange={(value) => {
//                           const digits = value.split("");
//                           field.onChange(digits);
//                         }}
//                         pattern={REGEXP_ONLY_DIGITS}
//                         className="!flex !flex-col"
//                       >
//                         <div>
//                           <InputOTPGroup className="flex gap-2 justify-center mx-auto">
//                             <InputOTPSlot
//                               index={0}
//                               className={`!rounded-[6px] lg:w-[66px] lg:h-[66px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] p-2 shadow-none bg-[white] border border-[#E4E4E7] md:text-base text-sm lg:text-xl !ring-0 ${
//                                 otpError ? "border-red-500" : "border-[#E4E4E7]"
//                               }`}
//                             />
//                             <InputOTPSlot
//                               index={1}
//                               className={`!rounded-[6px] lg:w-[66px] lg:h-[66px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] p-2 shadow-none bg-[white] border border-[#E4E4E7] md:text-base text-sm lg:text-xl !ring-0 font-semibold    ${
//                                 otpError ? "border-red-500" : "border-[#E4E4E7]"
//                               }`}
//                             />
//                             <InputOTPSlot
//                               index={2}
//                               className={`!rounded-[6px] lg:w-[66px] lg:h-[66px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] p-2 shadow-none bg-[white] border border-[#E4E4E7] md:text-base text-sm lg:text-xl !ring-0 font-semibold  ${
//                                 otpError ? "border-red-500" : "border-[#E4E4E7]"
//                               }`}
//                             />
//                             <InputOTPSlot
//                               index={3}
//                               className={`!rounded-[6px] lg:w-[66px] lg:h-[66px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] p-2 shadow-none bg-[white] border border-[#E4E4E7] md:text-base text-sm lg:text-xl !ring-0 font-semibold  ${
//                                 otpError ? "border-red-500" : "border-[#E4E4E7]"
//                               }`}
//                             />
//                             <div
//                               className={`!rounded-[6px] text-[#030712] font-semibold lg:w-[66px] lg:h-[66px] md:w-[50px] md:h-[50px] w-[35px] h-[35px] p-2 shadow-none bg-[#F1DCFF] border border-[#B751FB] md:text-base text-sm lg:text-xl !ring-0 flex justify-center items-center`}
//                             >
//                               {showResend ? (
//                                 <button
//                                   type="button"
//                                   onClick={() => {
//                                     setSeconds(59); // reset timer
//                                     setShowResend(false);
//                                     // optionally: trigger resend API call
//                                   }}
//                                   className="text-[#B751FB] text-xs md:text-sm font-semibold leading-[142.857%] -tracking-[0.28px] flex items-center justify-center underline"
//                                 >
//                                   Resend
//                                 </button>
//                               ) : (
//                                 <>00:{seconds < 10 ? `0${seconds}` : seconds}</>
//                               )}
//                             </div>
//                           </InputOTPGroup>
//                         </div>
//                         {otpError && (
//                           <p className="text-red-500 text-sm mt-1 ">
//                             *The code you entered is wrong
//                           </p>
//                         )}
//                       </InputOTP>
//                     )}
//                   />

//                   {codeErrors.otp && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {codeErrors.otp.message as string}
//                     </p>
//                   )}

//                   <PrimaryBtn title="Verification" className="mt-6 lg:mt-8" />
//                 </form>
//               </>
//             )}

//             {step === 3 && (
//               <>
//                 <div className="flex flex-col items-center gap-1 sm:gap-2 md:gap-3">
//                   <Heading title="New Password" className="text-center" />
//                   <Pera
//                     title="Add new password for your login account"
//                     className="text-center"
//                   />
//                 </div>
//                 <form onSubmit={handlePassSubmit(onPasswordSubmit)}>
//                   <TextInput
//                     type="password"
//                     id="password"
//                     placeholder="New Password"
//                     label="New Password"
//                     className="md:mt-6 sm:mt-5 mt-3 lg:mt-8"
//                     register={passRegister}
//                     errors={passErrors}
//                     icon={<ShowPassIcon />}
//                   />
//                   <TextInput
//                     type="password"
//                     id="confirmPassword"
//                     placeholder="Confirm Password"
//                     label="Confirm Password"
//                     className="mt-4"
//                     register={passRegister}
//                     errors={passErrors}
//                     icon={<ShowPassIcon />}
//                   />
//                   <PrimaryBtn title="Confirm" className="mt-6 lg:mt-8" />
//                 </form>
//               </>
//             )}

//             {step == 4 && (
//               <>
//                 <div className="flex justify-center items-center flex-col my-8">
//                   <ChangeSecces className="lg:w-[120px] lg:h-[120px] md:h-[100px] h-[80px] md:w-[100px] w-[80px]" />
//                   <Heading
//                     title="Succes Change Password!"
//                     className="xl:mt-8 lg:mt-6 md:mt-5 mt-4 text-center lg:!text-[28px]"
//                   />
//                   <Pera
//                     title="Congratulations, you have successfully changed your password, immediately log in with your new password"
//                     className="lg:mt-5 md:mt-4 sm:mt-3 mt-2 text-center !text-xs md:!text-sm"
//                   />
//                 </div>
//               </>
//             )}
//           </div>

//           {step !== 4 && (
//             <div className="text-[#808188] text-xs md:text-sm font-medium leading-[142.857%] -tracking-[0.28px] flex items-center lg:p-8 md:p-6 sm:p-5 p-4 mt-10 lg:-mb-10 w-full">
//               <span className=""> © daSalon {new Date().getFullYear()}</span>
//               <Link
//                 href={"mailto:"}
//                 className="flex items-center gap-1 md:gap-2"
//               >
//                 <span>
//                   <MailIcon />
//                 </span>
//                 help@dasalon.com
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import { DataTable, Payment } from '@/components/common/DataTable'
import TableCommon from '@/components/common/TableCommon'
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import React from 'react'


// Dummy data
type User = {
  id: number;
  name: string;
  email: string;
};

const data: User[] = [
  { id: 1, name: "Manish", email: "manish@example.com" },
  { id: 2, name: "Rahul", email: "rahul@example.com" },
];

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => info.getValue(),
  },
];
function VerificationCode() {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
  return (
    <div className="max-w-[1385px] px-6 mx-auto">
      <DataTable />
      <TableCommon table={table} columns={columns} />
    </div>
  );
}

export default VerificationCode
