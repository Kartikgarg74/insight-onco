'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface LoginFormProps {
  returnUrl: string
}

export default function LoginForm({ returnUrl }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      // Here you would typically make an API call to authenticate
      // For demo purposes, we'll simulate a successful login
      document.cookie = 'auth-token=dummy-token; path=/'
      router.push(returnUrl)
    } catch (err) {
      setError('Invalid email or password')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <Label htmlFor="email-address" className="sr-only">
            Email address
          </Label>
          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="rounded-t-md"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="rounded-b-md"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#008080] focus:ring-[#008080] border-gray-300 rounded"
          />
          <Label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </Label>
        </div>

        <div className="text-sm">
          <Link href="/forgot-password" className="font-medium text-[#008080] hover:text-[#006666]">
            Forgot your password?
          </Link>
        </div>
      </div>

      {error && (
        <div className="flex items-center text-red-600">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div>
        <Button type="submit" className="w-full bg-[#008080] hover:bg-[#006666]">
          Sign in
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="font-medium text-[#008080] hover:text-[#006666]">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  )
}

