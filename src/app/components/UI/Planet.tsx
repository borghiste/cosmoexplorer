'use client';
import { Text } from "@react-three/drei";
import { Canvas,useFrame } from "@react-three/fiber";
import { useRef, useEffect } from 'react';

const Sphere = ({position,size, color, LightPosition, pointerEnter,label,textPosition}) =>{
  
  // useFrame((state,delta)=>{ ref.current.rotation.y += delta * 2})
  return(
  <>   
<mesh position={position} onPointerEnter={pointerEnter}  >
<sphereGeometry args={size}  />
<meshStandardMaterial  />
<Text 
       fontSize={0.06}
       lineHeight={0.5}
       position={textPosition}>{label}</Text>
</mesh>

<ambientLight intensity={0.1} />
<directionalLight position={position} 
color={color}
LightPosition={LightPosition} /> 
  </>
)
}

export default function Planet({position,
  size,
   color,
   pointerEnter,
   label,
   LightPosition,
   textPosition}) {


  return (

    <>



 <Sphere color={color}
  position={position}
   size={size}
   pointerEnter={pointerEnter}
   LightPosition={LightPosition}
   textPosition={textPosition}
   label={label}/> 
   

</>
   

)
}