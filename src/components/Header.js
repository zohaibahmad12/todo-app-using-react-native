import React from "react";
import { Text, StyleSheet, View } from "react-native"

const Header = () => {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Todo App</Text>
        </View>
    )
}


const styles = StyleSheet.create({

    headerContainer: {
       
        backgroundColor:"lightgrey",
        flex: 0.2,
        alignItems: "center",
        justifyContent: "center",
    },

    headerText: {
        textAlign: "center",
        fontSize: 60,
        fontWeight: "bold",
        color: "#a0aad0",
    }

})
export default Header;