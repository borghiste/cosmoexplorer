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
import calculatePlanetSize from "./functions_&hooks/calculatePlanetSize";
import * as THREE from 'three';


//**** FUNCTIONS */
import fetchPlanets from "./functions_&hooks/fetchPlanets";

import fetchallData from "./functions_&hooks/fetchallData";

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





  const Sun =  () => {
    const  sundata =  data?.find((body) => body.englishName.toLowerCase() === 'sun')


console.log('sundata',sundata)

const scale = useMemo(() => {
  if (!data?.volValue || !data?.massValue) return [[1, 1, 1]]; // Fallback di sicurezza

  const r = Math.cbrt((3 * data.volValue) / (4 * Math.PI)) / 10; // Volume di una sfera corretto

  return [[r * 2, r * 2, r * 2]]; // Restituisce un array 3D corretto
}, [data.volValue, data.massValue]);


console.log('scale',scale)



    return(
      <>
      <SunComponent position={[0,0,0]} />
     <Text position={[0,-22,0]} fontSize={8}
            rotation={[0,1,0]}
            font="/fonts/Polaris-2/Polaris.ttf">TEST</Text>


      </>
    )

  }

  const Planets = () => {
    const PlanetRefs = useRef([]);
  
   return  data.filter((body) => body.isPlanet).map((planet, i) => {
      if (!PlanetRefs.current[i]) {
        PlanetRefs.current[i] = createRef();
      }
      const scale = calculatePlanetSize(planet)
  
      return (
        <Planet
          scale={scale}
          ref={PlanetRefs.current[i]}
          key={i}
          data={planet}
          name={planet.name}
        />
      );
    });
  };




  

  return(

    
     <div style={{ width: '100vw', height: '90vh' }}>
   <Canvas camera={{ fov: 100, near: 0.1, far: 2000, position: [20, 20, 15] }}>
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

