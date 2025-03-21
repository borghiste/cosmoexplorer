
import { forwardRef, MutableRefObject } from "react";

import { Text } from "@react-three/drei";
import useOrbit from "../functions_&hooks/useOrbit";
import { ForwardRefComponent } from "@react-three/drei/helpers/ts-utils";
import { body } from "../functions_&hooks/calculateBodySize";

interface PlanetProps {
  position:[number, number, number], 
  color: string, 
  scale:[number, number, number], 
  name:string, 
  body:body

} 


 const Planet = forwardRef(({ position, color, scale, name, body}:PlanetProps , {ref}:any) => {

   useOrbit({PlanetRef:ref, body:body})



  return (
    <mesh ref={ref} position={position}
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


  






