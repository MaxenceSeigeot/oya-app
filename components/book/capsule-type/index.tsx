import { Images } from "@/constants/Images";
import { useState } from "react";
import { Image, ImageURISource, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { Theme } from "@/constants/Theme";

export default function CapsuleType ({}) {
    const [selectedType, setSelectedType] = useState<ImageURISource | undefined>(undefined)
    return (
        <View style={styles.container}>
            <Text style={Theme.h3}> Type de capsule</Text>
            <View style={styles.capsuleTypeButtonsContainer}>
                <Pressable onPress={() => setSelectedType(
                    selectedType === Images.double_bed_select
                        ? undefined
                        : Images.double_bed_select
                    )}
                >
                    <Image source={selectedType === Images.double_bed_select ? Images.double_bed_select : Images.double_bed} />
                </Pressable>
                <Pressable onPress={() => setSelectedType(
                    selectedType === Images.single_bed_select
                        ? undefined
                        : Images.single_bed_select
                    )}
                >
                    <Image source={selectedType === Images.single_bed_select ? Images.single_bed_select : Images.single_bed} />
                </Pressable>
            </View>
        </View>
    )
}