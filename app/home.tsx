import { View, Pressable, Animated, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { styles } from '@/components/home/styles';
import { Images } from '@/constants/Images';
import { useAnimation, useLocation } from '@/components/home/hooks';
import React, { useState } from 'react';
import HomeMap from '@/components/home/components/map';
import Region from '@/interfaces/region';
import Panel from '@/components/home/components/panel';

export default function Home() {
  const navigation = useNavigation();
  const { panResponder, isDragging, navbarStyle} = useAnimation();
  const { currentLocation, setCurrentLocation, userLocation, handleCenterMap, markers } = useLocation()
  const [selectedMarker, setSelectedMarker] = useState<Region | undefined>(undefined)

  return (
    <View style={styles.main}>
      <Pressable
        onPressOut={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.profileButton}
      >
        <Image style={styles.profile} source={Images.profile} />
      </Pressable>

      <Animated.View style={navbarStyle}>
        <Pressable style={styles.locationButton} onPressOut={handleCenterMap}>
          <Image style={styles.profile} source={Images.centerMapButton} />
        </Pressable>
        
        <Panel panResponder={panResponder} selectedMarker={selectedMarker} userLocation={userLocation}/>

      </Animated.View>

      {userLocation && (
        <HomeMap
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
          userLocation={userLocation}
          markers={markers}
          isDragging={isDragging}
          setSelectedMarker={setSelectedMarker}
        />
      )}
    </View>
  );
}
