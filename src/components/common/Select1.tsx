import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select1() {
  return (
    <Select>
      <SelectTrigger className="w-[125px]">
        <SelectValue placeholder="Last 7 Days" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Last 7 Days</SelectItem>
          <SelectItem value="banana">Last 30 Days</SelectItem>
          <SelectItem value="blueberry">Last Month</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
