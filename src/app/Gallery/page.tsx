'use client';

import '../globals.css';

//import libraries
import { useEffect, useRef, useState } from 'react';

//import components

import Modal from '../components/UI/Modal';

//import functions
import fetchAPOD from './generateAPOD';
import fetchImagesbyDate from './fetchImagesbyDate';

import generateImages from './GenerateImages';



export default  function Gallery(){

  // states & refs
  
  const [isModalOpen, setisModalOpen] = useState(false);
  
  const [selectedPic, setSelectedPic] = useState({});

  const [APOD,setAPOD] = useState({});

  const [galleryPictures, setgalleryPictures] = useState([]);

const start_date_Ref = useRef();

const end_date_Ref = useRef();




// fetch astronomy picture of the day

// useEffect(()=>{ fetchAPOD()
//    .then((data)=> {
//     const APOD = data
//     setAPOD(APOD)
//    })},[])


function GallerySection(){
  



async function  handleSearchImagesClick(){

  const startDate = start_date_Ref.current.value;
              const endDate = end_date_Ref.current.value;
          
              
              console.log("Start Date:", startDate);
              console.log("End Date:", endDate);
                   const data = await fetchImagesbyDate({start_date:startDate, end_date:endDate})
                  setgalleryPictures(data)
                  
                  
}


  
const generatedPictures =  generateImages(galleryPictures, isModalOpen, setisModalOpen, setSelectedPic)
console.log('gen pics', generatedPictures)


return(
  <div className=' flex flex-wrap '>
    <p className=' '> gallery Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam, debitis iure sunt, consequuntur vitae eveniet, recusandae aliquam jlnkln</p>
    

    <div className='justify-between flex w-full h-10'>
      <label htmlFor="start date">start date</label>

      {/* start date cannot be after end date */}
    <input type="date" id='start' ref={start_date_Ref}/>
    <label htmlFor="end date"></label>
    <input type="date" id='end ' ref={end_date_Ref}/>
    <button className='rounded bg-slate-500 text-lg' 
            onClick={ ()=>{ handleSearchImagesClick()
            }}>
                      SEARCH IMAGES
                      </button>
    </div>
{generatedPictures}
</div>
)
}

          

  


 


    return(
      <>
      <h1 className='text-8xl text-center'>Gallery</h1>
<main className='grid  grid-flow-col span-4 z-0'>
  <div className={ 'hover:cursor-pointer hover:brightness-95 row-span-3'}>
    <h2 className='text-2xl text-center'>photo of the day</h2>
    <img src={APOD.url} className='object-fit' onClick={()=>{setSelectedPic(APOD), setisModalOpen(! isModalOpen)}} />
    <p>{APOD.title}</p>

    <p>{APOD.explanation}</p>

  </div>

<GallerySection/>
<Modal className={'absolute w-full h-full  bg-black flex justify-between  z-10'} isModalOpen={isModalOpen}  setisModalOpen={setisModalOpen} picture={selectedPic}/>
</main>
      </>


    )
}




