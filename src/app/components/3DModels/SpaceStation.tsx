

import { useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react"

export default function SpaceStation({scale, position, rotation, SpaceStationRef}){

   const {size} = useThree();
   const responsiveScaleFactor = size.width
   console.log(size.width)

  
    const {scene} = useGLTF('/models/space_station.glb', true);
    return(
        <primitive
        object={scene}
        scale={scale * responsiveScaleFactor}
        position={position}
        rotation={rotation}
        ref={SpaceStationRef}/>
    )
}