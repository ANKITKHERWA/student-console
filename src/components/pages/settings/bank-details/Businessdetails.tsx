'use client'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetFooter,
} from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { IconBankdetails, IconBusinessdetails } from '@/components/helper/Icon1'

// --- Corrected Tab Component ---
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
type TabProps = {
  tabs: { id: string; value: string; title: string; icon: React.ReactNode }[]
  value: string
  onValueChange: (value: string) => void
}

function Tab({ tabs, value, onValueChange }: TabProps) {
  return (
    <Tabs value={value} onValueChange={onValueChange} className="w-full ">
      <TabsList className="flex border-b w-full px-6 pb-0 bg-transparent rounded-none">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.id || tab.value}
            value={tab.value}
            className={`flex-1 flex items-center justify-center font-semibold pb-2 border-0  
            ${
              value === tab.value
                ? 'border-b-2 border-[#B751FB] rounded-none text-purple-700'
                : 'border-b-2 border-transparent '
            }
          `}>
            {tab.icon}
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
// --------------------------------------------------

const BusinessDetailsSchema = z.object({
  businessType: z.string().min(1, 'Business type is required'),
  businessName: z.string().min(1, 'Business name is required'),
  contactName: z.string().min(1, 'Contact name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(8, 'Enter a valid phone number'),
  pan: z.string().min(1, 'PAN is required'),
  gst: z.string().min(1, 'GST is required'),
  address1: z.string().min(1, 'Address line 1 is required'),
  address2: z.string().optional(),
  postalCode: z.string().min(1, 'Postal code is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State/Province/Region is required'),
  country: z.string().min(1, 'Country is required'),
})
type BusinessDetailsFormValues = z.infer<typeof BusinessDetailsSchema>

const BankDetailsSchema = z.object({
  accountHolder: z.string().min(1, 'Account holder is required'),
  accountNumber: z.string().min(1, 'Account number is required'),
  ifsc: z.string().min(1, 'IFSC code is required'),
  bankName: z.string().min(1, 'Bank name is required'),
})
type BankDetailsFormValues = z.infer<typeof BankDetailsSchema>

export function Businessdetails() {
  const [isOpen, setOpen] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState('Business Details')

  // Business Details Form
  const businessForm = useForm<BusinessDetailsFormValues>({
    resolver: zodResolver(BusinessDetailsSchema),
    defaultValues: {
      businessType: '',
      businessName: '',
      contactName: '',
      email: '',
      phone: '',
      pan: '',
      gst: '',
      address1: '',
      address2: '',
      postalCode: '',
      city: '',
      state: '',
      country: '',
    },
  })

  // Bank Details Form
  const bankForm = useForm<BankDetailsFormValues>({
    resolver: zodResolver(BankDetailsSchema),
    defaultValues: {
      accountHolder: '',
      accountNumber: '',
      ifsc: '',
      bankName: '',
    },
  })

  const onSubmitBusiness = (values: BusinessDetailsFormValues) => {
    console.log('Business Details:', values)
    setOpen(false)
  }
  const onSubmitBank = (values: BankDetailsFormValues) => {
    console.log('Bank Details:', values)
    setOpen(false)
  }

  const handleSave = () => {
    if (activeTab === 'Business Details') {
      businessForm.handleSubmit(onSubmitBusiness)()
    } else {
      bankForm.handleSubmit(onSubmitBank)()
    }
  }

  return (
    <>
      <Button
        className="bg-[#B751FB] cursor-pointer"
        onClick={() => setOpen(true)}>
        + Add Account
      </Button>
      <Sheet open={isOpen} onOpenChange={setOpen}>
        <SheetContent className="flex flex-col h-full p-0 w-full">
          {/* Sticky Header */}
          <div className="sticky top-0 z-10 bg-white pt-6 pb-2">
            <SheetHeader className="mb-2 px-6">
              <SheetTitle>Add Account</SheetTitle>
              <SheetClose asChild>
                <button
                  className="absolute top-6 right-6 text-lg"
                  onClick={() => setOpen(false)}
                  type="button">
                  &times;
                </button>
              </SheetClose>
            </SheetHeader>
            <Tab
              tabs={[
                {
                  id: 'Business Details',
                  value: 'Business Details',
                  title: 'Business Details',
                  icon: <IconBusinessdetails />,
                },
                {
                  id: 'Bank Details',
                  value: 'Bank Details',
                  title: 'Bank Details',
                  icon: <IconBankdetails />,
                },
              ]}
              value={activeTab}
              onValueChange={setActiveTab}
            />
          </div>

          {/* Tab content rendering */}
          <div className="flex-1 overflow-y-auto px-6 py-4 pb-20">
            {activeTab === 'Business Details' && (
              <Form {...businessForm}>
                <form
                  onSubmit={businessForm.handleSubmit(onSubmitBusiness)}
                  className="space-y-6">
                  <div className="font-semibold text-base">
                    Business Details
                  </div>
                  <FormField
                    control={businessForm.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="block w-full border rounded px-3 py-2 text-sm">
                            <option value="">Select business type</option>
                            <option value="proprietorship">
                              Proprietorship
                            </option>
                            <option value="partnership">Partnership</option>
                            <option value="company">Company</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={businessForm.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter business name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={businessForm.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter contact name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={businessForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter email address"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={businessForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone No.</FormLabel>
                        <FormControl>
                          <div className="flex gap-2">
                            <select
                              className="border rounded px-2 text-sm"
                              style={{ width: 70 }}>
                              <option>+91</option>
                            </select>
                            <Input placeholder="ex. 0998 8891" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={businessForm.control}
                    name="pan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pan</FormLabel>
                        <FormControl>
                          <Input placeholder="Pan card no." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={businessForm.control}
                    name="gst"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gst</FormLabel>
                        <FormControl>
                          <Input placeholder="Gst no." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="font-semibold text-base mt-8">Address</div>
                  <FormField
                    control={businessForm.control}
                    name="address1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Line 1</FormLabel>
                        <FormControl>
                          <Input placeholder="Address 1" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={businessForm.control}
                    name="address2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Line 2{' '}
                          <span className="text-xs text-gray-400">
                            (Optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Address 2" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-3">
                    <FormField
                      control={businessForm.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Postal Code</FormLabel>
                          <FormControl>
                            <Input placeholder="Postal code" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={businessForm.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="City" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex gap-3">
                    <FormField
                      control={businessForm.control}
                      name="state"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>State / Province / Region</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="State/Province/Region"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={businessForm.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input placeholder="Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>
            )}
            {activeTab === 'Bank Details' && (
              <Form {...bankForm}>
                <form
                  onSubmit={bankForm.handleSubmit(onSubmitBank)}
                  className="space-y-6">
                  <div className="font-semibold text-base">Bank Details</div>
                  <FormField
                    control={bankForm.control}
                    name="accountHolder"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Holder</FormLabel>
                        <FormControl>
                          <Input placeholder="Account Holder name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={bankForm.control}
                    name="accountNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Account Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={bankForm.control}
                    name="ifsc"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>IFSC Code</FormLabel>
                        <FormControl>
                          <Input placeholder="IFSC Code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={bankForm.control}
                    name="bankName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Bank Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}
          </div>

          {/* Fixed Footer with Buttons */}
          <SheetFooter className="sticky bottom-0 bg-white border-t px-6 py-4  justify-end gap-3">
            <div className="flex justify-end gap-4 ">
              <Button
                variant="outline"
                type="button"
                onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button
                type="button"
                className="bg-[#B751FB] text-white"
                onClick={handleSave}>
                Save
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
