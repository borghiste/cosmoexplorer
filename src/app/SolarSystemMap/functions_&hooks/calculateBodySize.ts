export default function calculateBodySize(body) {






  const planetRadius = Math.cbrt((3 * body?.vol.volValue) / (4 * Math.PI)); // Ricaviamo il raggio dalla formula del volume

  let scaleFactor = 0.05;

  if (body?.englishName.toLowerCase() === "sun") {
    let sunRadius = Math.cbrt((3 * body?.vol.volValue) / (4 * Math.PI)) 
    
    return [(planetRadius  / sunRadius), (planetRadius  / sunRadius), (planetRadius  / sunRadius)];
  } else {
    scaleFactor = 0.2; // Fattore di scala per i pianeti
    return [planetRadius , 32, 32];
  }
}
