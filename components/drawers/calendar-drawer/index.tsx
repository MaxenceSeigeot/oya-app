import api from "@/functions/api";
import { useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import { disabled, selected, styles } from "./style";

interface CalendarDrawerProps {}

export default function CalendarDrawer({}:CalendarDrawerProps) {
    const [fullyBooked, setFullyBooked] = useState<string[]>([])
    const [selectedDates, setSelectedDates] = useState<Record<string, any>>({})

    const fetchData = async () => {
      try {
        const results = await api('batiments/1/fully-booked-dates');
        setFullyBooked(results)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    useEffect(() => {
      fetchData();
    },[])

    const disabledDates = fullyBooked.reduce((acc: Record<string, {}>, date) => {
        acc[date] = disabled;
        return acc;
    }, {});

      const handleDateSelection = (date: string) => {
        let newSelectedDates = {...selectedDates};
        
        newSelectedDates[date]
            ?   delete newSelectedDates[date]
            :   newSelectedDates[date] = selected;
    
        setSelectedDates(newSelectedDates);
    }
    
    
    return (
      <Calendar
        style={styles.container}
        onDayPress={(date) => handleDateSelection(date.dateString)}
        markedDates={{...disabledDates, ...selectedDates}}
      />
    );
}
