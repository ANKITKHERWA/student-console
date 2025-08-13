import React from "react";
import clsx from "clsx";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const label = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2 text-xs font-medium",
        {
          "bg-[#E3F7E9] text-[#030712] border border-[rgba(49,165,83,1)]":
            status === "active",
          "bg-[#EDEDED] text-[#030712] border border-[#ABABAB]":
            status === "expired",
          "bg-[#FFEFDB] text-[] border border-[#FFAB47]": status === "due",
        }
      )}
    >
      <span
        className={clsx("h-1.5 w-1.5 rounded-full mr-1", {
          "bg-[#7ACD92] ": status === "active",
          "bg-[#CCC]": status === "expired",
          "bg-[#FFAB47]": status === "due",
        })}
      />
     
      {label}
    </span>
  );
};

export default StatusBadge;
