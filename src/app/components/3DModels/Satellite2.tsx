  import { useGLTF } from "@react-three/drei";
import { MutableRefObject } from "react";
import { Mesh } from "three";
  interface Satellite2Props {
    position:[number, number, number],
    rotation?:[number, number, number],
    SatelliteRef: MutableRefObject <Mesh | null >,
    scale:[number, number, number]
  }
  
  export default function Satellite2({position, rotation, SatelliteRef, scale}: Satellite2Props ){
    
    const { scene}= useGLTF('/models/astro_obliterator_thing/astro_obliterator_thing.glb', true)

    return(
     
      <primitive object={scene} 
                 scale={scale} 
                  position={position}
                  rotation={rotation}
                  ref={SatelliteRef}
                 
                 />
 

                 
    )
}