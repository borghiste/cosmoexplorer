import { useGLTF } from "@react-three/drei";

export default function Neptune({scale, position}){

    const {scene} = useGLTF('/models/neptune.glb')

    return(
        <primitive object={scene} scale={scale} position={position}/>
    )

    
}