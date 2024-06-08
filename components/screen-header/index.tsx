import { Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { Palette } from "@/constants/Colors";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Theme } from "@/constants/Theme";

interface DefaultHeaderProps {
    title:string,
}

export default function DefaultScreenHeader({title}: DefaultHeaderProps) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Pressable style={styles.backContainer} onPress={() => navigation.goBack()}>
                <EvilIcons name="arrow-left" size={30} color={Palette.yellow}/>
                <Text style={[styles.text, styles.backText]}>Retour</Text>
            </Pressable>
            <Text style={[Theme.h1]}>{title}</Text>
        </View>
    )
}