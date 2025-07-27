 import { useFrame } from "@react-three/fiber";
import { MutableRefObject } from "react";
import { Mesh } from "three";

 interface useRotationProps {
  ref: MutableRefObject<Mesh | null>,
  axis:'x' | 'y' | 'z'
 }

 export const useRotation = ({ref, axis}:useRotationProps) => {
    useFrame(() => {
      if (ref.current) {
        ref.current.rotation[axis] += 0.01;
      }
    });
  };