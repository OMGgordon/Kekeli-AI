"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DemoForm() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full bg-transparent border-gray-600 text-gray-300 border hover:bg-violet-600/20 hover:border-violet-500 hover:text-violet-400 transition-all px-6 font-medium"
        >
          Book a Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            See outcomes in days, not months
          </DialogTitle>
          <DialogDescription className="text-gray-400 text-base">
            Request a demo, explain your challenges, and learn why leading enterprises trust KekeliAI to bring efficiency to their operations.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="firstName" className="text-white">
                First name
              </Label>
              <Input
                id="firstName"
                className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                placeholder="John"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName" className="text-white">
                Last name
              </Label>
              <Input
                id="lastName"
                className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-white">
              Business email
            </Label>
            <Input
              id="email"
              type="email"
              className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
              placeholder="john@company.com"
            />
            <p className="text-sm text-gray-400">Valid business email required</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company" className="text-white">
              Company name
            </Label>
            <Input
              id="company"
              className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
              placeholder="Your company"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-white">
              Job title
            </Label>
            <Input
              id="title"
              className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
              placeholder="Your role"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button className="w-full rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all px-8 font-medium">
            Submit
          </Button>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 text-sm text-center">
            Issue with the form? Message us on LinkedIn →
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
} 