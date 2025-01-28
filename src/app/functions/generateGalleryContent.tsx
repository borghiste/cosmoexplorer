
import Link from "next/link";


export default  function generateGalleryContent({data, handleClick}){

  // if data is image generate image

 const generatedImages = 
 
 data?.filter((object)=>object.media_type == 'image').map((object)=>(

  
<Link href={`/Gallery/${encodeURIComponent(JSON.stringify(object))}`} >
  <img src={object.url}
       alt={object.title}
       key={object.url}
       height={100}
       width={100}
       
       
       
       className="hover:cursor-pointer hover:brightness-95 px-1 aspect-square h-40"
       />
       </Link>
       
    
))


// if data is video generate youtube video
const generatedVideos = data?.filter((object)=>object.media_type == 'video').map((object)=>(
 
<iframe width="400" height="200" key={object.url} src={object.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
))


// video & images combination

const generatedContent = [...(generatedImages || []), ...(generatedVideos || [])];
return(
  <>

  <div className="flex  pt-10 flex-wrap border-2">{
    generatedContent.reverse()}
  </div>
    </>
)



}





 

