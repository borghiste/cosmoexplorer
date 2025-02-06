
export default async function fetchImagesbyDate({ start_date, end_date }){
    
     const API = `https://api.nasa.gov/planetary/apod?start_date=${start_date}&end_date=${end_date}&api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`
    // const API = 'https://api.nasa.gov/planetary/apod?start_date=2024-12-12&end_date=2025-01-01&api_key=qxg46ygrweKNBRojOf6pSee2ynAUKDdVNJFMRPxn'
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
