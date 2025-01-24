import SignupForm from "@/components/signup-form"
import Image from "next/image"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-COQ3uAfUvxFKYivCpXPrPcIXi4bhiK.png"
            alt="Insight Onco Logo"
            width={150}
            height={40}
            className="mx-auto h-12 w-auto"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = "/placeholder.svg?height=40&width=150" // Fallback to placeholder
            }}
          />
          <h2 className="mt-6 text-3xl font-extrabold text-[#008080]">Create your account</h2>
        </div>
        <SignupForm />
      </div>
    </div>
  )
}

