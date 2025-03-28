'use client'

//import libraries

// import '../global.css';
import { useEffect, useState, useRef, LegacyRef } from 'react';


// import components

import SearchBar from '../components/UI/SearchBar';

//import functions
import fetchAPOD from './functions/fetchAPOD';
import fetchImagesbyDate from './functions/fetchImagesbyDate';
import generateGalleryContent from './functions/generateGalleryContent';

import generateAPOD from './functions/generateAPOD';
import { useRouter } from 'next/navigation';






export interface ImageObject {
  url: string
  title: string
  explanation: string,
  media_type:string
} 
export default function Gallery(){
  //states, Refs & dates

  const [isModalOpen,setisModalOpen ] = useState(false);



  const [APOD, setAPOD]= useState<ImageObject >()

  const [selectedPic, setselectedPic]= useState<ImageObject >();

 const start_date_Ref = useRef<HTMLInputElement>(null);

 const end_date_Ref = useRef<HTMLInputElement>(null);



  const [galleryPictures, setgalleryPictures]= useState([]) //stato delle immagini fetchate

  const todayDate = new Date().toISOString().split('T')[0]; //  today date



  const aMonthAgoDate = new Date(todayDate); // today date copy
  
  aMonthAgoDate.setMonth(aMonthAgoDate.getMonth() - 1); // today date copy minus 1 month
  
  const formattedAMonthAgo = aMonthAgoDate.toISOString().split('T')[0]; // formatted date
  
  











  //fetch APOD

  useEffect(()=>{
    fetchAPOD()

.then((data)=>{setAPOD(data)})},[])


// fetch and generate last month gallery content

  useEffect(()=>{fetchImagesbyDate({start_date:formattedAMonthAgo, end_date:todayDate})
  .then((data)=>{
     const pictures = data;
   
    setgalleryPictures(pictures);


   
   })
 },[])





//handleSearchimgsClick

function handleSearchimgsClick(){

 
const start_date = start_date_Ref.current?.value || ''
const end_date = end_date_Ref.current?.value || ''
  

  
  fetchImagesbyDate({start_date:start_date, end_date:end_date})
  .then((data)=>{
    const pics = data
    setgalleryPictures(pics)
  
    
   
})
}







 const galleryContent = generateGalleryContent({data:galleryPictures, handleClick:()=>{setisModalOpen(!isModalOpen)}})







  return(
   <>
 <div className='flex-col border-4   '>
  <h1 className='text-7xl text-center  '>GALLERY</h1>
  <br />
  <p className='text-center text-xl'>Explore the cosmo gallery and be amazed by the beauty of the space. With the gallery section you can take a look of the many images from the NASA archives searching for pictures by date. </p>
  <br />
  
  <main className='  z-10  relative lg:grid  lg:grid-flow-col   '>



{
generateAPOD({APOD:APOD, onClick:()=>{setisModalOpen(!isModalOpen); setselectedPic(APOD)}})
}
  <SearchBar
  buttonText='SEARCH IMAGES'
  className=' items-center w-full flex justify-center   '
  handleClick={()=>{handleSearchimgsClick()}}
  firstInputRef={start_date_Ref}
  secondInputRef={end_date_Ref}/>

 


{ galleryContent}

  </main>
  

  



  
  
 </div>
  </>
  )

}









  







          

  


 





