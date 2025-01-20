'use client'



export default function Modal({ className, isModalOpen, setisModalOpen, picture }){

    
    return(
        <div className={`${className} ${isModalOpen ? 'block' : 'hidden'}`}>
          <button onClick={()=>{setisModalOpen(!isModalOpen)}} className="absolute  text-4xl text-red-600 absolute">X</button>
        <div className="flex w-full  h-50 justify-between items-center">
          <img  className="w-50 max-h-fit" src={picture.url} alt=""/>
          <div className="flex  items-start justify-start w-50 flex-col ">

          <h2 className="text-4xl pb-60 ">{picture.title}</h2>
         
          <p className="text-justify w-50 pl-1 ">{picture.explanation}</p>
          <p className="pt-80">Copyright: {picture.copyright}</p>
          </div>
        </div>
      </div>
    )
}