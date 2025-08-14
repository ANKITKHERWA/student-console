"use client";
import React, { useState } from "react";
import { Sheet } from "@/components/ui/sheet";
import { Span } from "next/dist/trace";
import { it } from "date-fns/locale";

export type TableColumn<T> = {
  title: string;
  key?: keyof T; // If no render, get value from this key
  render?: (row: T) => React.ReactNode;
};

export type TableCommonProps<T> = {
  columns: TableColumn<T>[];
  rows: T[];
  sidebarContent?: (row: T) => React.ReactNode;
};

function Table<T extends object>({
  columns,
  rows,
  sidebarContent,
}: TableCommonProps<T>) {
  const [selectedRow, setSelectedRow] = useState<T | null>(null);

  return (
    <div className="overflow-auto border rounded-[6px] border-[#D9DDE3]">
      <table className="text-nowrap w-full text-xs sm:text-sm">
        <thead>
          <tr className="bg-[#fff] leading-[142%] tracking-normal text-[#808188]">
            {columns.map((col, idx) => (
              <th
                key={idx}
                className="font-semibold md:px-3 px-1 sm:px-2 py-2 sm:py-3 text-left"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr
              key={rIdx}
              className={`cursor-pointer hover:bg-[#F1DCFF] border-y border-[#D9DDE3] text-[#030712] ${
                selectedRow === row ? "bg-[#F1DCFF]" : ""
              }`}
              onClick={() => setSelectedRow(row)}
            >
              {columns.map((col, cIdx) => (
                <td
                  key={cIdx}
                  className="md:px-3 px-1 sm:px-2 py-2 sm:py-3 truncate max-w-[200px]"
                >
                  {col.render
                    ? col.render(row)
                    : col.key
                    ? String(row[col.key])
                    : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {sidebarContent && (
        <Sheet open={!!selectedRow} onOpenChange={() => setSelectedRow(null)}>
          {selectedRow && sidebarContent(selectedRow)}
        </Sheet>
      )}
    </div>
  );
}

export default Table;
