'use client'

//import libraries

// import '../global.css';
import { useEffect, useState, useRef } from 'react';


// import components

import SearchBar from '../components/UI/SearchBar';

//import functions
import fetchAPOD from '../functions/fetchAPOD';
import fetchImagesbyDate from '../functions/fetchImagesbyDate';
import generateGalleryContent from '../functions/generateGalleryContent';

import generateAPOD from '../functions/generateAPOD';
import { useRouter } from 'next/navigation';






export interface ImageObject {
  url: string
  title: string
  explanation: string
}
export default function Gallery(){
  //states, Refs & dates

  const [isModalOpen,setisModalOpen ] = useState(false);

  const [APOD, setAPOD]= useState({})

  const [selectedPic, setselectedPic]= useState({});

 const start_date_Ref = useRef();

 const end_date_Ref = useRef();



  const [galleryPictures, setgalleryPictures]= useState([]) //stato delle immagini fetchate

  const todayDate = new Date().toISOString().split('T')[0]; //  today date

  console.log('today',todayDate)
  const aMonthAgoDate = new Date(todayDate); // today date copy
  
  aMonthAgoDate.setMonth(aMonthAgoDate.getMonth() - 1); // today date copy minus 1 month
  
  const formattedAMonthAgo = aMonthAgoDate.toISOString().split('T')[0]; // formatted date
  console.log('month',formattedAMonthAgo); 
  











  //fetch APOD

  useEffect(()=>{
    fetchAPOD()

.then((data)=>{setAPOD(data)})},[])


// fetch and generate last month gallery content

  useEffect(()=>{fetchImagesbyDate({start_date:formattedAMonthAgo, end_date:todayDate})
  .then((data)=>{
     const pictures = data;
     console.log(pictures)
    setgalleryPictures(pictures);


   
   })
 },[])





//handleSearchimgsClick

function handleSearchimgsClick(){
const start_date = start_date_Ref.current?.value
const end_date = end_date_Ref.current?.value


  
  fetchImagesbyDate({start_date:start_date, end_date:end_date})
  .then((data)=>{
    const pics = data
    setgalleryPictures(pics)
  
    
   
})
}







 const galleryContent = generateGalleryContent({data:galleryPictures})







  return(
   <>
 <div>
  <h1 className='text-8xl text-center '>GALLERY</h1>
  <p className='text-center'>search for images</p>
  <main className='grid grid-flow-col span-4 z-10 relative '>

{generateAPOD({APOD:APOD, onClick:()=>{setisModalOpen(!isModalOpen); setselectedPic(APOD)}})}


  <SearchBar
  buttonText='SEARCH IMAGES'
  className=' items-center w-full flex justify-center justify-center  '
  handleClick={()=>{handleSearchimgsClick()}}
  firstInputRef={start_date_Ref}
  secondInputRef={end_date_Ref}/>
 



{ galleryContent}

  </main>
  

  



  
  
 </div>
  </>
  )

}









  







          

  


 





