import { ImageURISource } from "react-native";

export default interface Location {
    id_batiment: number,
    nom: string,
    adresse	: string,
    id_ville: number,	
    latitude: number,	
    longitude: number,
    images: ImageURISource /* TODO: A ajouter en bdd*/
}