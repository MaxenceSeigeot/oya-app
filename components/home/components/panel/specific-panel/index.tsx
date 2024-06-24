import { View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/constants/Routes";
import { Images } from "@/constants/Images";
import { styles } from "./styles";
import { LocationDescription } from "@/components/location-description";
import { BookContext } from "@/providers/bookProvider";
import React, { useContext } from "react";
import Location from "@/interfaces/location";

interface SpecificPanelProps {
  selectedLocation: Location;
}

export default function SpecificPanel({ selectedLocation }: SpecificPanelProps) {
  const navigation = useNavigation();
  const { fetchAvailability } = useContext(BookContext);

  return (
    <View style={styles.specificPanel}>
      <View style={styles.container} pointerEvents="box-none">
        <Image style={styles.buildingImage} source={Images.building} />
        <LocationDescription location={selectedLocation} />
      </View>
      <Pressable
        onPressOut={() => {
          navigation.navigate(Routes.BOOK, { location: selectedLocation });
          fetchAvailability();
        }}
      >
        <Text style={styles.bookBtnText}>Réserver</Text>
      </Pressable>
    </View>
  );
}
