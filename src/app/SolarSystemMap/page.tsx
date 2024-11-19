'use client';
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { ScrollControls, useScroll, Scroll } from "@react-three/drei";
import React from "react";

import MainPlanetwithSatellite from "../components/UI/MainPlanetwithSatellite";
import { OrbitControls } from "@react-three/drei";

// SECTIONS IMPORT

import FourthSection from "../components/UI/MainSections/FourthSection";
import Meteor from "../components/UI/Meteor";

const MainPlanet = () => {
  const PlanetRef = useRef();
  useFrame(() => {
    if (PlanetRef.current) {
      PlanetRef.current.rotation.y += 0.01;
    }
  });

  return <MainPlanetwithSatellite PlanetRef={PlanetRef} />;
};

const Scene = () => {
  const MeteorRef = useRef();
  const [SectionView, setSectionView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setSectionView(true);
          console.log('Section is in view');
        } else {
          setSectionView(false);
          console.log('Section is out of view');
        }
      });

      observer.observe(sectionRef.current);

      // Cleanup observer when component unmounts
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useFrame(() => {
    if (SectionView && MeteorRef.current) {
      MeteorRef.current.position.z -= 1;
    }
  });

  return (
    <>
      <OrbitControls />
      <group position={[0, 0, -1]}>
        <MainPlanet />
      
        <FourthSection sectionRef={sectionRef} />
        <Meteor MeteorRef={MeteorRef} />
      </group>
    </>
  );
};

export default function Home() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
     
      </mesh>

      <Canvas style={{ height: '90vh' }} camera={{ position: [0, 0, 2], fov: 50 }} className="z-0">
        <ScrollControls pages={5} damping={0.5}>
          <Scroll>
            <ambientLight intensity={10} />
            <directionalLight position={[40, 40, 50]} intensity={10} />
            <pointLight position={[0, 20, 10]} intensity={5} />
            <Scene />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
