import { View, Pressable, Animated, Image } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { styles } from "@/components/home/styles";
import { Images } from "@/constants/Images";
import { useAnimation } from "@/components/home/hooks";
import { DrawerContext } from "@/providers/drawerProvider";
import { LocationContext } from "@/providers/locationProvider";
import { customDrawerConfig } from "@/components/drawers/custom-drawer/config";
import React, { useContext, useEffect, useState } from "react";
import HomeMap from "@/components/home/components/map";
import Panel from "@/components/home/components/panel";
import Location from "@/interfaces/location";

export default function Home() {
  const navigation = useNavigation();
  const { setDrawer } = useContext(DrawerContext);
  const { locations, userLocation, handleCenterMap } = useContext(LocationContext);
  const { panResponder, isDragging, navbarStyle } = useAnimation();

  useEffect(() => {
    setDrawer(customDrawerConfig);
  }, []);

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

        <Panel panResponder={panResponder} />
      </Animated.View>

      {userLocation && <HomeMap locations={locations} isDragging={isDragging} />}
    </View>
  );
}
