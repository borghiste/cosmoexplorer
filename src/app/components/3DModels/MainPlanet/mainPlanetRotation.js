import { useFrame } from "@react-three/fiber"
import { forwardRef } from "react"
export default function mainPlanetRotation({PlanetRef}) {
    

    useFrame(()=>{

if(PlanetRef.current && PlanetRef){

            PlanetRef.current.rotation.y += 0.01

            



        }

})

return null
}
 
       
   