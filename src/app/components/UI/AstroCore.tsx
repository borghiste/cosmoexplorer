import { useGLTF } from "@react-three/drei";

export default function AstroCore(){

   const {scene}= useGLTF('astro_core.glb');

   return(
    <primitive object={scene} scale={[0.005,0.005,0.005]}
                position={[-1,-0.5,-1]}
                rotation={[1,1,0]}/>
   )
}