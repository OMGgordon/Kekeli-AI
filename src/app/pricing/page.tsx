import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-800 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Simple, Transparent Pricing</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-[800px]">
              Choose the plan that's right for your team. All plans include access to our core platform features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Free Plan */}
            <Card className="border-none shadow-lg flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Free Plan</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <CardDescription className="mt-4">Perfect for individuals and small projects</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>1 model</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>200MB data storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Limited API access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Community support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:opacity-90 transition-all">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-none shadow-lg flex flex-col relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-lg"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Pro Plan</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$49</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <CardDescription className="mt-4">For growing teams and businesses</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>5 models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>5GB data storage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Full API & embed support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Priority email support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:opacity-90 transition-all">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-none shadow-lg flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <CardDescription className="mt-4">For large organizations with specific needs</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Unlimited models</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Custom data storage limits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>SSO & on-prem deployment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>SLA & 24/7 support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:opacity-90 transition-all">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Can I switch plans later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next
                billing cycle.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">How does data storage work?</h3>
              <p className="text-gray-600">
                Data storage refers to the amount of data you can upload for training your models. Additional storage
                can be purchased if needed.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">What counts as a "model"?</h3>
              <p className="text-gray-600">
                Each separately fine-tuned AI model counts as one model. You can create multiple versions of the same
                model without using additional model slots.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Do you offer discounts?</h3>
              <p className="text-gray-600">
                We offer discounts for educational institutions and non-profit organizations. Contact our sales team for
                more information.
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
            <p className="text-xl text-gray-200 max-w-[800px] mb-8">
              Start with our free plan or contact us for a custom solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 hover:shadow-md transition-all w-full sm:w-auto">
                Get Started Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white border-2 hover:bg-white/20 hover:shadow-md transition-all w-full sm:w-auto"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
