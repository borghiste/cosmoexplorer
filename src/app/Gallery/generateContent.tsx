import { div } from "three/webgpu";


export default  function generateContent({data, isModalOpen, setisModalOpen, setSelectedPic}){

  // if data is image generate image

 const generatedImages = 
 data?.filter((object)=>object.media_type == 'image').map((object)=>(
  <img src={object.url}
       alt={object.title}
       key={object.url}
       height={100}
       width={100}
       onClick={() => {
         setSelectedPic(object);
         setisModalOpen(!isModalOpen)}}
       className="hover:cursor-pointer hover:brightness-95 px-1 aspect-square h-40"
     />
))


// if data is video generate youtube video
const generatedVideos = data?.filter((object)=>object.media_type == 'video').map((object)=>(
 
<iframe width="400" height="200" key={object.url} src={object.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
))


// video & images combination

const generatedContent = [...(generatedImages || []), ...(generatedVideos || [])];
return(

  <div className="flex z-0 flex-wrap">{
    generatedContent.reverse()}
  </div>
)



}





 

