import { disabled } from "@/components/drawers/calendar-drawer/style";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import api from "@/functions/api";
import { MarkingProps } from "react-native-calendars/src/calendar/day/marking";

interface BookContextValue {
  selectedDate: Record<string, any>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  reservationType: boolean;
  setReservationType: React.Dispatch<React.SetStateAction<boolean>>;
  resetProvider: () => void;
  fullyBooked: { single: Record<string, MarkingProps>; double: Record<string, MarkingProps> };
  fetchAvailability: () => void;
}

export const BookContext = createContext<BookContextValue>({} as BookContextValue);

interface BookProviderProps {
  children: ReactNode;
}

export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<Record<string, any>>({});
  const [reservationType, setReservationType] = useState<boolean>(false);
  const [fullyBooked, setFullyBooked] = useState<{
    single: Record<string, MarkingProps>;
    double: Record<string, MarkingProps>;
  }>({
    single: {},
    double: {},
  });

  const fetchAvailability = async () => {
    try {
      const results = await api({ route: "capsules/1/unavailable-dates" });
      setFullyBooked({
        single: results?.single?.reduce((acc: Record<string, {}>, date: string) => {
          acc[date] = disabled;
          return acc;
        }, {}),
        double: results?.double?.reduce((acc: Record<string, {}>, date: string) => {
          acc[date] = disabled;
          return acc;
        }, {}),
      });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const resetProvider = () => {
    setSelectedDate({});
    setReservationType(false);
  };

  return (
    <BookContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        reservationType,
        setReservationType,
        resetProvider,
        fullyBooked,
        fetchAvailability,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
