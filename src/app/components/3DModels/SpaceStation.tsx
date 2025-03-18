

import { useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react"

export default function SpaceStation({scale, position, rotation, SpaceStationRef}){

   const {size, camera} = useThree();
   console.log(camera);

   const responsiveScaleFactor = size.width / (scale[0] * 10000)
   


  
    const {scene} = useGLTF('/models/space_station.glb', true);
    return(
        <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
        ref={SpaceStationRef}/>
    )
}