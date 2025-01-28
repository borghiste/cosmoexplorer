

import { useState } from "react";
import Image from "next/image";

export default function SliderShow({images}) {

const[Slides, setSlides] = useState(images)
  const [slideIndex, setSlideIndex] = useState(0);
  const [currentSlide, setcurrentSlide] = useState(images[0]);
  const totalSlides = Slides.length
  console.log(totalSlides)

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
<div>
  {slideIndex}
  {<img
  src={currentSlide.url}
  height={500}
  width={500}
  className="aspect-square"/>}
  
  <button className="text-4xl"
          onClick={()=>{prevSlide()}}>&larr;

  </button>
  <button className='text-4xl' 
  onClick={()=>{nextSlide()}}>&rarr;
  </button>
</div>
   )
  




  }


