import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Building, GraduationCap, HeadphonesIcon } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center py-12 md:py-24 lg:py-32">
          <div className="text-center space-y-4 max-w-[800px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              AI Solutions for Every Industry
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Tailored AI solutions for every industry and use case
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="w-full py-12 md:py-24 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* For Startups */}
            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-violet-900/30 to-transparent flex items-center justify-center">
                <Rocket className="w-20 h-20 text-violet-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">For Startups</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-400 text-base">
                  Build internal tools, pitch bots, or client Q&A systems quickly without hiring ML engineers or
                  spending months on development.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Create custom AI assistants for your product</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Build AI-powered demos for investors</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Automate repetitive customer interactions</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-8 font-medium">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* For Enterprises */}
            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-violet-900/30 to-transparent flex items-center justify-center">
                <Building className="w-20 h-20 text-violet-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">For Enterprises</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-400 text-base">
                  Keep your data private while empowering teams with AI. Deploy secure, custom models that understand
                  your company's unique knowledge.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Enterprise-grade security and compliance</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>SSO integration and role-based access</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>On-premise deployment options available</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-8 font-medium">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* For Educators */}
            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-violet-900/30 to-transparent flex items-center justify-center">
                <GraduationCap className="w-20 h-20 text-violet-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">For Educators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-400 text-base">
                  Turn course material into a responsive tutor. Create AI teaching assistants that understand your
                  curriculum and can help students 24/7.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Train models on your course materials</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Create interactive learning experiences</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Provide personalized feedback at scale</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-8 font-medium">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* For Support Teams */}
            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-violet-900/30 to-transparent flex items-center justify-center">
                <HeadphonesIcon className="w-20 h-20 text-violet-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">For Support Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-400 text-base">
                  Fine-tune bots on past tickets to reduce load and improve accuracy. Create AI support agents that
                  understand your products and services.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Reduce response time for common questions</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Scale support without increasing headcount</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="mr-2 text-violet-400">✓</span>
                    <span>Improve customer satisfaction with 24/7 support</span>
                  </li>
                </ul>
                <Button className="w-full rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-8 font-medium">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-[800px]">
              See how organizations are using KekeliAI to transform their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-none bg-black shadow-md border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">TechStart Reduces Support Time by 70%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Learn how TechStart implemented KekeliAI to handle tier-1 support requests automatically, freeing up
                  their team for more complex issues.
                </CardDescription>
                <Button
                  variant="link"
                  className="mt-4 p-0 text-violet-400 hover:text-violet-300 hover:underline transition-all"
                >
                  Read Case Study →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none bg-black shadow-md border border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">EdTech University Creates AI Teaching Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  Discover how professors at EdTech University used KekeliAI to create an AI teaching assistant that
                  helps students with course material 24/7.
                </CardDescription>
                <Button
                  variant="link"
                  className="mt-4 p-0 text-violet-400 hover:text-violet-300 hover:underline transition-all"
                >
                  Read Case Study →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Ready to transform your business?</h2>
            <p className="text-xl text-gray-300 max-w-[800px] mb-8">
              Join leading companies using KekeliAI to build custom AI solutions.
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
    </div>
  )
}
