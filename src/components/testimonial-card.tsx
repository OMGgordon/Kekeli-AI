import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
}

export default function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <Card className="border-none bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="pt-6">
        <QuoteIcon className="h-8 w-8 text-violet-400 mb-4" />
        <p className="text-gray-300 mb-6 italic text-lg">"{quote}"</p>
        <p className="text-sm font-semibold text-white">{author}</p>
      </CardContent>
    </Card>
  )
}
