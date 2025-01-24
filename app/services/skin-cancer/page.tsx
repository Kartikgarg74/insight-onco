'use client'

import ImageUpload from '@/components/image-upload'
import { Button } from '@/components/ui/button'

export default function SkinCancerPage() {
  const handleImageCapture = (file: File) => {
    // Handle the captured image
    console.log('Image captured:', file)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-[#008080] mb-6">
            Skin Cancer Detection
          </h1>
          <p className="text-gray-600 mb-8">
            Please upload or take a clear photo of the concerning skin area.
            Ensure good lighting and focus on the specific area you want to analyze.
          </p>

          <div className="bg-white p-6 rounded-lg shadow">
            <ImageUpload
              onImageCapture={handleImageCapture}
              title="Upload Skin Image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

