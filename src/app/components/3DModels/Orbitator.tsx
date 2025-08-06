  import { useGLTF } from "@react-three/drei";
import { forwardRef, MutableRefObject } from "react";
import { BufferGeometry, NormalBufferAttributes } from "three";
import { Mesh } from "three";
import { Group } from "three/examples/jsm/libs/tween.module.js";
  interface OrbitatorProps {
    position:[number, number, number],
    rotation?:[number, number, number],
    
    scale:[number, number, number]
  } 
  
  const  Orbitator = forwardRef<Mesh, OrbitatorProps>(({position, rotation , scale}, ref) => {
    
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

export default Orbitator