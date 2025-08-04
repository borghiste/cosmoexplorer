import { useGLTF } from "@react-three/drei";

export default function Uranus({scale, position}){

    const {scene} = useGLTF('/models/uranus.glb')

    return(
        <primitive object={scene} scale={scale} position={position}/>
    )

    
}