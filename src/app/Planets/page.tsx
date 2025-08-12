'use client'

import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import Link from 'next/link';
import { Environment, ScrollControls, Scroll, useGLTF, useScroll } from '@react-three/drei'
import { easing } from 'maath'
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Html } from '@react-three/drei';
import { Text } from '@react-three/drei';
import { Suspense } from 'react';
//FUNCTIONS


//COMPONENTS

// 3D MODELS
import PlanetModel from '../../app/components/3DModels/PlanetModel';
import Astronaut from '../components/3DModels/Astronaut';
// ANIMATIONS
import { useOscillation } from '../animations/useOscillation';



interface Model {
  name: string, path: 
  string, 
  scale: number, 
  rotation?: [number, number, number],
  description: string}


interface ItemProps  {index: number,
                      position: [number, number, number],
                      model: Model,
                      clicked: number | null,
                      setClicked: (index: number | null) => void,
                      i: number,
                      xW: number,
                      

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
    

    if (hovered && isActive) {
      ref.current.rotation.y += 0.01
      
       
      
    }

    
    
    
    
  })
  const onPointerOutAction = () => {setHovered(false)
                                  setClicked(null)
  }


  return (
    <>
 
<Text position={[i * xW, 2.4, 0]} 
fontSize={0.3}>
  { hovered  && (model.name)}</Text>

{clicked === i && (  <Text position={[i * xW + 1, 2.8, 0]}
maxWidth={4}   overflowWrap={'normal'} fontSize={0.09}  anchorX={'right'}>{model.description}</Text>) }
    <group
      ref={ref}
      position={position}
      onClick={() => setClicked(clicked === index ? null : index)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => {onPointerOutAction()}}>

      <Suspense fallback={null}>

      <PlanetModel path={model.path} manualScale={model.scale} rotation={model.rotation
      }/>
      </Suspense>
     
     
    </group>
      </>

    
  )
}


function Items({ models}: ItemsProps) {
  const { width } = useThree((state) => state.viewport)
  const [clicked, setClicked] = useState<number | null>(null);
  
  const w = 1.2
  const gap = 0.5
  const xW = w + gap;
  const [data, setData] = useState([]);




  

  return (
    <ScrollControls horizontal damping={0.1} pages={(width - xW + models.length * xW) / width}>
      <Scroll>

        {
        planets.map((model, i) => (
          <>
          
          <Item
            key={i}
            index={i}
          
            i={i} 
            xW={xW}
            position={[i * xW, 1.4, 0]}
            model={model as Model}
            clicked={clicked}
            setClicked={setClicked}
            />
            </>
         
        ))
        }

      


      
       


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
// planets models data 
// ----------------------
const planets = [
   { name: 'Mercury', path: '/models/mercury.glb', scale: 1, description: 'Mercury is the closest planet to the Sun and the smallest in the Solar System. It has a rocky, cratered surface that resembles the Moon and experiences extreme temperature changes — scorching hot during the day and freezing at night. Due to its proximity to the Sun and lack of a significant atmosphere, Mercury is a world of intense solar radiation and silence.' },
    { name: 'Venus', path: '/models/venus.glb', scale: 1, description: 'Venus is similar in size to Earth but could not be more different in terms of conditions. Its thick atmosphere is made primarily of carbon dioxide and is capable of trapping heat so effectively that surface temperatures reach around 460°C. The planet’s surface is hidden beneath layers of dense clouds, and it rotates in the opposite direction compared to most planets, making its day longer than its year.' },
   { name: 'Earth', path: '/models/earth.glb', scale: 1.1, description: 'Earth is the third planet from the Sun and the only known world to support life. It has a breathable atmosphere rich in oxygen, a balanced climate system, and abundant liquid water. Earth\'s diverse environments — from oceans to forests to deserts — make it a dynamic and ever-changing planet. It also has one natural satellite: the Moon.' },
  { name: 'Mars', path: '/models/mars.glb', scale: 1.1 },
  {name: 'Jupiter', path:'/models/jupiter.glb', scale: 1.8, description: 'Jupiter is the largest planet in the Solar System and a massive gas giant primarily composed of hydrogen and helium. It is famous for its swirling clouds and the Great Red Spot, a gigantic storm that has raged for centuries. Jupiter has a powerful magnetic field and over 90 moons, including Ganymede, the largest moon in the Solar System.'},
  {name: 'Saturn', path: '/models/saturn.glb', scale: 2, description: 'Saturn is best known for its spectacular ring system, made of ice and rock particles. Like Jupiter, it is a gas giant, though it is much less dense — in fact, it could theoretically float in water. Saturn has a vast number of moons, with Titan being the most well-known for its thick atmosphere and potential for prebiotic chemistry.'},
  {name: 'Uranus', path: '/models/uranus.glb', scale: 1.5, rotation: [0.1,1, 1.4], description: 'Uranus is an ice giant with a pale blue-green color caused by methane in its atmosphere. It is unique among the planets because it rotates on its side, likely due to a massive collision in its past. Its unusual tilt results in extreme seasonal changes. Uranus is also surrounded by faint rings and has a cold, distant atmosphere.'},
  {name: 'Neptune', path: '/models/neptune.glb', scale: 1, description: 'Neptune is the farthest planet from the Sun and is known for its deep blue color and strong winds — the fastest in the Solar System. Like Uranus, it is an ice giant, and its atmosphere is made up of hydrogen, helium, and methane. One of its most notable features is the Great Dark Spot, a massive storm similar to Jupiter’s.'}
]


export default function Planets() {


 



  
  return (
  
    <div style={{ height: '100vh', width: '100%', overflowY: 'hidden',position:'absolute' }}>

        <h2 className='text-8xl mx-40'>Planets</h2>
        <p className='w-max-96 text-center'>The Solar System is composed of eight main planets that orbit around the Sun, our central star. These planets are categorized into two groups: the four inner rocky planets (Mercury, Venus, Earth, and Mars) and the four outer gas or ice giants (Jupiter, Saturn, Uranus, and Neptune). Each planet has its own unique characteristics, atmosphere, and environment.</p>
      <Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
      
          
         

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Environment preset="sunset" />
        
        <Items models={planets as Model[]}/>
         <AstronautExplorer/> 
         {/* <OrbitControls/> */}
      
       

      </Canvas>
    </div>
  )
}


