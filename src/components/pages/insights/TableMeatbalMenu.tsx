import TableKebabMenu from '@/components/common/TableKebabMenu';
import { CalenderBlackSmallIocn, FollowUpIcon, PartnerIcon, PlusIcon, SmallEyeIcon, ViewReportIcon } from '@/components/helper/Icon2';
import React from 'react'

function TableMeatbalMenu() {
  return (
    <div>
      <TableKebabMenu
        items={[
          {
            label: "View as partner",
            extra: <SmallEyeIcon className="w-4 h-4" />,
            // onClick: () => console.log("Edit clicked"),
          },
          {
            label: "View Report",
            extra: <ViewReportIcon className="w-4 h-4" />,
            // onClick: () => console.log("Delete clicked"),
          },
          {
            label: "Add Visit",
            extra: <CalenderBlackSmallIocn className="w-4 h-4" />,
            // onClick: () => console.log("Share clicked"),
          },
          {
            label: "Add Follow Up",
            extra: <FollowUpIcon className="w-4 h-4" />,
            // onClick: () => console.log("Share clicked"),
          },
          {
            label: "Add Visit Report",
            extra: <PlusIcon className="w-4 h-4" />,
            onClick: () => console.log("Share clicked"),
          },
          {
            label: "Assign Partner",
            extra: <PartnerIcon className="w-4 h-4" />,
            // onClick: () => console.log("Share clicked"),
          },
        ]}
      />
    </div>
  );
}

export default TableMeatbalMenu