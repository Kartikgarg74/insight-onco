import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-[#008080]">
              Smart Data Analytics For Healthcare
            </h1>
            <p className="text-xl text-gray-600">
              Empowering healthcare decisions with advanced AI technology and data analytics
            </p>
            <Button 
              className="bg-[#008080] text-white hover:bg-[#006666] text-lg px-8 py-6"
              size="lg"
            >
              Get Started
            </Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2002.28.28_45ac5553%201-mVFF2vX0WrrGstJzYhp3XPQlU5aaBX.png"
              alt="Healthcare Analytics"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

