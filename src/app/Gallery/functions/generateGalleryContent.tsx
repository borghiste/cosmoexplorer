
import Link from "next/link";
import Image from "next/image";

interface Object {
  title:string,
        url:string,
        explanation: string,
        media_type:string

}
interface genrrateContentProps  {
  data: Object[], 
  handleClick:()=>void

}

export default  function generateGalleryContent({data, handleClick}:genrrateContentProps){

  // if data is image generate image

 const generatedImages = 
 
 data?.filter((object)=>object.media_type == 'image').map((object)=>(

  
<Link href={`/Gallery/${encodeURIComponent(JSON.stringify(object))}`}  key={object}>
  <Image src={object.url}
       alt={object.title}
       key={object.url}
       height={500}
       width={500}
       
       className="hover:cursor-pointer hover:brightness-95  aspect-square h-40 lg:w-40 object-cover  "
       />
       </Link>
       
    
))


// if data is video generate youtube video
const generatedVideos = data?.filter((object)=>object.media_type == 'video').map((object)=>(
 
<iframe width="400" height="200" key={object.url} src={object.url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
))


// video & images combination

const generatedContent = [...(generatedImages || []), ...(generatedVideos || [])];
return(
  <>

  <div className="   border-2 flex-row flex-wrap sm:flex-row flex  justify-center lg:flex-row  ">
    {
    generatedContent.reverse() }
   
  </div>
    </>
)



}





 

