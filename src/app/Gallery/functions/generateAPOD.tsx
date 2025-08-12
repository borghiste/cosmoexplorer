import Link from "next/link";
import Image from "next/image";

interface generateAPODProps {
  APOD:{title:string,
        url:string,
        explanation: string,
        media_type:string
  } | null | undefined, 
  onClick:()=>void
} 

export default function generateAPOD({APOD, onClick}:generateAPODProps){

    //check media type

 const Content = APOD?.media_type=='image' ? 
 <Link href={`/Gallery/${encodeURIComponent(JSON.stringify(APOD))}`}  key={APOD.url}>
    <Image src={APOD.url} 
        alt={APOD.title}
        className="md:w-full"
        onClick={onClick}
        width={900}
        height={300}/> 
        </Link>
        : 
        
        <iframe width="400" 
                            height="200" 
                            key={APOD?.url} 
                            src={APOD?.url} 
                            title="YouTube video player" 
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen></iframe>
 

   return(
    <>
    <><div className="relative">
      <p className="lg:text-lg text-md">Astronomy picture of the day:</p>
      <p className="absolute ">{APOD?.title}</p>
      
      {Content}
      <p className=" text-[11px] md:text-md text-justify ">{APOD?.explanation}</p>
      </div></>
    </>
   )
    }
