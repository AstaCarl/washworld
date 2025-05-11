import { StyleSheet, View } from "react-native";
import Subitle from "./atoms/Subtitle";
import Paragraf from "./atoms/Paragraf";
import RecycleIcon from "./icons/RecycleIcon";


export default function EcoCard() {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.iconGroup}>
                <RecycleIcon color="#06C167" />
            <Subitle title="ENVIORMENTAL CAR WASH" variant="greenCapital"/>
            </View>
            <Subitle title="with limited water use " variant="blackBold"/>
            </View>
            <Paragraf
            text="Is it important to you that your car wash is environmentally friendly? Then Wash World is the perfect place to wash your car. We take care of the environment by ensuring a green car wash with low consumption of clean water."
            variant="primary"/>
            <Subitle title="94% recycled water" variant="green"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 20,
    },
    iconGroup: {
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
    },
})