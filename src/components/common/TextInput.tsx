"use client";

import React from "react";
import { Input } from "../ui/input";
import {
  FieldErrors,
  UseFormRegister,
  Path,
  FieldValues,
} from "react-hook-form";

interface IProps<T extends FieldValues> {
  type: string;
  id: Path<T>;
  placeholder: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
}

const TextInput = <T extends FieldValues>({
  type,
  id,
  placeholder,
  label,
  icon,
  className,
  register,
  errors,
}: IProps<T>) => {
  return (
    <div className={`${className} flex gap-1.5 md:gap-2 flex-col`}>
      <label
        htmlFor={id}
        className="text-[#030712] text-sm font-semibold leading-[142.857%] -tracking-[0.28px]"
      >
        {label}
      </label>
      <div className="md:py-2 py-1 px-1.5 md:px-2.5 border border-[#E4E4E7] gap-2.5 !rounded-[6px] flex justify-between items-center">
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(id)}
          className="border-none md:h-auto h-[25px] shadow-none !ring-0 p-0 bg-[white] text-xs md:text-sm"
        />
        <span>{icon}</span>
      </div>
      {errors && errors[id] && (
        <p className="text-red-500 text-xs">
          {(errors[id]?.message as unknown as string) || "Error"}
        </p>
      )}
    </div>
  );
};

export default TextInput;
