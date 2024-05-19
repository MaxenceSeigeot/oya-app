import React from 'react';
import { View, Pressable, Text, Image, PanResponderInstance } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@/constants/Routes';
import { Images } from '@/constants/Images';
import { styles } from './styles';

interface NavbarProps {
  panResponder:PanResponderInstance,
}

export default function Navbar ({ panResponder }: NavbarProps) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <View style={styles.expandBarContainer} {...panResponder.panHandlers}>
        <View style={styles.expandBar}></View>
      </View>
      <Pressable style={[styles.pressable, styles.pressable1]}>
        <Text style={[styles.pressableText, styles.pressableText1]}>Trouver une capsule</Text>
      </Pressable>
      <Pressable onPressOut={() => navigation.navigate(Routes.QR as never)} style={[styles.pressable, styles.pressable2]}>
        <Text style={[styles.pressableText, styles.pressableText2]}>QR Code</Text>
        <Image style={styles.buttonImage} source={Images.qr} />
      </Pressable>

      <Pressable style={[styles.expandedPressable, styles.pressable3]}>
        <Text style={[styles.pressableText, styles.pressableText3]}>Tarifs & Abonnements</Text>
      </Pressable>
      <Pressable onPressIn={() => null} style={[styles.expandedPressable, styles.pressable4]}>
        <Text style={[styles.pressableText, styles.pressableText4]}>Aide</Text>
      </Pressable>
    </View>
  );
};
