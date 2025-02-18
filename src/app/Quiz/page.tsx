 'use client'
 export default function Quiz(){
    
const chooseALevel = ['base','medium','advanced'].map(string =>(<li className="rounded border-2" onClick={(e)=>{console.log(e)}}>{string}</li>))
 

    return(
        <div  className="flex flex-col justify-center items-center h-[90vh] ">
         <div className="h-[80vh] w-[50vw] bg-slate-400 bg-opacity-50 flex justify-center items-center flex-col">
             <h2 className="text-red-500-500 ">question</h2>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto asperiores dolore, sequi nesciunt, sit natus libero dolores omnis, enim molestiae ducimus! Maiores, velit. Non, architecto!</p>
             
             <ul>
                <li> <input type="radio" />option1</li>
                <li> <input type="radio" />option2</li>
                <li> <input type="radio" />option3</li>
                <li> <input type="radio" />option4</li>
             </ul>
       
         </div>
         </div>
    )
     
//         <div  className="flex flex-col justify-center items-center h-[90vh] ">
// <div className="h-[50vh] w-[50vw] bg-slate-400 bg-opacity-50 flex justify-center items-center flex-col">
//     <h2 className="text-red-500-500 ">choose a level</h2>
//     <ul className="h-20  flex justify-center flex-col hover:cursor-pointer ">
// {/* {chooseALevel} */}
//     </ul>
// </div>

{/* <div className="h-[50vh] w-[50vw] bg-slate-400 bg-opacity-50 flex justify-center items-center flex-col">
    <h2 className="text-red-500-500 ">Question #1</h2>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti aspernatur officia ea inventore fugit labore quod cum ad ullam tempore!</p>

   <label htmlFor="answer1">answer1</label>
   <input type="checkbox" />
   <label htmlFor="answer2">answer2</label>
   <input type="checkbox" />
</div> */}



            // </div>
          
    
    
    
    

        {/* <p>Ecco alcune idee per le domande di un quiz di astronomia, suddivise per livelli di difficoltà:

        Livello Base
        Qual è il pianeta più vicino al Sole?
        Mercurio
        Qual è il pianeta più grande del Sistema Solare?
        Giove
        Qual è il nome della nostra galassia?
        Via Lattea
        Quanti pianeti ci sono nel Sistema Solare?
        Otto
        Qual è il satellite naturale della Terra?
        La Luna
        Livello Intermedio
        Quale pianeta ha il maggior numero di satelliti?
        Saturno
        Qual è il nome della più famosa cintura di asteroidi nel Sistema Solare?
        Cintura degli asteroidi tra Marte e Giove
        Cosa sono le aurore boreali e dove si verificano?
        Fenomeni luminosi nell'atmosfera terrestre, visibili ai poli.
        Qual è il nome della stella più vicina alla Terra dopo il Sole?
        Proxima Centauri
        Qual è il periodo di rotazione della Terra attorno al Sole?
        365 giorni (circa un anno)
        Livello Avanzato
        Cos’è un buco nero e come si forma?
        È una regione con una forza gravitazionale talmente intensa da non permettere nemmeno alla luce di sfuggire; si forma dal collasso di una stella molto massiccia.
        Cosa distingue una stella nana bianca da una stella di neutroni?
        La nana bianca è un residuo di una stella di massa simile al Sole, mentre la stella di neutroni è il residuo di stelle più massicce.
        Qual è la teoria più accettata sull'origine dell'universo?
        Il Big Bang
        Come si chiama il fenomeno per cui un oggetto che si allontana emette luce spostata verso il rosso?
        Redshift (o spostamento verso il rosso)
        Cos'è una supernova?
        L'esplosione di una stella alla fine della sua vita
        Livello Esperto
        Come si chiama il più grande radiotelescopio al mondo, situato in Cina?
        FAST (Five-hundred-meter Aperture Spherical Telescope)
        Quali sono le principali prove dell’espansione dell’universo?
        L'effetto redshift delle galassie lontane e la radiazione cosmica di fondo
        Qual è la differenza tra materia oscura ed energia oscura?
        La materia oscura è una forma di materia che non emette luce e ha effetti gravitazionali, mentre l'energia oscura è una forza che sembra accelerare l'espansione dell'universo.
        Qual è la durata della vita del Sole?
        Circa 10 miliardi di anni
        Cosa significa che una stella è "di sequenza principale"?
        È nella fase di vita in cui fonde l'idrogeno in elio nel suo nucleo.</p> */}
       
    
}