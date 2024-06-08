import { DrawerContext } from "@/providers/drawerProvider";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useContext } from "react";
import { Text, View } from "react-native";

interface BookDrawerProps {
    props:any,
}

export default function BookDrawer({props}:BookDrawerProps) {
    const { drawer } = useContext(DrawerContext)
    
    return (
        <View>
            <Text>Book {drawer?.props?.building?.title}</Text>
        </View>
    )
}