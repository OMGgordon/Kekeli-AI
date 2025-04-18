import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Upload, Zap, Code, Shield, BarChart3 } from "lucide-react"
import HeroImage from "@/components/hero-image"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col space-y-4 lg:space-y-6 lg:w-1/2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Fine-tune and deploy your own AI models — no code, no complexity.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-[600px]">
              KekeliAI is the easiest way to customize and launch large language models (LLMs) using your own data. No
              ML experience required. Secure. Scalable. End-to-end.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 hover:shadow-md transition-all">
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white border-2 hover:bg-white/10 hover:shadow-md transition-all"
              >
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-[800px]">Three simple steps to create your custom AI model</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-blue-700" />
                </div>
                <CardTitle className="text-xl font-bold">1. Upload Your Data</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Connect files, docs, or tools (PDF, Notion, CSV, etc.)
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-indigo-700" />
                </div>
                <CardTitle className="text-xl font-bold">2. Fine-Tune Your Model</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Use our no-code interface to train a model on your content
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-purple-700" />
                </div>
                <CardTitle className="text-xl font-bold">3. Deploy & Use</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  Chat with it instantly, embed it, or call it from your apps via API
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-[800px]">
              Everything you need to build and deploy custom AI models
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <CheckCircle className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">No-Code Fine-Tuning</h3>
              <p className="text-gray-600 text-center">Train models without writing a single line of code</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Shield className="w-10 h-10 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Model Hosting</h3>
              <p className="text-gray-600 text-center">Your data stays private with complete isolation</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Code className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">API Access & Embeds</h3>
              <p className="text-gray-600 text-center">Integrate your models anywhere with our API</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <BarChart3 className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Performance Insights</h3>
              <p className="text-gray-600 text-center">Track usage and improve your models over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Who It's For</h2>
            <p className="text-xl text-gray-600 max-w-[800px]">KekeliAI helps teams across industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Founders & Startups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Build AI tools quickly without hiring ML engineers</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Internal Ops Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Create knowledge assistants for company documentation</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Educators</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Turn course materials into interactive AI tutors</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Customer Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Train AI on your support docs to assist customers 24/7</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">What Our Customers Say</h2>
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
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to build your custom AI model?</h2>
            <p className="text-xl text-gray-200 max-w-[800px] mb-8">
              Get started for free or book a demo to see how KekeliAI can work for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-white/20 hover:shadow-md transition-all">
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-900 border-2 hover:bg-white/20 hover:shadow-md transition-all"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
