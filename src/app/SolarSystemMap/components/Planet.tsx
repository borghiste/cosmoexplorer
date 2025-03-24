
import { forwardRef, MutableRefObject, RefObject } from "react";

import { Text } from "@react-three/drei";
import useOrbit from "../functions_&hooks/useOrbit";
import { ForwardRefComponent } from "@react-three/drei/helpers/ts-utils";
import { Body } from "../functions_&hooks/calculateBodySize";
import { Sundata } from "../functions_&hooks/calculateBodySize";
import { Mesh } from "three";
interface PlanetProps {
  position?:[number, number, number], 
  color: string, 
  scale:[number, number, number], 
  
  name:string, 
  sundata: Sundata
  body:Body

} 


 const Planet = forwardRef(({ position, color, scale, name, body}:PlanetProps , ref) => {

   useOrbit({PlanetRef:ref as MutableRefObject<Mesh>, body:body})



  return (
    <mesh ref={ref as MutableRefObject<any>} position={position}
    rotation={[0,0,0]}>
      <sphereGeometry args={scale} />
      <meshStandardMaterial color={color}/>
      <Text position={[0,0,0]}
            rotation={[0,0,0]}
            fontSize={3}>
              {name}
      </Text>
    </mesh>
  );
});

export default Planet;


  






