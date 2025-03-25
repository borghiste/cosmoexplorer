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
        setError(" invalid URL ")
      }
    } catch (e) {
      setError("Error decoding URL")
    }
  }, [params.URL])

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>
  }

  if (!image) {
    return <div className="p-4">Loading...</div>
  }

  

    return(
      <div className="">
      <Link  
      href="/Gallery"
      className="absolute z-20  text-4xl text-red-600">&larr;</Link>
      <div className="  flex-col flex lg:flex-row lg:h-screen  ">
     
        <Image src={image.url} 
            alt={image.title}        
            className=" aspect-square  "
            width={500}
            height={500}/>
     
        <div className="flex flex-col lg:justify-center ">
     
      <h2 className="text-4xl ">{image.title}</h2>
      <br />
      <p className="text-justify ">{image.explanation}</p>
      </div>
        </div>
     
      </div>
    )

}

