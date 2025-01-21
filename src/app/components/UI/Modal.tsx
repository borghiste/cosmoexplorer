'use client'

import { div } from "three/webgpu"



export default function Modal({ className, isModalOpen, setisModalOpen, picture }){

    
    return(
<div className={`${className}  ${isModalOpen ? 'block' : 'hidden'}`}>
<button onClick={()=>{setisModalOpen(!isModalOpen)}} className="absolute  left-5   text-4xl text-red-600">X</button>
<div className="flex flex-col">
  <img src={picture.url} alt={picture.title} className="max-w-min"  />
<h2 className="text-4xl">{picture.title}</h2>
<p className="text-justify  max-w-fit">{picture.explanation}</p>
</div>

</div>

      //   <div className={`${className} ${isModalOpen ? 'block' : 'hidden'}`}>
      //     <button onClick={()=>{setisModalOpen(!isModalOpen)}} className="  text-4xl text-red-600 ">X</button>
      //   <div className="flex   h-50 justify-between items-center">
      //     <img  className="w-50  hover:cursor-pointer max-h-fit" src={picture.url} alt={picture.title} />
      //     <div className="flex  items-start justify-center  flex-col ">

      //     <h2 className="text-4xl  ">{picture.title}</h2>
         
      //     <p className="text-justify w-50  ">{picture.explanation}</p>
      //     <p className="pt-80">Copyright: {picture.copyright}</p>
      //     </div>
      //   </div>
      // </div>
    )
}