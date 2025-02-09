 import { ForwardedRef, forwardRef } from "react";



 export default function Planet({ position, scale, color , ref}){

   return (
     <mesh position={position} ref={ref}>
       <sphereGeometry args={scale} />
       <meshStandardMaterial color={color} />
     </mesh>
   );
 }
 
 // Specifica il display name per debug migliori
 Planet.displayName = "Planet";
 

// export default function Planet({position, color, scale, ref}){

//     return(

//         <mesh position={position} ref={ref}>
//         <sphereGeometry args={scale} />
//          <meshStandardMaterial color={color} />
//       </mesh>
//     )
// }