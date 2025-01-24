"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Us", href: "/why-us" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-COQ3uAfUvxFKYivCpXPrPcIXi4bhiK.png"
              alt="Insight Onco Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=40&width=150" // Fallback to placeholder
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#008080] hover:text-[#333333] transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#008080] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="text-[#008080] border-[#008080] hover:bg-[#008080] hover:text-white">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#008080] text-white hover:bg-[#006666]">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#008080]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#008080] hover:text-[#333333] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2">
                <Link href="/login">
                  <Button
                    variant="outline"
                    className="w-full text-[#008080] border-[#008080] hover:bg-[#008080] hover:text-white"
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full bg-[#008080] text-white hover:bg-[#006666]">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

