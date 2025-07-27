import { useState } from "react";
import { Dispatch } from "react";
import { SetStateAction } from "react";

interface OptonsProps {
    options: [string, string, string, string] ,
    setcheckedAnswer: Dispatch<SetStateAction<undefined>>, 
    checkSolution:(value:string | undefined, solution:string)=>void, 
    solution: string
}

export default function Options({options, setcheckedAnswer, checkSolution, solution}:OptonsProps){

 const [choices, setOptions] = useState(options)

    const Options = options?.map((option)=>(
      <li className="bg-[#80d2f2] rounded-full flex 
      items-center my-2  text-[#351826] max-w-96 min-w-80  w-auto  relative" 
      key={option}>
<input type="radio" id={option} 
name={option} 
onChange={(e)=>{setcheckedAnswer}} 
value={option}
className=' ' 

onClick={(e)=>{
    const value = e.target instanceof HTMLElement ? e.target.dataset.value: ''
    checkSolution(value, solution)}}/>{option}</li>      
    ))
    return(
        <ul className=" lg:ml-92   pt-[2rem]  text-left flex flex-col mx-auto w-auto">

            
         {Options} 
            

        

        </ul>
    )
}