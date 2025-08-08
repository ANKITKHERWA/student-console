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
      <SelectTrigger className="w-[130px]">
        <SelectValue placeholder="Select a Day" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a Day</SelectLabel>
          <SelectItem value="Last 7 days">Last 7 days</SelectItem>
          <SelectItem value="Last 30 days">Last 30 days</SelectItem>
          <SelectItem value="Last month">Last month</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
