import { useState } from "react";
export default function Window({questions}){

    return(
        <form className="bg-[#151740] w-[51rem] mt-20 rounded-lg z-0 border-8 ">

        <p className="text-overflow  text-center  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, numquam asperiores, alias quisquam consequatur officia ea recusandae assumenda ab incidunt ratione in quia accusantium. Sunt magni commodi nostrum 
        </p>
        <ul className=" z-20 absolute px-[39rem] pt-[10rem] text-left">

<li className="bg-[#80d2f2] rounded-full flex  " >
    <input type="radio"/>
    option1</li>
    </ul>

        
        <a className=" px-80"> next &#10095;</a>
       
        </form>
    )
}