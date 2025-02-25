

import { useGLTF } from '@react-three/drei';

export default function Sun({ position, scale}) {


<<<<<<< HEAD
const { scene}= useGLTF('/models/sun.glb');
=======
const { scene}= useGLTF('models//sun.glb')
>>>>>>> map

  return (
   

    
      <primitive object={scene}
      scale={scale}
      position={position}
      
      />
   

  );
}

 
