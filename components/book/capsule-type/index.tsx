import { Images } from "@/constants/Images";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./style";
import { Theme } from "@/constants/Theme";

interface CapsuleTypeProps {
    selectedType: boolean,
    handleSetSelectedType: (value: boolean) => void,
}
export default function CapsuleType ({selectedType, handleSetSelectedType}:CapsuleTypeProps) {

    return (
        <View style={styles.container}>
            <Text style={Theme.h3}> Type de capsule</Text>
            <View style={styles.capsuleTypeButtonsContainer}>
                <Pressable onPress={() => handleSetSelectedType(false)}>
                    <Image source={selectedType === false ? Images.single_bed_select : Images.single_bed} />
                </Pressable>
                <Pressable onPress={() => handleSetSelectedType(true)}>
                    <Image source={selectedType === true ? Images.double_bed_select : Images.double_bed} />
                </Pressable>
            </View>
        </View>
    )
}