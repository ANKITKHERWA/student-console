import React from "react";

type TableData = {
  head: { title: string }[];
};

type TableCommonProps = {
  data: TableData[];
};

const TableHead: React.FC<TableCommonProps> = ({ data }) => {
  // Assuming you want the head from the first element of data
  const head = data[0]?.head || [];

  return (
    <thead>
      <tr className="bg-[#fff] leading-[142%] tracking-normal text-[#808188]">
        {head.map((headItem, headIndex) => (
          <th
            key={headIndex}
            className="td font-semibold md:px-3 px-1 sm:px-2 py-1.5 sm:py-3 md:py-3 lg:py-1.5 text-left"
          >
            {headItem.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
