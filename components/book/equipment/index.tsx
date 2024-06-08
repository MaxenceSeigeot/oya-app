
import { Image, ImageURISource, Text, View } from "react-native";
import { styles } from "./style";
import { Theme } from "@/constants/Theme";
import { Icons } from "@/constants/Icons";

export default function CapsuleEquipment ({}){
    const equipment: {icon:ImageURISource, label:string}[] = [
        {icon:Icons.wifi, label:"Wifi"},
        {icon:Icons.shower, label:"Douches"},
        {icon:Icons.hair_dryer, label:"Sèches cheveux"},
        {icon:Icons.bed_sheets, label:"Draps"},
        {icon:Icons.towels, label:"Serviettes de douche"},
        {icon:Icons.lockers, label:"Casiers sécurisés"},
        {icon:Icons.cooler, label:"Climatisation"},
        {icon:Icons.heater, label:"Chauffage"},
        {icon:Icons.camera, label:"Caméras de surveillance"},
        {icon:Icons.smoke_detector, label:"Détecteur de fumée"},
        {icon:Icons.first_aid, label:"Kit de premiers secours"},
    ]

    return (
        <View style={styles.container}>
            <Text style={Theme.h3}>Les équipements</Text>
            {equipment.map(e => 
                <View style={styles.equipmentContainer}>
                    <Image style={Theme.icon} source={e.icon}/>
                    <Text style={Theme.p1}>{e.label}</Text>
                </View>
            )}
        </View>
    )
}