
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Sun({ position, scale}) {


const { scene}= useGLTF('sun/sun.glb')

  return (
    
      <primitive object={scene}
      scale={scale}
      position={position}
      />

  );
}

 
