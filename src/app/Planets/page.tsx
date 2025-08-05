'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Link from 'next/link';
import { Environment, ScrollControls, Scroll, useGLTF, useScroll } from '@react-three/drei'
import { easing } from 'maath'
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

import { Html } from '@react-three/drei';
import { Text } from '@react-three/drei';


// 3D MODELS
import PlanetModel from '../../app/components/3DModels/PlanetModel';
import Astronaut from '../components/3DModels/Astronaut';
// ANIMATIONS
import { useOscillation } from '../animations/useOscillation';

interface Model {
  name: string, path: 
  string, 
  scale: number, 
  rotation?: [number, number, number]}


interface ItemProps  {index: number,
                      position: [number, number, number],
                      model: Model,
                      clicked: number | null,
                      setClicked: (inde: number | null) => void,
                      i: number,
                      xW: number

}
type ItemsProps = {models: Model[]}


function Item({ index, position, model, clicked, setClicked, i, xW }: ItemProps) {
  const ref = useRef<THREE.Group>(null)
  const scroll = useScroll()
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (!ref.current) return

    const y = scroll.curve(index / planets.length - 1.5 / planets.length, 4 / planets.length);

     const z = scroll.curve(index / planets.length - 1.5 / planets.length, 4 / planets.length);

    const isActive = clicked === index
    const s = isActive ? 1.5 : 1 + y * 0.1

    easing.damp3(ref.current.scale, [s, s, s], 0.2, delta)
    ref.current.position.z = z 
    

    if (hovered || isActive) {
      ref.current.rotation.y += 0.01
       
      
    }

   
  })

  return (
    <>
 
<Text position={[i * xW, 3, 0]} fontSize={0.3}>{ hovered ? model.name : ''}</Text>
    <group
      ref={ref}
      position={position}
      onClick={() => setClicked(clicked === index ? null : index)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <PlanetModel path={model.path} manualScale={model.scale} rotation={model.rotation
      }/>
      {/* <Html>
      <Link href={'/'}>nbjj</Link>

      <button className='via-green-950'>jj</button>
      </Html> */}
     
    </group>
      </>

    
  )
}


function Items({ models}: ItemsProps) {
  const { width } = useThree((state) => state.viewport)
  const [clicked, setClicked] = useState<number | null>(null)
  const w = 1.2
  const gap = 0.5
  const xW = w + gap;
  

  return (
    <ScrollControls horizontal damping={0.1} pages={(width - xW + models.length * xW) / width}>
      <Scroll>
        {planets.map((model, i) => (
          <>
          
          <Item
            key={i}
            index={i}
            i={i} 
            xW={xW}
            position={[i * xW, 1.8, 0]}
            model={model as Model}
            clicked={clicked}
            setClicked={setClicked}
            />
            </>
         
        ))}
      </Scroll>
    </ScrollControls>
  )
}

// astronaut
const AstronautExplorer = () => {

  const astronautRef = useRef(null);
    useOscillation({ref: astronautRef, axis: 'y'})
   return ( <Astronaut position={[0, -0.3, 2.1]} scale={[0.02, 0.02, 0.02]} rotation={[-2, 0, 3]} ref={astronautRef} /> )
}

// ----------------------
// urls  and models scales 
// ----------------------
const planets = [
   { name: 'Mercury', path: '/models/mercury.glb', scale: 1 },
    { name: 'Venus', path: '/models/venus.glb', scale: 1 },
   { name: 'Earth', path: '/models/earth.glb', scale: 1.1 },
  { name: 'Mars', path: '/models/mars.glb', scale: 1.1 },
  {name: 'Jupiter', path:'/models/jupiter.glb', scale: 1.8},
  {name: 'Saturn', path: '/models/saturn.glb', scale: 2},
  {name: 'Uranus', path: '/models/uranus.glb', scale: 1.5, rotation: [0,-0.5, 4.8, 1]},
  {name: 'Neptune', path: '/models/neptune.glb', scale: 1}
]


export default function Planets() {



  
  return (
    <div style={{ height: '190vh', width: '100%', overflowY: 'hidden' }}>
      {/* <Html position={[0, 0, -15]} style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', zIndex: 0, position:'relative'}} fullscreen occlude={'blending'} >
          <h1 className='text-7xl'>Planets</h1>
        </Html> */}
        <h2 className='text-8xl mx-40'>Planets</h2>
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
      
          
         

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="sunset" />
        
        <Items models={planets as Model[]} />
        {/* <AstronautExplorer/> */}
      
       

      </Canvas>
    </div>
  )
}


// 'use client';


// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, ScrollControls } from "@react-three/drei";
// import { createRef, MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
// import { Text, Html } from "@react-three/drei";
// import { BufferGeometry, Raycaster } from "three";



// //******************** COMPONENTS  *****************************/
// import SunComponent from "../components/3DModels/Sun";
// import Planet from "./components/Planet";

// import Cards from './components/Cards';


// //********** HOOKS******* */

// import calculateBodySize from "./functions_&hooks/calculateBodySize";
// import { Sundata } from "./functions_&hooks/calculateBodySize";
// import { Mesh } from "three";

// // MODELS
// import Astronaut from "../components/3DModels/Astronaut";
// import Mercury from "../components/3DModels/planets/Mercury";
// import Venus from "../components/3DModels/planets/Venus";
// import Earth from '../components/3DModels/planets/Earth'
// import Mars from "../components/3DModels/planets/Mars";
// import Jupiter from "../components/3DModels/planets/Jupiter";
// import Saturn from "../components/3DModels/planets/Saturn";
// import Uranus from "../components/3DModels/planets/Uranus";
// import Neptune from "../components/3DModels/planets/Neptune";
// //**** FUNCTIONS */

// import fetchallData from "./functions_&hooks/fetchallData";
// import SliderShow from "../components/UI/SlidesShow";
// import mock from '../../mock/planetData.json';
// import { Body } from "./functions_&hooks/calculateBodySize";
// import { NormalBufferAttributes } from "three";
// import { useOscillation } from "../animations/useOscillation";







// export default function Planets() {

//     const astronautRef = useRef(null);
//     // useOscillation({ref:astronautRef,axis: 'y'});



//     return(
//         <div style={{ height: '100vh', width:'100vw'}} className="md:shrink-0  flex w-full  ">

//             <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} style={{position:'absolute', overflow: 'hidden'}}>
//            <OrbitControls/>

//         <ambientLight intensity={1} />
//         <directionalLight position={[2, 2, 2]} intensity={9} />

//              <Astronaut position={[0, -3.2, 1]} scale={[0.05, 0.05, 0.05]} rotation={[-2, 0, 3]} ref={astronautRef} />   

      

         {/* <Mercury scale={[0.1, 0.1, 0.1]} position={[0,0,0]}/> 
         <Venus scale={[0.1, 0.1, 0.1]} position={[0,0,0]}/> */}
        
//         </Canvas>
//         </div>
//     )
// }

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
 