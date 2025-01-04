// import { useRef } from "react"
// import { useFrame } from "@react-three/fiber";
// import { Html, Sphere } from "@react-three/drei";
// import Sun from "./Sun";
// export default function PulsatingLight() {
//   // const lightRef = useRef<THREE.PointLight>(null)
  
//   useFrame((state) => {
//     if (lightRef.current) {
//       const time = state.clock.getElapsedTime()
//       // Aumenta l'intensità di base e l'ampiezza della pulsazione
//       lightRef.current.intensity = 5 + Math.sin(time * 4) * 4
      
//       // Cambia anche il colore della luce per un effetto più drammatico
//       const hue = (Math.sin(time) + 1) / 2
//       lightRef.current.color.setHSL(hue, 1, 0.5)
//     }
//   })
//   return (
//     <>
//   {/* <pointLight ref={lightRef} position={[1,-1,-1]} intensity={50} distance={1} rotation={[2,1,1]} /> */}
//   <Sun/>


//     </>
//     )
// }

