import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect } from "react";
import { PivotControls } from "@react-three/drei";
import { Box3 } from "three";
import { Vector3 } from "three";


export default function Galaxy({position, scale, rotation, }){

  const {scene} = useGLTF('need_some_space.glb');
  
  useEffect(() => {
    const box = new Box3().setFromObject(scene);
    const center = new Vector3();
    box.getCenter(center);
    scene.position.set(-center.x, -center.y, -center.z); // Centrare il modello
  }, [scene]);

  
  


 return(
   


    <primitive object={scene}
                  scale={scale} 
                  position={position}
                  rotation={rotation}
                  
                  />
 )
  
                 
 
}