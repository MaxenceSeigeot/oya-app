import { Drawer } from "@/constants/Routes";
import { styles } from "./styles";

export const customDrawerConfig = {
    drawer:Drawer.HOME_MENU,
    props:{
        style:{
            drawerStyle:styles.drawerStyle,
            overlayColor: "transparent",
        }
    }

    
}
