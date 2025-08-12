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
  options: string[]
  className?: string
}

const Comselect: React.FC<Iprops> = ({
  placeholder = 'Select...',
  label,
  options,
  className,
}) => {
  return (
    <Select>
      <SelectTrigger className={className ?? 'w-[130px]'}>
        <SelectValue placeholder={placeholder} />
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
