import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { forwardRef, MutableRefObject } from "react";
import { Mesh } from "three";
import { Group } from "three/examples/jsm/libs/tween.module.js";

export interface SatelliteProps {
   
   position:[number, number, number],
   scale:[number, number, number]
}

const  Satellite = forwardRef<Group, SatelliteProps> (({ position, scale}, ref) => {


   const {scene}= useGLTF('/models/astro_core.glb', true);

  

   return(
      <>
     
      

      <group ref={ref as any}>

    <primitive object={scene} scale={scale}
                position={position}
                rotation={[1,1,0]}
                
                
                />
                </group>
                
                </>
   )

})

export default Satellite