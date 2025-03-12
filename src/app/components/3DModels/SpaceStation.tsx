

import { useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react"

export default function SpaceStation({dimensions, position, rotation, SpaceStationRef}){

   

  
    const {scene} = useGLTF('/models/space_station.glb');
    return(
        <primitive
        object={scene}
        scale={dimensions}
        position={position}
        rotation={rotation}
        ref={SpaceStationRef}/>
    )
}