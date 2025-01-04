import { useFrame } from "@react-three/fiber"
import  * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { useState } from "react";



export default function meteorAnimation({MeteorRef}){

  const { camera } = useThree();
  const [isVisible, setIsVisible] = useState(false)

  const checkVisibility = () => {
    if (MeteorRef.current) {
      const frustum = new THREE.Frustum()
      const matrix = new THREE.Matrix4().multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse
      )
      frustum.setFromProjectionMatrix(matrix)
  
      const box = new THREE.Box3().setFromObject(MeteorRef.current)
      return frustum.intersectsBox(box)
    }
    return false
    
  }

    useFrame(() => {
        const visible = checkVisibility()
     
        if (visible !== isVisible && MeteorRef.current) {
          setIsVisible(visible)
         
          console.log(visible)
          console.log(MeteorRef.current.position.z)
        
        }
        if(visible){
          MeteorRef.current.position.z -=0.01;
          MeteorRef.current.position.x -=0.01 
        
        }
       
      })
}