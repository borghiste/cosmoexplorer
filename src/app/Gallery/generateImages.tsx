import { div } from "three/webgpu";

export default  function GenerateImages(data:[], isModalOpen, setisModalOpen, setSelectedPic){

  const generatedPictures = 
  
  data?.map((image)=>(
  
  <img src={image.url}
    alt={image.title}
    key={image.url}
    height={100}
    width={100}
    onClick={() => {
      setSelectedPic(image);
      setIsModalOpen(!isModalOpen);
    }}
    className="hover:cursor-pointer hover:brightness-95"
  />

));

return(
<div>{generatedPictures}</div>
)

}





 

