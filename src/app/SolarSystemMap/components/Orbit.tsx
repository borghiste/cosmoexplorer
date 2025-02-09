import { Line } from "@react-three/drei";
import { useMemo } from "react";
export default function Orbit({rotation, orbitPoints}){

  

    return(
        <Line points={orbitPoints} color="red" lineWidth={8} transparent opacity={0.5} rotation={rotation} position={[0,0,0]} />
    )
}