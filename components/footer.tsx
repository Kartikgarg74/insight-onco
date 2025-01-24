import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#008080] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-COQ3uAfUvxFKYivCpXPrPcIXi4bhiK.png"
              alt="Logo"
              width={150}
              height={40}
              className="mb-6 invert"
            />
            <p className="text-sm opacity-80">
              Empowering healthcare with AI-driven technology
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 opacity-80">
              <li>123 Healthcare Ave</li>
              <li>Medical City, MC 12345</li>
              <li>contact@company.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="hover:text-gray-200 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

