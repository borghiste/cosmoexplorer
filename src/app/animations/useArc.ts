import { useFrame } from "@react-three/fiber";
export const useArc = (ref, x, y) => {
    useFrame(({ clock }) => {
      const time = clock.getElapsedTime();
      ref.current.position.x += Math.sin(time) * 0.01;
      ref.current.position.y -= Math.cos(time) * 0.01;
    });
  };