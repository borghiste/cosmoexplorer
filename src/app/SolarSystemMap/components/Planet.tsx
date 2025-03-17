
import { forwardRef } from "react";

import { Text } from "@react-three/drei";
import useOrbit from "../functions_&hooks/useOrbit";

 const Planet = forwardRef(({ position, color, scale, name, body} , ref) => {

   useOrbit({PlanetRef:ref, body:body})



  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={scale} />
      <meshStandardMaterial color={color}/>
      <Text position={[0,-1,0]}
            rotation={[5,0,0]}
            fontSize={5}>
              {name}
      </Text>
    </mesh>
  );
});

export default Planet;


  






