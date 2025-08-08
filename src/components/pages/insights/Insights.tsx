import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tabs } from '@radix-ui/react-tabs'
import React from 'react'

function Insights() {
  return (
    <div className="ms-[55.33px] max-w-[1385px]">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="account " className="w-full">
          <TabsList className="py-[31px] border-y border-black rounded-none bg-transparent w-full">
            <div className="py-[31px] border-y border-black">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </div>
          </TabsList>
          <TabsContent value="account">hello</TabsContent>
          <TabsContent value="password">hellodflksdfkl</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Insights