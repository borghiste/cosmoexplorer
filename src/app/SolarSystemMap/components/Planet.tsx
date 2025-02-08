export default function Planet({position, color, scale, ref}){

    return(

        <mesh position={position} ref={ref}>
        <sphereGeometry args={scale} />
         <meshStandardMaterial color={color} />
      </mesh>
    )
}