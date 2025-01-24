'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function SignupForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    // Here you would typically handle the signup logic
    console.log('Signup attempt with:', { name, email, password })
    // For demo purposes, let's just set a success message
    alert('Account created successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <Label htmlFor="name" className="sr-only">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="rounded-t-md"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            autoComplete="new-password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="confirm-password" className="sr-only">
            Confirm Password
          </Label>
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            required
            className="rounded-b-md"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
          Create Account
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-[#008080] hover:text-[#006666]">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  )
}

