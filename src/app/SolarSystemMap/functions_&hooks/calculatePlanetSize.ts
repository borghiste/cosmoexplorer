import { useMemo } from "react";

export default function calculatePlanetSize(data: { volValue: number; massValue: number }) {
  const scale = useMemo(() => {
    if (!data?.volValue || !data?.massValue) return [[1, 1, 1]]; // Fallback di sicurezza

    const r = Math.cbrt((3 * data.volValue) / (4 * Math.PI)) / 10; // Volume di una sfera corretto

    return [[r * 2, r * 2, r * 2]]; // Restituisce un array 3D corretto
  }, [data.volValue, data.massValue]);

  return scale;
}
