import React, { ReactNode, createContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';

interface LocationContextValue {
    mapLocation: { longitude: number, latitude: number };
    setMapLocation: (React.Dispatch<React.SetStateAction<{ longitude: number, latitude: number }>>);
    userLocation: { longitude: number, latitude: number };
    setUserLocation: (React.Dispatch<React.SetStateAction<{ longitude: number, latitude: number }>>);
  }

export const LocationContext = createContext<LocationContextValue>({} as LocationContextValue);

interface LocationProviderProps {
    children: ReactNode;
  }

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
    const [userLocation, setUserLocation] = useState({ longitude: 0, latitude: 0 })
    const [mapLocation, setMapLocation] = useState({longitude:47.471102348159214, latitude:-0.6015571372641145})
  
    useEffect(() => {
       (async () => {
         try {
           let { status } = await Location.requestForegroundPermissionsAsync();
           if (status !== 'granted') {
             throw new Error('Permission to access location was denied');
           }
           
           let location = await Location.getCurrentPositionAsync({});
           setUserLocation(location.coords);
         } catch (error) {
           console.log('Error getting user location:', error);
         }
       })();
     }, []);

  return (
    <LocationContext.Provider value={{ mapLocation, setMapLocation, userLocation, setUserLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
