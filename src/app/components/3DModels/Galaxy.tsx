import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { PivotControls } from "@react-three/drei";
import { Box3 } from "three";
import { Vector3 } from "three";


export default function Galaxy({position, scale, GalaxyRef}){

  const {scene} = useGLTF('need_some_space.glb');
  


  
  


 return(
   


    <primitive object={scene}
                  scale={scale} 
                  position={position}
                  ref={GalaxyRef}/>
 )
  
                 
 
}