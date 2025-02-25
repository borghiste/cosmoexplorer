'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";

import { useMemo, useRef } from "react";

// import components

<<<<<<< HEAD
import Sun from "../components/3DModels/Sun";
import Planet from "./components/Planet";
import Orbit from "./components/Orbit";

import info from '../../mock/Orbit.json';

console.log(info)


// https://api.le-systeme-solaire.net/rest/bodies/earth




export default function SolarSystemMap() {


  const PlanetRef = useRef();

  // Creiamo i punti per la linea orbitale
  const orbitPoints = useMemo(() => {
    const radius = 5;
    const segments = 64;
    const angleStep = (Math.PI * 2) / segments;
    return Array.from({ length: segments + 1 }, (_, i) => [
      Math.cos(i * angleStep) * radius,
      Math.sin(i * angleStep) * radius,
      0,
    ]);
  }, []);








  return (
    <div style={{ width: "100vw", height: "90vh" }}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 2000, position: [0, 0, 15] }}>


import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { createRef, Ref, useEffect, useMemo, useRef, useState } from "react";
import { Text } from "@react-three/drei";





import mock from '../../mock/planetData.json';

import React from "react";

//******************** COMPONENTS  *****************************/
import SunComponent from "../components/3DModels/Sun";
import Planet from "./components/Planet";
import Orbit from "./components/Orbit";

//********** HOOKS******* */

import useOrbit from "./functions_&hooks/useOrbit";
import calculateBodySize from "./functions_&hooks/calculateBodySize";
import * as THREE from 'three';


//**** FUNCTIONS */
import fetchPlanets from "./functions_&hooks/fetchPlanets";

import fetchallData from "./functions_&hooks/fetchallData";
import { styleText } from "util";

 //fetchare tutti i corpi celesti
 //dai dati controllare se i corpi sono pianeti, se lo sono generare il pianeta componente corrispettivo e il relativo riferimento per l'orbita

 // se è il sole niente riferimento

 //calcolare le dimensioni del pianeta


export default function SolarSystemMap() {
   const [data, setData] = useState([]);

   useEffect(()=>{

     fetchallData()
    .then(res => setData(res))
   },[])


 

// ******************** SUNDATA **********************


   const  sundata =  data?.find((body) => body.englishName.toLowerCase() === 'sun');

   console.log(sundata)
   const Sun =  () => {

 const [toolTip, setToolTip] = useState(true)


    
<<<<<<< HEAD
     <div style={{ width: '100vw', height: '90vh' }}>
   <Canvas camera={{ fov: 75, near: 0.1, far: 2000, position: [0, 0, 15] }}>
>>>>>>> map
        {/* Illuminazione */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <pointLight position={[2, 8, 8]} intensity={2} />
        <pointLight position={[-2, -8, -8]} intensity={2} />
=======
>>>>>>> map




 const scale = calculateBodySize(sundata)








     return(
       <>
       <SunComponent position={[0,0,0]} scale={scale}    />
      <Text position={[0,15,0]} 
            fontSize={8}
             
           
            //  onPointerEnter={()=>setToolTip(!toolTip)}
            visible={ toolTip ? true : false}
        
             font="/fonts/Polaris-2/Polaris.ttf">{sundata?.englishName} </Text>


       </>
     )

   }

   const Planets = () => {
     const PlanetRefs = useRef([]);
     const [toolTip, setToolTip] = useState(false)
  
     const planetColors: { [key: string]: string } = {
      Mercury: 'gray',
      Venus: 'yellow',
      Earth: 'blue',
      Mars: 'red',
      Jupiter: 'brown',
      Saturn: 'goldenrod',
      Uranus: 'lightblue',
      Neptune: 'darkblue'
    };
    
    return  data.filter((body) => body.isPlanet).map((planet, i) => {
            
        if (!PlanetRefs.current[i]) {
         PlanetRefs.current[i] = createRef();
       }
   

       const scale = calculateBodySize(planet)
      const color = planetColors[planet.englishName]
   

      
  
      return (
         <Planet
           scale={scale}
           ref={PlanetRefs.current[i]}
           key={i}
           body={planet}
           name={planet.englishName}
           sundata={sundata}
           onPointerEnter={()=> setToolTip(!toolTip)}
           toolTip={toolTip}
           color={color}
           
         />
       );
     });
   };




  

   return(

    
      <div style={{ width: '100vw', height: '90vh' }}>
    <Canvas camera={{ fov: 100, near: 0.1, far: 2000, position: [20, 100, 80] }}>
         {/* Illuminazione */}
         <ambientLight intensity={0.5} />
         <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
         <pointLight position={[2, 8, 8]} intensity={2} />
         <pointLight position={[-2, -8, -8]} intensity={2} />

         {/* Controlli */}
         <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} maxDistance={50} />

         {/* Sole */}
     
  <Sun  position={[0, 0, 0]} />    


  
       
         {/* <Orbit rotation={[-5,0,0]} orbitPoints={orbitPoints}/> */}


<<<<<<< HEAD
        {/* Pianeta in orbita */}
<<<<<<< HEAD
        <Planet position={[-5, 0, 0]} color={"blue"} scale={[1, 32, 16]}  ref={PlanetRef}/>
=======
          
        <SolarSystemPlanets/>
>>>>>>> map

      </Canvas>
    </div>
  );
}
=======
         {/* Pianeta in orbita */}
         <Planets/> 
       

       </Canvas>
     </div>
  )
 }

>>>>>>> map
