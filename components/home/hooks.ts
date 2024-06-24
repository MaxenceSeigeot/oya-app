import { useEffect, useRef, useState } from "react";
import { Animated, PanResponder, PanResponderGestureState } from "react-native";
import { styles as NavbarStyles } from '@/components/home/components/panel/styles';

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