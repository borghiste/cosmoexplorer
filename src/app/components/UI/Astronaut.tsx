'use client';
import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export default function Astronaut(){

    const AstronautRef = useRef();
    const scroll = useScroll();
    
    
    const { scene } = useGLTF('/astronaut.dae/astronaut.glb');
    useFrame(()=>{
     if(scroll){
 
     }
 
    })
   
      return (
      <primitive object={scene} 
                        position={[0,-1.3,1.5]} 
                        scale={[0.01,0.01,0.01]} 
                        rotation={[-2,0,3]} 
                        ref={AstronautRef}
 />
 )
 
   
  }