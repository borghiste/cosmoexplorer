'use client'
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { a, useSpring } from '@react-spring/three';

function AnimatedBox() {
  const ref = useRef();
  
  // Stato per tenere traccia della posizione di scroll
  const [scrollPercent, setScrollPercent] = useState(0);

  // Animazione dello spring basata sulla percentuale di scroll
  const props = useSpring({
    rotation: [scrollPercent * Math.PI, scrollPercent * Math.PI, 0],
    scale: 1 + scrollPercent * 0.5,
  });

  // Event listener per aggiornare la percentuale di scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = scrollTop / docHeight;
      setScrollPercent(scrollRatio);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a.mesh ref={ref} rotation={props.rotation} scale={props.scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </a.mesh>
  );
}

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedBox />
    </Canvas>
  );
}

export default App;
