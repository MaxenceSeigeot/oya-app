import { StyleSheet } from "react-native";
import { Palette } from "@/constants/Colors";

export const styles = StyleSheet.create({
  drawerStyle:{
    backgroundColor: Palette.purple,
  },
  container: {
    display:"flex",
    flexDirection:"column",
    backgroundColor:Palette.white,
    flexGrow:1,
    height:750,
  },

});