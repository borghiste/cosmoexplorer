import { useMemo } from "react";
import { CanvasTexture } from "three";
import { Plane } from "@react-three/drei";
import { Html } from "@react-three/drei";
export default function FourthSection() {
    const textTexture = useMemo(() => {
      const canvas = document.createElement("canvas");
      canvas.width = 900;
      canvas.height = 200;
      const context = canvas.getContext("2d");
  

  
      context.rect(-1, 0, canvas.width, canvas.height);
      context.fillStyle = "white";
      context.font = "16px Polaris";
      context.fillText("FOURTH", 300, 200,400);
      // context.fillText('how did we get here?',0,150);
  context
  
      return new CanvasTexture(canvas);
    }, []);
  
    return (
      <Plane args={[4, 1]} position={[0.5, -2.7, 1]} >
        <meshBasicMaterial map={textTexture} transparent  />
        
      </Plane>
    );
  };