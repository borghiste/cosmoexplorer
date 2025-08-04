import { useGLTF } from "@react-three/drei";

export default function Mars({scale, position}){

    const {scene} = useGLTF('/models/mars.glb')

    return(
        <primitive object={scene} scale={scale} position={position}/>
    )

    
}