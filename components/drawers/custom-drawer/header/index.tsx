import { FontAwesome } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { Images } from "@/constants/Images";

export default function MenuHeader () {
    const navigation = useNavigation()
    const nbReservation = 3
    const nbDaysSpent = 2
    const nbHoursSpent = 2
    const nbMinutesSpent = 5

    return (
        <View style={styles.container}>
            <View style={styles.images}>
                <Image
                    style={styles.logo}
                    source={Images.logo}
                />
                <Pressable onPressOut={() =>  navigation.dispatch(DrawerActions.closeDrawer())}>
                    <FontAwesome name="times" style={styles.icon} />          
                </Pressable>
            </View>
            <View style={styles.userData}>
                <View style={styles.nbReservationContainer}>
                    <Text style={styles.textTitle}>Réservations</Text>
                    <Text style={styles.textData}>{nbReservation}</Text>
                </View>
                <View style={styles.timeSpentContainer}>
                    <Text style={styles.textTitle}>Temps passé en capsule</Text>
                    <Text style={styles.textData}>{nbDaysSpent}j {nbHoursSpent}h {nbMinutesSpent}m</Text>
                </View>
            </View>
        </View>
    )
}