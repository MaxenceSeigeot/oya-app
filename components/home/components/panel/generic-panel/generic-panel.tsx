import { View, Pressable, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/constants/Routes";
import { Images } from "@/constants/Images";
import { styles } from "../styles";
import React from "react";

interface GenericPanelProps {}

export default function GenericPanel({}: GenericPanelProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.genericPanel}>
      <Pressable style={[styles.pressable, styles.pressable1]}>
        <Text style={[styles.pressableText, styles.pressableText1]}>Trouver une capsule</Text>
      </Pressable>
      <Pressable
        onPressOut={() => navigation.navigate(Routes.QR as never)}
        style={[styles.pressable, styles.pressable2]}
      >
        <Text style={[styles.pressableText, styles.pressableText2]}>QR Code</Text>
        <Image style={styles.buttonImage} source={Images.qr} />
      </Pressable>
    </View>
  );
}
