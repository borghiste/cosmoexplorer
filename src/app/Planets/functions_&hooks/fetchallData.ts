const API = 'https://api.le-systeme-solaire.net/rest/bodies'

export default async function fetchallData(){
try{
     const res = await  fetch(API)

    if(res.ok){

        const data = await res.json();
        
        return data.bodies
    }
}
catch(e){console.error(e)}

}