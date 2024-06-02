import { Images } from "@/constants/Images";
import { Region as IRegion } from "react-native-maps";

export default interface Region extends IRegion {
    id:number,
    title:string,
    longitude: number,
    longitudeDelta: number,
    latitude: number,
    latitudeDelta: number
    image?:Images,
}