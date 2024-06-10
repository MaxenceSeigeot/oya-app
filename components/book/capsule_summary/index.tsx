import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { Theme } from "@/constants/Theme";
import { useNavigation } from "expo-router";
import { Routes } from "@/constants/Routes";
import DateRange from "@/interfaces/dateRange";
import { DrawerActions } from "@react-navigation/native";

interface CapsuleSummaryProps {
    price: number,
    bookDates: DateRange,
}

export default function CapsuleSummary ({price, bookDates}:CapsuleSummaryProps) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.price}>
                    <Text style={[Theme.p1, styles.priceText]}>{price}€ </Text>
                    <Text style={Theme.p1}>par nuit</Text>
                </View>
                <Pressable onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Text>{!!bookDates ? (bookDates.startDate.getDate() - bookDates.endDate.getDate()): "AZERTY"} </Text>
                </Pressable>
            </View>
            <Pressable style={styles.bookButton} onPress={() => navigation.navigate(Routes.PAYMENT as never)}>
                <Text style={styles.bookButtonText}>Réserver</Text>
            </Pressable>
        </View>
    )
}