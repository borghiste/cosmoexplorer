import { useState } from "react";
import Image from "next/image";
import { Body } from "../functions_&hooks/calculateBodySize";


export interface CardsData {
data: Body[]
}

export default function Cards({data}:CardsData){

  const [currentIndex, setcurrentIndex] = useState(0);
  const [currentCard, setCurrentCard] = useState<Body | null>(data[0]);
  
console.log(currentCard)
  

  const nextCard = () => {
setcurrentIndex((prev) => {
  const newIndex = prev % data.length - 1 ?  0 : prev + 1
  setCurrentCard(data[newIndex]);
  return newIndex
})

    
  }

  const prevCard = () =>{
    setcurrentIndex((prev) => {
     const prevIndex =  prev === 0 ? data.length -1 : prev - 1;
     setCurrentCard(data[prevIndex]);
     return prevIndex
    })
  }
    
      
         
        
    return(
    
    <>




<div className=" ms-auto overflow-hiddenflex flex-col ">

<div className=" flex flex-col sm:ms-auto h-auto sm:flex-col shrink  max-w-md overflow-hidden rounded-xl shadow-md md:max-w-2xl b">
  
    
{currentCard ?
      <Image
      width={500}
      height={500}
        className="
       sm:object-cover md:h-full md:w-48 h-20  aspect-squaremin-w-auto"
         src={`/images/${currentCard.englishName.toLowerCase()}.jpg`}
    
         alt={`${currentCard?.englishName.toLowerCase()} image`}
      
      />
      : null }
    

    <div className="flex flex-col ">
      <h2 className="text-sm font-semibold tracking-wide text-indigo-500 uppercase   ">name: {currentCard?.englishName}</h2>
  
      <ul className=" text-white-500 object-contain text-sm  h-10">
        <li> diameter: {currentCard?.meanRadius}</li>
        <li>mass: {currentCard?.mass.massValue}</li>
        <li>orbit time:{currentCard?.sideralOrbit}</li>
        <li>average Temperature:{currentCard?.avgTemp}</li>
      </ul>
    </div>
 
<div className="flex justify-between overflow-hidden w-auto">

   <a className={'pr-8 text-4xl hover:cursor-pointer'} onClick={()=>{prevCard()}}>&#10094;</a>
   <a className={' ml-16 text-4xl hover:cursor-pointer'} onClick={()=>{nextCard()}}>&#10095;</a>
</div>


</div>
</div>

    









    </>
    
    
    
    )
}





// Informazioni di base

//      Nome (es. Marte, Giove)
//     ☀️ Tipo (Esopianeta, Pianeta roccioso, Gigante gassoso)
//     📏 Diametro
//     ⚖️ Massa
//     🔄 Periodo orbitale (tempo per orbitare attorno alla stella)
//     🔁 Periodo di rotazione (durata di un giorno sul pianeta)
//     🌡️ Temperatura media

// Dati scientifici

//     🛰️ Scoperta (da chi e quando)
//     📡 Missioni spaziali (quali sonde o rover ci sono andati)
//     🔬 Composizione atmosferica
//     🪨 Composizione del suolo

// Curiosità & Extra

//     🌑 Lune principali
//     🌠 Possibilità di vita?
//     🎨 Colore predominante
//     🏞️ Caratteristica unica (es. Grande Macchia Rossa di Giove)

// Se la card ha spazio per immagini o grafici, potresti aggiungere:

//     🖼️ Un'immagine o modello 3D del pianeta
//     📊 Un grafico comparativo con la Terra (dimensione, massa, gravità)

// Se vuoi qualcosa di interattivo, potresti integrare:

//     🕹️ Pulsante per ruotare il modello 3D
//     🔍 Zoom su dettagli interessanti
//     🎵 Suoni ambientali basati su dati reali della NASA