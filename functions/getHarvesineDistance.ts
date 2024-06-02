interface coords {
  longitude:number,
  latitude:number,
}

export default function getHaversineDistance (coords1: coords, coords2: coords) {
    const toRadians = (degrees:number) => degrees * (Math.PI / 180);
    const R = 6371;
  
    const dLat = toRadians(coords2.latitude - coords1.latitude);
    const dLon = toRadians(coords2.longitude - coords1.longitude);
  
    const lat1 = toRadians(coords1.latitude);
    const lat2 = toRadians(coords2.latitude);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c;
  };
  