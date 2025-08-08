'use client'

import { SidebarProvider } from '@/components/ui/sidebar' // ✅ ShadCN se
import { AppSidebar } from '@/components/common/AppSidebar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider className="w-full">
      <main className="flex  w-full">
        <div className="w-14">
          <AppSidebar />
        </div>
        <div className="w-full min-h-screen bg-white"> {children}</div>
      </main>
    </SidebarProvider>
  )
}
