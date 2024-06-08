import { ImageURISource } from "react-native"

const path = "@/assets/images/"

export const Images:Record<string, ImageURISource> = {
    centerMapButton: require(`${path}centerMapButton.png`),
    userMapPosition: require(`${path}userMarker.png`),
    logo: require(`${path}logo.png`),
    profile: require(`${path}profile.png`),
    qr: require(`${path}qr.png`),
    location: require(`${path}location.png`),
    building: require(`${path}building.png`),
    location_big: require(`${path}location_big.png`),
    single_bed: require(`${path}single_bed.png`),
    single_bed_select: require(`${path}single_bed_select.png`),
    double_bed: require(`${path}double_bed.png`),
    double_bed_select: require(`${path}double_bed_select.png`),
}