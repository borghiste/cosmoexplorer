'use client';
// hooks
import { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
 
// import functions
 import fetchAPOD from './functions/fetchAPOD';
 import fetchImagesbyDate from './functions/fetchImagesbyDate';
 import generateGalleryContent from './functions/generateGalleryContent';
import { useOscillation } from '../animations/useOscillation';

 import generateAPOD from './functions/generateAPOD';
import Satellite from '../components/3DModels/Satellite';
import { AmbientLight } from 'three';


  export interface ImageObject {
   url: string
   title: string
   explanation: string,
   media_type:string
 } 

export default function Gallery(){
  const [APOD,setAPOD ] = useState()

   useEffect(()=>{
     fetchAPOD()
    
    .then((data)=>{setAPOD(data)})},[])

    const pictureOfTheDay = generateAPOD({APOD:APOD, onClick:()=>{setisModalOpen(!isModalOpen)}});

  
      
//   //states, Refs & dates
  
   const [isModalOpen,setisModalOpen ] = useState(false);
  
  
  
  
   const [selectedPic, setselectedPic]= useState<ImageObject>();
  
   const start_date_Ref = useRef<HTMLInputElement>(null);
  
   const end_date_Ref = useRef<HTMLInputElement>(null);
   
   
   
   
   const [galleryPictures, setgalleryPictures]= useState() //stato delle immagini fetchate
   
   const todayDate = new Date().toISOString().split('T')[0]; //  today date
   
   
   
   
   const aMonthAgoDate = new Date(todayDate); // today date copy
   
   aMonthAgoDate.setMonth(aMonthAgoDate.getMonth() - 1); // today date minus 1 month
   
   const formattedAMonthAgo = aMonthAgoDate.toISOString().split('T')[0]; // formatted date
   
  

   const AstroSatellite = () => {
        const SatelliteRef = useRef(null);
    useOscillation({ref:SatelliteRef,axis:'x'});
    useOscillation({ref:SatelliteRef,axis:'y'});


    return(
      <Satellite scale={[0.004,0.004,0.004]} position={[-0.5,1,1]}  ref={SatelliteRef}/>
    )
   }

  //  function handleSearchimgsClick(){


    
    


      useEffect(()=>{fetchImagesbyDate({start_date:formattedAMonthAgo, end_date:todayDate})
      .then((data)=>{
        const pictures = data;
     
        setgalleryPictures(pictures);
      
      
      
      
      })
    },[])
      


      const galleryContent = generateGalleryContent({data:galleryPictures, handleClick:()=>{setisModalOpen(!isModalOpen)}})

    
  return(
    <div style={{height: '100%', overflow: 'auto'}}>
      
  <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} style={{position:'absolute', overflow: 'hidden', zIndex:10}}>
  <ambientLight intensity={2} />
      <pointLight position={[2, 8, 8]} decay={0} intensity={9} castShadow={false} />
      <pointLight position={[-2, -8, -8]} decay={0} intensity={9}/>
                
        
      <AstroSatellite/>
      </Canvas>
      <h1 className='text-8xl'>Gallery</h1>
      <h2 className='text-6xl'>Click on a image to full view</h2>
   
     {pictureOfTheDay}
     
   
    
     {galleryContent}
    </div>
  )
}

// 'use client';
// import React from 'react';

// //import libraries

// // import '../global.css';
// import { useEffect, useState, useRef, LegacyRef } from 'react';


// // import components

// import SearchBar from '../components/UI/SearchBar';

// //import functions
// import fetchAPOD from './functions/fetchAPOD';
// import fetchImagesbyDate from './functions/fetchImagesbyDate';
// import generateGalleryContent from './functions/generateGalleryContent';

// import generateAPOD from './functions/generateAPOD';




// export interface ImageObject {
//   url: string
//   title: string
//   explanation: string,
//   media_type:string
// } 
// export default function Gallery(){

  
//   //states, Refs & dates
  
//   const [isModalOpen,setisModalOpen ] = useState(false);
  
  
  
//   const [APOD, setAPOD]= useState<ImageObject >()
  
//   const [selectedPic, setselectedPic]= useState<ImageObject >();
  
//   const start_date_Ref = useRef<HTMLInputElement>(null);
  
//   const end_date_Ref = useRef<HTMLInputElement>(null);
  
  
  
//   const [galleryPictures, setgalleryPictures]= useState() //stato delle immagini fetchate
  
//   const todayDate = new Date().toISOString().split('T')[0]; //  today date
  
  
  
//   const aMonthAgoDate = new Date(todayDate); // today date copy
  
//   aMonthAgoDate.setMonth(aMonthAgoDate.getMonth() - 1); // today date minus 1 month
  
//   const formattedAMonthAgo = aMonthAgoDate.toISOString().split('T')[0]; // formatted date
  
  
  

  
  
  
  
  
//   //fetch APOD
  
//   useEffect(()=>{
//     fetchAPOD()
    
//     .then((data)=>{setAPOD(data)})},[])
    
    
//     // fetch and generate last month gallery content
    
//      useEffect(()=>{fetchImagesbyDate({start_date:formattedAMonthAgo, end_date:todayDate})
//      .then((data)=>{
//        const pictures = data;
     
//        setgalleryPictures(pictures);
      
      
      
      
//      })
//    },[])
  
  
  
  
  
//   //handleSearchimgsClick
  
//   function handleSearchimgsClick(){
    
    
//     const start_date = start_date_Ref.current?.value || ''
//     const end_date = end_date_Ref.current?.value || ''
    
    
    
//     fetchImagesbyDate({start_date:start_date, end_date:end_date})
//     .then((data)=>{
//       const pics = data
//       setgalleryPictures(pics)
      
      
      
//     })
//   }
  
  
  
  
  
  
  
//   const galleryContent = generateGalleryContent({data:galleryPictures, handleClick:()=>{setisModalOpen(!isModalOpen)}})
  
  
  
  
  
  
  
//   return(
//     <>
//  <div className='flex-col border-4   '>
//   <h1 className='text-7xl text-center  '>GALLERY</h1>
//   <br />
//   <p className='text-center text-xl'>Explore the cosmo gallery and be amazed by the beauty of the space. With the gallery section you can take a look of the many images from the NASA archives searching for pictures by date. </p>
//   <br />
  
//   <main className='  z-10  relative lg:grid  lg:grid-flow-col   '>



// {
// generateAPOD({APOD:APOD, onClick:()=>{setisModalOpen(!isModalOpen); setselectedPic(APOD)}})
// }
//   <SearchBar
//   buttonText='SEARCH IMAGES'
//   className=' items-center w-full flex justify-center   '
//   handleClick={()=>{handleSearchimgsClick()}}
//   firstInputRef={start_date_Ref}
//   secondInputRef={end_date_Ref}/>

 


// { galleryContent}

//   </main>
  

  



  
  
//  </div>
//   </>
//   )
  
// }



 








  







          

  


 





