'use client'



export default function Modal({ className, isModalOpen, setisModalOpen, picture }){

    
    return(
        <div className={`${className} ${isModalOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-row ">
          <button onClick={()=>{setisModalOpen(!isModalOpen)}} className="absolute  text-4xl text-red-600">X</button>
          <img  className="w-50 h-1/2  " src={picture.url} alt=""/>
          <div className="flex info-container  pl-60 justify-start w-50 flex-col ">

          <h2 className="text-xl py-8 ">{picture.title}</h2>
         
          <p className="text-left text-justify w-70">{picture.explanation}</p>
          <p>{picture.copyright}</p>
          </div>
        </div>
      </div>
    )
}