import { useFrame } from "@react-three/fiber";
export const useOscillation = (ref, axis) => {
    useFrame(({ clock }) => {
      const time = clock.getElapsedTime();
      if (ref.current) {
        ref.current.position[axis] = Math.sin(time);
      }
    });
  };