import { useGLTF } from "@react-three/drei";

interface SolarSystemModelProps {
    scale:[number, number, number],
    position:[number, number, number],
    rotation:[number, number, number]
}

export default function SolarSystemModel({scale, position, rotation}:SolarSystemModelProps){
    
    const {scene} = useGLTF('/models/solar_system.glb', true)

    return(
        <primitive object={scene}
                    position={position}
                    scale={scale}
                    rotation={rotation}
                   />
    )
}

