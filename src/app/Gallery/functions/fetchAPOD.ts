 const API = `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`;


  export default async function fetchAPOD() {

    try{
     const res = await fetch(`${API}`)
     const data = await res.json()
    
    
     return data
    }
    catch(e){
      console.error(e)
    }
   }


