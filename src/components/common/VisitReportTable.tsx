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
    <>
      {data.map((itm, idx) => (
        <table key={idx} className="w-full border-collapse text-sm min-[500px]">
          <thead className="bg-[#F9FAFB] text-[#808188] text-sm  leading-[142%] -tracking-[0.28px]">
            <tr>
              {itm.th.map((thItm, thIndex) => (
                <th
                  key={thIndex}
                  className="px-6 py-2 text-left !font-semibold"
                >
                  {thItm.th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-[#030712] text-sm leading-[142%] -tracking-[0.28px]">
            {itm.tdRow.map((tdItm, tdRowIndex) => (
              <tr key={tdRowIndex} className="border-y border-[#E4E7EB]">
                {tdItm.td.map((tdItem, tdindex) => (
                  <td
                    key={tdindex}
                    className={`px-6 py-4 text-nowrap ${className}`}
                  >
                    {tdItem.td}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ))}
    </>
  );
}
