'use client';
// import libraries
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, Html, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { useRef } from "react";
import { distance } from "maath/dist/declarations/src/vector2";
import Link from "next/link";


// import components
import Galaxy from "./components/3DModels/Galaxy";
import AstroCore from "./components/3DModels/Satellites/AstroCore";
import Sun from "./components/3DModels/Sun/Sun";
import Astronaut from "./components/3DModels/Astronaut";
import Planet from "./components/3DModels/MainPlanet/MainPlanet";



// galaxy rotation custom hook

 function useGalaxyRotation(ref, axis= 'y'){
   useFrame(({clock})=>{
     const time = clock.getElapsedTime()
     if(ref.current){
       ref.current.rotation[axis]-= 0.01
      //  ref.current.scale.y = Math.sin(time)
      //  ref.current.scale.x = Math.cos(time)

     }
   })

 }

function useOscillation(ref, axis){
  useFrame(({clock})=>{
    const time = clock.getElapsedTime()
    if(ref.current){
      ref.current.position[axis] = Math.sin(time)
      
      
      }

     

    })
  }





function Scene(){
  const Galaxyref = useRef();
  const AstroRef = useRef();
   const AstronautRef = useRef();
    const PlanetOrbitRef = useRef();


   useGalaxyRotation(Galaxyref,'y')

  useOscillation(AstroRef, 'x')
  useOscillation(AstroRef, 'y')


  useOscillation(AstronautRef, 'y');

  useFrame(()=>{
    if(PlanetOrbitRef.current){
      PlanetOrbitRef.current.rotation.y += 0.02
    

   

    }
  })

  return(
    

    <>
      <ambientLight intensity={2}
     
                />
      <pointLight position={[2, 8, 8]} decay={0} intensity={9}
      castShadow={false}/>
      <pointLight position={[-2, -8, -8]} decay={0} intensity={9}
                  />
   
      <group ref={Galaxyref}>

      
<Galaxy scale={[3,3,3]}
        position={[0,0,0]}/>
        </group>
<AstroCore position={[3,-3,0]}
                  scale={[0.01,0.01,0.01]}
                  AstroRef={AstroRef}
                  /> 

                  
 <Sun scale={[0.35,0.3,0.3]}
    position={[0,-10,-5]}/> 
    


{/* <Astronaut
position={[0,-10,1]}
scale={[0.02,0.02,0.02]}
rotation={[-2,0,3]}
AstronautRef={AstronautRef}/> */}

    </>

  )

}


export default function  Home(){

  return(
    <div style={{ width: '100vw', height: '90vh' }}>

    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} shadows={false} >
    <ScrollControls pages={5} 
                    damping={0.1}
                    distance={1}
                    style={{fontFamily:'Polaris'}}>
    <Scroll>
      {/* <Scene/> */}
    </Scroll>
 {/* <OrbitControls/>  */}

                    
      <Html position={[0,0,-9]}
      style={{display:'flex',justifyContent:'start', alignItems:'center',flexDirection:'column', zIndex:10}}
              fullscreen
            
              occlude={'blending'}>
             
          <div className="pt-9">

          <p className="text-7xl">COSMOEXPLORER</p>
          <p className="text-lg text-center">Explore the Wonders of the Night Sky</p>
          
          
      
            </div>
            
           

            <div className=" flex justify-between pt-96 mt-80 h-60 w-full ">
              <div className="text-2xl h-50 w-50 ">
               <p className="text-justify w-80"> gallery Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores esse delectus numquam, suscipit obcaecati porro totam natus exercitationem nobis eaque.</p>
              </div>

              <div className=" h-50 w-50  justify-center items-center flex items-center justify-center flex-col ">
                <Image className="h-50 w-50 rounded-2xl  justify-center items-center mt-96"  src={'/images/stefanoTECHSTACK.png'}
                        width={500}
                        height={500}
                        
                        alt="pic"/>
                <button className="rounded bg-cyan-950 pt-1 h-10 w-80 z-20">
                  <a href="/Gallery">Visit Gallery</a>
                </button>
              
              </div>
              
             

            </div>

            <div className=" flex justify-end pt-96 mt-80 h-60 w-full pr-72 ml-7 ">
           
              <div className="text-2xl h-50 w-60">
               <p className="text-justify text-left  "> sun Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores esse delectus numquam, suscipit obcaecati porro totam natus exercitationem nobis eaque. text</p>
              </div>
             

            </div>  

            <div className=" flex justify-between pt-96 mt-80 h-60 w-full ">

              <div className=" h-50 w-50  justify-center items-center flex items-center justify-center flex-col ">
                <Image className="h-50 w-50 rounded-2xl  justify-center items-center mt-96"  src={'/images/stefanoTECHSTACK.png'}
                        width={500}
                        height={500}
                        
                        alt="pic"/>
                <button className="rounded bg-cyan-950 pt-1 h-10 w-80 z-20">
              <div className="text-2xl h-50 w-50 ">
               <p className="text-justify w-80"> gallery Lo, ipsum dolor sit amet consectetur adipisicing elit. Maiores esse delectus numquam, suscipit obcaecati porro totam natus exercitationem nobis eaque.</p>
              </div>
                  <a href="/Quiz">quiz</a>
                </button>
              
              </div>
              
             

            </div>
            
            
             </Html>

      
      </ScrollControls>
      </Canvas>
  </div>
        
  )
}