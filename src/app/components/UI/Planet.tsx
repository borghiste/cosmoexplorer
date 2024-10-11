'use client';
import { Float, Text } from "@react-three/drei";
import { Canvas,useFrame } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from 'react';

import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { range } from "three/webgpu";

const Sphere = ({position,
  size, 
  color, 
  LightPosition,
  onPointerEnter,
  label,
  textPosition,
  handleClick,
  Lightcolor}) =>{
  
  // useFrame((state,delta)=>{ ref.current.rotation.y += delta * 2})
  return(
  <>   
<mesh position={position}
onPointerEnter={onPointerEnter}


onClick={handleClick} >
<sphereGeometry args={size}  />
<meshPhongMaterial color={color} />


<Text 
      
       fontSize={0.09}


       bevelSize= {38}
       lineHeight={0.5}
       position={textPosition}
       >{label}
  </Text>
       
</mesh>

<ambientLight intensity={0.1} />
<directionalLight position={LightPosition}
                  color={Lightcolor}

onPointerEnter={onPointerEnter} /> 
  </>
)
}

export default function Planet({position,
  size,
   color,
   label,
   LightPosition,
   textPosition,
  handleClick,
  Lightcolor,
  onPointerEnter}) {
  return (

   



 <Sphere color={color}
  position={position}
   size={size}
   LightPosition={LightPosition}
   textPosition={textPosition}
   label={label}
   Lightcolor={Lightcolor}
   handleClick={handleClick}
   
   onPointerEnter={onPointerEnter}/> 
   
   


   

)
}