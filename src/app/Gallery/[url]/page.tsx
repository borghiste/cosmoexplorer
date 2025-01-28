"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ImageObject } from "../page"




export default function Modal() {
  const params = useParams()
  const [imageURL, setImageURL] = useState<string | null>(null)
 
  const [error, setError] = useState<string | null>(null)

  const [image, setImage] = useState<ImageObject | null>(null)

  useEffect(() => {
    try {
      if (typeof params.URL === "string") {
        const decodedImage = JSON.parse(decodeURIComponent(params.URL)) as ImageObject
        setImage(decodedImage)
        
        
      } else {
        setError("Parametro URL non valido")
      }
    } catch (e) {
      setError("Errore nel decodificare l'URL")
    }
  }, [params.URL])

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>
  }

  if (!image) {
    return <div className="p-4">Loading...</div>
  }

  

    return(
      <div>
      <Link  
      href="/Gallery"
      className="absolute z-20  text-4xl text-red-600">&larr;</Link>
      <div className="flex  justify-center ">
     
        <img src={image.url} 
            alt={image.title}        className="max-w-min aspect-square"  />
     
        <div className="flex flex-col">
     
      <h2 className="text-4xl ">{image.title}</h2>
      <br />
      <p className="text-justify    ">{image.explanation}</p>
      </div>
        </div>
     
      </div>
    )
  // return (
  //   <div className="container mx-auto px-4 py-8">
  //     <Link href="/Gallery" className="text-blue-500 hover:underline mb-4 inline-block">
  //       &larr; Back to Gallery
  //     </Link>
  //     <div className="relative w-full max-w-2xl mx-auto aspect-[3/2]">
  //       <img
  //         src={image.url}
  //         alt="Full size image"
  //         height={500}
  //         width={500}
  //         style={{ objectFit: "contain" }}
  //         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  //       />
        
  //     </div>
  //   </div>
  // )
}

