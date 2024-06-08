import { Palette } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        height: 60,
        borderColor: Palette.gray,
        backgroundColor: Palette.white,
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 5,
        position: "absolute",
        bottom:0,
    },
    bookButton:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor: Palette.light_purple,
        width: 100,
        height: 40,
        borderRadius:5
    },
    price:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    }
})