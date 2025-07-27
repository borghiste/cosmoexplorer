

import { useGLTF } from '@react-three/drei';

interface SunProps {
  position:[number, number, number],
  scale: [number, number, number]
}

export default function Sun({ position, scale}:SunProps ) {



const { scene}= useGLTF('/models/sun.glb', true);



  return (
   

    
      <primitive object={scene}
      scale={scale}
      position={position}
      
      />
   

  );
}

 
