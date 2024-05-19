import { Palette } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Button, Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import MenuLinks from "./links";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import MenuHeader from "./header";

export default function CustomDrawer (props:any) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.container} >
                <MenuHeader/>
                <MenuLinks/>
            </View>
        </DrawerContentScrollView>
    )
}