import { useState } from "react";

interface QuestionWindowProp {
            data:any,
            startGame: boolean
}

export default function QuestionWindow({data, startGame}:QuestionWindowProp){



   
        const [currentQuestion,setCurrentQuestion] = useState(0);
    console.log(data);

    const [selectedAnswer, setSelectedAnswer] = useState();
    const [score, setScore] = useState(0)


function checkAnwer(answer: string | undefined, solution: string){
    if(answer = solution){
        setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1)
}



  

    return(
        <div className="questionswindow flex flex-col items-center justify-center">
            
          
           <fieldset>
                        <legend className="text-xl text-black  text-wrap text-center ">{ startGame ? data[currentQuestion]?.question : null}</legend>
                        {
                            startGame ?
                        data[currentQuestion]?.options.map((option: {}) => (
                    <>
                    <div className="rounded-full w-[11rem] border-2 border-[var(--blue)] m-2 bg-gray-400 ">

                    <input type="radio" name="level" value={option as string}/>
                <label className="text-md">{option as string}</label>
                    </div>
                    
                    </>
            )) : null
                }
           
            </fieldset>
                
            <button className="justify-end bg-[var(--blue)] rounded-full w-[5rem]" onClick={()=>{checkAnwer(selectedAnswer, data[currentQuestion]?.solution)}}>next</button>

            <p className="text-lg">totale score:{score}</p>
        </div>

    )

}