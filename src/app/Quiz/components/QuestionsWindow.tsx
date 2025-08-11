import { useState } from "react"

export default function QuestionWindow({data, startGame}){



   
        const [currentQuestion,setCurrentQuestion] = useState(0);
    console.log(data);



  

    return(
        <div className="questionswindow h-max">
            
          
           <fieldset id="field-levels">
                        <legend className="text-xl text-black">{ startGame ? data[currentQuestion]?.question : null}</legend>
                        {
                            startGame ?
                        data[currentQuestion]?.options.map((option) => (
                    <>
                    <div className="rounded-full w-[11rem] border-2 border-[var(--blue)] m-2 bg-gray-400">

                    <input type="radio" name="level" value={option}/>
                <label className="text-md">{option}</label>
                    </div>
                    </>
            )) : null
                }
           
            </fieldset>
                
        
        </div>

    )

}