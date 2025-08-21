'use client'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
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
              className="space-y-8 px-6">
              {/* Image Upload using Controller */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="partner-image">Upload Image</FormLabel>
                    <FormControl>
                      <input
                        id="partner-image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          field.onChange(e.target.files)
                          handleImageChange(e.target.files)
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          style={{
                            width: '100%',
                            maxHeight: 200,
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                    )}
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
