import * as THREE from 'three';
'use client';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll, useGLTF, Environment } from '@react-three/drei'
import { easing } from 'maath'
import { useRef, useState } from 'react'
import { OrbitControls } from '@react-three/drei';


// Caricamento modello .glb
function Model({ url }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} dispose={null} />
}

// Ogni item: un modello 3D interattivo
function Item({ index, position, scale, url, clicked, setClicked }) {
  const ref = useRef()
  const scroll = useScroll()
  const [hovered, setHovered] = useState(false)



  useFrame((_, delta) => {
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
    const isActive = clicked === index
    // const s = isActive ? 1.5 : 1 + y * 0.1

    const s = 0.5

    easing.damp3(ref.current.scale, [s, s, s], 0.2, delta)

     if (clicked !== null && index < clicked)
       easing.damp(ref.current.position, 'y', position[0] - 2, 0.15, delta)
     else if (clicked !== null && index > clicked)
       easing.damp(ref.current.position, 'x', position[0] + 2, 0.15, delta)
     else
       easing.damp(ref.current.position, 'x', position[0], 0.15, delta)

     if (hovered || isActive)
       ref.current.rotation.y += 0.01
  })

  return (
    <group
      ref={ref}
      position={position}
      scale={scale}
      onClick={() => setClicked(clicked === index ? null : index)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Model url={url} />
    </group>
  )
}

// Galleria orizzontale
function Items({ urls }) {
  const { width } = useThree((state) => state.viewport)
  const [clicked, setClicked] = useState(null)
  const w = 1.2
  const gap = 0.5
  const xW = w + gap

  return (
   
    <ScrollControls horizontal damping={0.1} pages={(width - xW + urls.length * xW) / width}>
      <Scroll>
        {urls.map((url, i) => (
          <Item
            key={i}
            index={i}
            position={[i * xW * 90, 0, 0]}
            scale={[w, w, w]}
            url={url}
            clicked={clicked}
            setClicked={setClicked}
          />
        ))}
      </Scroll>
    </ScrollControls>
  )
}

const urls = ['/models/mercury.glb', 'models/venus_v1.1.glb', '/models/earth.glb']

export default function Planets() {
  return (
    <div style={{ height: '190vh', width:'100vw'}} className="md:shrink-0  flex w-full  ">

    <Canvas camera={{ position: [0, 0, 10], fov: 35 }} onPointerMissed={() => {}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="sunset" />
    
      <Items urls={urls} />
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
 