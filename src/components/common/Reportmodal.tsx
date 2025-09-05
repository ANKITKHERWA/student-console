// import { Dialog } from '';
'use client'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { Button } from '@/components/ui/button'
import {
  IconGrow,
  IconManage,
  Iconoutcome,
  IconProfile,
  IconPromote,
} from '../helper/Icon1'
import {
  Growquestions,
  GrowratingLabels,
  Managequestions,
  ManageratingLabels,
  modalData,
  Promotequestions,
  PromoteratingLabels,
  tabOrder,
} from '../helper/Helper1'
import Heading from './Heading'
import { Slider } from '../ui/slider'

function Reportmodal() {
  const form = useForm()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOpenDate = () => {
    inputRef.current?.showPicker()
  }
  type ValueKeys = 'appointment' | 'catalog' | 'client' | 'staff'
  type Question = {
    key: string
    label: string
  }

  const [values, setValues] = useState<Record<string, number>>({
    appointment: 2,
    catalog: 3,
    client: 5,
    staff: 2,
  })
  const [tabValue, setTabValue] = useState<string>('Profile')

  // Move to next tab on Next button click
  const handleNext = () => {
    const currentIndex = tabOrder.indexOf(tabValue)
    if (currentIndex < tabOrder.length - 1) {
      setTabValue(tabOrder[currentIndex + 1])
    }
  }

  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-[#B751FB] sm:px-3 px-2  lg:px-4 md:py-2 py-1 lg:py-2.5 text-center cursor-pointer rounded md:rounded-[6px] shadow-[0_1px_4px_0_rgba(3,7,18,0.08)] border  border-[#B751FB] text-[#fff] text-xs sm:text-sm font-semibold leading-[142.857%] -tracking-[0.28px]">
          Add Visit Report
        </DialogTrigger>

        <DialogContent className="p-0 lg:w-[50%] sm:w-[70%] w-full h-[90%] max-w-none! lg:overflow-hidden overflow-auto  rounded-lg ">
          {modalData.map((item, index) => (
            <div key={index}>
              <DialogHeader className="px-4 py-5 w-full border-b-1 border-gray text-start">
                <DialogTitle>Visit Report</DialogTitle>
              </DialogHeader>
              <Tabs
                value={tabValue}
                onValueChange={setTabValue}
                className="w-full !bg-[transparent] ">
                <div>
                  <div className="flex w-full overflow-auto lg:flex-row flex-col">
                    <div className="bg-[#F9FAFB] border-r border-grayE4 lg:w-[320px] w-full  flex-shrink-0">
                      <div className="pt-5 ps-6 pb-[30px] pe-[30px] ">
                        <div className="flex gap-2.5 items-center text-[#030712]">
                          <div>
                            <Image
                              src={item.img}
                              width={70}
                              height={70}
                              alt="studio img"
                            />
                          </div>
                          <div className="flex flex-col gap-0.5">
                            <h3 className="font-semibold leading-[125%] text-sm -tracking-[0.32px]">
                              {item.name}
                            </h3>
                            {item.contacte.map((contact, contIndex) => (
                              <Link
                                key={contIndex}
                                href={contact.path}
                                className="flex items-center gap-1 text-xs">
                                <span>{contact.icon}</span>
                                <span>{contact.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-between mt-5 gap-1  ">
                          {item.condetions.map((condetionItem, condIndex) => (
                            <span
                              key={condIndex}
                              className={` ${
                                condIndex === 0
                                  ? 'text-[#F13737]  '
                                  : condIndex === 2
                                  ? 'text-[#31A553]'
                                  : 'text-[#5B14D1] '
                              } ${
                                condIndex === 1
                                  ? 'border-l'
                                  : condIndex === 3
                                  ? 'border-r'
                                  : ''
                              } text-xs leading-[166%] border-[#808188] -tracking-[0.24px] font-semibold`}>
                              {condetionItem.count}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <TabsList className="flex !items-start !h-max  !flex-col !bg-transparent w-full !p-0">
                          <TabsTrigger
                            value="Profile"
                            className={`flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start${
                              tabValue === 'Profile' ? '' : ''
                            }`}
                            onClick={() => setTabValue('Profile')}>
                            <IconProfile />
                            Profile
                          </TabsTrigger>
                          <TabsTrigger
                            value="Manage"
                            className={`flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start${
                              tabValue === 'Manage' ? '' : ''
                            }`}
                            onClick={() => setTabValue('Manage')}>
                            <IconManage />
                            Manage
                          </TabsTrigger>
                          <TabsTrigger
                            value="Grow"
                            className={`flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start${
                              tabValue === 'Grow' ? '' : ''
                            }`}
                            onClick={() => setTabValue('Grow')}>
                            <IconGrow />
                            Grow
                          </TabsTrigger>
                          <TabsTrigger
                            value="Promote"
                            className={`flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start${
                              tabValue === 'Promote' ? '' : ''
                            }`}
                            onClick={() => setTabValue('Promote')}>
                            <IconPromote />
                            Promote
                          </TabsTrigger>
                          <TabsTrigger
                            value="Outcome"
                            className={`flex items-center gap-3 px-t py-3.5 data-[state=active]:bg-[#F1DCFF] !shadow-none !w-full data-[state=active]:text-[] data-[state=active]:font-medium hover:bg-[#F1DCFF] rounded-none justify-start${
                              tabValue === 'Outcome' ? '' : ''
                            }`}
                            onClick={() => setTabValue('Outcome')}>
                            <Iconoutcome />
                            Outcome
                          </TabsTrigger>
                        </TabsList>
                      </div>
                    </div>

                    <div className="w-full ">
                      <TabsContent
                        value={'Profile'}
                        className="px-6 pt-2 w-full pb-21">
                        <Heading title="Porfile" className=" text-xl! py-2" />
                        <Form {...form}>
                          <form
                            className="space-y-6"
                            onSubmit={form.handleSubmit(console.log)}>
                            {/* Business Name */}

                            <FormField
                              control={form.control}
                              name="businessName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Person in contact name
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Enter Business Name"
                                      className="text-sm font-semibold"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Decision Maker */}
                            <FormField
                              control={form.control}
                              name="decisionMaker"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-semibold">
                                    Decision maker
                                  </FormLabel>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Contact Person Role */}
                            <FormField
                              control={form.control}
                              name="software"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Contact Person Role
                                  </FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}>
                                      <SelectTrigger className="w-full">
                                        <SelectValue
                                          className="text-sm font-semibold "
                                          placeholder="Select Contact Person Role"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="none">
                                          None
                                        </SelectItem>
                                        <SelectItem value="xyz">
                                          ankit
                                        </SelectItem>
                                        <SelectItem value="other">
                                          Other
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Contact Phone */}
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Contact Person Phone
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      className="text-sm font-semibold"
                                      placeholder="Enter phone no."
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Software Currently Used */}
                            <FormField
                              control={form.control}
                              name="software"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Software Currently Used
                                  </FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}>
                                      <SelectTrigger className="w-full">
                                        <SelectValue
                                          className="text-sm font-semibold "
                                          placeholder="Select software or usage status"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="none">
                                          None
                                        </SelectItem>
                                        <SelectItem value="xyz">
                                          XYZ Software
                                        </SelectItem>
                                        <SelectItem value="other">
                                          Other
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Size of salon */}
                            <FormField
                              control={form.control}
                              name="seats"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Size of salon</FormLabel>
                                  <FormControl>
                                    <RadioGroup
                                      value={field.value}
                                      onValueChange={field.onChange}>
                                      <div className="flex gap-4 items-center">
                                        <RadioGroupItem value="0-3" id="0-3" />{' '}
                                        0 - 3 seats{' '}
                                      </div>
                                      <div className="flex gap-4 items-center">
                                        <RadioGroupItem value="4-7" id="4-7" />{' '}
                                        4 - 7 seats{' '}
                                      </div>
                                      <div className="flex gap-4 items-center">
                                        <RadioGroupItem
                                          value="8-12"
                                          id="8-12"
                                        />
                                        8 - 12 seats{' '}
                                      </div>
                                      <div className="flex gap-4 items-center">
                                        <RadioGroupItem
                                          value="13-15"
                                          id="13-15"
                                        />
                                        13 - 15 seats{' '}
                                      </div>
                                      <div className="flex gap-4 items-center">
                                        <RadioGroupItem
                                          value="16-above"
                                          id="16-above"
                                        />
                                        16 & above{' '}
                                      </div>
                                    </RadioGroup>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </form>
                        </Form>
                      </TabsContent>
                      <TabsContent
                        value={'Manage'}
                        className="px-6 pt-2 w-full lg:pb-61 pb-10">
                        <div className="max-w-xl ">
                          <Heading
                            title="Management Needs Assessment"
                            className=" text-base! font-semibold py-2"
                          />
                          <div>
                            {ManageratingLabels.map((text) => (
                              <div key={text} className=" text-[10px]">
                                {text}
                              </div>
                            ))}
                          </div>
                          {Managequestions.map((q) => (
                            <div key={q.key} className="space-y-2 py-2">
                              <div className="text-sm font-semibold">
                                {q.label}
                              </div>
                              <Slider
                                min={1}
                                max={5}
                                step={1}
                                value={[values[q.key]]}
                                onValueChange={([val]) =>
                                  setValues((vals) => ({
                                    ...vals,
                                    [q.key]: val,
                                  }))
                                }
                                className="w-full"
                              />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                {[1, 2, 3, 4, 5].map((n) => (
                                  <span key={n}>{n}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent
                        value={'Grow'}
                        className="p-6 w-full lg:pb-61 pb-10">
                        <div className="max-w-xl ">
                          <Heading
                            title="Growth Needs Assessment"
                            className=" text-base! font-semibold py-2"
                          />
                          <div>
                            {GrowratingLabels.map((text) => (
                              <div key={text} className=" text-[10px]">
                                {text}
                              </div>
                            ))}
                          </div>
                          {Growquestions.map((q) => (
                            <div key={q.key} className="space-y-2 py-2">
                              <div className="text-sm font-semibold">
                                {q.label}
                              </div>
                              <Slider
                                min={1}
                                max={5}
                                step={1}
                                value={[values[q.key]]}
                                onValueChange={([val]) =>
                                  setValues((vals) => ({
                                    ...vals,
                                    [q.key]: val,
                                  }))
                                }
                                className="w-full"
                              />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                {[1, 2, 3, 4, 5].map((n) => (
                                  <span key={n}>{n}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent
                        value={'Promote'}
                        className="p-6 w-full lg:pb-61 pb-10">
                        <div className="max-w-xl ">
                          <Heading
                            title="Management Needs Assessment"
                            className=" text-base! font-semibold py-2"
                          />
                          <div>
                            {PromoteratingLabels.map((text) => (
                              <div
                                key={text}
                                className="text-muted-foreground text-[10px]">
                                {text}
                              </div>
                            ))}
                          </div>
                          {Promotequestions.map((q) => (
                            <div key={q.key} className="space-y-2 py-2">
                              <div className="text-sm font-semibold">
                                {q.label}
                              </div>
                              <Slider
                                min={1}
                                max={5}
                                step={1}
                                value={[values[q.key]]}
                                onValueChange={([val]) =>
                                  setValues((vals) => ({
                                    ...vals,
                                    [q.key]: val,
                                  }))
                                }
                                className="w-full"
                              />
                              <div className="flex justify-between text-xs text-muted-foreground">
                                {[1, 2, 3, 4, 5].map((n) => (
                                  <span key={n}>{n}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      <TabsContent
                        value={'Outcome'}
                        className="px-6 pt-2 w-full lg:pb-20 pb-10">
                        <Heading title="Outcome" className=" text-xl! py-2" />
                        <Form {...form}>
                          <form
                            className="space-y-6"
                            onSubmit={form.handleSubmit(console.log)}>
                            <FormField
                              control={form.control}
                              name="Overall Interest"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Overall Interest
                                  </FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}>
                                      <SelectTrigger className="w-full">
                                        <SelectValue
                                          className="text-sm font-semibold "
                                          placeholder="Select Overall Interest"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Not interested - don’t see a fit">
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                          Not interested - don’t see a fit
                                        </SelectItem>
                                        <SelectItem value="Neutral / Undecided">
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                          Neutral / Undecided
                                        </SelectItem>
                                        <SelectItem value="Mildly interested - come bak later">
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                          Mildly interested - come bak later
                                        </SelectItem>
                                        <SelectItem value="Interested - requests detailed demo">
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                          Interested - requests detailed demo
                                        </SelectItem>
                                        <SelectItem value="Very interested - wants immediate onboarding">
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                          Very interested - wants immediate
                                          onboarding
                                        </SelectItem>
                                        <SelectItem value="Registered">
                                          <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                          />
                                          Registered
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="Outcomes of visit"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Outcomes of visit
                                  </FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}>
                                      <SelectTrigger className="w-full">
                                        <SelectValue
                                          className="text-sm font-semibold "
                                          placeholder="Select visit outcome"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Not interested - don’t see a fit">
                                          Not interested - don’t see a fit
                                        </SelectItem>
                                        <SelectItem value="Neutral / Undecided">
                                          Neutral / Undecided
                                        </SelectItem>
                                        <SelectItem value="Mildly interested - come bak later">
                                          Mildly interested - come bak later
                                        </SelectItem>
                                        <SelectItem value="Interested - requests detailed demo">
                                          Interested - requests detailed demo
                                        </SelectItem>
                                        <SelectItem value="Very interested - wants immediate onboarding">
                                          Very interested - wants immediate
                                          onboarding
                                        </SelectItem>
                                        <SelectItem value="Registered">
                                          Registered
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="Reason for Not onboarding"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Reason for Not onboarding
                                  </FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}>
                                      <SelectTrigger className="w-full">
                                        <SelectValue
                                          className="text-sm font-semibold"
                                          placeholder="Select a reason"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="Onboarded">
                                          Onboarded
                                        </SelectItem>
                                        <SelectItem value="Not Onboarded">
                                          Not Onboarded
                                        </SelectItem>
                                        <SelectItem
                                          className="text-black font-extrabold"
                                          value="Decision Pending">
                                          Decision Pending
                                        </SelectItem>
                                        <SelectItem value="Owner not available">
                                          Owner not available
                                        </SelectItem>
                                        <SelectItem value="Need more time to decide">
                                          Need more time to decide
                                        </SelectItem>
                                        <SelectItem value="Internal discussion required">
                                          Internal discussion required
                                        </SelectItem>
                                        <SelectItem value="Waiting for partner/ family / decision">
                                          Waiting for partner/ family / decision
                                          onboarding
                                        </SelectItem>
                                        <SelectItem
                                          className="text-black font-extrabold"
                                          value="Budget Constraints">
                                          Budget Constraints
                                        </SelectItem>
                                        <SelectItem value="Subscription cost too high">
                                          Subscription cost too high
                                        </SelectItem>
                                        <SelectItem value="Prefers free tools">
                                          Prefers free tools
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            {/* Contact Phone */}
                            <FormField
                              control={form.control}
                              name="date"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Follow up Date
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      type="date"
                                      className="text-sm font-semibold block"
                                      placeholder="Pic a date"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="Follow up reason"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Follow up reason
                                  </FormLabel>
                                  <FormControl>
                                    <Select
                                      value={field.value}
                                      onValueChange={field.onChange}>
                                      <SelectTrigger className="w-full">
                                        <SelectValue
                                          className="text-sm font-semibold "
                                          placeholder="Select a reason for follow up"
                                        />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="price">
                                          price
                                        </SelectItem>
                                        <SelectItem value="staff">
                                          staff
                                        </SelectItem>
                                        <SelectItem value="other">
                                          Other
                                        </SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="Remarks"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-sm font-semibold">
                                    Remarks
                                  </FormLabel>
                                  <FormControl>
                                    <textarea
                                      {...field} // bind React Hook Form field props here
                                      id="Remarks"
                                      className="w-full rounded border p-2 text-sm font-semibold resize-none"
                                      rows={3} // set height by rows or CSS
                                      placeholder="Enter remarks"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </form>
                        </Form>
                      </TabsContent>
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          ))}
          <DialogFooter className="flex gap-3 py-4 px-6 border-t border-grayE4 bg-white sticky bottom-0 z-10">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            {tabValue !== 'Outcome' && (
              <Button onClick={handleNext}>Next</Button>
            )}
            {tabValue === 'Outcome' && (
              <Button type="submit" onClick={form.handleSubmit(console.log)}>
                Submit
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Reportmodal
