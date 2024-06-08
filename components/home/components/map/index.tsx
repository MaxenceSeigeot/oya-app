import React, { useContext } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';
import { MapUtils } from '@/constants/MapUtils';
import Location from '@/interfaces/location';
import { LocationContext } from '@/providers/locationProvider';

interface HomeMapProps {
  isDragging: boolean,
  locations: (Location | undefined)[],
  setSelectedLocation: React.Dispatch<React.SetStateAction<Location | undefined>>,
}

export default function HomeMap({ isDragging, locations, setSelectedLocation }: HomeMapProps) {
  const { userLocation } = useContext(LocationContext)
  
  return (
    <MapView
      style={styles.map}
      showsPointsOfInterest={false}
      showsBuildings={false}
      showsMyLocationButton={true}
      showsIndoors={false}
      showsIndoorLevelPicker={false}
      showsCompass={false}
      initialRegion={{...userLocation, latitudeDelta:MapUtils.localLtDelta, longitudeDelta: MapUtils.localLgDelta}}
      region={{...userLocation, latitudeDelta:MapUtils.localLtDelta, longitudeDelta: MapUtils.localLgDelta}}
      scrollEnabled={!isDragging}
      zoomEnabled={!isDragging}
      pitchEnabled={!isDragging}
      rotateEnabled={!isDragging}
/*       onPress={() => setSelectedLocation(undefined)} */
    >
      {locations.map(location => (
        location && <Marker
          key={location.id_batiment}
          coordinate={{ longitude: location.longitude, latitude: location.latitude }}
          title={location.nom}
          image={location.images}
          onPress={() => setSelectedLocation(location)}
        />
      ))}
    </MapView>
  );
}
