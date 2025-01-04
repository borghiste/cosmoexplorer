'use client';
import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { group } from "console";
export default function Astronaut({position, scale, rotation, AstronautRef}){

 
    
    
    const { scene } = useGLTF('/astronaut.dae/astronaut.glb');
  
   
      return (

        <group ref={AstronautRef}>

      <primitive object={scene} 
                        position={position} 
                        scale={scale} 
                        rotation={rotation} 
                        ref={AstronautRef}
                        />
                        </group>
 )
 
   
  }