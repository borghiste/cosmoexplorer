import { useState } from "react";

interface QuestionWindowProp {
            data:any,
            startGame: boolean
}

export default function QuestionWindow({data, startGame}:QuestionWindowProp){



   
        const [currentQuestion,setCurrentQuestion] = useState(0);
    console.log(data);

    const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
    const [score, setScore] = useState(0)


function checkAnwer(answer: string | undefined, solution: string){
    if(selectedAnswer === solution){
        setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1)
}



  

    return(
        <div className="questionswindow flex flex-col items-center justify-center">
            
          
           <fieldset>
                        <legend className="text-lg text-black  text-wrap text-center ">{ startGame ? data[currentQuestion]?.question : null}</legend>
                        {
                            startGame ?
                        data[currentQuestion]?.options.map((option: {}) => (
                    <>
                    <div className="rounded-full  border-2 border-[var(--blue)]  bg-gray-400 ">

                    <input type="radio" name="level" value={option as string} onChange={(e)=>{setSelectedAnswer(e.target.value)}}/>
                <label className="text-md text-wrap ">{option as string}</label>
                    </div>
                    
                    </>
            )) : null
                }
           
            </fieldset>
                
            <button className="justify-end bg-[var(--blue)] rounded-full w-[5rem]" onClick={()=>{checkAnwer(selectedAnswer, data[currentQuestion]?.solution)}}>next</button>

            <p className="text-lg text-black">total score:{score}</p>
        </div>

    )

}