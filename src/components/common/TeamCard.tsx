import React from 'react'
import {
  EmailteamCard,
  ManegeteamCard,
  PhoneteamCard,
  SaloonteamCard,
} from '../helper/Icon1'
interface Iprops {
  avatar: string
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
}) => {
  return (
    <div
      className={`max-w-xs rounded-xl border  border-[#E4E7EB] py-3 hover:bg-[#F1DCFF]  bg-[#fff]  shadow-lg ${className}`}>
      <span className={`rounded-full h-3 w-3 ml-2 block ${dotclass}`}> </span>
      <div className="flex items-center gap-4 px-6">
        <img
          src={avatar} // replace with your image URL
          alt={`${name} avatar`}
          className="w-14 h-14 rounded-full object-cover border-2 border-purple-200"
        />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <div className="flex gap-2 mt-1">
            <span className="rounded-full bg-white/80 text-gray-700 px-2.5 py-0.5 text-xs border font-medium flex items-center gap-1">
              {icon}
              {gender}
            </span>
            <span className="rounded-full bg-orange-100 text-orange-800 px-2.5 py-0.5 text-xs font-medium border">
              {tag}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm text-gray-700 border-t border-[#E4E7EB] hover:border-white  pt-4 px-6">
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
