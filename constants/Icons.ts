import { ImageURISource } from "react-native"

const path = "@/assets/icons/"

export const Icons:Record<string, ImageURISource> = {
    wifi: require(`${path}wifi.png`),
    shower: require(`${path}shower.png`),
    hair_dryer: require(`${path}hair_dryer.png`),
    bed_sheets: require(`${path}bed_sheets.png`),
    towels: require(`${path}towels.png`),
    lockers: require(`${path}lockers.png`),
    cooler: require(`${path}cooler.png`),
    heater: require(`${path}heater.png`),
    camera: require(`${path}camera.png`),
    smoke_detector: require(`${path}smoke_detector.png`),
    first_aid: require(`${path}first_aid.png`),
}