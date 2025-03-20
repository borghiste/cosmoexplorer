

import { useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react"

export default function SpaceStation({scale, position, rotation, SpaceStationRef}){

   const {size, camera} = useThree();
   const [responsiveScaleFactor, SetresponsiveScaleFactor] = useState(scale);

  
    const scaleFactor = size.width / 4000
    
 
   


  
    const {scene} = useGLTF('/models/space_station.glb', true);
    return(
        <primitive
        object={scene}
        scale={scaleFactor}
        position={position}
        rotation={rotation}
        ref={SpaceStationRef}/>
    )
}