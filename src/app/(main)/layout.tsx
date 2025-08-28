'use client'

import Navbar from '@/components/common/Navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Navbar />
      <main className="md:pl-14 w-full">{children}</main>
    </div>
  )
}
