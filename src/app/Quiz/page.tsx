 'use client';
 import data from './components/questions.json';

 // COMPONENTS

 import Options from './components/Options';

import { useState } from 'react';


 export default function Quiz(){
    
// const chooseALevel = ['base','medium','advanced'].map(string =>(<li className="rounded border-2" onClick={(e)=>{console.log(e)}}>{string}</li>))
 
const [Questions, setQuestions] = useState(data)
const [currentQuestion, setCurrentQuestion] = useState(data[0]);
const [QuestionIndex, SetQuestionIndex] = useState(0)

const [currentQuestionOptions, setCurrentQuestionOptions] = useState(data[0].options);
const [checkedAnswer, setcheckedAnswer] = useState();
let [totalScore, setTotalScore] = useState(0);



const nextQuestion = ()=>{SetQuestionIndex((prev)=>( prev === Questions.length -1 ? prev : prev + 1 ));
setCurrentQuestion(Questions[QuestionIndex])
setCurrentQuestionOptions(data[QuestionIndex].options)
    
    
}



    


// const options = currentQuestionOptions?.map((option)=>(
//     <li className="bg-[#80d2f2] rounded-full flex 
//                     items-center my-2  text-[#351826] w-96 right-4 relative" >
// <input type="radio" id={option} 
//         name={option.valueOf} 
//         onChange={(e)=>{setcheckedAnswer(e.target.value)}} 
//         value={option}
//         className=' size-4' 
//         key={option}
// onClick={()=>{checkAnswer(option, currentQuestion.solution)}}/>{option}</li>
// ))

interface checkAnswerarguments {
answer: string,
solution: string
}

const checkAnswer = ({answer, solution}:checkAnswerarguments)=>{
    if(answer === solution){
        console.log(true)
       totalScore ++;
       setTotalScore(totalScore);
    }
  
}
  



    return(
       <>
        <div className="flex justify-center flex-col ">
        <div className='flex flex-col '>
        <h1 className="lg:text-7xl text-4xl">QUIZ</h1>
            <p className='sm:mx-auto sm:w-auto text-2xl text-justify'>Find out how much do you know about astronomy and play the Quiz!</p>
        </div>

       

        
        <form className=" w-auto pb-64 mt-20 rounded-lg z-0 mb-80 flex flex-col md:flex-row md:justify-center "
                onSubmit={e=> {
                    e.preventDefault();
                   
                    
                }}>

<p className="text-overflow  text-center min-w-40 pb-16    md:ml-40 text-2xl">{currentQuestion.question}
</p>



<Options options={currentQuestionOptions as [string, string, string, string]} 
        setcheckedAnswer={setcheckedAnswer}
        checkSolution={checkAnswer as ()=>void}
        solution={currentQuestion.solution as string}/>
    
<button type='submit'  
        className=" hoover:cursor-pointer  mt-40 lg:mt-60 md:pt-92 lg:mr-80 text-2xl "
        onClick={()=>{nextQuestion()}}> next &#10095;</button>



        <p className='  text-center'>{QuestionIndex  ? `${totalScore} correct answers/${Questions.length}` : null }</p>

</form>
                

           
           
        </div>
       </>
      
      


        )

    }



    // Livello Intermedio
//         Quale pianeta ha il maggior numero di satelliti?
//         Saturno
//         Qual è il nome della più famosa cintura di asteroidi nel Sistema Solare?
//         Cintura degli asteroidi tra Marte e Giove
//         Cosa sono le aurore boreali e dove si verificano?
//         Fenomeni luminosi nell'atmosfera terrestre, visibili ai poli.
//         Qual è il nome della stella più vicina alla Terra dopo il Sole?
//         Proxima Centauri
//         Qual è il periodo di rotazione della Terra attorno al Sole?
//         365 giorni (circa un anno)
//         Livello Avanzato
//         Cos’è un buco nero e come si forma?
//         È una regione con una forza gravitazionale talmente intensa da non permettere nemmeno alla luce di sfuggire; si forma dal collasso di una stella molto massiccia.
//         Cosa distingue una stella nana bianca da una stella di neutroni?
//         La nana bianca è un residuo di una stella di massa simile al Sole, mentre la stella di neutroni è il residuo di stelle più massicce.
//         Qual è la teoria più accettata sull'origine dell'universo?
//         Il Big Bang
//         Come si chiama il fenomeno per cui un oggetto che si allontana emette luce spostata verso il rosso?
//         Redshift (o spostamento verso il rosso)
//         Cos'è una supernova?
//         L'esplosione di una stella alla fine della sua vita
//         Livello Esperto
//         Come si chiama il più grande radiotelescopio al mondo, situato in Cina?
//         FAST (Five-hundred-meter Aperture Spherical Telescope)
//         Quali sono le principali prove dell’espansione dell’universo?
//         L'effetto redshift delle galassie lontane e la radiazione cosmica di fondo
//         Qual è la differenza tra materia oscura ed energia oscura?
//         La materia oscura è una forma di materia che non emette luce e ha effetti gravitazionali, mentre l'energia oscura è una forza che sembra accelerare l'espansione dell'universo.
//         Qual è la durata della vita del Sole?
//         Circa 10 miliardi di anni
//         Cosa significa che una stella è "di sequenza principale"?
//         È nella fase di vita in cui fonde l'idrogeno in elio nel suo nucleo.</p> */}
       
    
// }