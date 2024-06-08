import { ScrollView, View } from 'react-native';
import { styles } from './styles'
import { Image } from 'react-native';
import { Images } from '@/constants/Images';
import { useNavigation } from 'expo-router';
import { LocationDescription } from '@/components/location-description';
import React, { useState } from 'react';
import Location from '@/interfaces/location';
import CapsuleType from '@/components/book/capsule-type';
import CapsuleEquipment from '@/components/book/equipment';
import CapsuleSummary from '@/components/capsule_summary';
import DateRange from '@/interfaces/dateRange';

interface BookPageProps {
  route: any
}

export default function BookPage({route}:BookPageProps) {
  const navigation = useNavigation()
  const { location } = route.params;
  const selectedLocation: Location = location
  const [price, setPrice] = useState(0)
  const [bookDates, setBookDates] = useState<DateRange>()
  
  if(location) {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={Images.location_big} style={styles.locationImage}/>
          <View style={styles.container}>
            <LocationDescription location={selectedLocation} />
            <CapsuleType/>
            <CapsuleEquipment/>
          </View>
        </ScrollView>
{/*         <CapsuleSummary price={price} bookDates={bookDates}/> */}
      </View>
    );
  } else {
    navigation.navigate("/404" as never)
  }
}
