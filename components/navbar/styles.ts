import { StyleSheet } from 'react-native';
import { Palette } from '@/constants/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end', // Align children to the bottom
    width: '100%', 
    gap: 6,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
    position: 'absolute',
    bottom: -100,  // Ensure the container is at the bottom of the screen
  },
  expandBarContainer: {
    display:"flex",
    width:"100%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  expandBar: {
    width: '30%',
    height: 10,
    borderRadius: 20,
    backgroundColor: 'grey',
  },
  pressable: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '80%',
    height: 40,
    borderRadius: 20,
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
  expandableContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0, // Ensure the expandable part starts off-screen
  },
  expandedPressable: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '80%',
    height: 40,
    backgroundColor: '#D3C9E8',
  },
  pressable3: {
    marginTop: 15,
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
