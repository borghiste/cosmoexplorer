'use client';


import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo, useRef } from "react";




//******************** COMPONENTS  *****************************/
import Sun from "../components/3DModels/Sun";
import Planet from "./components/Planet";
import Orbit from "./components/Orbit";


const useOrbit = (ref) => {
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * 0.5; // Velocità dell'orbita
      const radius = 5;
      const angle = t; // Usa il tempo per mantenere un movimento fluido

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      ref.current.position.set(x, 0.5, z);
    }
  });
};



function SolarSystemPlanets(){
  const PlanetRef  = useRef();

  useOrbit(PlanetRef);

  return(
<Planet position={[-5, -1, 0]} 
            color={"blue"} 
            scale={[1, 32, 16]}  
            ref={PlanetRef}/>
  )

}
  export default function SolarSystemMap() {
    
    
    
    
    

  
 
  

  

  
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
  
  
  



  return(


 
    
     <div style={{ width: '100vw', height: '90vh' }}>
   <Canvas camera={{ fov: 75, near: 0.1, far: 2000, position: [0, 0, 15] }}>
        {/* Illuminazione */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <pointLight position={[2, 8, 8]} intensity={2} />
        <pointLight position={[-2, -8, -8]} intensity={2} />

        {/* Controlli */}
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} maxDistance={50} />

        {/* Sole */}
        <Sun scale={[0.2, 0.2, 0.2]} position={[0, 0, 0]} />

        {/* Orbita come linea */}
       
        <Orbit rotation={[-5,0,0]} orbitPoints={orbitPoints}/>


        {/* Pianeta in orbita */}
          
        <SolarSystemPlanets/>

      </Canvas>
    </div>
 );
 }
