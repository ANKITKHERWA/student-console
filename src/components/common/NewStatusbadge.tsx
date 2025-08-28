import React from "react";
import clsx from "clsx";

interface StatusBadgeProps {
  status: string;
}

const NewStatusbadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const label = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 py-[3px] text-xs font-medium w-max",
        {
          "bg-[#FFEFDB] text-[#030712] border border-[#F58400]":
            status === "New",
          "bg-[#EDEDED] text-[#030712] border border-[#ABABAB]":
            status === "Not Show",
          "bg-[rgba(91,20,209,0.20)] text-[#030712] border border-[#4710A3]":
            status === "Expired",
          "bg-[rgba(207,226,252,0.20)] text-[#030712] border border-[#8EBAF6]":
            status === "Confirmed",
          "bg-[rgba(255,136,136,0.34)] text-[#030712] border border-[#FF0000]":
            status === "Canceled",
          "bg-[#E3F7E9] text-[#030712] border border-[#7ACD92]":
            status === "Completed",
        }
      )}
    >
      <span
        className={clsx("h-1.5 w-1.5 rounded-full mr-1", {
          "bg-[#F58400]": status === "New",
          "bg-[#CCC]": status === "Not Show",
          "bg-[#4710A3]": status === "Expired",
          "bg-[#8EBAF6]": status === "Confirmed",
          "bg-[#FF0000]": status === "Canceled",
          "bg-[#7ACD92]": status === "Completed",
        })}
      />

      {label}
    </span>
  );
};

export default NewStatusbadge;
