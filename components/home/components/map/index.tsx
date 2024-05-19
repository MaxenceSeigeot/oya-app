import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';
import Region from '@/interfaces/regions';

interface HomeMapProps {
  currentLocation: Region | undefined;
  setCurrentLocation: any,
  userLocation: Region;
  markers: any[],
  isDragging: boolean,
}

export default function HomeMap({ currentLocation, setCurrentLocation, userLocation, markers, isDragging }: HomeMapProps) {
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
    >
      {markers.map(marker => (
        <Marker
          key={marker.id}
          coordinate={{ longitude: marker.longitude, latitude: marker.latitude }}
          title={marker.title}
          image={marker.image}
        />
      ))}
    </MapView>
  );
}
