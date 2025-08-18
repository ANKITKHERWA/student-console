import React from "react";

 
type TableHeadProps = {
  data: {
    title: string;
  }[];
  className?:string;
};

const TableHead: React.FC<TableHeadProps> = ({ data, className }) => {
  const head = data || [];

  return (
    <thead>
      <tr className="bg-[#fff] leading-[142%] tracking-normal text-[#808188]">
        {head.map((headItem, headIndex) => (
          <th
            key={headIndex}
            className={`td font-semibold md:px-3 px-1 sm:px-2 py-1.5 sm:py-3 md:py-3 lg:py-1.5 text-left ${className}`}
          >
            {headItem.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;

