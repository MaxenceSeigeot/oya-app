import { PanResponderInstance, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Region from "@/interfaces/region";
import GenericPanel from "./generic-panel";
import SpecificPanel from "./specific-panel";

interface PanelProps {
    panResponder:PanResponderInstance,
    selectedMarker: Region | undefined,
    userLocation: Region | undefined ,
}

export default function Panel({ panResponder, selectedMarker, userLocation }: PanelProps) {
    return (
        <View style={styles.container}>
            <View style={styles.expandBarContainer} {...panResponder.panHandlers}>
                <View style={styles.expandBar} />
            </View>
            <View style={styles.upperPanel}>
                {selectedMarker
                    ? <SpecificPanel selectedMarker={selectedMarker} userLocation={userLocation} />
                    : <GenericPanel />
                }
            </View>
            <View style={styles.lowerPanel}>
                <Pressable onPress={() => null} style={[styles.expandedPressable, styles.pressable3]} onPressOut={(event) => event.stopPropagation()}>
                    <Text style={[styles.pressableText, styles.pressableText3]}>Tarifs & Abonnements</Text>
                </Pressable>
                <Pressable onPress={() => null} style={[styles.expandedPressable, styles.pressable4]} onPressOut={(event) => event.stopPropagation()}>
                    <Text style={[styles.pressableText, styles.pressableText4]}>Aide</Text>
                </Pressable>
            </View>
        </View>
    );
}