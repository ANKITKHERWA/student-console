'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import Heading from '@/components/common/Heading'
import { UploadCloud } from 'lucide-react'

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Username must be at least 2 characters.' }),
  address: z.string().min(1, { message: 'Address is required.' }),
  pincode: z.string().min(1, { message: 'Pincode is required.' }),
  contactNumber: z.string().min(1, { message: 'Contact Number is required.' }),
  image: z
    .any()
    .refine((file) => file?.length === 1, 'Image is required')
    .refine(
      (file) => file?.[0]?.type.startsWith('image/'),
      'File must be an image'
    ),
})

export default function Addnewpartner() {
  const [open, setOpen] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      address: '',
      pincode: '',
      contactNumber: '',
      image: null,
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log('Submitted ', data)
    setOpen(false)
  }

  // To preview selected image
  const handleImageChange = (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      const file = fileList[0]
      setImagePreview(URL.createObjectURL(file))
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
          className="w-full sm:w-[400px] overflow-auto">
          <Heading
            className="text-xl! py-5 border-b px-6"
            title="Add New Partner"
          />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-6 pt-5">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      htmlFor="partner-image"
                      className="mb-2 font-semibold">
                      Profile Image
                    </FormLabel>
                    <FormControl>
                      {!imagePreview ? (
                        <div
                          className="relative border-dashed border-2 rounded-lg border-gray-300 flex flex-col items-center justify-center cursor-pointer h-44 w-full bg-[#fafafd] hover:border-[#B751FB] transition-all"
                          onClick={() =>
                            document.getElementById('partner-image')?.click()
                          }
                          onDrop={(e) => {
                            e.preventDefault()
                            field.onChange(e.dataTransfer.files)
                            handleImageChange(e.dataTransfer.files)
                          }}
                          onDragOver={(e) => e.preventDefault()}>
                          {/* Use your SVG, Lucide, or Heroicons upload icon here */}
                          <svg
                            className="h-10 w-10 text-[#B751FB]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4v12"
                            />
                          </svg>
                          <p className="mt-2 text-gray-600">
                            Drag and drop image or{' '}
                            <span
                              className="text-[#B751FB] underline cursor-pointer"
                              onClick={(e) => {
                                e.stopPropagation()
                                document
                                  .getElementById('partner-image')
                                  ?.click()
                              }}>
                              browse
                            </span>
                          </p>
                          <input
                            id="partner-image"
                            type="file"
                            accept="image/*"
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={(e) => {
                              field.onChange(e.target.files)
                              handleImageChange(e.target.files)
                            }}
                            tabIndex={-1}
                            style={{ display: 'none' }}
                          />
                        </div>
                      ) : (
                        <div className="mt-2">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full max-h-[200px] object-contain rounded-lg border"
                          />
                          {/* Optional: Add remove button */}
                          <button
                            type="button"
                            onClick={() => {
                              setImagePreview(null)
                              field.onChange(null)
                            }}
                            className="mt-2 text-sm text-red-500 underline">
                            Remove Image
                          </button>
                        </div>
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="partner-name">Partner Name</FormLabel>
                    <FormControl>
                      <Input
                        id="partner-name"
                        type="text"
                        placeholder="Enter Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="partner-address">
                      Partner Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="partner-address"
                        type="text"
                        placeholder="Enter address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="partner-pincode">Pincode</FormLabel>
                    <FormControl>
                      <Input
                        id="partner-pincode"
                        type="number"
                        placeholder="Enter pincode"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="partner-contact">
                      Contact Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="partner-contact"
                        type="tel"
                        placeholder="Enter contact number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-[#B751FB]">
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  )
}
