import { useMemo } from "react";
import { CanvasTexture } from "three";
import { Plane } from "@react-three/drei";
export default function SecondSection(){
    const textTexture = useMemo(() => {
      const canvas = document.createElement("canvas");
      canvas.width = 900;
      canvas.height = 200;
      const context = canvas.getContext("2d");
  
  /*     context.fillStyle = 'rgba(0, 0, 0, 0.1)' */
  
      context.rect(-1, 0, canvas.width, canvas.height);
      context.fillStyle = "white";
      context.font = "16px Polaris";
      context.fillText("HOW DOES THE UNIVERSE WORK?", 310, 200,400);
      context.fillText('RXPLORING SPACE',310,300,400)

  context
  
      return new CanvasTexture(canvas);
    }, []);
  
    return (
      <Plane args={[4, 1]} position={[0, -0.04, 1]} >
        <meshBasicMaterial map={textTexture} transparent />
      </Plane>
    );
  };