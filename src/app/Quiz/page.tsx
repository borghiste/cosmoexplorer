'use client';
import Link from "next/link";

import { useEffect, useState } from "react";

import quizData from '../data/questions.json';

// COMPONENTS
import QuestionsWindow from "./components/Questions";


export default function Quiz() {

    const levels = ['basic','medium','advanced'];
    const [choseLevel, setLevelChose] = useState<string>('');
    const [Data, setData] = useState([])

    
  

  



    

    return(
        <>

        <div style={{ height: '100vh', width: '100%', display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'static' }} className="overflow-auto">

            <h1 className="text-8xl">quiz</h1>

        {/* WINDOW */}
                <div className=" w-1/2 h-1/2 flex flex-col sm:flex-row">

        

                 <div className="  cover w-full h-full min-w-full flex flex-col justify-center items-center">
                    <span className=" 
                ">

                <Link href={'/'} className="w-4">&larr; homepage</Link>
                    </span>

                <div>

            
                  
                    <fieldset>
                        <legend className="text-xl text-black">chose a level:</legend>


                {levels.map((level) => (
                    <>
                    <div>

                    <input onClick={(e)=> {setLevelChose(level)}} className="" type="radio" name="level" value={level}/>
                <label>{level}</label>
                    </div>
                    </>
            ))}
            </fieldset>
               
                </div>
               
                                
                </div>
                <div>
                    <QuestionsWindow data={Data}/>
                </div>

               

                </div>

            </div>
        
        </>
    )
}

//  'use client';
//  import data from './components/questions.json';

//  // COMPONENTS

//  import Options from './components/Options';

// import { useState } from 'react';
// import { SetStateAction } from 'react';
// import { div } from 'three/tsl';


//  export default function Quiz(){
    
// // const chooseALevel = ['base','medium','advanced'].map(string =>(<li className="rounded border-2" onClick={(e)=>{console.log(e)}}>{string}</li>))
 




// }



    


// //  const options = currentQuestionOptions?.map((option)=>(
// //      <li className="bg-[#80d2f2] rounded-full flex 
// //                      items-center my-2  text-[#351826] w-96 right-4 relative" >
// //  <input type="radio" id={option as any} 
// //          name={option as any} 
// //          onChange={(e)=>{setcheckedAnswer(e.target.value)}} 
// //          value={option}
// //          className=' size-4' 
// //          key={option}
// //  onClick={()=>{checkAnswer(option)}}/>{option}</li>
// //  ))

// interface checkAnswerarguments {
// answer: string,
// solution: string
// }

// const checkAnswer = ({answer, solution}:checkAnswerarguments)=>{
//     if(answer === solution){
//         console.log(true)
//        totalScore ++;
//        setTotalScore(totalScore);
//     }
  
// }
  





//     return(
//        <>
//         <div className="flex justify-center flex-col ">
//         <div className='flex flex-col '>
//         <h1 className="lg:text-7xl text-4xl">QUIZ</h1>
//             <p className='sm:mx-auto sm:w-auto text-3xl text-justify'>Find out how much do you know about astronomy by playing the Quiz!</p>
//         </div>

       

        
//         <form className=" w-auto pb-64 mt-20 rounded-lg z-0 mb-80 flex flex-col    "
//                 onSubmit={e=> {
//                     e.preventDefault();
                   
                    
//                 }}>

// <p className="text-overflow  text-center     text-2xl">{currentQuestion.question}
// </p>



//  <Options options={currentQuestionOptions as [string, string, string, string]} 
//         setcheckedAnswer={setcheckedAnswer as ()=> void}
//         checkSolution={()=> checkAnswer(checkedAnswer as any)}
//         solution={currentQuestion.solution as string}/> 
    
// <button type='submit'  
//         className=" hoover:cursor-pointer     text-2xl "
//         onClick={()=>{nextQuestion()}}> next &#10095;</button>



//         <p className='  text-center'>{QuestionIndex  ? `${totalScore} correct answers/${Questions.length}` : null }</p>

// </form>
                

           
           
//         </div>
//        </>
      
      


//         )

    



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