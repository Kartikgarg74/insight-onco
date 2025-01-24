import Image from 'next/image'

const team = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-yFYhLp8l7JI9znZx8QoqamH4J5uLc8.jpeg",
    title: "AI Medical Interface",
    description: "Advanced diagnostic systems"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-WOGmaWQevmNZdHepwcx78zLGk5KeLR.jpeg",
    title: "Smart Health Monitor",
    description: "Real-time health analytics"
  }
]

export default function SmartTeam() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#008080] mb-4">
            Our Smart Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Powered by advanced AI technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#008080] mb-2">{member.title}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

