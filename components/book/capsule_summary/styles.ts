import { Palette } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        position: "absolute",
        height: 60,
        bottom:0,
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        borderColor: Palette.gray,
        backgroundColor: Palette.white,
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 5,


    },
    bookButton:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor: Palette.light_pink,
        width: 100,
        height: 40,
        borderRadius:5
    },
    bookButtonText:{
        textAlign:"center",
        fontFamily: Fonts.dela,
        fontSize: 12
    },
    price:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
    },
    priceText:{
        fontFamily: Fonts.dela
    },
    dateBtnTxt:{
        textDecorationLine:"underline",
    }
})