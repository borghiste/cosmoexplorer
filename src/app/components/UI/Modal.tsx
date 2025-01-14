'use client'



export default function Modal({ className, isModalOpen, setisModalOpen, picture}){

    
    return(
        <div className={`flex z-10 absolute bg-slate-500 justify-center w-full ${className} ${isModalOpen ? 'block' : 'hidden'}`}>
        <div>
          <button onClick={()=>{setisModalOpen(!isModalOpen)}}>X</button>
          <h2 id="picture-title">{picture.title}</h2>
          <img  src={picture.url} alt=""/>
          <p>{picture.explanation}</p>
          <p>{picture.copyright}</p>
        </div>
      </div>
    )
}