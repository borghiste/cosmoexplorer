
import { forwardRef } from "react";
import { Mesh } from "@react-three/fiber";

 const Planet = forwardRef(({ position, color, scale }, ref) => {
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={scale} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
});

export default Planet;


  


// export default function Planet({position, color, scale, ref}){
     

//      return(

//          <mesh position={position} ref={ref}>
//          <sphereGeometry args={scale} />
//           <meshStandardMaterial color={color} />
//        </mesh>
//      )
//  }