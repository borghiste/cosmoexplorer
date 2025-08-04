import { useGLTF } from "@react-three/drei";

export default function Jupiter({scale, position}){

    const {scene} = useGLTF('/models/jupiter.glb')

    return(
        <primitive object={scene} scale={scale} position={position}/>
    )

    
}