 'use client';
 import data from './components/questions.json';

 // COMPONENTS
 import Question from './components/Window';
 import Options from './components/Options';
import Window from './components/Window';
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



    


const options = currentQuestionOptions?.map((option)=>(
    <li className="bg-[#80d2f2] rounded-full flex 
                    items-center my-2  text-[#351826] w-96 right-4 relative" >
<input type="radio" id={option} 
        name={option.valueOf} 
        onChange={(e)=>{setcheckedAnswer(e.target.value)}} 
        value={option}
        className=' size-4' 
        key={option}
onClick={()=>{checkAnswer(option, currentQuestion.solution)}}/>{option}</li>
))



const checkAnswer = (answer, solution)=>{
    if(answer === solution){
        console.log(true)
       totalScore ++;
       setTotalScore(totalScore);
    }
  
}
  



    return(
       <>
        <div className="flex justify-between ">
        <div className='flex flex-col '>
        <h1 className="text-9xl">QUIZ</h1>
            <p className='w-[16rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium blanditiis odit id delectus error culpa quos, veniam doloribus officiis?</p>
        </div>

       

        
        <form className="bg-[#151740] w-[51rem] mt-20 rounded-lg z-0 "
                onSubmit={e=> {
                    e.preventDefault();
                   
                    
                }}>

<p className="text-overflow  text-center  ">{currentQuestion.question}
</p>

<ul className='z-20 absolute text-left'>

<Options options={currentQuestionOptions} 
        setcheckedAnswer={setcheckedAnswer}
        checkSolution={checkAnswer}
        solution={currentQuestion.solution}/>
    
</ul>



<p className='pl-9  text-center'>{QuestionIndex  ? `${totalScore} correct answers/${Questions.length}` : null }</p>
<button type='submit'  
        className=" hoover:cursor-pointer px-80  text-xl text-nowrap ml-20 pt-21"
        onClick={()=>{nextQuestion()}}> next &#10095;</button>

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