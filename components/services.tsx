import Image from 'next/image'

const services = [
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.26.54_98757de5%201-OUksm8ubsKD40xY40b3JBV1wp7isLi.png",
    title: "AI-Powered Risk Assessment",
    description: "Advanced diagnostic support using artificial intelligence"
  },
  {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2000.27.45_f57272d9%201-3PM452DHBq4pGieCRkn1lPwsgZ2fdZ.png",
    title: "Data Integration",
    description: "Seamless integration of medical data sources"
  },
  {
    icon: "/placeholder.svg?height=64&width=64",
    title: "Real-time Monitoring",
    description: "Continuous patient health monitoring"
  },
  {
    icon: "/placeholder.svg?height=64&width=64",
    title: "Predictive Analytics",
    description: "Advanced predictive health insights"
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#008080] to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          What We Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="w-20 h-20 mx-auto mb-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-4">{service.title}</h3>
              <p className="text-[#666666]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

