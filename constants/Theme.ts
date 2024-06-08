import { StyleSheet } from "react-native";
import { Palette } from "./Colors";
import { Fonts } from "./Fonts";

export const Theme = StyleSheet.create({
    icon:{
        width:20,
        height:20,
    },
    h1:{
        fontSize:24,
        fontFamily: Fonts.dela,
        color: Palette.yellow,
    },
    h2: {
        fontSize: 22,
        fontFamily:Fonts.ppns_bl,
        color: Palette.purple,
    },
    h3:{
        fontSize: 18,
        fontFamily:Fonts.dela,
        color: Palette.purple,
        marginBottom: 10,
    },
    p1:{
        fontSize: 16,
        fontFamily: Fonts.ppns,
        color: Palette.black
    },
    p2:{
        fontSize: 12,
        fontFamily: Fonts.ppns_semi_bl,
        color: Palette.purple,
    }
})