import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Text, View } from "react-native";

interface BuildingProps {
    props:any,
}

export default function Building({props}:BuildingProps) {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>Building</Text>
            </View>
        </DrawerContentScrollView>
    )
}