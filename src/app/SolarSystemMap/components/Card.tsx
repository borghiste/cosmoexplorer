import { useState } from "react";

import styles from './Card.module.css';
export default function Card({props}){
    
    const[Slides, setSlides] = useState(props)
      const [slideIndex, setSlideIndex] = useState(0);
       const [currentSlide, setcurrentSlide] = useState(Slides[0]);
       const totalSlides = Slides.length
      
    
      const  nextSlide = ()=>{setSlideIndex((prev)=>(prev === totalSlides -1 ? 0 : prev +1));
        setcurrentSlide(Slides[slideIndex])
     
      }
    
      const prevSlide = () => {
        setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
        
        setcurrentSlide(() => {
          const newIndex = slideIndex === 0 ? totalSlides - 1 : slideIndex - 1;
          return Slides[newIndex];
        });
      };
      
    
      
         
        
    return(
    
    <>
<div className={`${styles.card}  mr-7`}>
<img  className="rounded-xl  object-contain" />
<h2 className="text-lg">{currentSlide.englishName}</h2>

<ul>
  <li>diameter:{currentSlide.meanRadius}</li>
<li>massa</li>
<li>periodo orbitale</li>
<li>periodo di rotazione</li>
<li>temperatura media</li>
</ul>



<a className={styles.prev} onClick={()=>{prevSlide()}}>&#10094;</a>
  <a className={styles.next}  onClick={()=>{nextSlide()}} >&#10095;</a>



{/* <div className={styles.barcontainer}>
    <span>pressure</span>
    <div className={`${styles.bar} ${styles.ht}`}>
                  80%
                </div>
              </div> */}
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