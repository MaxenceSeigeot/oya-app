import { View, Pressable, Animated, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { styles } from '@/components/home/styles';
import { Images } from '@/constants/Images';
import { useAnimation, useLocation } from '@/components/home/hooks';
import React from 'react';
import HomeMap from '@/components/home/components/map';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  const navigation = useNavigation();
  const { panResponder, isDragging, navbarStyle} = useAnimation();
  const { currentLocation, setCurrentLocation, userLocation, handleCenterMap, markers } = useLocation()

  return (
    <View style={styles.main}>
      <Pressable
        onPressOut={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.profileButton}
      >
        <Image style={styles.profile} source={Images.profile} />
      </Pressable>

      <Animated.View style={navbarStyle}>
        <Pressable style={styles.locationButton} onPress={handleCenterMap}>
          <Image style={styles.profile} source={Images.centerMapButton} />
        </Pressable>
        <Navbar panResponder={panResponder}/>
      </Animated.View>

      {userLocation && (
        <HomeMap
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
          userLocation={userLocation}
          markers={markers}
          isDragging={isDragging}
        />
      )}
    </View>
  );
}
