"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Zap, Shield, CheckCircle } from "lucide-react"

export default function GetStartedPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add your sign-up logic here
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container px-4 md:px-6 py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          {/* Left side: Features */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Get Started with KekeliAI
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Start building your custom AI models in minutes. No credit card required.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-900/20">
                  <CheckCircle className="w-5 h-5 text-violet-400" />
                </div>
                <span>Free tier with 1 model and 200MB storage</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-900/20">
                  <Rocket className="w-5 h-5 text-violet-400" />
                </div>
                <span>Deploy your first model in under 10 minutes</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-900/20">
                  <Zap className="w-5 h-5 text-violet-400" />
                </div>
                <span>No coding required</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-900/20">
                  <Shield className="w-5 h-5 text-violet-400" />
                </div>
                <span>Enterprise-grade security</span>
              </div>
            </div>
          </div>

          {/* Right side: Sign up form */}
          <Card className="border-none bg-gray-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Create your account</CardTitle>
              <CardDescription className="text-gray-400">
                Enter your details to get started with KekeliAI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Work email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    Company name
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company"
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full rounded-full bg-violet-600 hover:bg-violet-700 text-white transition-all px-8 font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
                <p className="text-sm text-gray-400 text-center">
                  By signing up, you agree to our{" "}
                  <a href="/terms" className="text-violet-400 hover:text-violet-300">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-violet-400 hover:text-violet-300">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 