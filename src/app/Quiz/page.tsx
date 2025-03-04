 'use client';
 import data from './components/questions.json';

 // COMPONENTS
 import Question from './components/Question';
 import Options from './components/Options';


 export default function Quiz(){
    
const chooseALevel = ['base','medium','advanced'].map(string =>(<li className="rounded border-2" onClick={(e)=>{console.log(e)}}>{string}</li>))
 

    return(
        <div className="flex justify-between">
        <div className='flex flex-col '>
        <h1 className="text-9xl">QUIZ</h1>
            <p className='w-[16rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laudantium blanditiis odit id delectus error culpa quos, veniam doloribus officiis?</p>
        </div>
        
            <Question/>
        </div>
      

        )

    }