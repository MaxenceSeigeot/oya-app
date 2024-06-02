import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';
import Region from '@/interfaces/region';

interface HomeMapProps {
  currentLocation: Region | undefined;
  setCurrentLocation: any,
  userLocation: Region;
  markers: any[],
  isDragging: boolean,
  setSelectedMarker: (marker: Region | undefined) => void,
}

export default function HomeMap({ currentLocation, userLocation, markers, isDragging, setSelectedMarker }: HomeMapProps) {
  return (
    <MapView
      style={styles.map}
      showsPointsOfInterest={false}
      showsBuildings={false}
      showsMyLocationButton={true}
      showsIndoors={false}
      showsIndoorLevelPicker={false}
      showsCompass={false}
      initialRegion={userLocation}
      region={currentLocation}
      scrollEnabled={!isDragging}
      zoomEnabled={!isDragging}
      pitchEnabled={!isDragging}
      rotateEnabled={!isDragging}
      onPress={() => setSelectedMarker(undefined)}
    >
      {markers.map(marker => (
        <Marker
          key={marker.id_ville}
          coordinate={{ longitude: marker.longitude, latitude: marker.latitude }}
          title={marker.title}
          image={marker.image}
          onPress={()=> setSelectedMarker(marker)}
        />
      ))}
    </MapView>
  );
}
