import { useGLTF } from "@react-three/drei"
export default function Mercury({scale,
                                position
}){

    const {scene} = useGLTF('/models/mercury_planet.glb', true)
    return(
        <primitive object={scene} position={position} scale={scale}/>


    )
}