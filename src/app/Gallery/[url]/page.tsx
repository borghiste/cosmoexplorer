"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ImagePage() {
  const params = useParams()
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      if (typeof params.url === "string") {
        const decodedUrl = decodeURIComponent(params.url)
        setImageUrl(decodedUrl)
      } else {
        setError("Invalid URL parameter")
      }
    } catch (e) {
      setError("Error decoding URL")
    }
  }, [params.url])

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>
  }

  if (!imageUrl) {
    return <div className="p-4">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/Gallery" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Gallery
      </Link>
      <div className="relative w-full max-w-2xl mx-auto aspect-[3/2]">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Full size image"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}

