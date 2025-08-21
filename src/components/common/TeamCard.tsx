import React from 'react'
import {
  EmailteamCard,
  ManegeteamCard,
  PhoneteamCard,
  SaloonteamCard,
} from '../helper/Icon1'
interface Iprops {
  avatar: React.ReactNode
  name: string
  icon: React.ReactNode
  gender: string
  tag: string
  phone?: string
  email?: string
  manages?: string
  totalSalons?: number
  dotclass?: string
  className?: string
  ganderclass?: string
  tagclass?: string
}
// Example usage icons (replace with your icon library/icons)
const TeamCard: React.FC<Iprops> = ({
  avatar,
  name,
  gender,
  tag,
  phone,
  email,
  icon,
  manages,
  totalSalons,
  dotclass,
  className = '',
  ganderclass = '',
  tagclass = '',
}) => {
  return (
    <div
      className={`max-w-xs rounded-xl border  border-[#E4E7EB] group py-3 hover:bg-[#F1DCFF]  bg-[#fff]  shadow-lg w-307  ${className}`}>
      <span className={`rounded-full h-3 w-3 ml-2 block`}> </span>
      <div className="flex items-center gap-4 px-6">
        <span>{avatar}</span>
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex gap-2 mt-1">
            <span
              className={`rounded-full  text-black px-2.5 py-0.5 text-xs border  font-medium flex items-center gap-1 ${ganderclass}`}>
              {icon}
              {gender}
            </span>
            <span className="w-[1px] h-[20px]  bg-[#E4E7EB] group-hover:bg-white"></span>
            <span
              className={`rounded-full  text-black px-2.5 py-0.5 text-xs font-medium border  ${tagclass}`}>
              {tag}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm text-gray-700 border-t border-[#E4E7EB] group-hover:border-white  pt-4 px-6">
        {phone && (
          <div className="flex items-center gap-2">
            <PhoneteamCard /> {phone}
          </div>
        )}
        {email && (
          <div className="flex items-center gap-2">
            <EmailteamCard /> {email}
          </div>
        )}
        {manages && (
          <div className="flex items-center gap-2">
            <ManegeteamCard /> {`Manages: ${manages}`}
          </div>
        )}
        {totalSalons !== undefined && (
          <div className="flex items-center gap-2">
            <SaloonteamCard /> {`Total Salons: ${totalSalons}`}
          </div>
        )}
      </div>
    </div>
  )
}
export default TeamCard
