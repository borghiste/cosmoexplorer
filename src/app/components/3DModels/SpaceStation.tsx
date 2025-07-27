

import { useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber";
import { MutableRefObject} from "react";
import { Mesh } from "three";


interface SpaceStation {
    scale:[number, number, number ],
    position:[number, number, number],
    rotation:[number, number, number],
    SpaceStationRef: MutableRefObject <Mesh | null >
}

export default function SpaceStation({scale, position, rotation, SpaceStationRef}:SpaceStation){

const { size } = useThree(); 

  
    const scaleFactor = size.width / (scale[1] * 10000)
    
 
   


  
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