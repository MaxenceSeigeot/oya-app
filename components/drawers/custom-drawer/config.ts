import { Drawer } from "@/constants/Routes";
import { styles } from "./styles";

export const customDrawerConfig = {
    drawer:Drawer.HOME_MENU,
    props:{
        drawerStyle:{
            drawerStyle:styles.drawerStyle,
            overlayColor: "transparent",
        }
    }
}
