

import data from '../mock/astronomy-pictures.json';
import Image from 'next/image'
import generateAPOD from './generateAPOD';
import { ImageLoader } from 'three';
import { useEffect } from 'react';

export default async function Gallery(){

    

 const APODdata = await  generateAPOD()



    

    const Gallery = data.map(image=>(<img src={image.url} className='aspect-square min-5-10 brightnes-75 hover:cursor-pointer'/>))
        
    
        

    return(
        <>
        <h1>gallery</h1>

        <div className=''>

             <img src={APODdata.url} alt="" className='' /> 
            <div>
                <h3>{APODdata.title}</h3>
            </div>
             
        </div>
</>
    )
}