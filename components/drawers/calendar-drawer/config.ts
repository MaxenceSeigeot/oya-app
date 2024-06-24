import { Drawer } from "@/constants/Routes";
import { styles } from "./style";

export const calendarDrawerConfig = {
    drawer:Drawer.CALENDAR,
    props:{
        drawerStyle:{
            drawerStyle:styles.drawerStyle,
            overlayColor: "transparent",
        }
    }
}