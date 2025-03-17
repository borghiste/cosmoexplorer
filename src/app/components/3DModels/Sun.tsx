

import { useGLTF } from '@react-three/drei';

export default function Sun({ position, scale}) {



const { scene}= useGLTF('/models/sun.glb');



  return (
   

    
      <primitive object={scene}
      scale={scale}
      position={position}
      
      />
   

  );
}

 
