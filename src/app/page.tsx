'use client';
import Background from "./components/UI/Background";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import styles from './components/UI/Background.module.css';
import Telescope from '../app/components/UI/Telescope'
import Planet from "./components/UI/Planet";
import { useRouter } from "next/navigation";
import Link from "next/link";


import { useRef } from "react";




 

 










export default function Home() {
  const router = useRouter();


  const [hover,SetHover]=useState(false);
  const Earth = () => {
    
    return(

      <Planet 
      position={[0, 0, 0.1]} 
      size={[0.1, 16, 16]} 
      LightPosition={[-0.03, 0.02, 0.2]}
      textPosition={[0.0, -0.1, 0.1]}
      label={'earth'}
      Lightcolor={'yellow'}
      handleClick={()=>{router.push('/EarthPage')}}

      color={hover ? 'lightgreen': 'green'}
      onPointerEnter={
      (e)=>{ SetHover(!hover)}}/>
    )
  }

  const [marshover,SetmarsHover]=useState(false);
  const Mars = ()=> {
  
  return(<Planet
    size={[0.1, 16, 16]} 
    position={[0.4, 0, 0.1]}
    label={'mars'}
    textPosition={[-0.05, 0.02, 0.2]}
    LightPosition={[0, 0, 5]}
    
    Lightcolor={'yellow'}
    onPointerEnter={(e: { stopPropagation: () => void; })=>{e.stopPropagation();SetmarsHover(!marshover)}}
    color={marshover ? '#de052b' : '#f14848'}
    handleClick={()=>{
      router.push('/MarsPage')}}
    />
  )
}

  


  
  

  
  return (
 <>
    <div className={styles.background}>
     <Canvas 
      camera={{position:[0, 1, 1]}}
      >  







      <Background/>


<Earth/>


  <Mars/> 
      





  
 





      







</Canvas>

 <footer className="rounded  bg-blue-500 flex justify-center">

<Link href={'cosmogallery'}>
<button className="rounded mx-auto " type="button">

<Telescope/>
</button>
</Link>
</footer>



</div>


</>



  )
}
