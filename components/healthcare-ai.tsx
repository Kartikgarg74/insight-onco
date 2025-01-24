import Image from 'next/image'

export default function HealthcareAI() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#008080] mb-4">
            Our Healthcare AI Cases
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Revolutionizing healthcare through AI-powered solutions
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6f590b29-58db-44b7-9f0f-dd82c8db60e8-WIxAbaOYaNnGLbzZo2JfNglknClTRu.png"
            alt="Healthcare AI Process"
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

