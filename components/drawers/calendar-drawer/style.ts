import { Palette } from "@/constants/Colors";
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  drawerStyle:{
    backgroundColor:"transparent",
  },
  container:{
    marginTop:30,
  }
})

export const selected = {
    selected: true,
    selectedColor: 'blue',
    selectedTextColor: 'white'
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