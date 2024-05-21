import { StyleSheet } from "react-native";
import { Palette } from "@/constants/Colors";

export const styles = StyleSheet.create({
    main: {
      width:"100%",
      height:"100%",
      justifyContent: 'flex-end',
    },
    mapOverlay: {
      display:"flex",
      width:"100%",
      flexGrow: 1,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      zIndex:0,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    map: {
      position:"absolute",
      width: '100%',
      height: '100%',
      zIndex:0,
    },
    logo:{
      width:100,
      height:100,
      zIndex:12,
    }, 
    profileButton:{
      position:"absolute",
      top:30,
      left:15,
      width:50,
      height:50,
      borderRadius: 50,
      zIndex:2,
    },
    locationButton:{
      position:"absolute",
      bottom:225,
      right:15,
      width:50,
      height:50,
      borderRadius: 50,
      zIndex:2,
    },
    profile:{
      width:50,
      height:50,
    }, 
    location:{
      width:50,
      height:50,
    },
  });