import Location from "@/interfaces/location";

interface coords {
  longitude:number,
  latitude:number,
}

export default function getHaversineDistance (location1: Location, location2: Location) {
    const toRadians = (degrees:number) => degrees * (Math.PI / 180);
    const R = 6371;
  
    const dLat = toRadians(location2.latitude - location1.latitude);
    const dLon = toRadians(location2.longitude - location1.longitude);
  
    const lat1 = toRadians(location1.latitude);
    const lat2 = toRadians(location2.latitude);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c

    return distance > 1 ? `${distance.toFixed(1)} km` : `${(distance*1000).toFixed(0)} m`
  };
  