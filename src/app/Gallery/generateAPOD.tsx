
export default function generateAPOD({APOD, onClick}){

 const Content = APOD.media_type=='image' ? 
    <img src={APOD.url} 
        alt={APOD.title}
        className=" w-1/2"
        onClick={onClick}/> : 
        
        <iframe width="400" 
                            height="200" 
                            key={APOD.url} 
                            src={APOD.url} 
                            title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen></iframe>
 

        return(
            <div className={ 'hover:cursor-pointer hover:brightness-95 row-span-3 flex  flex-col'}>
            <h2 className='text-3xl  '>PHOTO OF THE DAY</h2> 
            <hr />

            <h3 className="text-3xl">{APOD.title}</h3>   
            {Content}
            
               <p className="text-left text-justify w-1/2">{APOD.explanation}</p> 
            
            
            </div>
           
        )
    }
