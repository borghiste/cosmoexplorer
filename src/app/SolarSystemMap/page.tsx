'use client';


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


    




 const scale = calculateBodySize(sundata)








     return(
       <>
       <SunComponent position={[0,0,0]} scale={scale}    />
      <Text position={[0,-22,0]} fontSize={8}
             rotation={[-0.9,0.9,0]}
           
            //  onPointerEnter={()=>setToolTip(!toolTip)}
            visible={ toolTip ? true : false}
        
             font="/fonts/Polaris-2/Polaris.ttf">{sundata?.englishName} </Text>


       </>
     )

   }

   const Planets = () => {
     const PlanetRefs = useRef([]);
     const [toolTip, setToolTip] = useState(false)
  
    return  data.filter((body) => body.isPlanet).map((planet, i) => {
        if (!PlanetRefs.current[i]) {
         PlanetRefs.current[i] = createRef();
       }
   

       const scale = calculateBodySize(planet)

   

      
  
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
           color={'red'}
         />
       );
     });
   };




  

   return(

    
      <div style={{ width: '100vw', height: '90vh' }}>
    <Canvas camera={{ fov: 100, near: 0.1, far: 2000, position: [20, 150, 80] }}>
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


         {/* Pianeta in orbita */}
         <Planets/> 
       

       </Canvas>
     </div>
  )
 }

