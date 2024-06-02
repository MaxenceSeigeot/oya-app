import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View } from "react-native";
import { styles } from "./styles";
import MenuLinks from "./links";
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