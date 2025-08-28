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
      {/* Sidebar */}
      <div
        className={cn(
          'fixed top-0 left-0 h-screen w-[170px] md:w-14 overflow-y-auto  bg-accent shadow-lg z-[49] transition-transform duration-300',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}>
        <div className="flex flex-col justify-between gap-5 h-screen">
          <div>
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
                          'flex items-center gap-1 w-full p-4 relative transition group',
                          isActive
                            ? 'bg-white text-purple-600'
                            : 'text-gray-500 hover:bg-gray-100'
                        )}>
                        {/* Active left border */}
                        {isActive && (
                          <span className="absolute left-0 top-0 h-full w-1 bg-purple-600"></span>
                        )}
                        <item.icon
                          className={cn(
                            'h-5 w-5',
                            isActive
                              ? 'text-purple-600'
                              : 'group-hover:text-purple-500'
                          )}
                        />
                        <span className="md:hidden">{item.title}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="py-2">
                      {item.title}
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </nav>
          </div>
          <div className="flex justify-center items-center pb-10">
            <Link href="/settings">
              <Icon13thimg />
            </Link>
          </div>
        </div>
      </div>

      {/* Toggle Button */}

      <button
        className={`md:hidden p-1 m-2 z-50 absolute top-4 -left-2 bg-white rounded-full shadow-md 
        transition-transform duration-300 hover:scale-105 
        ${
          isOpen ? 'translate-x-[171px] rotate-180' : 'translate-x-0 rotate-0'
        }`}
        onClick={() => setIsOpen(!isOpen)}>
        <Iconsidebartogle />
      </button>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
