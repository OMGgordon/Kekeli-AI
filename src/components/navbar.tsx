"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { DemoForm } from "./demo-form"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="KekeliAI Logo" width={70} height={70} />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              KekeliAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-gray-300 hover:text-white transition-colors relative group",
                  pathname === item.href && "text-white font-medium"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 transform transition-transform duration-300",
                  pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )}></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <DemoForm />
            <Button asChild className="rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-6 font-medium">
              <Link href="/get-started">Get Started Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-gray-300 hover:text-white transition-colors relative py-2",
                  pathname === item.href && "text-white font-medium bg-gradient-to-r from-blue-400/10 to-violet-400/10 rounded-lg px-4"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
              <DemoForm />
              <Button asChild className="w-full rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all px-6 font-medium">
                <Link href="/get-started">Get Started Free</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
