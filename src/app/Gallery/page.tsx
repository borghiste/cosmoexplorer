
'use client';
import images from '../mock/astronomy-pictures.json';
import APOD from '../mock/APOD.json';
import Image from 'next/image';
import '../globals.css';



import generateAPOD from './generateAPOD';
import Modal from '../components/UI/Modal';
import { useState } from 'react';




export default function Gallery(){

  const [isModalOpen, setisModalOpen] = useState(false);

  const [selectedPic, setSelectedPic] = useState(Object)
    
const data = images

    const pics = data.map(image => <img src={image.url} height={100} key={image.title} onClick={()=>{setSelectedPic(image);setisModalOpen(!isModalOpen)}} className='h-90 hover:cursor-pointer hover:brightness-95' width={100} alt='pics'/>)

    return(
      <>
<Modal className={'flex justify-center flex-col'} isModalOpen={isModalOpen}  setisModalOpen={setisModalOpen} picture={selectedPic}/>
      <h1 className='text-8xl text-center'>Gallery</h1>
<main className='grid  grid-flow-col span-4'>
  <div className={ 'hover:cursor-pointer hover:brightness-95 row-span-3'}>
    <h2 className='text-2xl text-center'>photo of the day</h2>
    <img src={APOD.url} className='object-fit' onClick={()=>{setSelectedPic(APOD), setisModalOpen(! isModalOpen)}} />
    <p>{APOD.title}</p>

    <p>{APOD.explanation}</p>

  </div>

  <div className=' flex flex-wrap '>
    <p className=' '> gallery Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quibusdam, debitis iure sunt, consequuntur vitae eveniet, recusandae aliquam jlnkln</p>
    

    <div className=' justify-center flex  w-full h-10'>
      <label htmlFor="start date">start date</label>
    <input type="date" id='start date' />
    <label htmlFor="end date"></label>
    <input type="date" id='end date'/>
    <button>search images</button>
    </div>
    {pics} 

   

  </div>

</main>
      </>


    )
}




// console.log(e.target.localName)}}