import { useState } from "react"

export default function Options({options, setcheckedAnswer, checkSolution, solution}){

 const [options2, setOptions] = useState(options)

    const test = options2?.map((option)=>(
      <li className="bg-[#80d2f2] rounded-full flex 
      items-center my-2  text-[#351826] w-96 right-4 relative" 
      key={option}>
<input type="radio" id={option} 
name={options} 
onChange={(e)=>{setcheckedAnswer}} 
value={option}
className=' size-4' 

onClick={(e)=>{checkSolution(e.target.value, solution)}}/>{option}</li>      
    ))
    return(
        <ul className=" z-20 absolute  pt-[1rem] text-left">

            
        {test}
            

        

        </ul>
    )
}