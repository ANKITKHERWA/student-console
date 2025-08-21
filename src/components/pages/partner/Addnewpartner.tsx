'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sheet, SheetContent } from '@/components/ui/sheet'

import React from 'react'
import { useState } from 'react'

export default function Addnewpartner() {
  const [open, setOpen] = useState(false)
  const [image, setImage] = useState<string | null>(null)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files) {
      const file = e.target.files[0] // Access the first file
      if (file) {
        const reader = new FileReader()
        reader.onloadend = () => {
          setImage(reader.result as string)
        }
        reader.readAsDataURL(file) // Pass the file to readAsDataURL
      }
    }
  }

  return (
    <>
      <Button
        className="bg-[#B751FB] cursor-pointer"
        onClick={() => setOpen(true)}>
        + Add Partner
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:w-[400px] overflow-auto "></SheetContent>
      </Sheet>
    </>
  )
}
