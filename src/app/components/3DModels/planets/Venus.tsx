import { useGLTF } from "@react-three/drei";

export default function Venus({scale,
                            position
}){

    const {scene} = useGLTF('/models/venus_v1.1.glb', true)
    return(
        <primitive object={scene} scale={scale} 
                    position={position}/>

    )
}