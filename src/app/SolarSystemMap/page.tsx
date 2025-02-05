'use client';

import Sun from "../components/3DModels/Sun";
import AstroCore from "../components/3DModels/AstroCore";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html } from "@react-three/drei";
import SlidesShow from "../components/UI/SlidesShow";
import { useEffect, useState } from "react";


export default function SolarSystemMap() {
  
  return(


 
    
     <div style={{ width: '100vw', height: '90vh' }}>
     <Canvas camera={{ fov: 75, near: 0.1, far: 2000, position: [0, 0, 15] }}>
       {/* Illuminazione */}
      <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
         <pointLight position={[2, 8, 8]} intensity={2} />
       <pointLight position={[-2, -8, -8]} intensity={2} />

         {/* Controlli */}
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} maxDistance={50} />

        {/* Modelli */}
        {/* <Sun scale={[0.3, 0.3, 0.3]} position={[0, 0, 0]} /> */}

        {/* Luce Ambientale */}
   <ambientLight intensity={0.5} />
      
   {/* Controlli Orbit */}
  <OrbitControls />
      
   {/* Sole (oggetto centrale) */}
   <mesh position={[0, 0, 0]}>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial color="yellow" />
   </mesh>
      
   {/* Orbita */}
  <mesh position={[0, 0, 0]}>
     <circleGeometry args={[5, 64]} />
    <meshBasicMaterial wireframe color="gray" />
 </mesh>
      
 {/* Pianeta in orbita */}
   <mesh position={[5, 0, 0]}>
    <sphereGeometry args={[0.5, 32, 32]} />
     <meshStandardMaterial color="blue" />
  </mesh>
           

           
    </Canvas>
    </div>
 );
 }
