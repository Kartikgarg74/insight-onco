'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const questions = [
  { id: 'age', label: 'Age', type: 'number' },
  { id: 'sexual_partners', label: 'Number of sexual partners', type: 'number' },
  { id: 'first_intercourse', label: 'Age at First sexual intercourse', type: 'number' },
  { id: 'pregnancies', label: 'Number of pregnancies', type: 'number' },
  { id: 'smokes', label: 'Do you smoke?', type: 'select', options: ['Yes', 'No'] },
  { id: 'smokes_years', label: 'If yes, how many years?', type: 'number' },
  { id: 'smokes_packs', label: 'Packs per year', type: 'number' },
  { id: 'hormonal_contraceptives', label: 'Using Hormonal Contraceptives?', type: 'select', options: ['Yes', 'No'] },
]

export default function CervicalCancerPage() {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form data:', formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-[#008080] mb-6">
            Cervical Cancer Risk Assessment
          </h1>
          <p className="text-gray-600 mb-8">
            Please answer all questions accurately for the best assessment results.
            Your information will be kept strictly confidential.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
            {questions.map((question) => (
              <div key={question.id}>
                <Label htmlFor={question.id}>{question.label}</Label>
                {question.type === 'select' ? (
                  <Select
                    onValueChange={(value) =>
                      setFormData(prev => ({ ...prev, [question.id]: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={`Select ${question.label}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {question.options?.map((option) => (
                        <SelectItem key={option} value={option.toLowerCase()}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    id={question.id}
                    type={question.type}
                    onChange={(e) =>
                      setFormData(prev => ({ ...prev, [question.id]: e.target.value }))
                    }
                  />
                )}
              </div>
            ))}

            <Button type="submit" className="w-full">
              Submit Assessment
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

