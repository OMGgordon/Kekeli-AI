import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Upload, Zap, Code, Shield, BarChart3 } from "lucide-react"
import HeroImage from "@/components/hero-image"
import TestimonialCard from "@/components/testimonial-card"
import { DemoForm } from "@/components/demo-form"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Fine-tune and deploy your own AI models — no code, no complexity
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Transform your business with custom AI models. Our platform makes it easy to train and
                  deploy models tailored to your specific needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <DemoForm />
                <Button asChild className="rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-8 font-medium">
                  <Link href="/get-started">Get Started Free</Link>
                </Button>
              </div>
            </div>
            <HeroImage />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400 max-w-[800px]">Three simple steps to create your custom AI model</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">1. Upload Your Data</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">
                  Connect files, docs, or tools (PDF, Notion, CSV, etc.)
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">2. Fine-Tune Your Model</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">
                  Use our no-code interface to train a model on your content
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">3. Deploy & Use</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">
                  Chat with it instantly, embed it, or call it from your apps via API
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-400 max-w-[800px]">
              Everything you need to build and deploy custom AI models
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-gray-800">
              <CheckCircle className="w-10 h-10 text-violet-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">No-Code Fine-Tuning</h3>
              <p className="text-gray-400 text-center">Train models without writing a single line of code</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-gray-800">
              <Shield className="w-10 h-10 text-violet-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Secure Model Hosting</h3>
              <p className="text-gray-400 text-center">Your data stays private with complete isolation</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-gray-800">
              <Code className="w-10 h-10 text-violet-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">API Access & Embeds</h3>
              <p className="text-gray-400 text-center">Integrate your models anywhere with our API</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-gray-800">
              <BarChart3 className="w-10 h-10 text-violet-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Performance Insights</h3>
              <p className="text-gray-400 text-center">Track usage and improve your models over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Who It's For</h2>
            <p className="text-xl text-gray-400 max-w-[800px]">KekeliAI helps teams across industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="border-none bg-gray-900 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-white">Founders & Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">Build AI tools quickly without hiring ML engineers</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none bg-gray-900 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-white">Internal Ops Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">Create knowledge assistants for company documentation</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none bg-gray-900 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-white">Educators</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">Turn course materials into interactive AI tutors</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none bg-gray-900 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-white">Customer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">Train AI on your support docs to assist customers 24/7</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="KekeliAI let us train an internal support bot in a day. No engineers needed."
              author="Maria, COO @ SaaSCo"
            />
            <TestimonialCard
              quote="We reduced customer response time by 70% after implementing our KekeliAI model."
              author="James, Support Lead @ TechStart"
            />
            <TestimonialCard
              quote="The fine-tuning process was surprisingly simple. Our team was up and running in hours."
              author="Sarah, CTO @ DataFlow"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Ready to transform your business with AI?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
            Get started for free or book a demo to see how KekeliAI can work for your team.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center mt-4">
            <DemoForm />
            <Button asChild className="rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-8 font-medium">
              <Link href="/get-started">Get Started Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
