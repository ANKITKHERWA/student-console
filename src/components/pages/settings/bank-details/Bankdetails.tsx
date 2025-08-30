'use client'
import Heading from '@/components/common/Heading'

import TopCommon from '@/components/common/TopCommon'

import React from 'react'
import { Businessdetails } from './Businessdetails'

import Comselect from '@/components/common/Comselect'
import BankCard from '@/components/common/TeamCard2'
import { Aaravdata, priyadata, Rameshdata } from '@/components/helper/Helper1'
import Search from '@/components/common/Search'
function Bankdetails() {
  return (
    <div>
      <TopCommon title="Setting" />
      <div className="lg:py-5 md:py-4 py-3 lg:px-6 md:px-5 px-4 border-b border-[#E4E7EB] flex justify-between items-center gap-2">
        <Heading
          title="Bank details"
          className="lg:!text-xl md:!text-lg !text-base"
        />
        <Businessdetails />
      </div>
      <div className="px-6 py-6 flex justify-between gap-4 flex-wrap">
        <div>
          <Comselect
            placeholder="Select Status"
            label="Select Status"
            options={['Aarav Sharma', 'Ramesh Patel', 'Priya Sharma']}
          />
        </div>
        <div>
          <Search />
        </div>
      </div>
      <div className="flex gap-4 px-6">
        <BankCard data={Aaravdata} />
        <BankCard data={Rameshdata} />
        <BankCard data={priyadata} />
      </div>
    </div>
  )
}

export default Bankdetails
