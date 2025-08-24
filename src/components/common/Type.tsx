// Types.ts
import React from "react";

export type SaloneName = {
  img: string;
  name: string;
};

export type Issue = {
  issu1: string;
  issu2: string;
};

export type Td = {
  saloneName?: SaloneName[];
  add?: string;
  health?: string;
  issue?: Issue[];
  staff?: string;
  onboarding?: string;
  bankAcc?: string;
  monthlyTarget?: string;
  subscription?: string;
  lastVisit?: string;
  nextVisit?: string;
  tcName?: string;
  rmName?: string;
  feName?: string;
  action?: React.ReactNode | React.ReactNode[];
  tdData?: string | number | React.ReactElement;
};

export type Iprops = {
  id: number;
  td: Td[];
};
