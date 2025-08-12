import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { useGLTF } from "@react-three/drei";

interface planetModelProps  {path: string,
                            manualScale: number,
                            rotation?: [number, number, number]
}


export default function PlanetModel({ path, manualScale = 0.1, rotation }:planetModelProps ) {
  useGLTF.preload(path)
  const { scene } = useGLTF(path, true, true)
  const ref = useRef<THREE.Object3D>(null)

  useEffect(() => {
    if (ref.current) {
      const box = new THREE.Box3().setFromObject(ref.current)
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const scaleFactor = (1 / maxDim) * manualScale
      ref.current.scale.setScalar(scaleFactor)
    }
  }, [])

  return <primitive object={scene} ref={ref} dispose={null} rotation={rotation} />
}