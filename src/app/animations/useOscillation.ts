import { useFrame, Vector2 } from "@react-three/fiber";
import { MutableRefObject } from "react";
import { Mesh,  } from "three";
interface useOscillationProps {
  ref: MutableRefObject<Mesh | null>,
  axis: 'x' | 'y' | 'z'
}
export const useOscillation = ({ref, axis}:useOscillationProps): void => {
    useFrame(({ clock }) => {
      const time = clock.getElapsedTime() * 0.2;
      if (ref.current) {
        
        ref.current.position[axis] =  Math.sin(time);
      }
    });
  };