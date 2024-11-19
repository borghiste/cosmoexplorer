import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

function FlashingLight() {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // Variazione dell'intensità della luce per creare l'effetto intermittente
    const intensity = (Math.sin(elapsedTime * 5) + 1) / 2; // da 0 a 1
    if (lightRef.current) {
      lightRef.current.intensity = intensity;
    }
  });

  return (
    <pointLight ref={lightRef} position={[0, 2, 2]} color="white" intensity={0.5} />
  );
}

export default function Sun() {

const { scene}= useGLTF('sun/sun.glb')

  return (
   <>
      <FlashingLight />
      <primitive object={scene}
      scale={[0.1,0.1,0.1]}
      position={[2,1,-1]}/>
      {/* Inserisci qui l'oggetto su cui vuoi applicare la luce */}
   </>

  );
}

 
