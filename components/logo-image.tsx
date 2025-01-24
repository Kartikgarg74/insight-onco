"use client"

import Image from "next/image"

interface LogoImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function LogoImage({ src, alt, width, height, className }: LogoImageProps) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = "/placeholder.svg?height=40&width=150" // Fallback to placeholder
      }}
    />
  )
}

