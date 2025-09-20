"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type SheetContextType = {
  open: boolean;
  openSheet: (content: ReactNode, title?: string) => void;
  closeSheet: () => void;
};

const SheetContext = createContext<SheetContextType | undefined>(undefined);

export const useSheet = () => {
  const context = useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used inside SheetProvider");
  }
  return context;
};

export function SheetProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);
  const [title, setTitle] = useState<string>("");

  const openSheet = (content: ReactNode, title?: string) => {
    setContent(content);
    if (title) setTitle(title);
    setOpen(true);
  };

  const closeSheet = () => setOpen(false);

  return (
    <SheetContext.Provider value={{ open, openSheet, closeSheet }}>
      {children}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{title || "Details"}</SheetTitle>
          </SheetHeader>
          <div className="py-4">{content}</div>
        </SheetContent>
      </Sheet>
    </SheetContext.Provider>
  );
}
