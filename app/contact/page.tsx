'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#008080] mb-8">Contact Us</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Have questions? We're here to help. Whether you're seeking more information about cancer risk assessment, need technical support, or want to explore collaboration opportunities, our team is here for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-[#008080] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Select onValueChange={(value) => setFormData({ ...formData, subject: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="collaboration">Collaboration Request</SelectItem>
                    <SelectItem value="feedback">Feedback/Suggestions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[#008080] text-white hover:bg-[#006666]">
                Submit Form
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#008080] mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-[#008080] mr-4" />
                <p>contact@insightonco.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-[#008080] mr-4" />
                <p>+1-800-123-4567</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-[#008080] mr-4" />
                <p>123 Health Lane, Suite 456<br />Wellness City, State, ZIP</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-[#008080] mr-4" />
                <div>
                  <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p>Saturday: 10:00 AM – 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#008080] mt-12 mb-6">Connect With Us</h2>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <Button key={social} variant="outline" className="text-[#008080] border-[#008080]">
                  {social}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

