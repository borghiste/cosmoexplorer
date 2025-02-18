
import { useFrame } from "@react-three/fiber";
import { Ref } from "react";
 export default function  useOrbit({PlanetRef, body, sundata}){

    useFrame(({clock})=>{

  // tempo trascorso dall'ultimo passaggio perielico 
  const t = clock.getElapsedTime()
  // inclinazione
  const i = body.inclination
// eccentricità
const e = body.eccentricity;
// tempo orbitale
const T = body.sideralOrbit
  //semi asse maggiore dell'orbita: perielio + afelio / 2 // 
    const a =  (body.perihelion + body.aphelion / 2) ;


// anomalia vera

const M = (2 * Math.PI * t) / T;  // Anomalia media
const E = M; // Approssimazione dell'ano malia eccentrica (soluzione numerica più complessa, ma per ora va bene come approssimazione)
const v = 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2)); // Anomalia vera



    // raggio dell'orbita: semi asse maggiore orbita * (1 - eccentricità dell'orbita alla seconda) / 1 + eccentricità per coseno dell'anomalia vera

    const r = a * (1 -e * e) /(1 + e * Math.cos(v)) /1000000000
    console.log(r)
    
    // calcolo x: raggio orbita * coseno di anomalia vera
    const x = r * Math.cos(v)
   

    

    // calcolo y: raggio orbita * coseno di inclinazione
    const y = r * Math.cos(v)

    // calcolo z: raggio orbita * seno di anomalia vera
    const z = r * Math.sin(v)
    if(PlanetRef.current){
       PlanetRef.current.position.set(x, y, z)
    }

    
    console.log('t:', t);
    console.log('a:', a);
    console.log('e:', e);
    console.log('v:', v);
    console.log('r:', r);
    console.log('x:', x);
    console.log('y:', y);
    console.log('z:', z);
  })
  
  
 }
