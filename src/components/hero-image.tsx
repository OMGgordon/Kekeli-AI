"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroImage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="relative w-full max-w-2xl aspect-[4/3]">
      <Image
        src="/Fine-tuning process.jpg"
        alt="KekeliAI Platform Interface"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 672px"
        className="object-contain rounded-lg"
        priority
      />
    </div>
  )
}
