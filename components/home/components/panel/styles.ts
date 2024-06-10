import { StyleSheet } from 'react-native';
import { Palette } from '@/constants/Colors';

export const styles = StyleSheet.create({
  drawerStyle:{
    backgroundColor:"red",
  },
  container: {
    width: '100%', 
    height: 320,
    paddingHorizontal:25,
    position: 'absolute',
    bottom: -105, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
    backgroundColor: 'white',
  },
  expandBarContainer: {
    width:"100%",
    height:50,
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  expandBar: {
    width: '30%',
    height: 10,
    borderRadius: 20,
    backgroundColor: 'grey',
  },

  upperPanel: {
    marginBottom: 20,
  },

  genericPanel: {
    display:"flex",
    gap:20,
    marginTop: 20,
    marginBottom: 10,
  },

  pressable: {
    display:"flex",
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: 40,
    borderRadius: 20,
    gap:5,
  },
  pressable1: {
    backgroundColor: Palette.purple,
  },
  pressable2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: Palette.purple,
  },
  lowerPanel: {
    display:"flex",
    gap:5
  },
  expandedPressable: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#D3C9E8',
  },
  pressable3: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  pressable4: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 15
  },
  pressableText: {
    textAlign: 'center',
  },
  pressableText1: {
    color: Palette.yellow,
  },
  pressableText2: {
    color: Palette.purple,
  },
  pressableText3: {
    paddingHorizontal: 10,
    color: Palette.purple,
    textAlign: 'left',
  },
  pressableText4: {
    paddingHorizontal: 10,
    color: Palette.purple,
    textAlign: 'left',
  },
  buttonImage: {
    width: 20,
    height: 20,
  },
});
