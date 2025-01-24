import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#008080] mb-6">
              The Most Leading Solution for Early Detection
            </h2>
            <div className="h-1 w-20 bg-[#008080] mb-6" />
            <p className="text-[#666666] text-lg mb-8">
              Our AI-powered platform revolutionizes cancer risk assessment by analyzing complex medical data patterns. Using advanced machine learning algorithms, we provide accurate, early detection insights that help healthcare providers make informed decisions and improve patient outcomes.
            </p>
            <ul className="space-y-4 text-[#666666]">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#008080] rounded-full mr-3" />
                Advanced AI Analysis
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#008080] rounded-full mr-3" />
                Early Risk Detection
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#008080] rounded-full mr-3" />
                Comprehensive Reports
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Doctors analyzing AI predictions"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

