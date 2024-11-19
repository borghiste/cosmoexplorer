import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
export default function MainPlanetwithSatellite({PlanetRef}){
    
    
     
  
    
  
    const {scene}= useGLTF('/home-planet.dae/home-planet.glb');
    
     const ObliteratorThing = ()=>{
    
       const { scene}= useGLTF('/astro_obliterator_thing/astro_obliterator_thing.glb')
  
       return(
        
         <primitive object={scene} 
                    scale={[0.004,0.004,0.004]} 
                    position={[0,-1.8,-1.8]}
                    />
    
  
                    
       )
     }
  
  
   
     return(
       <>
      
   
  <group position={[0,0,0]} ref={PlanetRef}>
  
  <primitive object={scene} 
            scale={[0.05,0.05,0.05]} 
            position={[0,-1.4,0]}
            
            
            />
            <ObliteratorThing/>
            </group>
            
            </>
            
           
           
    )
  }