
export default function generateAPOD({APOD, onClick}){

    //check media type

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
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen></iframe>
 

        return(
            <div className={ 'hover:cursor-pointer hover:brightness-95 row-span-3 flex  flex-col'}>
            <h2 className='text-4xl pb-5   '>PHOTO OF THE DAY</h2> 
           
            
          <div className=" h-full">


            <h3 className="text-3xl">{APOD.title}</h3> 
           

            {Content}

            
               <p className="text-left text-justify max-w-fit ">{APOD.explanation}</p> 
            
            
          </div>
            </div>
           
        )
    }
