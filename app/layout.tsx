import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Insight Onco - AI-Powered Cancer Detection',
  description: 'Early cancer detection powered by artificial intelligence',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16"> {/* Add padding-top to account for fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

