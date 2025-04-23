import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Zap, Code, Shield, MessageSquare, Key, Activity } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center py-12 md:py-24 lg:py-32">
          <div className="text-center space-y-4 max-w-[800px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Build AI models that understand your business
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Train custom AI models on your business data to automate tasks, improve decision making, and drive efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild variant="outline" className="rounded-full bg-transparent border-gray-600 text-gray-300 border hover:bg-violet-600/20 hover:border-violet-500 hover:text-violet-400 transition-all px-6 font-medium">
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button asChild className="rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-6 font-medium">
                <Link href="/get-started">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Features Breakdown</h2>
            <p className="text-xl text-gray-400 max-w-[800px] mb-16">
              Everything you need to build, deploy, and manage custom AI models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-white">Drag & Drop Uploads</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Easily upload files, knowledge bases, CSVs, and more with our intuitive interface. Support for PDF,
                  Notion, Google Docs, and many other formats.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-white">Model Training Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Our AI helps structure your data for optimal fine-tuning results. Get guidance on data preparation and
                  model selection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-white">Instant Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Use your model through our chat UI or API immediately after training. No waiting for complex
                  deployments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-white">Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Your data, your model, your control. We prioritize security and privacy with isolated environments for
                  each customer.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-violet-900/20 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-violet-400" />
                </div>
                <CardTitle className="text-white">Embeddable UI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Add custom AI widgets to your site or tools with a few lines of code. Fully customizable to match your
                  brand.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Post-Tuning Tools */}
      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Post-Tuning Tools</h2>
            <p className="text-xl text-gray-400 max-w-[800px]">Manage and optimize your AI models after deployment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-gray-800">
              <MessageSquare className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">In-platform Chat Interface</h3>
              <p className="text-gray-400 text-center">
                Dedicated chat interface for each organization. Test your model and share access with team members.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-gray-800">
              <Key className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Secure API Access</h3>
              <p className="text-gray-400 text-center">
                Integrate your models into any application with our secure API. Comprehensive documentation and SDKs
                available.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-black rounded-lg border border-gray-800">
              <Activity className="w-12 h-12 text-violet-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Usage Monitoring & Logs</h3>
              <p className="text-gray-400 text-center">
                Track usage, monitor performance, and analyze logs to continuously improve your models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to get started?</h2>
            <p className="text-xl text-gray-300 max-w-[800px]">
              Join leading companies using KekeliAI to build custom AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="rounded-full bg-transparent border-gray-600 text-gray-300 border hover:bg-violet-600/20 hover:border-violet-500 hover:text-violet-400 transition-all px-6 font-medium">
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button asChild className="rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-6 font-medium">
                <Link href="/get-started">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
