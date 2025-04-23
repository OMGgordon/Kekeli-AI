import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center py-12 md:py-24 lg:py-32">
          <div className="text-center space-y-4 max-w-[800px]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Simple, transparent pricing
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Choose the plan that's right for your team. All plans include access to our core platform features.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full py-12 md:py-24 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Free Plan */}
            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Free Plan</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">$0</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <CardDescription className="mt-4 text-gray-400">Perfect for individuals and small projects</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>1 model</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>200MB data storage</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>Limited API access</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>Community support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-8 font-medium">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <div className="relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                <span className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
              </div>
              <Card className="border bg-gray-900 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full relative border-transparent bg-gradient-to-r from-blue-500/30 to-violet-500/30 p-[1.5px] before:absolute before:inset-0 before:rounded-[inherit] before:p-[1.5px] before:bg-gradient-to-r before:from-blue-500 before:to-violet-500 before:-z-10 before:content-[''] after:absolute after:inset-[1px] after:rounded-[inherit] after:bg-gradient-to-r after:from-blue-500/10 after:to-violet-500/10 after:blur-sm after:-z-10 after:content-['']">
                <div className="bg-gray-900 rounded-[inherit] p-6 h-full relative z-10">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">Pro Plan</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">$49</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    <CardDescription className="mt-4 text-gray-400">For growing teams and businesses</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      <li className="flex items-start text-gray-300">
                        <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                        <span>5 models</span>
                      </li>
                      <li className="flex items-start text-gray-300">
                        <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                        <span>5GB data storage</span>
                      </li>
                      <li className="flex items-start text-gray-300">
                        <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                        <span>Full API & embed support</span>
                      </li>
                      <li className="flex items-start text-gray-300">
                        <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                        <span>Priority email support</span>
                      </li>
                      <li className="flex items-start text-gray-300">
                        <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                        <span>Advanced analytics</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-8 font-medium">
                      Get Started
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </div>

            {/* Enterprise Plan */}
            <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">Custom</span>
                </div>
                <CardDescription className="mt-4 text-gray-400">For large organizations with specific needs</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>Unlimited models</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>Custom data storage limits</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>SSO & on-prem deployment</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>SLA & 24/7 support</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckIcon className="h-5 w-5 text-violet-400 mr-2 shrink-0" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline"
                  className="w-full rounded-full bg-transparent border-gray-600 text-gray-300 border hover:bg-violet-600/20 hover:border-violet-500 hover:text-violet-400 transition-all px-8 font-medium"
                >
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Can I switch plans later?</h3>
              <p className="text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next
                billing cycle.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">How does data storage work?</h3>
              <p className="text-gray-400">
                Data storage refers to the amount of data you can upload for training your models. Additional storage
                can be purchased if needed.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">What counts as a "model"?</h3>
              <p className="text-gray-400">
                Each separately fine-tuned AI model counts as one model. You can create multiple versions of the same
                model without using additional model slots.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Do you offer discounts?</h3>
              <p className="text-gray-400">
                We offer discounts for educational institutions and non-profit organizations. Contact our sales team for
                more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-white">Ready to get started with KekeliAI?</h2>
            <p className="text-xl text-gray-400 max-w-[600px]">
              Start with our free plan or contact us for a custom solution.
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
