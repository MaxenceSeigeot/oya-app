import { StyleSheet } from 'react-native';
import { Palette } from '@/constants/Colors';

export const styles = StyleSheet.create({
    container:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        gap:10,
    },
    buildingImage:{
        width: 85,
        height: 85,
        borderRadius:10,
    },
    buildingDetails:{
        flexGrow:1,
    },
    tag:{
        backgroundColor: Palette.yellow,
        color:Palette.purple,
        textAlign:"center",
        fontWeight:"bold",
        borderRadius:3,
        paddingVertical:2,
    },
    buildingName:{
        fontSize: 18,
        fontFamily:"poppins_semi_bold"
    },
    buildingLocation: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap: 5,
    },  
    disponibility: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    disponibilityText:{
        color:Palette.light_purple,
        fontFamily:"poppins_semi_bold",
        fontSize: 10,
    },

    bookBtnText:{
        display: "flex",
        height:40,
        fontFamily:"montserrat_black",
        fontSize:16,
        paddingVertical:8,
        color:Palette.yellow,
        textAlign:"center",
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        borderRadius: 20,
        backgroundColor:Palette.purple,

    },  
});
