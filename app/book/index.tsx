import { ScrollView, View } from 'react-native';
import { styles } from './styles'
import { Image } from 'react-native';
import { Images } from '@/constants/Images';
import { useNavigation } from 'expo-router';
import { LocationDescription } from '@/components/location-description';
import React, { useContext, useEffect, useState } from 'react';
import Location from '@/interfaces/location';
import CapsuleType from '@/components/book/capsule-type';
import CapsuleEquipment from '@/components/book/equipment';
import CapsuleSummary from '@/components/book/capsule_summary';
import DateRange from '@/interfaces/dateRange';
import { DrawerContext } from '@/providers/drawerProvider';
import { calendarDrawerConfig } from '@/components/drawers/calendar-drawer/config';

interface BookPageProps {
  route: any
}

export default function BookPage({route}:BookPageProps) {
  const navigation = useNavigation()
  const { location } = route.params;
  const selectedLocation: Location = location

  const [bookDates, setBookDates] = useState<DateRange>()
  const {setDrawer} = useContext(DrawerContext)
  const [selectedType, setSelectedType] = useState<boolean>(true)
  const handleSetSelectedType = (value: boolean) => setSelectedType(
    selectedType === value
        ? selectedType
        : !selectedType
    )

  useEffect(() => {
    setDrawer(calendarDrawerConfig)
  },[route])
  
  if(location) {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={Images.location_big} style={styles.locationImage}/>
          <View style={styles.container}>
            <LocationDescription location={selectedLocation} />
            <CapsuleType selectedType={selectedType} handleSetSelectedType={handleSetSelectedType}/>
            <CapsuleEquipment/>
          </View>
        </ScrollView>
        <CapsuleSummary price={selectedType ? 12 : 10} bookDates={bookDates}/>
      </View>
    );
  } else {
    navigation.navigate("/404" as never)
  }
}
