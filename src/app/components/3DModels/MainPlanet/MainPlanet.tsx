import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
export default function Planet({PlanetRef, scale, position}){
    
    
     
  
    
  
    const {scene}= useGLTF('/home-planet.dae/home-planet.glb');
    


  
  
   
     return(
       <>
      
   

         
  
  <primitive object={scene} 
            scale={scale} 
             position={position}
             ref={PlanetRef}/>
            
            </>
            
           
           
    )
  }