import { useFrame } from "@react-three/fiber";

export default function useOrbit({body, PlanetRef}){
  const scaleFactor = 2.8;
  const orbitRadius = Math.log10(((body.perihelion + body.aphelion) / 2)) * scaleFactor ;
  

  console.log(orbitRadius)

  const e = body.eccentricity;

  const orbitTime = (body.sideralOrbit  / 24) * 60 * 60 / 1e6; 

  useFrame(({clock})=>{
    const t = clock.getElapsedTime() * 0.001;



    const M = (2 * Math.PI * t) / orbitTime + body.axialTilt

    const v = 2 * Math.atan2(
               Math.sqrt(1 + e) * Math.sin(M / 2),
               Math.sqrt(1 - e) * Math.cos(M / 2)
             )

    const r = (orbitRadius * (1 - e ** 2)) / (1 + e * Math.cos(v))  ;

    const x = Math.cos(v) * r;
    const z = Math.sin(v) * r;
             
                    // Spostiamo il pianeta nella nuova posizione
                    PlanetRef.current.position.set(x, 0, z);
                 })
  }





