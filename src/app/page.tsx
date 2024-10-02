'use client'
import Image from "next/image";
import Background from "./components/UI/Background";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import styles from './components/UI/Background.module.css';
import Planet from "./components/UI/Planet";
import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import Scene from "./components/UI/Scene";

export default function Home() {

  const [hovered,setHovered]= useState(false);
  return (
<div className={styles.background}>


     <Canvas camera={{position:[0, 0, 1]}}> 




  


      <Background/>

      <Planet position={[0, 0, 0.1]} 
size={[0.1, 16, 16]} 
color={hovered ? 'lightgreen' : 'green'} 
LightPosition={[0.1, 0, 1]}
textPosition={[0, -0.01, 0.2]}
pointerEnter={(event)=>{event.stopPropagation(),setHovered(!hovered)} } 
label={'earth'} 
/> 


    
</Canvas>

</div>

  )
}