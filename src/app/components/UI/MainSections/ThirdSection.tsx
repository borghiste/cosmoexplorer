import { useMemo } from "react";
import { CanvasTexture } from "three";
import { Plane } from "@react-three/drei";
export default function ThirdSection () {
    const textTexture = useMemo(() => {
      const canvas = document.createElement("canvas");
      canvas.width = 900;
      canvas.height = 450;
      const context = canvas.getContext("2d");
  
  /*     context.fillStyle = 'rgba(0, 0, 0, 0.1)' */
  
      context.rect(-1, 0, canvas.width, canvas.height);
      context.fillStyle = "white";
      context.font = "16px Polaris";
      context.fillText("THIRD", 300, 200,400);
      context?.fillText('lorem ipsum',300,300, 400)
      // context.fillText('how did we get here?',0,150);
  context
  
      return new CanvasTexture(canvas);
    }, []);
  
    return (
      <Plane args={[4, 1]} position={[0.5, -1.6, 1.4]} rotation={[0.1,0,0]} >
        <meshBasicMaterial map={textTexture} transparent />
      </Plane>
    );
  };