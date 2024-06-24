import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Theme } from "@/constants/Theme";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { useContext } from "react";
import { BookContext } from "@/providers/bookProvider";
import api, { APIMethods } from "@/functions/api";
import { Routes } from "@/constants/Routes";
import { LocationContext } from "@/providers/locationProvider";

interface CapsuleSummaryProps {
  price: number;
}

export default function CapsuleSummary({ price }: CapsuleSummaryProps) {
  const navigation = useNavigation();
  const { selectedDate, reservationType, resetProvider } = useContext(BookContext);
  const { selectedLocation } = useContext(LocationContext);

  interface DateObject {
    [date: string]: string;
  }

  function formatDateRange(dates: DateObject): string {
    const getMonthName = (index: number): string => {
      const monthNames: string[] = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ];
      return monthNames[index - 1];
    };

    const extractDay = (date: string): string => date.split("-")[2];
    const extractMonth = (date: string): string => date.split("-")[1];
    const isNextDay = (date: string, prevDate: string): boolean =>
      new Date(date).getTime() - new Date(prevDate).getTime() === 86400000; // 86400000 milliseconds = 1 day

    const formattedRanges: string[] = Object.entries(dates)
      .sort()
      .reduce((acc: string[], [date], index, array) => {
        const day = extractDay(date);
        const month = extractMonth(date);
        const monthName = getMonthName(Number(month));

        if (index === 0 || !isNextDay(date, array[index - 1][0])) {
          acc.push(`${day}`);
        } else {
          const lastIndex = acc.length - 1;
          acc[lastIndex] = `${acc[lastIndex]}-${day}`;
        }

        if (index === array.length - 1 || !isNextDay(array[index + 1][0], date)) {
          acc[acc.length - 1] = `${acc[acc.length - 1]} ${monthName}`;
        }

        return acc;
      }, []);

    return formattedRanges.join(" | ");
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.price}>
          <Text style={[Theme.p1, styles.priceText]}>{price}€ </Text>
          <Text style={Theme.p1}>par nuit</Text>
        </View>
        <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Text style={styles.dateBtnTxt}>
            {Object.keys(selectedDate)[0] ?? "Sélectionnez une date"}
          </Text>
        </Pressable>
      </View>
      <Pressable
        style={styles.bookButton}
        onPress={async () => {
          if (selectedDate) {
            console.log({
              method: APIMethods.POST,
              route: "reservations",
              body: {
                startDate: Object.keys(selectedDate)[0],
                id_capsuleType: reservationType ? 2 : 1,
                id_building: selectedLocation?.id,
              },
            });
            api({
              method: APIMethods.POST,
              route: "reservations",
              body: {
                startDate: Object.keys(selectedDate)[0],
                id_capsuleType: reservationType ? 2 : 1,
                id_building: selectedLocation?.id,
              },
            })
              .then((response) => {
                console.log("Reservation created:", response);
                resetProvider();
                navigation.navigate(Routes.HOME as never);
              })
              .catch((error) => {
                console.error("Error creating reservation:", error);
              });
          }
        }}
      >
        <Text style={styles.bookButtonText}>Réserver</Text>
      </Pressable>
    </View>
  );
}
