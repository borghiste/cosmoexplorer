import { useFrame } from "@react-three/fiber";
import { MutableRefObject } from "react";
import { Mesh } from "three";

type useArcProps  = {
  ref:MutableRefObject<Mesh | null>,
  x: string,
  y:string
}

export const useArc = ({ref, x, y}:useArcProps):void => {
    useFrame(({ clock }) => {
      const time = clock.getElapsedTime();
      if(ref.current){
      ref.current.position.x += Math.sin(time) * 0.01;
      ref.current.position.y -= Math.cos(time) * 0.01;
      }
    });
  };