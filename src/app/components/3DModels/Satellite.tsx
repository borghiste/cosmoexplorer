import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Satellite({AstroRef, position, scale}){

   const { size} = useThree();
   

   const {scene}= useGLTF('/models/astro_core.glb', true);

  

   return(
      <>
      <group ref={AstroRef}
      castShadow={true}>

      
    <primitive object={scene} scale={scale}
                position={position}
                rotation={[1,1,0]}
                ref={AstroRef}
                
                />
                </group>
                </>
   )
}