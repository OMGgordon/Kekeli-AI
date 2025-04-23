"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DemoPage() {
  return (
    <main className="flex-1">
      <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center py-12 md:py-24 lg:py-32">
          <div className="text-center space-y-4 max-w-[800px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              See outcomes in days, not months
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Request a demo, explain your challenges, and learn why leading enterprises trust KekeliAI to bring efficiency to their operations.
            </p>
          </div>
          
          <div className="w-full max-w-[500px] bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
            <form className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              
              <div className="flex flex-col gap-3">
                <Button className="w-full rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all px-8 font-medium">
                  Submit
                </Button>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-violet-400 hover:text-violet-300 text-sm text-center"
                >
                  Issue with the form? Message us on LinkedIn →
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
} 