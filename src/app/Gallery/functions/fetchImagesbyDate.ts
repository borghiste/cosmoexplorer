import { LegacyRef, MutableRefObject } from "react";

type fetchByDate = {
    start_date: string,
    end_date: string
}

export default async function fetchImagesbyDate({ start_date, end_date }:fetchByDate){
    
     const API = `https://api.nasa.gov/planetary/apod?start_date=${start_date}&end_date=${end_date}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`

    try{

    const res = await fetch(`${API}`);
   

    if(res.ok){
    
    const data = await res.json()
    
    

    return data;
    }
    
    }

    catch(error){
        console.log(error)
    }
    }
