import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="border-none bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <QuoteIcon className="h-8 w-8 text-blue-200 mb-4" />
        <p className="text-gray-600 mb-6 italic">"{quote}"</p>
        <p className="text-sm font-semibold text-gray-900">{author}</p>
      </CardContent>
    </Card>
  )
}
