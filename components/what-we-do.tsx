import Image from 'next/image'

const services = [
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.26.54_98757de5%201-OUksm8ubsKD40xY40b3JBV1wp7isLi.png",
    title: "AI-Powered Analytics",
    description: "Advanced diagnostic support using artificial intelligence"
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.27.45_f57272d9%201-3PM452DHBq4pGieCRkn1lPwsgZ2fdZ.png",
    title: "Smart Monitoring",
    description: "Real-time health monitoring and analysis"
  },
  {
    icon: "/placeholder.svg?height=64&width=64",
    title: "Data Integration",
    description: "Seamless integration of medical data"
  },
  {
    icon: "/placeholder.svg?height=64&width=64",
    title: "Predictive Insights",
    description: "Advanced health prediction models"
  }
]

export default function WhatWeDo() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#008080] mb-4">What We Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Delivering innovative healthcare solutions through advanced technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#008080] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

