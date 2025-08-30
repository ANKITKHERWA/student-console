import React from 'react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select'

interface Iprops {
  placeholder?: string
  label?: string
  placeholderIcon?: React.ReactNode
  options: string[]
  className?: string
}

const Comselect: React.FC<Iprops> = ({
  placeholder = 'Select...',
  label,
  placeholderIcon,
  options,
  className,
}) => {
  return (
    <Select>
      <SelectTrigger className={className ?? 'w-[130px]'}>
        <div className="flex items-center gap-2">
          {placeholderIcon && <span>{placeholderIcon}</span>}
          <SelectValue placeholder={placeholder} />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options.map((opt, idx) => (
            <SelectItem key={idx} value={opt}>
              {opt}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Comselect
