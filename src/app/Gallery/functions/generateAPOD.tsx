import Link from "next/link";
import Image from "next/image";
export default function generateAPOD({APOD, onClick}){

    //check media type

 const Content = APOD.media_type=='image' ? 
    <Image src={APOD.url} 
        alt={APOD.title}
        className="aspect-square "
        onClick={onClick}
        width={500}
        height={500}/> : 
        
        <iframe width="400" 
                            height="200" 
                            key={APOD.url} 
                            src={APOD.url} 
                            title="YouTube video player" 
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen></iframe>
 

        return(
          <>
            <div className={ 'hover:cursor-pointer hover:brightness-95 row-span-3 flex  flex-col'}>
            <h2 className='text-4xl w-full    '>{APOD.media_type == 'video' ? 'VIDEO' : 'PHOTO'} OF THE DAY</h2> 
           
            
          <div className="  flex flex-col ">


            <h3 className="text-3xl">{APOD.title}</h3> 
           
<Link href={`/Gallery/${encodeURIComponent(JSON.stringify(APOD))}`}>
            {Content}
</Link>

            
               <p className="text-left text-justify max-w-fit ">{APOD.explanation}</p> 
            
            
          </div>
            </div>
            <br />
          </>
           
        )
    }
