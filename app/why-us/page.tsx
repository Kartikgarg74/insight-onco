import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#008080] mb-4">
              Why Choose Insight Onco?
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Empowering Lives Through Cutting-Edge Technology and Unmatched Accuracy in Early Cancer Detection
            </p>
            <Button className="bg-[#008080] text-white hover:bg-[#006666]">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#008080] mb-12">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {['Unparalleled Accuracy', 'Personalized Insights', 'Holistic Approach', 'Data-Driven Decision Making'].map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-[#008080] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Accuracy and Trust */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-[#008080] mb-4">Proven Accuracy and Trust</h2>
              <p className="text-gray-600 mb-4">
                Our AI algorithms undergo rigorous testing and validation to ensure reliability. Studies have shown that early detection through Insight Onco leads to significant improvements in outcomes, reducing late-stage diagnoses by up to 40%.
              </p>
              <Button className="bg-[#008080] text-white hover:bg-[#006666]">
                Learn More About Our Technology
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-WOGmaWQevmNZdHepwcx78zLGk5KeLR.jpeg"
                alt="AI-powered medical analysis"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#008080] mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">
                  "Insight Onco's predictions were spot-on. Thanks to their insights, I sought medical attention early and avoided potential complications."
                </p>
                <p className="font-bold">- Mark J., user</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

