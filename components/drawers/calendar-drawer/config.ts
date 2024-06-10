import { Drawer } from "@/constants/Routes";
import { styles } from "./style";

export const calendarDrawerConfig = {
    drawer:Drawer.CALENDAR,
    props:{
        style:{
            drawerStyle:styles.drawerStyle,
            overlayColor: "transparent",
        }
    }
}