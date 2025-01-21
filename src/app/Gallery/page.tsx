'use client'

//import libraries

// import '../global.css';
import { useEffect, useState, useRef } from 'react';


// import components
import Modal from '../components/UI/Modal';
import SearchBar from '../components/UI/SearchBar';

//import functions
import fetchAPOD from './fetchAPOD';
import fetchImagesbyDate from './fetchImagesbyDate';
import generateContent from './generateContent';

import generateAPOD from './generateAPOD';


export default function Gallery(){
  //states, Refs & dates

  const [isModalOpen,setisModalOpen ] = useState(false);

  const [APOD, setAPOD]= useState({})

  const [selectedPic, setselectedPic]= useState({});

 const start_date_Ref = useRef();

 const end_date_Ref = useRef();

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

 useEffect(()=>{fetchImagesbyDate({start_date:formattedaMonthAgo, end_date:formattedToday})
 .then((data)=>{
   const pictures = data
   setgalleryPictures(pictures)
 })
 },[])


 let galleryContent = generateContent({data:galleryPictures, isModalOpen:isModalOpen, setisModalOpen:setisModalOpen, setSelectedPic:setselectedPic})





  return(
   <>
 <div>
  <h1 className='text-8xl text-center '>GALLERY</h1>
<Modal
picture={selectedPic}
isModalOpen={isModalOpen}
setisModalOpen={setisModalOpen}
className={'w-full  z-10 '}></Modal>
  <main className='grid grid-flow-col span-4 z-10 '>

{generateAPOD({APOD:APOD, onClick:()=>{setisModalOpen(!isModalOpen); setselectedPic(APOD)}})}


  <SearchBar
  buttonText='SEARCH IMAGES'
  className='justify-center flex  absolute h-10 w-full max-h-min flex justify-center justify-center  absolute'></SearchBar>
  {galleryContent}

  </main>
  



  
  
 </div>
  </>
  )

}









  







          

  


 





