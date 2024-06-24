import { Palette } from "@/constants/Colors";
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  drawerStyle:{
    backgroundColor:"transparent",
  },
  container:{
    marginTop:30,
    height:"100%"
  }
})

export const today = {
  todayTextColor:Palette.yellow,
  arrowColor:Palette.yellow,
  
}

export const selected = {
  selected: true,
  selectedColor: Palette.purple,
  selectedTextColor: Palette.yellow
}

export const disabled = {
  disabled: true,
  disableTouchEvent: true,
  customStyles: {
    text: {
      color: Palette.disabled,
    },
  },
};