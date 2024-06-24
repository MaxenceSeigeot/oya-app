import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";
import { Images } from "@/constants/Images";
import { useNavigation } from "expo-router";
import { LocationDescription } from "@/components/location-description";
import React, { useContext, useEffect } from "react";
import Location from "@/interfaces/location";
import CapsuleType from "@/components/book/capsule-type";
import CapsuleEquipment from "@/components/book/equipment";
import CapsuleSummary from "@/components/book/capsule_summary";
import { DrawerContext } from "@/providers/drawerProvider";
import { calendarDrawerConfig } from "@/components/drawers/calendar-drawer/config";
import { BookContext } from "@/providers/bookProvider";

interface BookPageProps {
  route: any;
}

export default function BookPage({ route }: BookPageProps) {
  const navigation = useNavigation();
  const { location } = route.params;
  const { reservationType, setReservationType } = useContext(BookContext);
  const reservationLocation: Location = location;
  const { setDrawer } = useContext(DrawerContext);
  const handleSetSelectedType = (value: boolean) =>
    setReservationType(reservationType === value ? reservationType : !reservationType);

  useEffect(() => {
    setDrawer(calendarDrawerConfig);
  }, [route]);

  if (location) {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={Images.location_big} style={styles.locationImage} />
          <View style={styles.container}>
            <LocationDescription location={reservationLocation} />
            <CapsuleType
              reservationType={reservationType}
              handleSetSelectedType={handleSetSelectedType}
            />
            <CapsuleEquipment />
          </View>
        </ScrollView>
        <CapsuleSummary price={reservationType ? 12 : 10} />
      </View>
    );
  } else {
    navigation.navigate("/404" as never);
  }
}
