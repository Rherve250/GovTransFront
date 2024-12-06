import React from "react";
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button";
import { DatePickerDemo } from "./DateInput";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const ProfileForm=()=>{
    return(
      <div className="w-[80%] md:w-[60%]  mx-auto">
        <form className=" bg-white shadow-sm mt-3 p-4 rounded-2xl">
        <div className="flex flex-wrap flex-row gap-2 justify-between">
            <div className="grid w-full mb-4 md:w-[45%]  items-center gap-1.5">
               <Label htmlFor="Fullname">Full-Name</Label>
              <Input type="text" id="Fullname" placeholder="Email" />
            </div>
            <div className="grid w-full mb-4  md:w-[45%] items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
            </div>
        </div>
        <div className="flex flex-wrap flex-row gap-2 justify-between">
            <div className="grid w-full mb-4 md:w-[45%]  items-center gap-1.5">
               <Label htmlFor="NationalId">National Identity</Label>
              <Input type="number" id="NationalId" placeholder="National Identity" />
            </div>
            <div className="grid w-full mb-4  md:w-[45%] items-center gap-1.5">
                <Label htmlFor="Phone">Phone number</Label>
                <Input type="text" id="Phone" placeholder="Phone number" />
            </div>
        </div>
        <div className="flex flex-wrap flex-row gap-2 justify-between">
            <div className="grid w-full mb-4 md:w-[45%]  items-center gap-1.5">
               <Label htmlFor="Province">Province</Label>
              <Input type="text" id="Province" placeholder="Province" />
            </div>
            <div className="grid w-full mb-4  md:w-[45%] items-center gap-1.5">
                <Label htmlFor="District">District</Label>
                <Input type="text" id="District" placeholder="District" />
            </div>
        </div>
        <div className="flex flex-wrap flex-row gap-2 justify-between">
            <div className="grid w-full mb-4 md:w-[45%]  items-center gap-1.5">
               <Label htmlFor="Sector">Sector</Label>
              <Input type="text" id="Sector" placeholder="Sector" />
            </div>
            <div className="grid w-full mb-4  md:w-[45%] items-center gap-1.5">
                <Label htmlFor="Cell">Cell</Label>
                <Input type="text" id="Cell" placeholder="Cell" />
            </div>
        </div>
        <div className="flex flex-wrap flex-row gap-2 justify-between">
            <div className="grid w-full mb-4 md:w-[45%]  items-center gap-1.5">
            < DatePickerDemo />
            </div>
            <div className="grid w-full mb-4  md:w-[45%] items-center gap-1.5">
                <Select classNAme="w-full">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Gender" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectItem value="Male">Male</SelectItem>
          <SelectItem value="Female">Female</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
        </div>
          <div className="flex justify-center mt-4">
               <Button>Create profile</Button>
          </div>
           
        </form>
      </div>
    )
}

export default ProfileForm;