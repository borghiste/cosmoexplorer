  import { useGLTF } from "@react-three/drei"
  // ObliteratorThing
  const OrbiteratorThing = ()=>{
    
    const { scene}= useGLTF('/astro_obliterator_thing/astro_obliterator_thing.glb')

    return(
     
      <primitive object={scene} 
                 scale={[0.004,0.004,0.004]} 
                  position={[0,-1.8,-1.8]}
                 
                 />
 

                 
    )
}