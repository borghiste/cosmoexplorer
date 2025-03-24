

 export type Body  = {
            
            englishName: string,
            vol:{volValue:number },
            mass:{massValue: number},
            sideralOrbit: number,
            eccentricity: number,
            perihelion: number,
            aphelion:number,
            axialTilt: number,
            isPlanet: boolean,
            meanRadius: number
            
            
  }
  export type Sundata = {
    englishName: string
    vol:{volValue: number}
  }



export default function calculateBodySize(body: Body | Sundata ):[number, number, number] {


  const planetRadius = Math.cbrt((3 * body.vol.volValue ) / (4 * Math.PI)); // raggio dalla formula del volume

  let scaleFactor = 0.05;

  if (body?.englishName.toLowerCase() === "sun") {
    let sunRadius = Math.cbrt((3 * body?.vol.volValue) / (4 * Math.PI)) 
    
    return [(planetRadius  / sunRadius), (planetRadius  / sunRadius), (planetRadius  / sunRadius)];
  } else {
    scaleFactor = 0.2; // Fattore di scala per i pianeti
    return [planetRadius , 32, 32];
  }
}
