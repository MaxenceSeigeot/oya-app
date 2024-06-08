import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Theme } from "@/constants/Theme";
import { useNavigation } from "expo-router";
import { Routes } from "@/constants/Routes";
import DateRange from "@/interfaces/dateRange";

interface CapsuleSummaryProps {
    price: number,
    bookDates: DateRange,
}

export default function CapsuleSummary ({price, bookDates}:CapsuleSummaryProps) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.price}>
                <Text style={Theme.p1}>{price}€ </Text>
                <Text style={Theme.p1}>par nuit</Text>
            </View>
            <Pressable>
                <Text>{bookDates.startDate.getDate()} - {bookDates.endDate.getDate()}</Text>
            </Pressable>
            <Pressable style={styles.bookButton} onPress={() => navigation.navigate(Routes.HOME as never)}>
                <Text>Réserver</Text>
            </Pressable>
        </View>
    )
}