import Image from 'next/image'
import { Check } from 'lucide-react'

const features = [
  "Early Cancer Detection",
  "Comprehensive Reports",
  "Trusted by Experts"
]

export default function AIIllustration() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2002.28.27_fa3db62c%201-nKMxYa4U7xZiMSqh5JiIC6piZA4XK2.png"
              alt="AI Medical Interface"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#008080] mb-8">
              Advanced AI Technology at Your Service
            </h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-[#008080]/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#008080]" />
                  </div>
                  <span className="text-lg text-[#333333]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

