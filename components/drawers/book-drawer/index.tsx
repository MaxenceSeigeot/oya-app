import { DrawerContext } from "@/providers/drawerProvider";
import { useContext } from "react";
import { Text, View } from "react-native";

interface BookDrawerProps {}

export default function BookDrawer({}: BookDrawerProps) {
  const { drawer } = useContext(DrawerContext);

  return (
    <View>
      <Text>Book {drawer?.props?.building?.title}</Text>
    </View>
  );
}
