'use client';

import '../globals.css';

//import libraries
import { useEffect, useRef, useState } from 'react';

//import components

import Modal from '../components/UI/Modal';

//import functions
import fetchAPOD from './generateAPOD';
import fetchImagesbyDate from './fetchImagesbyDate';

import generateImages from './generateContent';
import SearchBar from '../components/UI/SearchBar';
import generateContent from './generateContent';



export default  function Gallery(){

  // states & refs
  
  const [isModalOpen, setisModalOpen] = useState(false);
  
  const [selectedPic, setSelectedPic] = useState({});

  const [APOD,setAPOD] = useState({});

  const [galleryPictures, setgalleryPictures] = useState([]);

const start_date_Ref = useRef();

const end_date_Ref = useRef();

const today = new Date();
const formattedToday = today.toISOString().split('T')[0];


const aMonthAgo = today.setMonth(today.getMonth() - 1); // Modifica direttamente l'oggetto `today`

const formattedaMonthAgo = today.toISOString().split('T')[0]; // Ora puoi chiamare `toISOString()` correttamente

console.log(formattedToday); // La data di oggi in formato YYYY-MM-DD
console.log(aMonthAgo); // La data di un mese fa in formato YYYY-MM-DD






//  get astronomy picture of the day

 useEffect(()=>{ fetchAPOD()
    .then((data)=> {
     const APOD = data
    setAPOD(APOD)
    })},[]) 

//  get last month pictures

useEffect(()=>{fetchImagesbyDate({start_date:formattedaMonthAgo, end_date:formattedToday})
.then((data)=>{
  const pictures = data
  setgalleryPictures(pictures)
})
},[])

let generatedContent = generateContent({data:galleryPictures, isModalOpen:isModalOpen, setisModalOpen:setisModalOpen, setSelectedPic:setSelectedPic})




function ImagesGallerySection(){
  

 async function  handleSearchImagesClick(){
  setgalleryPictures([])

  const startDate = start_date_Ref.current?.value;
              const endDate = end_date_Ref.current?.value;
          
              
              console.log("Start Date:", startDate);
              console.log("End Date:", endDate);
              const data = await fetchImagesbyDate({start_date:startDate, end_date:endDate})
              setgalleryPictures(data)
                  
                  
}

 generatedContent = generateContent({data:galleryPictures, isModalOpen:isModalOpen, setisModalOpen:setisModalOpen, setSelectedPic})



return(
  <div className=' flex flex-wrap '>
    <p className=' '> gallery Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam, debitis iure sunt, consequuntur vitae eveniet, recusandae aliquam jlnkln</p>
    

  <SearchBar handleClick={()=>handleSearchImagesClick()
  }           firstInputRef={start_date_Ref}
              secondInputRef={end_date_Ref}
              className='justify-center flex  w-full h-10'
              buttonText={'SEARCH IMAGES'}
              >
    SEARCH IMAGES</SearchBar>
{generatedContent}
</div>
)

}

          

  


 


    return(
      <>
      <h1 className='text-8xl text-center'>Gallery</h1>
<main className='grid  grid-flow-col span-4 z-0'>
  <div className={ 'hover:cursor-pointer hover:brightness-95 row-span-3'}>
    <h2 className='text-2xl text-center text-6xl'>photo of the day</h2>
    <img src={APOD.url} className='object-fit' onClick={()=>{setSelectedPic(APOD), setisModalOpen(! isModalOpen)}} />
    <p>{APOD.title}</p>

    <p>{APOD.explanation}</p>

  </div>

<ImagesGallerySection/>
<Modal className={'absolute w-full h-full  bg-black flex justify-between  z-10'} isModalOpen={isModalOpen}  setisModalOpen={setisModalOpen} picture={selectedPic}/>
</main>
      </>


    )
}




