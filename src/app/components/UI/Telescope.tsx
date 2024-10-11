'use client'
import { TbTelescope } from "react-icons/tb";
import { IconContext } from "react-icons";


export default function Scope(){
    return(
        <>
    <IconContext.Provider value={{className:'telescope', size:80}}>


    <TbTelescope />

    </IconContext.Provider>
        </>
)
}
