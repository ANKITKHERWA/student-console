"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  remarks: z
    .string()
    .min(5, "Remarks must be at least 5 characters long")
    .max(500, "Remarks must be less than 500 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Remark() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      remarks: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <div
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:mt-6 sm:mt-5 mt-4 space-y-2.5"
    >
      <label className="block text-base font-semibold leading-[125%] -tracking-[0.32px] text-[#030712]">
        Remarks
      </label>
      <textarea
        {...register("remarks")}
        placeholder="Enter remarks for Catalog & Staff performance....."
        className="w-full border text-[#030712] placeholder:text-[#030712] border-[#E4E4E7] rounded-[6px] p-3  focus:ring-purple-500"
        rows={3}
      ></textarea>
      {errors.remarks && (
        <p className="text-red-500 text-sm">{errors.remarks.message}</p>
      )}
    </div>
  );
}
