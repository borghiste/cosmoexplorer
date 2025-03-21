
import styles from './SlidesShow.module.css'
import { useState } from "react";
import Image from 'next/image';

interface Slide {
  title:string,
  media_type: string,
  url:string,
  explanation: string
}

interface SlidesProps {
  slides: Slide[];
}


export default function SliderShow({slides}:SlidesProps ) {

const[Slides, setSlides] = useState(slides)
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


<div className={`${styles.container}`}>


  <div className={`${styles.Slides} ${styles.fade}`}>

    {currentSlide.media_type === 'image'
     ?
      
      <Image  src={currentSlide.url} 
              height={500} 
              width={500} 
              alt={currentSlide.title}
              className='aspect-square  rounded-xl '/>
   :
     ( <iframe width="400" height="200"  src={currentSlide.url} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className='aspect-square rounded-lg'></iframe>
     )
  }
  </div>
  


  <a className={styles.prev} onClick={()=>{prevSlide()}}>&#10094;</a>
  <a className={styles.next} onClick={()=>{nextSlide()}}>&#10095;</a>
  <p  className={`${styles.text} w-full`}>{currentSlide.title}</p>

</div>


  </>



)

  

}
