import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Brain, TreesIcon as Lungs, Users, SkullIcon as Skin } from 'lucide-react'

const services = [
  {
    title: "Oral Cancer Detection",
    description: "Upload an image of your open mouth for AI-powered oral cancer screening",
    icon: Brain,
    href: "/services/oral-cancer",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Lung Cancer Detection",
    description: "Answer a series of questions to assess your lung cancer risk",
    icon: Lungs,
    href: "/services/lung-cancer",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Cervical Cancer Detection",
    description: "Complete a questionnaire for cervical cancer risk assessment",
    icon: Users,
    href: "/services/cervical-cancer",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    title: "Skin Cancer Detection",
    description: "Upload images of concerning skin areas for AI analysis",
    icon: Skin,
    href: "/services/skin-cancer",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-[#008080] mb-4">
            Our Cancer Detection Services
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Choose a service below to begin your AI-powered cancer risk assessment
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <CardTitle className="flex items-center text-xl mb-2">
                      <service.icon className="w-6 h-6 text-[#008080] mr-2" />
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

