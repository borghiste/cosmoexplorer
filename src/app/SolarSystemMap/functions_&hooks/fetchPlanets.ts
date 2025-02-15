
export default async function fetchPlanets(planet:string){
    
    const API = `https://api.le-systeme-solaire.net/rest/bodies/${planet}`;


    try {
        res = fetch(API);


if(res.ok){
    const data = await res.json()
    return data
    
}


    }
catch(error){
    console.error(error);
}
  
    
}