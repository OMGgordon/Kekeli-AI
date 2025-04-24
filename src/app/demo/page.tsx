"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { demoFormSchema } from "@/lib/validations/demo"
import type { DemoFormData } from "@/lib/validations/demo"
import { useToast } from "@/hooks/use-toast"

export default function DemoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema)
  })

  async function onSubmit(data: DemoFormData) {
    try {
      setIsSubmitting(true)
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error()

      toast({
        title: "Success!",
        description: "Thanks! We'll be in touch soon."
      })
      reset()
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex-1">
      <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-center min-h-[80vh]">
          <div className="text-center space-y-6 max-w-[800px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              See outcomes in days, not months
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Request a demo, explain your challenges, and learn why leading enterprises trust KekeliAI to bring efficiency to their operations.
            </p>
          </div>
          
          <div className="w-full max-w-[500px] bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 mt-8">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstName" className="text-white">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                    placeholder="John"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastName" className="text-white">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                    placeholder="Doe"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">{errors.lastName.message}</p>
                  )}
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
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
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
                  {...register("company")}
                />
                {errors.company && (
                  <p className="text-sm text-red-500">{errors.company.message}</p>
                )}
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="title" className="text-white">
                  Job title
                </Label>
                <Input
                  id="title"
                  className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                  placeholder="Your role"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-sm text-red-500">{errors.title.message}</p>
                )}
              </div>
              
              <div className="flex flex-col gap-3">
                <Button 
                  type="submit"
                  className="w-full rounded-full bg-violet-600 text-white hover:bg-violet-700 transition-all px-8 font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
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