import { Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { Palette } from "@/constants/Colors";
import { EvilIcons } from "@expo/vector-icons";
import { Theme } from "@/constants/Theme";
import { NavigationProp } from "@react-navigation/native";

interface DefaultHeaderProps {
  title: string;
  navigation: NavigationProp<ReactNavigation.RootParamList>;
}

export default function DefaultScreenHeader({ title, navigation }: DefaultHeaderProps) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backContainer} onPress={() => navigation.goBack()}>
        <EvilIcons name="arrow-left" size={30} color={Palette.yellow} />
        <Text style={[styles.text, styles.backText]}>Retour</Text>
      </Pressable>
      <Text style={[Theme.h1]}>{title}</Text>
    </View>
  );
}
