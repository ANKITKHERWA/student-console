'use client'
import { items } from '../helper/Helper1'
import Link from 'next/link'
import { useSidebar } from '@/components/ui/sidebar'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Icon13thimg, Icon1stimg, Icon2ndimg } from '../helper/Icon1'

export function AppSidebar() {
  const { isOpen } = useSidebar()

  return (
    <>
      <Sidebar
        className={`bg-[#F2F2F2] w-[56px] h-[1440px]${
          isOpen ? 'block' : 'hidden'
        }`}>
        <SidebarContent className="items-center justify-between gap-10">
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarMenu className="items-center justify-center gap-5">
                <Link
                  href={'/Dashboard'}
                  className="border-b-1 border-[#DCE0E5] pb-5 pt-5">
                  <Icon1stimg />
                </Link>
                <div className="border-b-1 border-[#DCE0E5] pb-5">
                  <Icon2ndimg />
                </div>
                {items.map((item, index) => (
                  <SidebarMenuItem key={index} className="w-full h-full">
                    <SidebarMenuButton
                      asChild
                      className="p-0 justify-center w-full h-full flex">
                      <Link
                        href={item.url}
                        className="w-full h-full flex items-center justify-center">
                        <item.icon />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
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
