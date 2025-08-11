
import { forwardRef, MutableRefObject, RefObject } from "react";

import { Text } from "@react-three/drei";

import { ForwardRefComponent } from "@react-three/drei/helpers/ts-utils";

import { Mesh } from "three";
interface PlanetProps {
  position?:[number, number, number], 
  color: string, 
  scale:[number, number, number], 
  
  name:string, 

  body:Body

} 


 const Planet = forwardRef(({ position, color, scale, name, body}:PlanetProps , ref) => {




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


  






