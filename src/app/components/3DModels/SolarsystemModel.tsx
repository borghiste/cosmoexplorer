import { useGLTF } from "@react-three/drei";
export default function SolarSystemModel({scale, position}){
    
    const {scene} = useGLTF('/solar_system.glb')

    return(
        <primitive object={scene}
                    position={position}
                    scale={scale}
                    rotation={[0,-0.2,0]}/>
    )
}

