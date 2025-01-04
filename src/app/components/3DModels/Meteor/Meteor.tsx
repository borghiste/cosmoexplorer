
import { Scroll, useGLTF } from "@react-three/drei";
import { ThreeElements, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import { useEffect, useRef, useState } from "react";



export default function Meteor({MeteorRef}){
    
   
   
     const {scene}= useGLTF('/meteor/meteor.glb');

    return(

<>

<group ref={MeteorRef}>
          <primitive object={scene}
                    scale={[0.6,0.6,0.6]}
                    position={[1,-4,2]}
                    rotation={[0.5,-1,-0.8]}
                    />  
                    </group>

                    </>
                    
                   
        )
}