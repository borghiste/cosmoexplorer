'use client'
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei';
import styles from './Background.module.css'

import * as random from 'maath/random/dist/maath-random.esm';
import { disconnect } from 'process';
import { div } from 'three/webgpu';


export default function Background() {
  function Stars(props) {
   const ref = useRef()
   const [sphere] = useState(() => random.inSphere(new Float32Array(8000), { radius: 1.5 }))
   useFrame((state, delta) => {
     ref.current.rotation.x -= delta / 10
    //  ref.current.rotation.y -= delta / 15
   })
   return (


     <group rotation={[0, 0, Math.PI / 4]} >

       <Points ref={ref} positions={sphere} stride={4} frustumCulled={false} {...props} onPointerEnter={(e)=>{}}>
         <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
  
         
       </Points>

     </group>
  
   )
  }
  return (




  <Stars />


 



 
  )


}