
import styles from './SlidesShow.module.css'
import { useState } from "react";
import images from '../../../mock/astronomy-pictures.json'

export default function SliderShow({slides}) {

const[Slides, setSlides] = useState(slides)
  const [slideIndex, setSlideIndex] = useState(0);
   const [currentSlide, setcurrentSlide] = useState(Slides[0]);
   const totalSlides = Slides.length
  

  const  nextSlide = ()=>{setSlideIndex((prev)=>(prev === totalSlides -1 ? 0 : prev +1));
    setcurrentSlide(Slides[slideIndex])
 
  }

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    
    setcurrentSlide((prev) => {
      const newIndex = slideIndex === 0 ? totalSlides - 1 : slideIndex - 1;
      return Slides[newIndex];
    });
  };
     
    
return(


<div className={`${styles.container} `}>


  <div className={`${styles.Slides} ${styles.fade}`}>
    
    <img  src={currentSlide.url} height={500} width={500} className='aspect-square'/>
   
  </div>




  <a className={styles.prev} onClick={()=>{prevSlide()}}>&#10094;</a>
  <a className={styles.next} onClick={()=>{nextSlide()}}>&#10095;</a>
</div>





)



//     return(

// //  <div>

// //   {
// //     <div>

// //     <img
// //   src={currentSlide.url}
// //   height={500}
// //   width={500}
// //   className="aspect-square"/>
// //   </div>
  
// //   }
  
// //   <button className="text-4xl"
// //           onClick={()=>{prevSlide()}}>&larr;

// //   </button>
// //   <button className='text-4xl' 
// //   onClick={()=>{nextSlide()}}>&rarr;
// //   </button>
// // </div> 
   
  


//     )

  

}
