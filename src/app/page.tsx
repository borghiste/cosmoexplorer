'use client';


//******************* HOOKS *******************/
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
 import './globals.css';

 //******************* COMPONENTS *******************/

import SpaceStation from "./components/3DModels/SpaceStation";

import AstroCore from "./components/3DModels/AstroCore";
import SolarSystemModel from "./components/3DModels/SolarsystemModel";
import Satellite from './components/3DModels/Satellite';
import Astronaut from "./components/3DModels/Astronaut";
import SlidesShow from "./components/UI/SlidesShow";
import Link from "next/link";

import fetchImagesbyDate from "./functions/fetchImagesbyDate";


// *******************  CUSTOM HOOKS *******************/

import { useOscillation } from "./animations/useOscillation";
import { useRotation } from "./animations/useRotation";
import { useArc } from "./animations/useArc";





//******************* SCENE COMPONENT *******************
const Scene = () => {
  const GalaxyRef = useRef();
  const AstroRef = useRef();
  const AstronautRef = useRef();
  const SpaceStationRef = useRef();
  const SatelliteRef = useRef();
 

  

  useRotation(SpaceStationRef, 'y');
  useOscillation(AstroRef, 'x');
  useOscillation(AstroRef, 'y');
  useOscillation(AstronautRef, 'y');
  useRotation(GalaxyRef, 'y');
   useArc(SatelliteRef, 'x', 'y');





 

  return (
    <>
      <ambientLight intensity={2} />
      <pointLight position={[2, 8, 8]} decay={0} intensity={9} castShadow={false} />
      <pointLight position={[-2, -8, -8]} decay={0} intensity={9} />
      <SpaceStation scale={[0.5, 0.5, 0.5]} position={[0, -2, -2]} rotation={[0.1, 0.1, 0]} SpaceStationRef={SpaceStationRef} />

    <AstroCore position={[2, -5, 1]} scale={[0.01, 0.01, 0.01]} AstroRef={AstroRef} />
      <SolarSystemModel scale={[0.01, 0.01, 0.005]} position={[-1, -10, -0.4]} rotation={[0,0.2,0]} />
       <Satellite position={[0, -20, 2]} rotation={[0, 2.5, 0]} SatelliteRef={SatelliteRef} /> 
      <Astronaut position={[0, -12, 1]} scale={[0.05, 0.05, 0.05]} rotation={[-2, 0, 3]} AstronautRef={AstronautRef} />
    </>
  );
};

//******************* MAIN HOME COMPONENT *******************/

export default function Home() {
 
  
  return (
    <>
      <Script src="https://kit.fontawesome.com/394b7dd8e2.js" crossOrigin="anonymous" />
      <div style={{ width: '100vw', height: '90vh'}} className="md:shrink-0 flex ">
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} style={{position:'fixed'}} >
          <ScrollControls pages={5} damping={0.1} distance={1} style={{ fontFamily: 'Polaris' }} >
            <Scroll>
              <Scene />
            </Scroll>
            <Html position={[0, 0, -15]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', zIndex: 10 }} fullscreen occlude={'blending'} className="md:flex-col">
              <HeroSection />
              <GallerySection />
              <SolarSystemSection />
              <NewsSection />
            </Html>
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}

// ******************* HERO SECTION *******************/


const HeroSection = () => (
  <div className="pt-9 w-screen flex items-center flex-col">
    <p className="text-7xl pt-30 ">COSMOEXPLORER</p>
    <p className="text-4xl text-center pt-5">Explore the Wonders of the Night Sky</p>
    <p className="text-center  min-w-40  text-justify pt-5 text-2xl w-[41rem] ">Behind every star there's a story ready to be unveiled in the great picture of the universe. Cosmoexplorer is a new way to explore space and discover the cosmo's secrets.</p>
  </div>
);

// ******************* GALLERY SECTION *******************/


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
  <div className="flex justify-between box-content  w-full  items-center  mt-96">
    
      <p className=" text-2xl text-justify w-96">
      The gallery section contains the most wonderful and incredible photos taken of the outer space
      </p>
    
    <div className="h-50 w-50 justify-center items-center flex items-center justify-center flex-col">
     
     

{ slides.length > 0 ? ( 
 <SlidesShow slides={slides}  key={slides.length}/>   ) : (
  <p>loading</p>
 )
 
}
     
      <button className="rounded bg-cyan-950 pt-1 h-10 w-80 z-20">
        <Link href="/Gallery">Visit Gallery</Link>
      </button>
    </div>
  </div>
);
}
//******************* SOLAR SYSTEM SECTION *******************/
const SolarSystemSection = () => (
  <div className="flex w-screen justify-end  mt-80">
    
    <p className="text-justify w-1/3 pr-12 flex flex-col items-center">
      
      
     
      sun Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores esse delectus numquam, suscipit obcaecati porro totam natus exercitationem nobis eaque.
        <Link className="bg-slate-500 " href="/SolarSystemMap">EXPLORE THE SOLAR SYSTEM</Link>
    </p>
  </div>
);

// ******************* NEW SECTION COMPONENT *******************/
const NewsSection = () => (
  <div className="flex justify-around w-2/3 h-full mt-96 pt-96">
    <i className="fa-solid fa-newspaper text-6xl"></i>
    <i className="fa-solid fa-newspaper text-6xl"></i>
    <i className="fa-solid fa-newspaper text-6xl"></i>
  </div>
);
