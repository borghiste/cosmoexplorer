import { useFrame } from "@react-three/fiber";

export  const useOrbitation = (ref: any, x: string) => {

    useFrame(({clock}) => {
        const time = clock.getElapsedTime();
        const radius = 2.7;
        const speed = 0.5;
        const angle =  time * speed ;

        if(ref.current){
            ref.current.position.x = radius * Math.cos(angle) 
            ref.current.position.z = Math.sin(angle)
        }
    })
    
}