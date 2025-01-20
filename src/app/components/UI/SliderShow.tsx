import images from '.././././../mock/astronomy-pictures.json'
import { useState } from "react";
import Image from "next/image";

export default function SliderShow({images}) {
  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = 3; // Numero totale di slide

  const nextSlide = () => {
    setSlideIndex((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  const setSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <div>
      {/* Slideshow container */}
      <div className="slideshow-container">
        {[1, 2, 3].map((slide, index) => (
          <div
            key={index}
            className={`mySlides ${slideIndex === index + 1 ? "active" : ""}`}
            style={{ display: slideIndex === index + 1 ? "block" : "none" }}
          >
            {/* <Image
              src={}
              alt={`Slide ${index + 1}`}
              className="hover:cursor-pointer "
              width={500}
              height={500}
            /> */}
            <div className="text ">Caption {index + 1}</div>
          </div>
        ))}

        {/* Next and previous buttons */}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Dots */}
      <div className="dots-container">
      
      </div>
    </div>
  );
}
