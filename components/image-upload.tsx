'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Camera, Upload } from 'lucide-react'
import Image from 'next/image'

interface ImageUploadProps {
  onImageCapture: (file: File) => void
  title: string
}

export default function ImageUpload({ onImageCapture, title }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    const file = e.target.files?.[0]
    if (file) {
      if (file.type.startsWith('image/')) {
        setPreview(URL.createObjectURL(file))
        onImageCapture(file)
      } else {
        setError('Please select an image file')
      }
    }
  }

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      // Handle camera stream
      // This is a simplified version - you'd typically need to implement
      // a proper camera interface with capture button
    } catch (err) {
      setError('Unable to access camera')
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#008080]">{title}</h2>
      
      <div className="flex gap-4">
        <Button 
          onClick={() => fileInputRef.current?.click()}
          className="flex-1"
        >
          <Upload className="w-4 h-4 mr-2" />
          Upload Image
        </Button>
        <Button 
          onClick={handleCameraCapture}
          className="flex-1"
        >
          <Camera className="w-4 h-4 mr-2" />
          Take Photo
        </Button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />

      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {preview && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image
            src={preview}
            alt="Preview"
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  )
}

