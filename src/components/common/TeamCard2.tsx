import React from 'react'
import {
  EmailteamCard,
  FemaleteamCard,
  IconAcno,
  IconAddon,
  IconBankdetails,
  IconIfsc,
  IconStatus,
  ManegeteamCard,
  PhoneteamCard,
  SaloonteamCard,
} from '../helper/Icon1'
import { MaleIcon } from '../helper/Icon2'

// Interface define karo (agar separate types file nahi hai toh)
export interface BankCardData {
  id: string
  avatar: string
  name: string
  gender: 'Male' | 'Female' | 'Other'
  bank: string
  accountNo: string
  ifscCode: string
  addedDate: string
  status: 'Verified' | 'Pending' | 'Rejected'
  phone?: string
  email?: string
  manages?: string
  totalSalons?: number
}

// Props interface fix kiya
interface BankCardProps {
  data: BankCardData // Added 'data' property with correct type
  className?: string
  onClick?: (data: BankCardData) => void // parameter type add kiya
}

const BankCard: React.FC<BankCardProps> = ({
  data,
  className = '',
  onClick,
}) => {
  const {
    avatar,
    name,
    gender,
    bank,
    accountNo,
    ifscCode,
    addedDate,
    status,
    phone,
    email,
    manages,
    totalSalons,
  } = data

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'bg-green-100 text-black border-green-400'
      case 'Pending':
        return 'bg-yellow-100 text-black border-yellow-400'
      case 'Rejected':
        return 'bg-red-100 text-black border-red-400'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-400'
    }
  }

  const getGenderIcon = (gender: string) => {
    switch (gender) {
      case 'Male':
        return <MaleIcon />
      case 'Female':
        return <FemaleteamCard />
      default:
        return '👤'
    }
  }

  return (
    <div
      className={`max-w-xs rounded-xl border border-[#E4E7EB] group py-4 group hover:bg-[#F1DCFF] bg-white shadow-lg cursor-pointer transition-all duration-200 min-w-[307px] ${className}`}
      onClick={() => onClick?.(data)}>
      {/* Header with Avatar and Name */}
      <div className="flex items-center gap-4 px-6 mb-4 border-b border-[#E4E7EB] pb-4.5 group-hover:border-white">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-white"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = 'https://via.placeholder.com/48x48?text=👤'
          }}
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
          <div className="flex gap-2 mt-2">
            <span className="rounded-full text-black px-3 py-1 text-xs border-[#808188] border bg-[#E4E7EB]  font-medium flex items-center gap-1 ">
              <span>{getGenderIcon(gender)}</span>
              {gender}
            </span>
          </div>
        </div>
      </div>

      {/* Bank Details */}
      <div className="space-y-3 text-sm text-gray-700 px-6  ">
        {/* Bank */}
        <div className="flex items-center gap-3">
          <span>
            <IconBankdetails />
          </span>
          <span className="font-medium">Bank: {bank}</span>
        </div>

        {/* Account Number */}
        <div className="flex items-center gap-3">
          <span>
            <IconAcno />
          </span>
          <span className="font-medium">A/C No.: {accountNo}</span>
        </div>

        {/* IFSC Code */}
        <div className="flex items-center gap-3">
          <span>
            <IconIfsc />
          </span>
          <span className="font-medium">IFSC: {ifscCode}</span>
        </div>

        {/* Added Date */}
        <div className="flex items-center gap-3">
          <span>
            <IconAddon />
          </span>
          <span className="font-medium">Added On: {addedDate}</span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3">
          <span>
            <IconStatus />
          </span>
          <div className="flex items-center gap-2">
            <span className="font-medium">Status:</span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium border  ${getStatusColor(
                status
              )}`}>
              {status}
            </span>
          </div>
        </div>

        {/* Optional Fields */}
        {phone && (
          <div className="flex items-center gap-3">
            <PhoneteamCard />
            <span className="font-medium">{phone}</span>
          </div>
        )}

        {email && (
          <div className="flex items-center gap-3">
            <EmailteamCard />
            <span className="font-medium">{email}</span>
          </div>
        )}

        {manages && (
          <div className="flex items-center gap-3">
            <ManegeteamCard />
            <span className="font-medium">Manages: {manages}</span>
          </div>
        )}

        {totalSalons !== undefined && (
          <div className="flex items-center gap-3">
            <SaloonteamCard />
            <span className="font-medium">Total Salons: {totalSalons}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default BankCard
