

import { useGLTF } from "@react-three/drei"

export default function SpaceStation({scale, position, rotation, SpaceStationRef}){


    const {scene} = useGLTF('/space_station.glb')
    return(
        <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
        ref={SpaceStationRef}/>
    )
}