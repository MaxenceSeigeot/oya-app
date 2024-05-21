import React from 'react';
import { View, Pressable, Text, Image, PanResponderInstance } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@/constants/Routes';
import { Images } from '@/constants/Images';
import { styles } from './styles';
import Region from '@/interfaces/region';
import getHaversineDistance from '@/functions/getHarvesineDistance';

interface SpecificPanelProps {
  selectedMarker: Region,
  userLocation: Region,
}

export default function SpecificPanel ({selectedMarker, userLocation}: SpecificPanelProps) {
  const distance = getHaversineDistance({longitude:userLocation.longitude, latitude: userLocation.latitude}, {longitude:selectedMarker.longitude, latitude: selectedMarker.latitude})
  const nbDoubleCapsule = 5
  const nbSingleCapsule = 3

  return (
    <>
    <View style={styles.container} pointerEvents="box-none">
        <Image style={styles.buildingImage} source={Images.building}/>
        <View style={styles.buildingDetails}>
          <Text style={styles.tag}>Disponible</Text>
          <Text style={styles.buildingName}>{selectedMarker.title}</Text>
          <View style={styles.buildingLocation}>
            <Image source={Images.location} />
            <Text>{distance > 1 ? `${Math.floor(distance)} km` : `${distance/1000} m`}</Text>
          </View>
          <View style={styles.disponibility}>
            <Text style={styles.disponibilityText}>{`${nbDoubleCapsule} capsules 2 places`}</Text>
            <Text style={styles.disponibilityText}>{`${nbSingleCapsule} capsules 1 place`}</Text>
          </View>
          
        </View>
    </View>
    <Pressable onPress={()=>console.log("zefiojzef")}><Text style={styles.bookBtnText}>Réserver</Text></Pressable>
    </>
  );
};
