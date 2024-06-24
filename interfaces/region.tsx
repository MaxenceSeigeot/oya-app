import { Region as IRegion } from "react-native-maps";

export default interface Region extends IRegion {
  id: number;
  title: string;
  longitude: number;
  latitude: number;
  image?: string;
}
