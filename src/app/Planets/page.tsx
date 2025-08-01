'use client';


import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { createRef, MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import { Text, Html } from "@react-three/drei";
import { BufferGeometry, Raycaster } from "three";


import React from "react";

//******************** COMPONENTS  *****************************/
import SunComponent from "../components/3DModels/Sun";
import Planet from "./components/Planet";

import Cards from './components/Cards';


//********** HOOKS******* */

import calculateBodySize from "./functions_&hooks/calculateBodySize";
import { Sundata } from "./functions_&hooks/calculateBodySize";
import { Mesh } from "three";


//**** FUNCTIONS */

import fetchallData from "./functions_&hooks/fetchallData";
import SliderShow from "../components/UI/SlidesShow";
import mock from '../../mock/planetData.json';
import { Body } from "./functions_&hooks/calculateBodySize";
import { NormalBufferAttributes } from "three";





export default function Planets() {
//    const [data, setData] = useState<Body[]>([]);
   

//    const planets = data.filter((body)=>body.isPlanet)

//    useEffect(()=>{

//      fetchallData()
//     .then(res => setData(res))
//    },[])


 

// // ******************** SUNDATA **********************


//    const  sundata =  data?.find((body) => body.englishName.toLowerCase() === 'sun');

   
//    const Sun =  () => {

 


//  const scale:[number, number, number] = sundata  ? calculateBodySize(sundata) : [1,1,1]




//      return(
//        <>
//        <SunComponent position={[0,0,10]} scale={scale}    />
//       <Text position={[0,19,0]} fontSize={5}
//              rotation={[0,0.3,0]}
           
           
            
        
//              font="/fonts/Polaris-2/Polaris.ttf">{sundata?.englishName} </Text>


//        </>
//      )

//    }


// //********************** PLANETS  ***********************************/
//    const Planets = () => {
//      const PlanetRefs = useRef<RefObject<any>[]>([]);
 
  
//      const planetColors = {
//       mercury: 'grey',
//       venus: 'yellow',
//       earth: 'skyblue',
//       mars: 'orange',
//       jupiter: 'brown',
//       saturn: 'beige',
//       uranus: 'aquamarine',
//       neptune: 'blue',
//     } 
    
//     return  data.filter((body) => body.isPlanet).map((planet, i) => {
            
//         if (!PlanetRefs.current[i]) {
//          PlanetRefs.current[i] = createRef();
//        }
   

//        const scale = calculateBodySize(planet);
//       const color =  planetColors[planet.englishName.toLowerCase() as keyof typeof planetColors]
   
//       return (
//          <Planet
//            scale={scale}
//            ref={PlanetRefs.current[i]}
//            key={i}
//            body={planet as Body}
//            name={planet.englishName}
//            sundata={sundata as Sundata}
          
//            color={color}
           
//          />
         
//        );
//      });
//    };


//    return(

    
//       <div style={{ width: '100vw', height: '90vh' }}>
//     <Canvas camera={{ fov: 100, near: 0.1, far: 1000, position: [20, 10, 80] } }>
//          {/* Illuminazione */}
//          <ambientLight intensity={0.5} />
//          <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
//          {/* <pointLight position={[2, 8, 8]} intensity={2} /> */}
//          <pointLight position={[-2, -8, -8]} intensity={2} />

//          {/* Controls */}
//          {/* <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} maxDistance={50} /> */}

//          {/* Sun */}
     
//   <Sun/>    

//          {/* <Orbit rotation={[-5,0,0]} orbitPoints={orbitPoints}/> */}


//          {/* Planets */}
//           <Planets/>


//        <Html position={[0,-10,0]} style={{display:'flex',flexDirection:'column', justifyContent:'start'}}   fullscreen>
         
//        <Cards data={planets} />
      

//        </Html>

//        </Canvas>
//      </div>
//   )
 }