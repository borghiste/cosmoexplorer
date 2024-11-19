
'use client';
import  { Canvas, ThreeElements, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import {  ScrollControls, useScroll, Scroll } from "@react-three/drei";
import React from "react";
import Background from "./components/Background";
import MainPlanetwithSatellite from "./components/UI/MainPlanetwithSatellite";
import { useMemo } from "react";
import { CanvasTexture, PlaneGeometry } from "three";
import { Plane } from "@react-three/drei";
import Astronaut from "./components/UI/Astronaut";
import AstroCore from "./components/UI/AstroCore";
import Sun from "./components/UI/Sun";
import Meteor from "./components/UI/Meteor";
import { OrbitControls } from "@react-three/drei";
import  * as THREE from "three";


// SECTIONS IMPORT
import FirstSection from "./components/UI/MainSections/FirsSection";
import SecondSection from "./components/UI/MainSections/SecondSection";
import ThirdSection from "./components/UI/MainSections/ThirdSection";
import FourthSection from "./components/UI/MainSections/FourthSection";





const MainPlanet =()=>{
   const PlanetRef = useRef();
 
 

  
   useFrame(()=>{
    

     
     if( PlanetRef.current){
        PlanetRef.current.rotation.y +=0.01
    
     }
 })



      return(
     

        <MainPlanetwithSatellite PlanetRef={PlanetRef}/>

      )
  }





 


const Scene =()=>{
const MeteorRef= useRef<THREE.Group>();
const [isVisible, setIsVisible] = useState(false)

const { camera } = useThree()

const checkVisibility = () => {
  if (MeteorRef.current) {
    const frustum = new THREE.Frustum()
    const matrix = new THREE.Matrix4().multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    )
    frustum.setFromProjectionMatrix(matrix)

    const box = new THREE.Box3().setFromObject(MeteorRef.current)
    return frustum.intersectsBox(box)
  }
  return false
  
}
useFrame(() => {
  const visible = checkVisibility()

  if (visible !== isVisible && MeteorRef.current) {
    setIsVisible(visible)
    
    console.log(visible)
    console.log(MeteorRef.current.position.z)
   
  }
  if(visible){
    MeteorRef.current.position.z -=1;
    MeteorRef.current.position.x -=1
   
  }
  
})



   return(
     <>

     {/* <Sun/> */}
     {/* <AstroCore/> */}
   
             <OrbitControls/>
     <group  position={[0,0,-1]}>
                 <MainPlanet/>  
               {/* <Astronaut/>   */}
               <FirstSection /> 
               <SecondSection/>
              <ThirdSection/>
              <FourthSection />
                <Meteor MeteorRef={MeteorRef}/>
             
   
      
</group>
   
     </>
   )
 }


export default function Home(){
  

return(
  <>
  <mesh position={[0,0,0]}>
   <Background/>  
  </mesh>
  

    
   <Canvas style={{ height: '90vh'} } 
          camera={{ position: [0, 0, 2], fov: 50 }}
          className="z-0"
          >

            {/* <OrbitControls/> */}



      <ScrollControls pages={5} 
                    damping={0.5}> 
<Scroll>



 <ambientLight intensity={10} />
 
<directionalLight  position={[40,40,50]} 
                  intensity={10}/>
<pointLight 
  position={[0, 20, 10]} 
  intensity={5}/> 
   


       <Scene/> 
           
  </Scroll>
   </ScrollControls>   
  
    </Canvas> 
      </>
  );
}

