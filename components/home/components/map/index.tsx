import React, { useContext } from "react";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./styles";
import { MapUtils } from "@/constants/MapUtils";
import Location from "@/interfaces/location";
import { LocationContext } from "@/providers/locationProvider";

interface HomeMapProps {
  isDragging: boolean;
  locations: (Location | undefined)[];
}

export default function HomeMap({ isDragging, locations }: HomeMapProps) {
  const { userLocation, setSelectedLocation } = useContext(LocationContext);

  return (
    <MapView
      style={styles.map}
      showsPointsOfInterest={false}
      showsBuildings={false}
      showsMyLocationButton={true}
      showsIndoors={false}
      showsIndoorLevelPicker={false}
      showsCompass={false}
      initialRegion={{
        ...userLocation,
        latitudeDelta: MapUtils.localLtDelta,
        longitudeDelta: MapUtils.localLgDelta,
      }}
      region={{
        ...userLocation,
        latitudeDelta: MapUtils.localLtDelta,
        longitudeDelta: MapUtils.localLgDelta,
      }}
      scrollEnabled={!isDragging}
      zoomEnabled={!isDragging}
      pitchEnabled={!isDragging}
      rotateEnabled={!isDragging}
      /*       onPress={() => setSelectedLocation(undefined)} */
    >
      {locations.map(
        (location) =>
          location && (
            <Marker
              key={location.id}
              coordinate={{ longitude: location.longitude, latitude: location.latitude }}
              title={location.name}
              image={location.images}
              onPress={() => setSelectedLocation(location)}
            />
          )
      )}
      <Marker
        key={userLocation.id}
        coordinate={{ longitude: userLocation.longitude, latitude: userLocation.latitude }}
        title={userLocation.name}
        image={userLocation.images}
      />
    </MapView>
  );
}
