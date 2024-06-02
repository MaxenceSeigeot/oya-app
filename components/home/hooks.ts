import { useEffect, useRef, useState } from "react";
import * as Location from 'expo-location';
import { Animated, PanResponder, PanResponderGestureState } from "react-native";
import { styles as NavbarStyles } from '@/components/home/components/panel/styles';
import Region from "@/interfaces/region";
import { Images } from "@/constants/Images";

export function useLocation() {
  const [userLocation, setUserLocation] = useState<Region | undefined>(undefined);
  const [currentLocation, setCurrentLocation] = useState<Region | undefined>(undefined);
  const getUserMarker = (location: Location.LocationObject):Region => ({
    id:0,
    title:"You",
    longitude: location.coords.longitude,
    longitudeDelta: 0.005,
    latitude: location.coords.latitude,
    latitudeDelta: 0.008,
    image:Images.userMapPosition,
  })

  const handleCenterMap = () => {
    if (!userLocation) return;
    setCurrentLocation(userLocation);
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
        setUserLocation(getUserMarker(location));
      } catch (error) {
        console.error('Error getting user location:', error);
      }
    })();
  }, []);

  const [markers, setMarkers] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.1.13:3000/batiments');
      const results = await response.json();
      setMarkers(
        results.map((result:any) => ({
          id: result.id_batiment,
          title: result.nom,
          longitude: result.longitude,
          longitudeDelta: 0.005,
          latitude: result.latitude,
          latitudeDelta: 0.008,
        }))
      )
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  },[])

  return {
    currentLocation,
    setCurrentLocation,
    userLocation,
    setUserLocation,
    handleCenterMap,
    markers:[userLocation, ...markers]
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