import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { MutableRefObject } from "react";
import { Mesh } from "three";

export interface SatelliteProps {
   SatelliteRef: MutableRefObject< Mesh | null>,
   position:[number, number, number],
   scale:[number, number, number]
}

export default function Satellite({SatelliteRef, position, scale}:SatelliteProps){

   
   

   const {scene}= useGLTF('/models/astro_core.glb', true);

  

   return(
      <>
     
      

      
    <primitive object={scene} scale={scale}
                position={position}
                rotation={[1,1,0]}
                ref={SatelliteRef}
                
                />
                
                </>
   )
}