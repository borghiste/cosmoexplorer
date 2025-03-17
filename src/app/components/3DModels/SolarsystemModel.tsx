import { useGLTF } from "@react-three/drei";
export default function SolarSystemModel({scale, position, rotation}){
    
    const {scene} = useGLTF('/models/solar_system.glb', true)

    return(
        <primitive object={scene}
                    position={position}
                    scale={scale}
                    rotation={rotation}
                   />
    )
}

