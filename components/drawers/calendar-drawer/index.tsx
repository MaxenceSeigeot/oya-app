import api from "@/functions/api";
import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-native-calendars";
import { disabled, selected, styles, today } from "./style";
import { BookContext } from "@/providers/bookProvider";
import { addYears, format, getTime, startOfDay } from "date-fns";

interface CalendarDrawerProps {}

export default function CalendarDrawer({}: CalendarDrawerProps) {
  const { selectedDate, setSelectedDate, reservationType, fullyBooked } = useContext(BookContext);

  const handleDateSelection = (date: string) => {
    if (getTime(startOfDay(new Date(date))) < getTime(startOfDay(new Date()))) return;
    setSelectedDate(selectedDate[date] ? {} : { [date]: selected });
  };

  return (
    <Calendar
      style={styles.container}
      onDayPress={(date) => handleDateSelection(date.dateString)}
      markedDates={{
        ...(reservationType === true ? fullyBooked.double : fullyBooked.single),
        ...selectedDate,
      }}
      minDate={format(new Date(), "yyyy-MM-dd")}
      maxDate={format(addYears(new Date(), 1), "yyyy-MM-dd")}
      theme={today}
    />
  );
}
