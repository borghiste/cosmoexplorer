  import { useGLTF } from "@react-three/drei";
import { forwardRef, MutableRefObject } from "react";
import { Mesh } from "three";
import { Group } from "three/examples/jsm/libs/tween.module.js";
  interface Satellite2Props {
    position:[number, number, number],
    rotation?:[number, number, number],
    SatelliteRef: MutableRefObject <Mesh | null >,
    scale:[number, number, number]
  } 
  
  const  Satellite2 = forwardRef<Group, Satellite2Props>(({position, rotation , scale}, ref) => {
    
    const { scene}= useGLTF('/models/astro_obliterator_thing/astro_obliterator_thing.glb', true)

    return(
     <group ref={ref as any}>

      <primitive object={scene} 
                 scale={scale} 
                 position={position}
                 rotation={rotation}
                 
                 
                 />
                 </group>
 

                 
    )
})

export default Satellite2