import { PanResponderInstance, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import GenericPanel from "./generic-panel/generic-panel";
import SpecificPanel from "./specific-panel";
import { EvilIcons } from "@expo/vector-icons";
import { Palette } from "@/constants/Colors";
import { useContext } from "react";
import { LocationContext } from "@/providers/locationProvider";

interface PanelProps {
  panResponder: PanResponderInstance;
}

export default function Panel({ panResponder }: PanelProps) {
  const { selectedLocation, setSelectedLocation } = useContext(LocationContext);
  return (
    <View style={styles.container}>
      <View style={styles.expandBarContainer} {...panResponder.panHandlers}>
        <View style={styles.expandBar} />
        {selectedLocation && (
          <Pressable
            style={styles.close}
            onPress={() => {
              setSelectedLocation(undefined);
            }}
          >
            <EvilIcons name="close" size={30} color={Palette.yellow} />
          </Pressable>
        )}
      </View>
      <View style={styles.upperPanel}>
        {selectedLocation ? (
          <SpecificPanel selectedLocation={selectedLocation} />
        ) : (
          <GenericPanel />
        )}
      </View>
      <View style={styles.lowerPanel}>
        <Pressable
          onPress={() => null}
          style={[styles.expandedPressable, styles.pressable3]}
          onPressOut={(event) => event.stopPropagation()}
        >
          <Text style={[styles.pressableText, styles.pressableText3]}>Tarifs & Abonnements</Text>
        </Pressable>
        <Pressable
          onPress={() => null}
          style={[styles.expandedPressable, styles.pressable4]}
          onPressOut={(event) => event.stopPropagation()}
        >
          <Text style={[styles.pressableText, styles.pressableText4]}>Aide</Text>
        </Pressable>
      </View>
    </View>
  );
}
