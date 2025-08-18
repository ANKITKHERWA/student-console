"use client";

import * as React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PdfIcon } from "@/components/helper/Icon2";

type PaymentModalProps = {
  triggerIcon?: React.ReactNode; // by default PDF icon
  title?: string;
  screenshot: string; // screenshot img path
};

const PaymentModal: React.FC<PaymentModalProps> = ({
  triggerIcon,
  title = "Payment Screenshot",
  screenshot,
}) => {
  return (
    <Dialog>
      {/* ✅ Trigger */}
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-none shadow-none"
        >
          {triggerIcon ? (
            triggerIcon
          ) : (
            <PdfIcon/>
          )}
        </Button>
      </DialogTrigger>

      {/* ✅ Content */}
      <DialogContent className="sm:max-w-[500px] h-[90%] !p-0">
        <DialogHeader className="p-2">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center items-center overflow-auto">
          <Image
            src={screenshot}
            alt="Payment Screenshot"
            width={468}
            height={640}
            className="rounded border"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
