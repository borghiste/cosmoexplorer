'use client'




export default function Modal({ className, handleClick}){

  return(
    <>
    <div onClick={handleClick}></div>
    <h1>componente modale</h1>
    </>
  )
}

     return(
 <div className={`${className}   
 ${isModalOpen ? 'block' : 'hidden'}`}
 >
 <button  className="absolute z-20  text-4xl text-red-600">X</button>
 <div className="flex  justify-center ">

   <img src={picture.url} 
       alt={picture.title}        className="max-w-min aspect-square"  />

   <div className="flex flex-col">

 <h2 className="text-4xl ">{picture.title}</h2>
 <br />
 <p className="text-justify    ">{picture.explanation}</p>
 </div>
   </div>

 </div>

      
     )
 }