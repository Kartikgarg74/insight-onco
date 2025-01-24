import Image from 'next/image'

const team = [
  {
    name: "AI Medical Interface",
    role: "Advanced Diagnostic System",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-yFYhLp8l7JI9znZx8QoqamH4J5uLc8.jpeg"
  },
  {
    name: "AI Health Monitor",
    role: "Real-time Health Analytics",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-WOGmaWQevmNZdHepwcx78zLGk5KeLR.jpeg"
  }
]

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#008080] mb-16">
          Our Smart Team
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-[300px] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
              <p className="text-[#666666]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

