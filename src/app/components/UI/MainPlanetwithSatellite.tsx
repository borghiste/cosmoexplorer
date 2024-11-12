import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
export default function MainPlanetwithSatellite(){
    const PlanetRef = useRef();
    const scroll = useScroll();
    
     useFrame(()=>{
       if( scroll){
         
           PlanetRef.current.position.y = scroll.offset * Math.PI;
         PlanetRef.current.rotation.y += 0.01
   
       }
     })
  
    
  
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
      
   
  <group ref={PlanetRef}>
  
  <primitive object={scene} 
            scale={[0.05,0.05,0.05]} 
            position={[0,-1.8,0]}
            // position={[0,0,0]}
            
            />
            <ObliteratorThing/>
            </group>
            
            </>
            
           
           
    )
  }