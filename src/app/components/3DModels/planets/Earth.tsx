import { useGLTF } from "@react-three/drei";

export default function Earth({scale, position}){

    const {scene} = useGLTF('/models/earth.glb')

    return(
        <primitive object={scene} scale={scale} position={position}/>
    )

    
}