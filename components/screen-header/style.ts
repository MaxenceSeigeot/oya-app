import { Palette } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const defaultHeaderStyle = {
    headerStyle:{
        backgroundColor:Palette.purple,
    },
    headerTintColor:Palette.yellow
}

export const styles = StyleSheet.create({
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor:Palette.purple,
        color:Palette.yellow,
        height: 130,
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    text: {
        color:Palette.yellow
    },
    backContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    backText: {
        display: "flex",
        alignItems: "center",
    },
    titleText: {
        fontFamily:"dela",
        fontSize: 24,
        paddingHorizontal: 10,
    }
})