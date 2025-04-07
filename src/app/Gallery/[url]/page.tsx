"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ImageObject } from "../page"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

export default function Modal() {
  const params = useParams<Params>();
  const [image, setImage] = useState<ImageObject | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    
    try {
      if (typeof params.url === 'string') { 
        const decodedImage = JSON.parse(decodeURIComponent(params.url)) as ImageObject
        setImage(decodedImage)
      } else {
        setError("Invalid URL format")
      }
    } catch (e) {
      setError("Error decoding image data")
    }
  }, [params.url])

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>
  }

  if (!image) {
    return <div className="p-4">Loading...</div>
  }

  return (
    <div className="relative flex flex-col lg:flex-row lg:h-screen p-4">
      <Link 
        href="/Gallery"
        className="absolute top-4 left-4 text-4xl text-red-600 hover:text-red-800 transition"
      >
        &larr;
      </Link>

      <Image 
        src={image.url} 
        alt={image.title}        
        className="aspect-square object-cover rounded-lg"
        width={500}
        height={500}
      />
     
      <div className="flex flex-col lg:justify-center p-4 lg:p-8">
        <h2 className="text-4xl font-bold">{image.title}</h2>
        <p className="text-justify mt-4">{image.explanation}</p>
      </div>
    </div>
  )
}
