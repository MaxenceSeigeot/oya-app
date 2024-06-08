import { Images } from "@/constants/Images"
import { styles } from "./styles"
import { Image, Text, View } from "react-native"
import Location from "@/interfaces/location"
import getHaversineDistance from "@/functions/getHarvesineDistance"
import { useContext } from "react"
import { LocationContext } from "@/providers/locationProvider"
import { Theme } from "@/constants/Theme"

interface LocationDescription {
    location:Location
}

export const LocationDescription = ({location}:LocationDescription) => {
    const { userLocation } = useContext(LocationContext)
    const distance = getHaversineDistance(userLocation, location)
    const nbDoubleCapsule = 5
    const nbSingleCapsule = 3

    return (
        <View style={styles.container}>
            <Text style={[Theme.p2, styles.tag]}>Disponible</Text>
            <Text style={[Theme.h2]}>{location.nom}</Text>
            <View style={styles.location}>
                <Image source={Images.location} />
                <Text style={Theme.p2}>{distance}</Text>
            </View>
            <View style={styles.disponibility}>
                <Text style={styles.disponibilityText}>{`${nbDoubleCapsule} capsules 2 places`}</Text>
                <Text style={styles.disponibilityText}>{`${nbSingleCapsule} capsules 1 place`}</Text>
            </View>
        </View>
    )
}