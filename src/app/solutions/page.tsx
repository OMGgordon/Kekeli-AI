import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket, Building, GraduationCap, HeadphonesIcon } from "lucide-react"

export default function SolutionsPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">KekeliAI Solutions</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-[800px]">
              Tailored AI solutions for every industry and use case
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {/* For Startups */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                <Rocket className="w-20 h-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">For Startups</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Build internal tools, pitch bots, or client Q&A systems quickly without hiring ML engineers or
                  spending months on development.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Create custom AI assistants for your product</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Build AI-powered demos for investors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Automate repetitive customer interactions</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:opacity-90 transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* For Enterprises */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                <Building className="w-20 h-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">For Enterprises</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Keep your data private while empowering teams with AI. Deploy secure, custom models that understand
                  your company's unique knowledge.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Enterprise-grade security and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>SSO integration and role-based access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>On-premise deployment options available</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:opacity-90 transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* For Educators */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <GraduationCap className="w-20 h-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">For Educators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Turn course material into a responsive tutor. Create AI teaching assistants that understand your
                  curriculum and can help students 24/7.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Train models on your course materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Create interactive learning experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Provide personalized feedback at scale</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:opacity-90 transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* For Support Teams */}
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <HeadphonesIcon className="w-20 h-20 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">For Support Teams</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Fine-tune bots on past tickets to reduce load and improve accuracy. Create AI support agents that
                  understand your products and services.
                </CardDescription>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Reduce response time for common questions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Scale support without increasing headcount</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Improve customer satisfaction with 24/7 support</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:opacity-90 transition-all">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-[800px]">
              See how organizations are using KekeliAI to transform their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>TechStart Reduces Support Time by 70%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Learn how TechStart implemented KekeliAI to handle tier-1 support requests automatically, freeing up
                  their team for more complex issues.
                </CardDescription>
                <Button
                  variant="link"
                  className="mt-4 p-0 text-blue-700 hover:text-blue-900 hover:underline transition-all"
                >
                  Read Case Study →
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle>EdTech University Creates AI Teaching Assistant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Discover how professors at EdTech University used KekeliAI to create an AI teaching assistant that
                  helps students with course material 24/7.
                </CardDescription>
                <Button
                  variant="link"
                  className="mt-4 p-0 text-blue-700 hover:text-blue-900 hover:underline transition-all"
                >
                  Read Case Study →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-900 to-purple-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Find the right solution for your team</h2>
            <p className="text-xl text-gray-200 max-w-[800px] mb-8">
              Schedule a consultation with our solutions team to discover how KekeliAI can work for you.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 hover:shadow-md transition-all">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
