'use client';


import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { createRef, useEffect, useRef, useState } from "react";
import { Text, Html } from "@react-three/drei";



import React from "react";

//******************** COMPONENTS  *****************************/
import SunComponent from "../components/3DModels/Sun";
import Planet from "./components/Planet";
import Orbit from "./components/Orbit";
import Cards from './components/Cards';


//********** HOOKS******* */

import calculateBodySize from "./functions_&hooks/calculateBodySize";



//**** FUNCTIONS */

import fetchallData from "./functions_&hooks/fetchallData";
import SliderShow from "../components/UI/SlidesShow";
import mock from '../../mock/planetData.json';



export default function SolarSystemMap() {
   const [data, setData] = useState([]);
   const [showPointLight, setShowPointLight] = useState(false);

   const planets = data.filter((body)=>body.isPlanet)

   useEffect(()=>{

     fetchallData()
    .then(res => setData(res))
   },[])


 

// ******************** SUNDATA **********************


   const  sundata =  data?.find((body) => body.englishName.toLowerCase() === 'sun');

   
   const Sun =  () => {

 


 const scale = calculateBodySize(sundata)


     return(
       <>
       <SunComponent position={[0,0,0]} scale={scale}    />
      <Text position={[0,19,0]} fontSize={5}
             rotation={[0,0.3,0]}
           
           
            
        
             font="/fonts/Polaris-2/Polaris.ttf">{sundata?.englishName} </Text>


       </>
     )

   }


//********************** PLANETS  ***********************************/
   const Planets = () => {
     const PlanetRefs = useRef([]);
 
  
     const planetColors = {
      mercury: 'grey',
      venus: 'yellow',
      earth: 'skyblue',
      mars: 'orange',
      jupiter: 'brown',
      saturn: 'beige',
      uranus: 'aquamarine',
      neptune: 'blue',
    };
    return  data.filter((body) => body.isPlanet).map((planet, i) => {
            
        if (!PlanetRefs.current[i]) {
         PlanetRefs.current[i] = createRef();
       }
   

       const scale = calculateBodySize(planet)
      const color =  planetColors[planet.englishName.toLowerCase()]
   
      return (
         <Planet
           scale={scale}
           ref={PlanetRefs.current[i]}
           key={i}
           body={planet}
           name={planet.englishName}
           sundata={sundata}
           pointLight={true }
           color={color}
           
         />
         
       );
     });
   };


   return(

    
      <div style={{ width: '100vw', height: '90vh' }}>
    <Canvas camera={{ fov: 100, near: 0.1, far: 1000, position: [20, 100, 80] }}>
         {/* Illuminazione */}
         <ambientLight intensity={0.5} />
         <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
         {/* <pointLight position={[2, 8, 8]} intensity={2} /> */}
         <pointLight position={[-2, -8, -8]} intensity={2} />

         {/* Controls */}
         <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} maxDistance={50} />

         {/* Sun */}
     
  <Sun/>    

         {/* <Orbit rotation={[-5,0,0]} orbitPoints={orbitPoints}/> */}


         {/* Planets */}
          <Planets/>


       <Html position={[0,-10,0]} style={{display:'flex', justifyContent:'start'}}  occlude={'blending'} fullscreen zIndexRange={10}   >
         
       <Cards data={planets} /> 
      


        
       </Html>

       </Canvas>
     </div>
  )
 }