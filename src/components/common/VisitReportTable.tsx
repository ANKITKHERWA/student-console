// components/CommonTable.tsx
import React from "react";

type Th = {
  th: string;
};

type TdCell = {
  td: string;
};

type TdRow = {
  td: TdCell[];
};

type TableData = {
  th: Th[];
  tdRow: TdRow[];
};

type CommonTableProps = {
  data: TableData[];
  className?: string;
};

export default function VisitReportTable({
  data,
  className,
}: CommonTableProps) {
  return (
    <div className="overflow-auto">
      {data.map((itm, idx) => (
        <table
          key={idx}
          className="w-full border-collapse sm:text-sm text-xs"
        >
          <thead className="bg-[#F9FAFB] text-[#808188] leading-[142%] -tracking-[0.28px]">
            <tr>
              {itm.th.map((thItm, thIndex) => (
                <th
                  key={thIndex}
                  className="lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 text-left !font-semibold"
                >
                  {thItm.th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#030712] leading-[142%] -tracking-[0.28px]">
            {itm.tdRow.map((tdItm, tdRowIndex) => (
              <tr key={tdRowIndex} className="border-y border-[#E4E7EB]">
                {tdItm.td.map((tdItem, tdindex) => (
                  <td
                    key={tdindex}
                    className={`lg:px-6 md:px-5 sm:px-4 px-3 lg:py-4 sm:py-3 py-2 ${className}`}
                  >
                    {tdItem.td}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
}
