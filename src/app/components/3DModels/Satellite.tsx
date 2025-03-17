  import { useGLTF } from "@react-three/drei"
  
  export default function Satellite({position, rotation, SatelliteRef}){
    
    const { scene}= useGLTF('/models/astro_obliterator_thing/astro_obliterator_thing.glb')

    return(
     
      <primitive object={scene} 
                 scale={[0.004,0.004,0.004]} 
                  position={position}
                  rotation={rotation}
                  ref={SatelliteRef}
                 
                 />
 

                 
    )
}