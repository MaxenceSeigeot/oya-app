import React, { ReactNode, createContext, useEffect, useState } from 'react';
import * as ExpoLocation from 'expo-location';
import { Images } from '@/constants/Images';
import Location from '@/interfaces/location';
import api from '@/functions/api';

interface LocationContextValue {
    locations: Location[];
    mapLocation: { longitude: number, latitude: number };
    userLocation: Location;
    setMapLocation: (React.Dispatch<React.SetStateAction<{ longitude: number, latitude: number }>>);
    handleCenterMap: () => void;
  }

export const LocationContext = createContext<LocationContextValue>({} as LocationContextValue);

interface LocationProviderProps {
    children: ReactNode;
  }

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
    const [userLocation, setUserLocation] = useState<Location | undefined>(undefined)
    const [mapLocation, setMapLocation] = useState({longitude:47.471102348159214, latitude:-0.6015571372641145})

    const getUserMarker = (location: ExpoLocation.LocationObject):Location => {
      return {
        id_batiment:0,
        nom:"You",
        adresse:"",
        id_ville:0,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        images:Images.userMapPosition,
      }
    }
  
    useEffect(() => {
      (async () => {
        try {
          const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            throw new Error('Permission to access location was denied');
          }
          const location = await ExpoLocation.getCurrentPositionAsync({});
          setUserLocation(getUserMarker(location));
        } catch (error) {
          console.error('Error getting user location:', error);
        }
      })();
    }, []);

    const [locations, setLocations] = useState<Location[]>([])

    const fetchData = async () => {
      try { 
        const results = await api('batiments');
        setLocations(
          results.map((result:any) => ({
            id_batiment: result.id_batiment,
            nom: result.nom,
            longitude: result.longitude,
            latitude: result.latitude,
          }))
        )
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    useEffect(() => {
      fetchData();
    },[])

    const handleCenterMap = () => {
      if (!userLocation) return;
      console.log("center")
      setUserLocation(userLocation);
    };
 
  if(!userLocation) return
  console.log(locations)
  return (
    <LocationContext.Provider value={{ mapLocation, setMapLocation, userLocation, locations:[userLocation, ...locations], handleCenterMap }}>
        { children }
    </LocationContext.Provider>
  );
};
