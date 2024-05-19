import { StyleSheet } from "react-native";
import { Palette } from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent:"flex-end",
    alignItems:"center",
    padding:15,
    marginBottom: 20,
  },
  separator:{
    marginVertical: 20,
    width:"50%",
    height:6,
    backgroundColor:Palette.sand,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  linkButton:{
    width:"100%",
  },
  linkText:{
    width:"100%",
    textAlign:"left",
    color:Palette.purple,
    fontFamily: "Dela",
    fontSize:15,
  }
});