import { useFrame } from "@react-three/fiber";


import { MutableRefObject } from "react";
import { Mesh } from "three";

interface body {
  body:{
    perihelion: number,
    aphelion: number
  }
  perihelion: number,
  aphelion: number,
  eccentricity: number,
  sideralOrbit: number,
  axialTilt: number
}

interface useOrbitProps {body:body,
                        PlanetRef:MutableRefObject<Mesh>

}

export default function useOrbit({body, PlanetRef}:useOrbitProps){
  // scale factor
  const scaleFactor = 2.8;

  // distance from center
  const orbitRadius = Math.log10(((body.perihelion + body.aphelion) / 2)) * scaleFactor ;
  

// eccentricity

  const e = body.eccentricity;


// orbit time = planet orbit time
  const orbitTime = (body.sideralOrbit  / 24) * 60 * 60 / 1e6; 

  useFrame(({clock})=>{
    const t = clock.getElapsedTime() * 0.002;


// anomaly
    const M = (2 * Math.PI * t) / orbitTime + body.axialTilt

    // true anomaly
    const v = 2 * Math.atan2(
               Math.sqrt(1 + e) * Math.sin(M / 2),
               Math.sqrt(1 - e) * Math.cos(M / 2)
             )

             // radius
    const r = (orbitRadius * (1 - e ** 2)) / (1 + e * Math.cos(v));

    const x = Math.cos(v) * r;
    const z = Math.sin(v) * r;
             
                
  PlanetRef.current.position.set(x, 0, z);
                 })
  }





