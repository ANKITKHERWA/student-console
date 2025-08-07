'use client'
import { items } from '../helper/Helper1'
import Link from 'next/link'
import { useSidebar } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  Icon13thimg,
  Icon1stimg,
  Icon2ndimg,
  Iconsidebartogle,
  Iconsidebartogle2,
} from '../helper/Icon1'

export function SidebarToggleButton() {
  const { isOpen, toggleSidebar } = useSidebar()

  return (
    <button
      onClick={toggleSidebar}
      className="md:hidden p-2 fixed top-4 left-4 z-50 bg-white rounded shadow">
      {isOpen ? <Iconsidebartogle /> : <Iconsidebartogle2 />}
    </button>
  )
}

export function AppSidebar() {
  const { isOpen, toggleSidebar } = useSidebar()
  const pathname = usePathname()

  return (
    <>
      <SidebarToggleButton />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <Sidebar
        className={`bg-[#F2F2F2] w-[56px] h-screen fixed left-0 top-0 z-40 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <SidebarContent className="items-center justify-between gap-10">
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarMenu className="items-center justify-center gap-0">
                <Link
                  href={'/Dashboard'}
                  className="border-b border-[#DCE0E5] py-5">
                  <Icon1stimg />
                </Link>
                <div className="border-b border-[#DCE0E5] py-5">
                  <Icon2ndimg />
                </div>

                {items.map((item, index) => {
                  const isActive = pathname === item.url

                  return (
                    <SidebarMenuItem key={index} className="w-full h-full">
                      <SidebarMenuButton
                        asChild
                        className="justify-center w-full h-full flex">
                        <Link
                          href={item.url}
                          className={`w-full h-full flex items-center justify-center p-4 transition-all duration-300
                            ${
                              isActive
                                ? 'bg-white border-l-4 border-[#B751FB] rounded-none'
                                : ''
                            }`}>
                          <item.icon
                            className={`w-6 h-6 fill-current transition-all duration-300 ${
                              isActive ? 'text-[#B751FB]' : 'text-[#9CA3AF]'
                            }`}
                          />
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <Link href={'/Settings'} className=" pb-20">
            <Icon13thimg />
          </Link>
        </SidebarContent>
      </Sidebar>
    </>
  )
}
