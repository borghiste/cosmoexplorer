'use client';

import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";

interface AstronautProps {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
}

// Correggiamo l'uso della ref con forwardRef
const Astronaut = forwardRef<Group, AstronautProps>(({ position, scale, rotation }, ref) => {
  const { scene } = useGLTF('/models/astronaut.dae/astronaut.glb', true);

  return (
    <group ref={ref}>
      <primitive object={scene} position={position} scale={scale} rotation={rotation} />
    </group>
  );
});

export default Astronaut;
