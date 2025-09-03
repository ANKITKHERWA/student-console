import CommonChart from '@/components/common/CommonChart'
import Comselect from '@/components/common/Comselect'
import Heading from '@/components/common/Heading'
import HorizontalBarChart from '@/components/common/HorizontalBarChart'
import Pera2 from '@/components/common/Pera2'
import TopCommon from '@/components/common/TopCommon'
import {
  giftcardData,
  membershipData,
  packageData,
  productData,
  serviceData,
  top10SellingProducts,
  top10Services,
  voucherData,
} from '@/components/helper/Helper1'
import {
  IconEmploee,
  IconPeople,
  IconPepoleregular,
} from '@/components/helper/Icon1'
import React from 'react'

function Sales() {
  return (
    <>
      <div>
        <TopCommon title="Sales" />
        <div className="lg:py-5 md:py-4 py-3 lg:px-6 md:px-5 px-4 border-b border-[#E4E7EB] flex justify-between items-center gap-2">
          <Heading
            title="Territory details"
            className="lg:!text-xl md:!text-lg !text-base"
          />
          <div className="text-end">
            <Pera2
              title="Total Salon Active"
              className="text-[#808188] text-sm leading-[171%]"
              span=": 1430"
              spanClassName="text-[#030712] text-sm leading-[171%]   "
            />
            <Pera2
              title="Registered"
              className="text-[#808188] text-sm leading-[171%]"
              span=": 1850"
              spanClassName="text-[#030712] text-sm leading-[171%]   "
            />
          </div>
        </div>
        <div className="flex justify-between items-center py-6 px-6 flex-wrap gap-4">
          <div className="flex gap-4 flex-wrap ">
            <Comselect
              placeholderIcon={<IconPeople />}
              placeholder="Select TC"
              label="Select Tc"
              options={['ankit', 'rahul ', 'monu']}
            />
            <Comselect
              placeholderIcon={<IconEmploee />}
              placeholder="Select RM"
              label="Select Rm"
              options={['Last 7 Days', 'Last 30 days', 'Last month']}
            />
            <Comselect
              placeholderIcon={<IconPepoleregular />}
              placeholder="Select FE"
              label="Select FE"
              options={['Last 7 Days', 'Last 30 days', 'Last month']}
            />
          </div>
          <div>
            <Comselect
              placeholder="Last 7 Days"
              label="Last Days"
              options={['Last 7 Days', 'Last 30 days', 'Last month']}
            />
          </div>
        </div>

        <div className="grid items-center justify-between gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
          <CommonChart data={serviceData} title="Service" barColor="#BB6BD9" />
          <CommonChart data={packageData} title="Package" barColor="#BB6BD9" />
          <CommonChart data={productData} title="Product" barColor="#BB6BD9" />
          <CommonChart data={voucherData} title="Voucher" barColor="#BB6BD9" />
          <CommonChart
            data={membershipData}
            title="Membership"
            barColor="#BB6BD9"
          />
          <CommonChart
            data={giftcardData}
            title="Gift Card"
            barColor="#BB6BD9"
          />
        </div>
        <div className="grid items-center justify-between gap-9 grid-cols-1 md:grid-cols-2  px-6 my-10">
          <HorizontalBarChart title="Top 10 Services" data={top10Services} />
          <HorizontalBarChart
            title="Top 10 Selling Products"
            data={top10SellingProducts}
          />
        </div>
      </div>
    </>
  )
}

export default Sales
