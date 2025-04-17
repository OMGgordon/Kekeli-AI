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

  
}
