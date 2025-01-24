import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Cases() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-[#008080]">
            Our Healthcare AI Cases
          </h2>
          <Button className="bg-[#008080] text-white hover:bg-[#006666]">
            Explore More
          </Button>
        </div>
        <div className="grid gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-[400px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6f590b29-58db-44b7-9f0f-dd82c8db60e8-WIxAbaOYaNnGLbzZo2JfNglknClTRu.png"
                alt="Multi-cancer detection app interface"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#333333] mb-2">
                Comprehensive Cancer Detection Platform
              </h3>
              <p className="text-[#666666]">
                Our AI-powered platform provides multiple cancer detection services including
                oral, lung, cervical, and skin cancer screening through advanced imaging
                and questionnaire-based risk assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

