import { ImageURISource } from "react-native";

export default interface Location {
  id: number;
  name: string;
  address: string;
  city: number;
  latitude: number;
  longitude: number;
  images: ImageURISource /* TODO: A ajouter en bdd*/;
  capsules?: any;
}
