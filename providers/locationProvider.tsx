import React, { ReactNode, createContext, useEffect, useState } from "react";
import * as ExpoLocation from "expo-location";
import { Images } from "@/constants/Images";
import Location from "@/interfaces/location";
import api from "@/functions/api";

interface LocationContextValue {
  locations: Location[];
  mapLocation: { longitude: number; latitude: number };
  userLocation: Location;
  setMapLocation: React.Dispatch<React.SetStateAction<{ longitude: number; latitude: number }>>;
  handleCenterMap: () => void;
  selectedLocation: Location | undefined;
  setSelectedLocation: React.Dispatch<React.SetStateAction<Location | undefined>>;
}

export const LocationContext = createContext<LocationContextValue>({} as LocationContextValue);

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>(undefined);
  const [userLocation, setUserLocation] = useState<Location | undefined>(undefined);
  const [mapLocation, setMapLocation] = useState({
    longitude: 47.471102348159214,
    latitude: -0.6015571372641145,
  });

  const getUserMarker = (location: ExpoLocation.LocationObject): Location => {
    return {
      id: 0,
      name: "You",
      address: "",
      city: 0,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      images: Images.userMapPosition,
    };
  };
  const getUserLocation = async () => {
    try {
      const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Permission to access location was denied");
      }
      const location = await ExpoLocation.getCurrentPositionAsync({});
      setUserLocation(getUserMarker(location));
      setMapLocation(location.coords);
    } catch (error) {
      console.error("Error getting user location:", error);
    }
  };

  useEffect(() => {
    fetchData();
    getUserLocation();
  }, []);

  const [locations, setLocations] = useState<Location[]>([]);

  const fetchData = async () => {
    try {
      const results = await api({ route: "buildings" });

      setLocations(
        results.map((result: Location) => ({
          id: result.id,
          name: result.name,
          longitude: result.longitude,
          latitude: result.latitude,
        }))
      );
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleCenterMap = () => {
    if (!userLocation) return;
    getUserLocation();
  };

  if (!userLocation) return;

  return (
    <LocationContext.Provider
      value={{
        mapLocation,
        setMapLocation,
        userLocation,
        locations: locations,
        handleCenterMap,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
