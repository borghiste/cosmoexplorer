
import { useFrame } from "@react-three/fiber";
import { Ref } from "react";
 export default function  useOrbit({PlanetRef, data}){

  const phaseOffset = Math.random() * Math.PI * 2
    useFrame(({ clock }) => {
      if (PlanetRef.current) {
        const t = clock.getElapsedTime() * 0.5 + phaseOffset; // Velocità dell'orbita
        const radius = data.semimajorAxis /10000000;
        const angle = t; // Usa il tempo per mantenere un movimento fluido
  
         const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius * (1 - data.eccentricity);
  
        PlanetRef.current.position.set(x, 0, z);
      }
    });
  };