import { useGLTF } from "@react-three/drei";

export default function Saturn({scale, position}){

    const {scene} = useGLTF('/models/saturn.glb')

    return(
        <primitive object={scene} scale={scale} position={position}/>
    )

    
}