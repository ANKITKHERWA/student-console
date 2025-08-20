"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import React from "react";
import { useState } from "react";

export default function Addnewpartner() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files) {
      const file = e.target.files[0]; // Access the first file
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string);
        };
        reader.readAsDataURL(file); // Pass the file to readAsDataURL
      }
    }
  };

  return (
    <>
      <Button
        className="bg-[#B751FB] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        + Add Partner
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full sm:w-[400px] overflow-auto "
        >
          <Card className="w-full h-full border-0 ronder-none shadow-none flex justify-between">
            <div>
              <CardHeader className="border-b">
                <CardTitle>Add New Partner</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <Label>Profile Image</Label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10 cursor-pointer hover:bg-gray-50">
                    <div className="text-center">
                      {image ? (
                        <img
                          src={image}
                          alt="Uploaded Preview"
                          className="h-24 w-24 rounded-full object-cover mx-auto mb-3"
                        />
                      ) : (
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 48 48"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M24 16v16m8-8H16m6 18A18 18 0 106 24a18 18 0 0016 18z"
                          />
                        </svg>
                      )}

                      <div className="flex text-sm text-gray-600 justify-center">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none"
                        >
                          <span>
                            {image ? "Change image" : "Upload an image"}
                          </span>
                          <Input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={handleFileChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partner Name */}
                <div className="mb-4 ">
                  <Label htmlFor="partnerName" className="pb-2">
                    Partner Name
                  </Label>
                  <Input id="partnerName" placeholder="Enter Name" />
                </div>

                {/* Partner Address */}
                <div className="mb-4">
                  <Label htmlFor="partnerAddress" className="pb-2">
                    Partner Address
                  </Label>
                  <Input id="partnerAddress" placeholder="Enter Address" />
                </div>

                {/* Pincode */}
                <div className="mb-4">
                  <Label htmlFor="pincode" className="pb-2">
                    Pincode
                  </Label>
                  <Input
                    id="pincode"
                    placeholder="Enter Pincode"
                    type="number"
                  />
                </div>

                {/* Contact no */}
                <div className="mb-4">
                  <Label htmlFor="contact" className="pb-2">
                    Contact No.
                  </Label>
                  <Input
                    id="contact"
                    placeholder="Enter Contact No."
                    type="tel"
                  />
                </div>
              </CardContent>
            </div>
            <CardFooter className="border-t flex justify-end gap-2 ">
              <Button variant="outline" className="cursor-pointer">
                Cancel
              </Button>
              <Button className="bg-[#B751FB] cursor-pointer">Save</Button>
            </CardFooter>
          </Card>
        </SheetContent>
      </Sheet>
    </>
  );
}
