
'use client';
import  { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import {  ScrollControls, useScroll } from "@react-three/drei";
import React from "react";
import Background from "./components/Background";
import { Text, OrbitControls,Stats } from "@react-three/drei";
import MainPlanetwithSatellite from "./components/UI/MainPlanetwithSatellite";
import { extend } from '@react-three/fiber';

import { Html } from "@react-three/drei";



 const Astronaut= ()=>{


     const { scene } = useGLTF('/astronaut.dae/astronaut.glb');
  
     return (<primitive object={scene} 
                       position={[0,-1,1]} 
                       scale={[0.01,0.01,0.01]} 
                       rotation={[-2,0,3]} 
/>)

  
 }


const Scene =()=>{
  const scroll = useScroll();
   const groupRef = useRef();

   useFrame(()=>{
    if(scroll)
    groupRef.current.rotation
   })

   return(
     <>
    
             
     <group ref={groupRef}>
     <Html>
    <p className="">Text</p>
     </Html>
             <MainPlanetwithSatellite/>
   
   {/* <Astronaut/>    */}
</group>
   
     </>
   )
 }


export default function Home(){
return(
  <>
 
    
  <mesh position={[0,0,0]}>
   {/* <Background/> */}
  </mesh>

   <Canvas style={{ height: '100vh'}} 
          camera={{ position: [0, 0, 2], fov: 50 }}
          >






      <ScrollControls pages={5} 
                    damping={0.1} 
                    maxSpeed={0.1}
                    distance={0.1}> 






<ambientLight intensity={10} />
<directionalLight  position={[40,40,50]} 
                  intensity={10}/>
<pointLight 
  position={[0, 20, 10]} 
  intensity={5}/>
   


       <Scene/> 
           
   </ScrollControls>   
    </Canvas> 
      </>
  );
}

