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
  { id: 'gender', label: 'Gender', type: 'select', options: ['Male', 'Female'] },
  { id: 'age', label: 'Age', type: 'number' },
  { id: 'smoking', label: 'Smoking', type: 'select', options: ['Yes', 'No'] },
  { id: 'yellow_fingers', label: 'Yellow Fingers', type: 'select', options: ['Yes', 'No'] },
  { id: 'anxiety', label: 'Anxiety', type: 'select', options: ['Yes', 'No'] },
  { id: 'peer_pressure', label: 'Peer Pressure', type: 'select', options: ['Yes', 'No'] },
  { id: 'chronic_disease', label: 'Chronic Disease', type: 'select', options: ['Yes', 'No'] },
  { id: 'fatigue', label: 'Fatigue', type: 'select', options: ['Yes', 'No'] },
  { id: 'allergy', label: 'Allergy', type: 'select', options: ['Yes', 'No'] },
  { id: 'wheezing', label: 'Wheezing', type: 'select', options: ['Yes', 'No'] },
  { id: 'alcohol_consuming', label: 'Alcohol Consuming', type: 'select', options: ['Yes', 'No'] },
  { id: 'coughing', label: 'Coughing', type: 'select', options: ['Yes', 'No'] },
  { id: 'shortness_of_breath', label: 'Shortness of Breath', type: 'select', options: ['Yes', 'No'] },
  { id: 'swallowing_difficulty', label: 'Swallowing Difficulty', type: 'select', options: ['Yes', 'No'] },
  { id: 'chest_pain', label: 'Chest Pain', type: 'select', options: ['Yes', 'No'] },
]

export default function LungCancerPage() {
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
            Lung Cancer Risk Assessment
          </h1>
          <p className="text-gray-600 mb-8">
            Please answer all questions accurately for the best assessment results.
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

