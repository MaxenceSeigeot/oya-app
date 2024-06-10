import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "expo-router";
import { Routes } from "@/constants/Routes";

export default function MenuLinks() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Pressable onPressOut={()=>navigation.navigate(Routes.ACCOUNT as never)} style={styles.linkButton}>
                <Text style={styles.linkText}>
                    Mon compte
                </Text>
            </Pressable>
            <View style={styles.separator}/>
            <Pressable style={styles.linkButton}>
                <Text style={styles.linkText}>
                    Historique des réservations
                </Text>
            </Pressable>
            <View style={styles.separator}/>
            <Pressable style={styles.linkButton}>
                <Text style={styles.linkText}>
                    FAQ
                </Text>
            </Pressable>
            <View style={styles.separator}/>
            <Pressable style={styles.linkButton}>
                <Text style={styles.linkText}>
                    Aide & sécurité
                </Text>
            </Pressable>
        </View>
    )
}