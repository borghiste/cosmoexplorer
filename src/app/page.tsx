'use client';

import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
 import './globals.css'

import SpaceStation from "./components/3DModels/SpaceStation";

import AstroCore from "./components/3DModels/AstroCore";
import SolarSystemModel from "./components/3DModels/SolarsystemModel";
import Satellite from './components/3DModels/Satellite';
import Astronaut from "./components/3DModels/Astronaut";
import SlidesShow from "./components/UI/SlidesShow";
import Link from "next/link";
import images from '../mock/astronomy-pictures.json';







// Custom Hooks
const useOscillation = (ref, axis) => {
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position[axis] = Math.sin(time);
    }
  });
};

const useRotation = (ref, axis) => {
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation[axis] += 0.01;
    }
  });
};

const useArc = (ref, x, y) => {
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    ref.current.position.x += Math.sin(time) * 0.01;
    ref.current.position.y -= Math.cos(time) * 0.01;
  });
};

// Scene Component
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
      <SpaceStation scale={[0.5, 0.5, 0.5]} position={[0, -0.5, -2]} rotation={[0, 0.05, 0]} SpaceStationRef={SpaceStationRef} />
      {/* <Galaxy scale={[1, 1, 1]} position={[4.5, 2, -2]} GalaxyRef={GalaxyRef} /> */}
      <AstroCore position={[4, -5, 1]} scale={[0.01, 0.01, 0.01]} AstroRef={AstroRef} />
      <SolarSystemModel scale={[0.01, 0.01, 0.005]} position={[-1, -12, -0.3]} />
       <Satellite position={[0, -20, 2]} rotation={[0, 2.5, 0]} SatelliteRef={SatelliteRef} /> 
      <Astronaut position={[0, -12, 1]} scale={[0.05, 0.05, 0.05]} rotation={[-2, 0, 3]} AstronautRef={AstronautRef} />
    </>
  );
};

// Main Home Component
export default function Home() {
 
  
  return (
    <>
      <Script src="https://kit.fontawesome.com/394b7dd8e2.js" crossOrigin="anonymous" />
      <div style={{ width: '100vw', height: '90vh' }}>
        <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} shadows={false}>
          <ScrollControls pages={4} damping={0.2} distance={1} style={{ fontFamily: 'Polaris' }}>
            <Scroll>
              <Scene />
            </Scroll>
            <Html position={[0, 0, -15]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', zIndex: 10 }} fullscreen occlude={'blending'}>
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

// Header Component
const HeroSection = () => (
  <div className="pt-9">
    <p className="text-7xl pt-30">COSMOEXPLORER</p>
    <p className="text-lg text-center">Explore the Wonders of the Night Sky</p>
  </div>
);

// Gallery Section Component




const GallerySection = () => {
  
 

   
  return(
  <div className="flex justify-between pt-96 mt-96 bt-96 w-full items-center">
    
      <p className=" text-2xl text-justify w-80 h-30">
      The gallery section contains the most wonderfull snd incredible photos took of the outer space
      </p>
    
    <div className="h-50 w-50 justify-center items-center flex items-center justify-center flex-col">
     
     

      <SlidesShow slides={preloadImages} />
    
     
     
      <button className="rounded bg-cyan-950 pt-1 h-10 w-80 z-20">
        <Link href="/Gallery">Visit Gallery</Link>
      </button>
    </div>
  </div>
);
}
// Solar System Section Component
const SolarSystemSection = () => (
  <div className="flex w-full justify-end pt-36 pb-96 mb-96">
    <p className="text-justify w-1/3 pr-12">
      
        <a className="bg-slate-500 " href="/SolarSystemMap">EXPLORE THE SOLAR SYSTEM</a>
      
     
      sun Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores esse delectus numquam, suscipit obcaecati porro totam natus exercitationem nobis eaque.
    </p>
  </div>
);

// News Section Component
const NewsSection = () => (
  <div className="flex justify-around w-2/3 h-full mt-96 pt-96">
    <i className="fa-solid fa-newspaper text-6xl"></i>
    <i className="fa-solid fa-newspaper text-6xl"></i>
    <i className="fa-solid fa-newspaper text-6xl"></i>
  </div>
);
