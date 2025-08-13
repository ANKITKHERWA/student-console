'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { navItems } from '../helper/Helper1'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import {
  Icon13thimg,
  Icon1stimg,
  Icon2ndimg,
  Iconsidebartogle,
  Iconsidebartogle2,
} from '../helper/Icon1'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden p-2 m-2 z-50 fixed top-0 left-0 bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}>
        <Iconsidebartogle /> : <Iconsidebartogle2 />
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 left-0 h-screen w-[170px] md:w-14 overflow-y-auto lg:overflow-visible  bg-accent shadow-lg z-[49] transition-transform duration-300 -translate-x-full lg:translate-x-0 ',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}>
        <div className="flex flex-col items-center py-3 gap-4">
          <div className="border-b border-[#DCE0E5] flex justify-center items-center py-4">
            <Link href="/dashboard">
              <Icon1stimg />
            </Link>
          </div>
          <div className="border-b border-[#DCE0E5] flex justify-center items-center py-4">
            <Icon2ndimg />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 w-full items-center">
          {navItems.map((item, index) => {
            const isActive = pathname === item.url
            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.url}
                    className={cn(
                      'flex flex-col items-center gap-1 w-full p-4 relative transition group',
                      isActive
                        ? 'bg-white text-purple-600'
                        : 'text-gray-500 hover:bg-gray-100'
                    )}>
                    {/* Left active border */}
                    {isActive && (
                      <span className="absolute left-0 top-0 h-full w-1 bg-purple-600 rounded-r-md"></span>
                    )}
                    <item.icon
                      className={cn(
                        'h-5 w-5',
                        isActive
                          ? 'text-purple-600'
                          : 'group-hover:text-purple-500'
                      )}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="py-2">
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          })}
        </nav>
        <div className="mt-auto mb-4 flex justify-center` items-center w-full">
          <Link href="/settings">
            <Icon13thimg />
          </Link>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
