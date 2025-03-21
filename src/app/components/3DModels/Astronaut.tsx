'use client';
import { MutableRefObject, useRef } from "react";

import { useGLTF } from "@react-three/drei";

import { Mesh } from "three";

interface AstronautProps {
  position: [number, number, number],
  scale:[
  number, number, number],
  rotation:[number, number, number],
  AstronautRef: MutableRefObject<Mesh | null>
}

export default function Astronaut({position, scale, rotation, AstronautRef}:AstronautProps){

 
    
    
    const { scene } = useGLTF('/models/astronaut.dae/astronaut.glb', true);
  
   
      return (




      <primitive object={scene} 
                        position={position} 
                        scale={scale} 
                        rotation={rotation} 
                        ref={AstronautRef}
                        />
                       
                      
 )
 
   
  }