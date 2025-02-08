 import { useFrame } from "@react-three/fiber";

 export const useRotation = (ref, axis) => {
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation[axis] += 0.01;
      }
    });
  };