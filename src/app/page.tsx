'use client';


//******************* HOOKS *******************/
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import { LegacyRef, Suspense, useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import Script from "next/script";
 import './global.css';
 import { Text } from "@react-three/drei";

// 3D COMPONENTS
import Sun from "./components/3DModels/Sun";

 //******************* COMPONENTS *******************/



import Satellite from "./components/3DModels/Satellite";

import Orbitator from './components/3DModels/Orbitator';

import SlidesShow from "./components/UI/SlidesShow";
import Link from "next/link";

import fetchImagesbyDate from "./Gallery/functions/fetchImagesbyDate";



// *******************  CUSTOM HOOKS *******************/

import { useOscillation } from "./animations/useOscillation";
import { useRotation } from "./animations/useRotation";
import { useArc } from "./animations/useArc";
import { useOrbitation } from "./animations/useOrbitation";





//******************* SCENE COMPONENT *******************
const Scene = () => {
  
  const SatelliteRef = useRef<Mesh | null>(null);

  
  const orbitatorRef = useRef<Mesh | null>(null);
 

  //responsive scale
  const {size} = useThree();
   const responsiveScaleFactor = size.width;
   useOrbitation(orbitatorRef ,'y')

  


      
  
  
 

  



  return (
    <>
      <ambientLight intensity={2} />
      <pointLight position={[2, 8, 8]} decay={0} intensity={9} castShadow={false} />
      <pointLight position={[-2, -8, -8]} decay={0} intensity={9} />
      <Suspense fallback={'loading'}>

      


      
      </Suspense>
      
      



       <Orbitator position={ responsiveScaleFactor < 640 ? [0, 1, 2]: [0, -1, 2.5]}  ref={orbitatorRef} scale={[0.005,0.004,0.004]}/>
    </>
  );
};

//******************* MAIN HOME COMPONENT *******************/

export default function Home() {
 return(
  
   <div style={{ height: '100vh', width:'100%'}} className="xs:shrink-0  flex w-full   ">

  <Script src="https://kit.fontawesome.com/394b7dd8e2.js" crossOrigin="anonymous" />
  

  <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} style={{ overflow: 'auto', zIndex:0, height:'auto'}}>

  <Scene/>

  <Html position={[0, 0, -15]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', zIndex: 0, height:'auto', overflow:'auto', position:'relative'}} fullscreen occlude={'blending'} >

    <h1 className="  sm:text-4xl md:text-6xl">COSMOEXLORER</h1>

    <h2 className=" text-center mt-10 text-3xl sm:text-3xl md:text-4xl ">Explore the Wonders of the Night Sky</h2>

     <p className="   text-justify mt-5 text-xl lg:text-2xl sm:text-2xl md:text-lg  md:w-[40rem] text-wrap">Cosmoexplorer is a website dedicated to all astronomy enthusiastics. This portal lets you discover and play with all  you can find in space.</p> 



     <button className="rounded-full bg-[var(--violet)] w-30 text-nowrap p-1 pt-1 mt-3 h-10 z-20">
         <Link href="/Planets"
         >Explore planets page</Link>
       </button>
   
    <GallerySection/>
  </Html>


    </Canvas>
  
  </div>
  
 )

}
  



 const GallerySection = () => {

   // state and dates

   const  [slides, setSlides] = useState([]);
  
 const todayDate = new Date().toISOString().split('T')[0];

 const fiveDaysAgoDate = new Date() ;

 fiveDaysAgoDate.setDate(fiveDaysAgoDate.getDate() -5);

 const formattedfiveDaysAgoDate = fiveDaysAgoDate.toISOString().split('T')[0];

 //******************* FETCH HOME PAGE SLIDES *******************/

 useEffect(()=>{
     async function fetchSlides(){
     const response = await fetchImagesbyDate({start_date:formattedfiveDaysAgoDate, 
                                             end_date:todayDate});
           if(response){setSlides(response)}
   }

   fetchSlides();
 },[]);

 localStorage.setItem('slides', JSON.stringify(slides))




   
   return(
   <div className="flex  box-content  w-full  items-center  mt-[8rem] flex-col overflow-hidden  ">
    
     
    
     <div className="h-50 w-50 justify-center items-center flex flex-col">
     
     

 { slides.length > 0 ? ( 
  

  <SlidesShow slides={slides}  key={slides.length}/>   ) : (

   <p>loading</p>
  )
 
 }
     
       <button className="rounded-full bg-[--violet] pt-1 mt-4 h-10 w-80 z-0">
         <Link href="/Gallery"
         >Take a look at the complete gallery</Link>
       </button>
     </div>
   </div>
 );
 }















