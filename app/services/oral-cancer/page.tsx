'use client'

import AuthCheck from '@/components/auth-check'
import ImageUpload from '@/components/image-upload'
import { Button } from '@/components/ui/button'

export default function OralCancerPage() {
  const handleImageCapture = (file: File) => {
    // Handle the captured image
    console.log('Image captured:', file)
  }

  return (
    <>
      <AuthCheck />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-[#008080] mb-6">
              Oral Cancer Detection
            </h1>
            <p className="text-gray-600 mb-8">
              Please upload or take a clear photo of your open mouth for AI analysis.
              Ensure good lighting and a clear view of the area of concern.
            </p>

            <div className="bg-white p-6 rounded-lg shadow">
              <ImageUpload
                onImageCapture={handleImageCapture}
                title="Upload Oral Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

