'use client'

import { useSearchParams } from 'next/navigation'
import LoginForm from '@/components/login-form'
import Image from 'next/image'

export default function LoginPage() {
  const searchParams = useSearchParams()
  const returnUrl = searchParams.get('returnUrl') || '/'

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
          />
          <h2 className="mt-6 text-3xl font-extrabold text-[#008080]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to access our cancer detection services
          </p>
        </div>
        <LoginForm returnUrl={returnUrl} />
      </div>
    </div>
  )
}

