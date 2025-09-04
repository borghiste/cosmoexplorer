
import Link from "next/link";
import Image from "next/image";
import { ImageObject } from "../page";


interface genrateContentProps {

  data: ImageObject[] | undefined, 
  handleClick:()=>void

}

export default  function generateGalleryContent({data, handleClick}:genrateContentProps){

  // if data is image generate image

 const generatedImages = 
 
 data?.filter((object)=>object.media_type == 'image').map((object)=>(

  
<Link href={`/Gallery/${encodeURIComponent(JSON.stringify(object))}`}  key={object.url}>
<div className="">

<h3 className="relative lg:text-lg text-md px-6 py-1 left-5 ">{object.title}</h3>

  <Image src={object.url}
       alt={object.title}
       key={object.url}
       height={300}
       width={900}
       
       className="hover:cursor-pointer hover:brightness-95  h-auto  w-full object-cover  "
       />
       </div>
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

  <div className=" flex-wrap h-screen  flex flex-row justify-center ">
    {
    generatedContent.reverse() }
    
   
  </div>
    </>
)



}





 

