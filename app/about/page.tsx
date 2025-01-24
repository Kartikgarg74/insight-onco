import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-[#008080] mb-4">
                Shaping the Future of Healthcare
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Empowering lives through AI-driven cancer insights.
              </p>
              <Button className="bg-[#008080] text-white hover:bg-[#006666]">
                Learn More About Our Journey
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2002.28.28_45ac5553%201-mVFF2vX0WrrGstJzYhp3XPQlU5aaBX.png"
                alt="AI doctor interacting with patients"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-[#008080] mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To revolutionize healthcare with advanced AI solutions that empower individuals and healthcare providers to detect and manage cancer risks early.
              </p>
              <h2 className="text-3xl font-bold text-[#008080] mb-4">Our Vision</h2>
              <p className="text-gray-600">
                A world where everyone has access to timely, accurate, and personalized cancer risk assessments for better health outcomes.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2002.28.27_fa3db62c%201-nKMxYa4U7xZiMSqh5JiIC6piZA4XK2.png"
                alt="AI-powered healthcare illustration"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#008080] mb-12">How It All Began</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Insight Onco began with a mission to combat late-stage cancer diagnoses. Created by a team of healthcare professionals, data scientists, and AI innovators, we are dedicated to saving lives through technology.
          </p>
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-yFYhLp8l7JI9znZx8QoqamH4J5uLc8.jpeg"
              alt="AI team working on healthcare solutions"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#008080] mb-12">Our Team of Innovators</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Team member ${i}`}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Dr. Jane Smith</h3>
                <p className="text-gray-600">AI Research Lead</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

