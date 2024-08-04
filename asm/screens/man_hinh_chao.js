import React from "react";
import { Image, StyleSheet, View } from "react-native";

import logo_app from "../img/logo_app.png";

const SplashScreen = () => {
    return( 
        <View style={styles.back_ground}>
            <Image source={logo_app} style={styles.logo_man_hinh_chao} />
        </View>
    );
}

const styles = StyleSheet.create({
    back_ground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    logo_man_hinh_chao: {
        width: 189,
        height: 189
    }
});

export default SplashScreen;
