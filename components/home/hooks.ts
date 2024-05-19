import { useEffect, useRef, useState } from "react";
import * as Location from 'expo-location';
import { Animated, PanResponder, PanResponderGestureState } from "react-native";
import { styles as NavbarStyles } from '@/components/navbar/styles';
import Region from "@/interfaces/regions";
import { Images } from "@/constants/Images";

export function useLocation() {
  const [userLocation, setUserLocation] = useState<Region | undefined>(undefined);
  const [currentLocation, setCurrentLocation] = useState<Region | undefined>(undefined);

  const handleCenterMap = () => {
    if (!userLocation) return;
    setCurrentLocation(userLocation);
    console.log(userLocation)
  };

  useEffect(() => {
    currentLocation && setCurrentLocation(undefined);
  }, [currentLocation]);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          throw new Error('Permission to access location was denied');
        }
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          longitude: location.coords.longitude,
          longitudeDelta: 0.005,
          latitude: location.coords.latitude,
          latitudeDelta: 0.008,
        });
      } catch (error) {
        console.error('Error getting user location:', error);
      }
    })();
  }, []);

  const markers = [
    { id: 1, longitude: 12, latitude: 20 },
    { id: 2, longitude: 42, latitude: 30 },
    { id: 3, longitude: 12, latitude: 58 },
    { id: 4, longitude: 2, latitude: 25 },
    { id: 5, longitude: 21, latitude: 52 },
    { id: 6, longitude: 22, latitude: 50 },
  ];

  return {
    currentLocation, setCurrentLocation, userLocation, setUserLocation, handleCenterMap, markers:[...markers, {
      id: 0,
      longitude: userLocation?.longitude || 0,
      latitude: userLocation?.latitude || 0,
      title: "Your Location",
      image: Images.userMapPosition
    }]
  }
}

export function useAnimation(){
  const [isDragging, setIsDragging] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const expandedRef = useRef(expanded);

  useEffect(() => {
    expandedRef.current = expanded;
  }, [expanded]);

  const handlePanResponderMove = (_: unknown, gesture: PanResponderGestureState) => {
    if (expandedRef.current && gesture.dy > 100) {
      pan.setValue({ x: 0, y: 0 });
    } else if (expandedRef.current && gesture.dy < 0) {
      pan.setValue({ x: 0, y: -100 });
    } else if (!expandedRef.current && gesture.dy < -100) {
      pan.setValue({ x: 0, y: -100 });
    } else if (!expandedRef.current && gesture.dy > 0) {
      pan.setValue({ x: 0, y: 0 });
    } else {
      pan.setValue({ x: 0, y: expandedRef.current ? gesture.dy - 100 : gesture.dy });
    }
  };

  const handlePanResponderRelease = (_: unknown, gestureState: PanResponderGestureState) => {
    setIsDragging(false); // End dragging
    if ((expandedRef.current && gestureState.dy < 50) || (!expandedRef.current && gestureState.dy < -50)) {
      setExpanded(true);
      Animated.spring(pan, {
        toValue: { x: 0, y: -100 },
        useNativeDriver: false,
      }).start();
    } else if ((expandedRef.current && gestureState.dy > 50) || (!expandedRef.current && gestureState.dy > -50)) {
      setExpanded(false);
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => {
        setIsDragging(true); // Start dragging
        return (
          e.nativeEvent.locationY <= NavbarStyles.expandBar.height ||
          e.nativeEvent.locationY <= NavbarStyles.expandBarContainer.height
        );
      },
      onPanResponderMove: (e, gestureState) => {
        handlePanResponderMove(e, gestureState);
      },
      onPanResponderRelease: (e, gestureState) => {
        handlePanResponderRelease(e, gestureState);
      },
    })
  ).current;

  const [pan] = useState(new Animated.ValueXY());

  const navbarStyle = {
    transform: pan.getTranslateTransform(),
    zIndex: 2
  };

  return {
    panResponder,
    isDragging,
    navbarStyle
  }
}