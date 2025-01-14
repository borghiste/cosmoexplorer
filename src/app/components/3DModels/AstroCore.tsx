import { useGLTF } from "@react-three/drei";

export default function AstroCore({AstroRef, position, scale}){

   const {scene}= useGLTF('astro_core.glb');

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