import CommonChart from '@/components/common/CommonChart'
import HorizontalBarChart from '@/components/common/HorizontalBarChart'
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
import React from 'react'

function Sales() {
  return (
    <>
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
        <CommonChart data={giftcardData} title="Gift Card" barColor="#BB6BD9" />
      </div>
      <div className="grid items-center justify-between gap-9 grid-cols-1 md:grid-cols-2  px-6 mt-10">
        <HorizontalBarChart title="Top 10 Services" data={top10Services} />
        <HorizontalBarChart
          title="Top 10 Selling Products"
          data={top10SellingProducts}
        />
      </div>
    </>
  )
}

export default Sales
