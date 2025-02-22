import { useFrame } from "@react-three/fiber";

export default function useOrbit({PlanetRef, body, sundata}){
  const scaleFactor = 10      // Fattore di scala per regolare la dimensione della scena
  const orbitRadius = body.perihelion + body.aphelion / 2  // distanza media  dal centro. numero nell'ordine delle decine
  const e = body.eccentricity // eccentricità. numero compreso tra 0 e 1
   const orbitTime = (body.sideralOrbit  / 24) * 60 * 60 / 100000;      // Tempo impiegato per un'orbita completa (in secondi)

   useFrame(({clock})=>{
    // Tempo trascorso (rallentato per evitare movimenti troppo rapidi)
      const t = clock.getElapsedTime() * 0.1;

      // Anomalia media
      const M = (2 * Math.PI * t) / orbitTime;

      // Anomalia vera (approssimata per semplicità)
      const v = 2 * Math.atan2(
        Math.sqrt(1 + e) * Math.sin(M / 2),
        Math.sqrt(1 - e) * Math.cos(M / 2)
      )

  // Raggio orbitale corretto con il fattore di scala
      const r = (orbitRadius * (1 - e ** 2)) / (1 + e * Math.cos(v)) / 100000000;

      // Posizione orbitale nel piano XY (moltiplicata per il fattore di scala)
      const x = Math.cos(v) * r * scaleFactor;
     const z = Math.sin(v) * r * scaleFactor;

      // Spostiamo il pianeta nella nuova posizione
      PlanetRef.current.position.set(x, 0, z);
   })
}



//  export default function useOrbit({
//    PlanetRef,
//    body,
//    orbitRadius = 1,      // Distanza media dal centro
//    eccentricity = 0.2,   // Eccentricità dell'orbita (0 = cerchio, >0 = ellisse)
//    orbitTime = 12,       // Tempo impiegato per un'orbita completa (in secondi)
//    scaleFactor = 10      // Fattore di scala per regolare la dimensione della scena
//  }) {
//    useFrame(({ clock }) => {
    

//      // Tempo trascorso (rallentato per evitare movimenti troppo rapidi)
//      const t = clock.getElapsedTime() * 0.2;

//      // Anomalia media
//      const M = (2 * Math.PI * t) / orbitTime;

//      // Anomalia vera (approssimata per semplicità)
//      const v = 2 * Math.atan2(
//        Math.sqrt(1 + eccentricity) * Math.sin(M / 2),
//        Math.sqrt(1 - eccentricity) * Math.cos(M / 2)
//      );

//      // Raggio orbitale corretto con il fattore di scala
//      const r = (orbitRadius * (1 - eccentricity ** 2)) / (1 + eccentricity * Math.cos(v));

//      // Posizione orbitale nel piano XY (moltiplicata per il fattore di scala)
//      const x = Math.cos(v) * r * scaleFactor;
//     const z = Math.sin(v) * r * scaleFactor;

//      // Spostiamo il pianeta nella nuova posizione
//      PlanetRef.current.position.set(x, 0, z);
//    });
//  }



