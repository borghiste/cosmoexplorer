
import { forwardRef } from "react";

import { Text } from "@react-three/drei";
import useOrbit from "../functions_&hooks/useOrbit";

 const Planet = forwardRef(({ position, color, scale, name, data } , ref) => {

   useOrbit({PlanetRef:ref, data:data})



  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={scale} />
      <meshStandardMaterial color={color}/>
      <Text position={[0,-1.1,0]}
            fontSize={0.5}>{name}</Text>
    </mesh>
  );
});

export default Planet;


  


