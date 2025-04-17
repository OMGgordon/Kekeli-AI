import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Zap, Code, Shield, MessageSquare, Key, Activity } from "lucide-react"
import Image from "next/image"

export default function ProductPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">KekeliAI Product Overview</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-[800px]">
              Empower your team to create smart, custom LLMs tailored to your content—without writing a single line of
              code.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">No-Code AI Model Fine-Tuning</h2>
              <p className="text-xl text-gray-600">
                KekeliAI makes it easy to create custom AI models trained on your specific data. Our platform handles
                the complex machine learning processes behind the scenes, so you can focus on building amazing AI
                experiences.
              </p>
              <Button className="bg-gradient-to-r from-blue-700 to-purple-700 text-white w-fit hover:shadow-lg hover:opacity-90 transition-all">
                Learn More
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 aspect-video flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="KekeliAI Platform Interface"
                width={600}
                height={400}
                className="rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Features Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-[800px]">
              Everything you need to build, deploy, and manage custom AI models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-blue-700" />
                </div>
                <CardTitle>Drag & Drop Uploads</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Easily upload files, knowledge bases, CSVs, and more with our intuitive interface. Support for PDF,
                  Notion, Google Docs, and many other formats.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-indigo-700" />
                </div>
                <CardTitle>Model Training Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our AI helps structure your data for optimal fine-tuning results. Get guidance on data preparation and
                  model selection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-purple-700" />
                </div>
                <CardTitle>Instant Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Use your model through our chat UI or API immediately after training. No waiting for complex
                  deployments.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-700" />
                </div>
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your data, your model, your control. We prioritize security and privacy with isolated environments for
                  each customer.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-indigo-700" />
                </div>
                <CardTitle>Embeddable UI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Add custom AI widgets to your site or tools with a few lines of code. Fully customizable to match your
                  brand.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Post-Tuning Tools */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Post-Tuning Tools</h2>
            <p className="text-xl text-gray-600 max-w-[800px]">Manage and optimize your AI models after deployment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <MessageSquare className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">In-platform Chat Interface</h3>
              <p className="text-gray-600 text-center">
                Dedicated chat interface for each organization. Test your model and share access with team members.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Key className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure API Access</h3>
              <p className="text-gray-600 text-center">
                Integrate your models into any application with our secure API. Comprehensive documentation and SDKs
                available.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Activity className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Usage Monitoring & Logs</h3>
              <p className="text-gray-600 text-center">
                Track usage, monitor performance, and analyze logs to continuously improve your models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to get started with KekeliAI?</h2>
            <p className="text-xl text-gray-200 max-w-[800px] mb-8">Create your first custom AI model in minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 hover:shadow-md transition-all">
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white border-2 hover:bg-white/20 hover:shadow-md transition-all"
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
