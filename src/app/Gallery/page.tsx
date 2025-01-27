'use client'

//import libraries

// import '../global.css';
import { useEffect, useState, useRef } from 'react';


// import components
import Modal from './components/Modal';
import SearchBar from '../components/UI/SearchBar';

//import functions
import fetchAPOD from './fetchAPOD';
import fetchImagesbyDate from './fetchImagesbyDate';
import generateGalleryContent from './generateGalleryContent';

import generateAPOD from './generateAPOD';
import { useRouter } from 'next/navigation';


import pictures from '.././../mock/astronomy-pictures.json'


export default function Gallery(){
  //states, Refs & dates

  const [isModalOpen,setisModalOpen ] = useState(false);

  const [APOD, setAPOD]= useState({})

  const [selectedPic, setselectedPic]= useState({});

 const start_date_Ref = useRef();

 const end_date_Ref = useRef();

 const router = useRouter();

 const [galleryPictures, setgalleryPictures]= useState([])

 const today = new Date();
 const formattedToday = today.toISOString().split('T')[0];


 const aMonthAgo = today.setMonth(today.getMonth() - 1); // Modifica direttamente l'oggetto `today`

 const formattedaMonthAgo = today.toISOString().split('T')[0]; 



  //fetch APOD

  useEffect(()=>{
    fetchAPOD()

.then((data)=>{setAPOD(data)})},[])

// fetch and generate last month gallery content

//  useEffect(()=>{fetchImagesbyDate({start_date:formattedaMonthAgo, end_date:formattedToday})
//  .then((data)=>{
//    const pictures = data
//    setgalleryPictures(pictures)
//  })
//  },[])

//handleimgClick

const handleImageClick = ({url}:string) => {
 
   router.push(`/Gallery/$${encodeURIComponent(url)}`); // Aggiorna l'URL con il titolo dell'immagine
   
};



 const galleryContent = generateGalleryContent({data:pictures, handleClick:handleImageClick })







  return(
   <>
 <div>
  <h1 className='text-8xl text-center '>GALLERY</h1>
  <p className='text-center'>search for images</p>
  <main className='grid grid-flow-col span-4 z-10 relative '>

{generateAPOD({APOD:APOD, onClick:()=>{setisModalOpen(!isModalOpen); setselectedPic(APOD)}})}


  <SearchBar
  buttonText='SEARCH IMAGES'
  className=' items-center w-full flex justify-center justify-center  '/>
 



{ galleryContent}

  </main>
  

  



  
  
 </div>
  </>
  )

}









  







          

  


 





