import { Palette } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flexGrow:1,
    },
    tag:{
        backgroundColor: Palette.yellow,
        color:Palette.purple,
        textAlign:"center",
        borderRadius:3,
        width: 75,
        height: 20,
    },
    location: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap: 5,
    },  
    disponibility: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    disponibilityText:{
        color:Palette.light_purple,
        fontFamily:"poppins_semi_bold",
        fontSize: 10.5,
    },
})