'use client';


//******************* HOOKS *******************/
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import { LegacyRef, Suspense, useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import Script from "next/script";
 import './globals.css';
 import { Text } from "@react-three/drei";

// 3D COMPONENTS
import Sun from "./components/3DModels/Sun";

 //******************* COMPONENTS *******************/

import SpaceStation from "./components/3DModels/SpaceStation";

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
  <>
   <div style={{ height: '100vh', width:'100vw'}} className="md:shrink-0  flex w-full  ">

  <Script src="https://kit.fontawesome.com/394b7dd8e2.js" crossOrigin="anonymous" />
  

  <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} style={{position:'absolute', overflow: 'hidden'}}>

  <Scene/>

  <Html position={[0, 0, -15]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', zIndex: 0  }} fullscreen occlude={'blending'} >

    <h1 className="  sm:text-4xl md:text-6xl">COSMOEXLORER</h1>

    <h2 className=" text-center mt-10 text-3xl sm:text-3xl md:text-4xl ">Explore the Wonders of the Night Sky</h2>

     <p className="   text-justify mt-5 text-xl lg:text-2xl sm:text-2xl md:text-lg  md:w-[40rem] text-wrap">Cosmoexplorer is a website dedicated to all astronomy enthusiastics. This portal lets you discover and play with all  you can find in space.</p> 



     <button className="rounded-full bg-[var(--violet)] w-30 text-nowrap p-1 pt-1 mt-3 h-10 z-20">
         <Link href="/Planets"
         >Explore planets page</Link>
       </button>
    {/* <button className="h-10 w-30 mt-9 rounded-full text-nowrap bg-slate-500" >
      visit planets page
    </button> */}
    <GallerySection/>
  </Html>


    </Canvas>
  
  </div>
  </>
 )

}
  
//   return (
//     <>
//       <Script src="https://kit.fontawesome.com/394b7dd8e2.js" crossOrigin="anonymous" />
//       <div style={{ height: '100vh', width:'100vw'}} className="md:shrink-0  flex w-full  ">
//         <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} style={{position:'sticky'}} >
//           <ScrollControls pages={3} damping={0.1} distance={1} style={{ fontFamily: 'Polaris',  }} >
//             <Scroll >
//               <Scene />
     
//             </Scroll>

           
//             <Html position={[0, 0, -15]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', zIndex: 10  }} fullscreen occlude={'blending'} >
//               {/* <HeroSection />
//               <GallerySection />
//               <SolarSystemSection />
//               <QuizSection /> */}
              
//             </Html>
//           </ScrollControls>
//         </Canvas>
//       </div>
//     </>
//   );
// }

// // ******************* HERO SECTION *******************/


// const HeroSection = () => (
//   <div className="pt-9 w-screen flex items-center flex-col">
//     <h1 className="text-4xl sm:text-4xl md:text-6xl    pt-30  ">COSMOEXPLORER</h1>
//     <h2 className="  text-center text-3xl pt-5 sm:text-3xl md:text-4xl">Explore the Wonders of the Night Sky</h2>
//     <p className="  min-w-40  text-justify pt-5 text-xl lg:text-2xl sm:text-2xl md:text-lg  md:w-[41rem]  ">Behind every star there's a story ready to be unveiled in the great picture of the universe. Cosmoexplorer is a new way to explore space and discover the cosmo's secrets.</p>
//   </div>
// );

// // ******************* GALLERY SECTION *******************/


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
   <div className="flex  box-content  w-full  items-center  mt-[2rem] flex-col overflow-hidden  ">
    
     
    
     <div className="h-50 w-50 justify-center items-center flex flex-col">
     
     

 { slides.length > 0 ? ( 
  

  <SlidesShow slides={slides}  key={slides.length}/>   ) : (

   <p>loading</p>
  )
 
 }
     
       <button className="rounded-full bg-[--violet] pt-1 mt-4 h-10 w-80 z-0">
         <Link href="/Gallery"
         >Take a look to the complete gallery</Link>
       </button>
     </div>
   </div>
 );
 }
 //******************* SOLAR SYSTEM SECTION *******************/
// const SolarSystemSection = () => (
//   <div className="flex w-auto justify-end  flex-col lg:ms-[50rem] lg:mt-[30rem]">
    
//     <p className="  flex flex-col  text-xl text-justify  w-auto max-w-[20rem] mt-8 lg:flex-row  ">
      
  
//      The solar system section gives you a 3D rappresentation of the solar system and includes multiple datas from all the planets orbitating around the Sun.
//     </p>
//     <button className="rounded bg-[#011826] pt-1 h-10 w-80 z-20">
//         <Link href="/Gallery"
//         >Explore the Solar System</Link>
//       </button>
//   </div>
// );

// // ******************* QUIZ SECTION COMPONENT *******************/
// const QuizSection = () => (
// <div className=" flex md:justify-between  flex-col md:mt-[40rem] md:flex-row md:justify-betweeen md:w-screen">
  
//   <p className="text-xl text-justify  md:w-64 ms-auto text-center mt-[60rem] w-auto max-w-[20rem] lg:mt-[20rem] lg:ms-[5rem] lg:w-[50rem]">Challenge your knowledge by playing the cosmo Quiz! answer the Questions and find out how much  do you know about astronomy. Are you ready?  </p>

// <div className="flex flex-col mt-[10rem] m-auto mb-8">

//   <Image 
//   src={'/images/quiz.jpg'}
//   height={500}
//   width={500}
//   alt='Quiz Image'/>
//   <button className="rounded bg-[#011826] pt-1 h-10 z-20 mb-[8rem] ">
//         <Link href="/Quiz">PLAY THE QUIZ</Link>
//       </button>
//   </div>
//       </div>
// )















