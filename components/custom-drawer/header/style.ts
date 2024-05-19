import { Palette } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:Palette.purple,
        padding:10,
      },
      images:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 10,
        marginBottom:20,
      },
      logo:{
    
      },    
      icon:{
        color:Palette.yellow,
        fontSize:24,
      },
      userData:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        gap:10,
      },
      timeSpentContainer:{

      },
      nbReservationContainer:{

      },
      textTitle:{
        color:Palette.yellow,
        textAlign:"center",
        fontFamily:"Poppins",
        fontSize:12,
      },
      textData:{
        color:Palette.yellow,
        textAlign:"center",
        fontSize:20,
        fontFamily: `Dela`,
      }
})